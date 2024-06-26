import get from "lodash/get";
import cloneDeep from 'lodash/cloneDeep';
import React, { useCallback, useEffect, useImperativeHandle, useMemo } from "react";
import { useMediaBreakpoints, useRefState } from "../../lib/hooks";
import { GridData, CellData, Direction, UsedCellData, WordInput } from "../../types"
import { createGridData, otherDirection } from "../../lib/crossword-utils";
import { useGridData } from "../../redux/hooks/useGridData";
import { getInitialClue } from "../../lib/utils";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { setKnownLetters, setPenciledLetters } from "../../redux/slices/crosswordSlice";
import crosswords from "../../constants/crosswords";

type Props = {
  crosswordIndex: number;
  guess?: string;
  onMoved?: (cell: CellData, direction: Direction) => void;
  onChange?: (gridData: GridData) => void;
};

type Handle = {
  moveTo: (row: number, col: number) => void,
  guessWord: (guess: string) => void,
  pencilLetter: (letter: string) => void,
  eraseLetter: () => void,
  reset: () => void,
  reveal: () => void,
}

export const Crossword = React.forwardRef<Handle, Props>(({ crosswordIndex, onMoved, onChange, guess }, ref) => {
  const crosswordData = crosswords[crosswordIndex];
  const { initialClue: initialWord, initialDirection } = useMemo(() => getInitialClue(crosswordData), [crosswordData]);
  const dispatch = useDispatch();
  const darkMode = useSelector((state: RootState) => state.settings.darkMode);
  const [gridData, setGridData] = useGridData(crosswordIndex);
  const [focusedCell, setFocusedCell, focusedCellRef] = useRefState<UsedCellData>(gridData[initialWord.row][initialWord.col] as UsedCellData);
  const [focusedDirection, setFocusedDirection, focusedDirectionRef] = useRefState<Direction>(initialDirection);
  const isMobile = useMediaBreakpoints('sm', 'down');

  const svgSize = 240;
  const margin = isMobile ? 10 : 20;
  const crosswordSize = svgSize - 2 * margin;
  const squareSize = crosswordSize / gridData.length;
  const borderSize = 0.125;
  const numberOffset = 0.5;

  const selectCell = useCallback((cell: UsedCellData, targetDirection: Direction) => {
    const actualDirection = cell[targetDirection] ? targetDirection : otherDirection(targetDirection);

    setFocusedDirection(actualDirection);
    setFocusedCell(cell)
  }, [setFocusedCell, setFocusedDirection]);

  const isCellSelected = useCallback((cell: CellData) => cell.used && cell.row === focusedCell.row && cell.col === focusedCell.col, [focusedCell]);
  const getCell = useCallback((row: number, col: number) => get(gridData, `${row}.${col}`, { used: false }) as CellData, [gridData]);

  const onClick = useCallback((cell: CellData) => {
    if (!cell.used) return;

    const targetDirection = isCellSelected(cell) ? otherDirection(focusedDirection) : focusedDirection;
    selectCell(cell, targetDirection);
  }, [focusedDirection, selectCell, isCellSelected]);

  const moveRelative = useCallback((x: number, y: number) => {
    const oldCell = focusedCellRef.current;
    const newCell = getCell(oldCell.row + y, oldCell.col + x);
    const targetDirection = x !== 0 ? 'across' : 'down';
    const cellToSelect = targetDirection === focusedDirection ? newCell : oldCell;

    selectCell(cellToSelect.used ? cellToSelect : oldCell, targetDirection);
  }, [focusedCellRef, getCell, selectCell, focusedDirection]);

  const switchDirections = useCallback(() => {
    const targetDirection = otherDirection(focusedDirectionRef.current);
    const targetCell = focusedCellRef.current;

    selectCell(targetCell, targetDirection);
  }, [focusedCellRef, focusedDirectionRef, selectCell]);

  useEffect(() => {
    const listener = (e: KeyboardEvent) => {
      if (e.code === 'ArrowLeft') {
        moveRelative(-1, 0);
      } else if (e.code === 'ArrowRight') {
        moveRelative(1, 0);
      } else if (e.code === 'ArrowDown') {
        moveRelative(0, 1);
      } else if (e.code === 'ArrowUp') {
        moveRelative(0, -1);
      } else if (e.code === 'Tab') {
        switchDirections();
      }
    }
    window.addEventListener('keyup', listener)
    return () => {
      window.removeEventListener('keyup', listener)
    }
  }, [moveRelative, switchDirections]);

  const updateShadowLetters = useCallback(() => {
    const number = focusedCell[focusedDirection] as string;
    const focusedClue = crosswordData[focusedDirection][number] as WordInput;

    if (!number || !focusedClue) return [];

    const knownLetters : (string | undefined)[] = [];
    const penciledLetters : (string | undefined)[] = [];

    Array.from(focusedClue.answer).forEach((_, index) => {
      let letterRow = focusedClue.row + (focusedDirection === 'across' ? 0 : index);
      let letterCol = focusedClue.col + (focusedDirection === 'across' ? index : 0);
      const cell = gridData[letterRow][letterCol];
      if (!cell.used) return undefined;

      knownLetters.push(cell.guess);
      penciledLetters.push(cell.pencil);
    });

    dispatch(setKnownLetters(knownLetters));
    dispatch(setPenciledLetters(penciledLetters));
  }, [focusedCell, focusedDirection, gridData, dispatch, crosswordData])

  useEffect(() => {
    if (onMoved) onMoved(focusedCell, focusedDirection);
    updateShadowLetters();

  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [focusedCell, focusedDirection, updateShadowLetters]);

  useEffect(() => {
    if (onChange) onChange(gridData);
    updateShadowLetters();

  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [gridData, updateShadowLetters]);

  useImperativeHandle(ref, () => ({
    guessWord: (guess: string) => {
      const focusedNumber = focusedCell[focusedDirection];

      if (!focusedNumber) return;
      const focusedWord = crosswordData[focusedDirection][focusedNumber];

      const gridDataClone = cloneDeep(gridData);

      let { row, col, answer } = focusedWord;
      Array.from(guess).forEach((letter, index) => {
        const newRow = row + (focusedDirection === 'down' ? index : 0);
        const newCol = col + (focusedDirection === 'across' ? index : 0);
        const cellClone = gridDataClone[newRow][newCol];
        if (!cellClone.used) return;
        if (letter === answer[index]) cellClone.guess = letter;
      });

      setGridData(gridDataClone);
    },
    pencilLetter: (letter: string) => {
      const gridDataClone = cloneDeep(gridData);
      let { row, col } = focusedCell;
      gridDataClone[row][col].pencil = letter;
      setGridData(gridDataClone);
    },
    eraseLetter: () => {
      const gridDataClone = cloneDeep(gridData);
      let { row, col } = focusedCell;
      delete gridDataClone[row][col].pencil;
      setGridData(gridDataClone);
    },
    reset: () => {
      setGridData(createGridData(crosswordData));
    },
    reveal: () => {
      const gridDataClone = cloneDeep(gridData);
      gridData.forEach((cells, row) => {
        cells.forEach((_, col) => {
          const cellClone = gridDataClone[row][col];
          if (!cellClone.used) return;

          cellClone.guess = cellClone.answer;
        });
      });
      setGridData(gridDataClone);
    },
    moveTo: (row, col) => {
      const cell = getCell(row, col);

      if (!cell.used) return;
      selectCell(cell, focusedDirection);
    },
  }));

  const getGuessedLetter = (cell: CellData) => {
    if (!cell.used || !guess) return;

    const focusedNumber = focusedCell[focusedDirection];

    if (!focusedNumber || cell[focusedDirection] !== focusedNumber) return;
    const focusedWord = crosswordData[focusedDirection][focusedNumber];
    const letterIndex = cell.row - focusedWord.row || cell.col - focusedWord.col;
    return guess[letterIndex];
  };

  const numberColor = darkMode ? 'white' : 'rgba(0, 0, 0, 0.25)';
  const textColor = darkMode ? 'white' : 'black';
  const guessTextColor = darkMode ? '#f1c40f' : 'rgba(0, 0, 255, 0.6)';
  const pencilColor = darkMode ? 'rgba(170, 170, 170)' : 'rgba(107, 114, 128, 0.5)';
  const selectedCellColor = darkMode ? 'rgb(66, 99, 148)' : '#ffda00';
  const selectedWordColor = darkMode ? 'rgb(54, 45, 103)' : '#a7d8ff';

  return (
    <svg viewBox={`0 0 ${svgSize} ${svgSize}`} width='100%' height='100%'>
      <rect x={margin} y={margin} width={crosswordSize} height={crosswordSize} fill="black" />
      {gridData.flat().map((cell: CellData) => {
        if (!cell.used) return null;
        const key = `${cell.row}_${cell.col}`;

        let color = darkMode ? 'rgb(87, 88, 96)' : 'white';
        if (isCellSelected(cell)) {
          color = selectedCellColor;
        } else if (cell[focusedDirection] === focusedCell[focusedDirection]) {
          color = selectedWordColor;
        }

        const guessedLetter = getGuessedLetter(cell);
        let textFill = textColor;
        if (guessedLetter) textFill = guessTextColor;
        if (!guessedLetter && !cell.guess && cell.pencil) textFill = pencilColor;
        const letter = guessedLetter || cell.guess || cell.pencil;

        return (
          <g key={key} onClick={() => onClick(cell)}>
            <rect
              x={cell.col * squareSize + borderSize + margin}
              y={cell.row * squareSize + borderSize + margin}
              width={squareSize - 2 * borderSize}
              height={squareSize - 2 * borderSize}
              fill={color}
              stroke='black'
              strokeWidth={0.4}
            />
            {cell.number && (
              <text
                x={cell.col * squareSize + numberOffset + margin}
                y={cell.row * squareSize + numberOffset + margin}
                textAnchor="start"
                dominantBaseline="hanging"
                style={{ fontSize: '50%', fill: numberColor, userSelect: 'none' }}
              >{cell.number}</text>
            )}
            {letter && (
              <text
                x={(cell.col + 0.5) * squareSize + margin}
                y={(cell.row + 0.5) * squareSize + margin + 3}
                textAnchor="middle"
                dominantBaseline="middle"
                style={{ fill: textFill, userSelect: 'none', fontSize: '10px' }}
              >{letter}</text>
            )}
            {cell.circle && (
              <circle
                cx={(cell.col + 0.5) * squareSize + margin}
                cy={(cell.row + 0.5) * squareSize + margin}
                r={squareSize / 2 - 1}
                fill='transparent'
                stroke={darkMode ? 'rgba(255,255,255,0.8)' : 'rgba(0,0,0,0.5)'}
                strokeWidth={0.5}
              />
            )}
          </g>
        );
      })}
    </svg>
  )
});
