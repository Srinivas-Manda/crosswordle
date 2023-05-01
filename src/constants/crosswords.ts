import { ro } from 'date-fns/locale'
import { CrosswordInput } from '../types'

const crosswords: CrosswordInput[] = [
  {
    across: {
      '1': {
        answer: 'CREDIT',
        row: 0,
        col: 1,
      },
      '5': {
        answer: 'CHART',
        row: 2,
        col: 0,
      },
      '8': {
        answer: 'INTERNET',
        row: 3,
        col: 5,
      },
      '9': {
        answer: 'OPTION',
        row: 4,
        col: 0,
      },
      '11': {
        answer: 'RISK',
        col: 11,
        row: 5,
      },
      '12': {
        answer: 'GROWTH',
        col: 3,
        row: 6,
      },
      '14': {
        answer: 'WEB',
        col: 0,
        row: 8,
      },
      '15': {
        answer: 'GAP',
        col: 7,
        row: 8,
      },
      '19': {
        answer: 'STOCK',
        col: 0,
        row: 10,
      },
      '21': {
        answer: 'DEAL',
        col: 8,
        row: 11,
      },
      '22': {
        answer:'LAW',
        col: 0,
        row: 12
      },
      "23" : {
        answer: 'DOLLAR',
        col : 4,
        row: 12
      },
      "24": {
        answer: 'FUNDS',
        col: 10,
        row: 13
      },
      "25": {
        answer: 'MONEY',
        row: 14,
        col: 2
      }
    },
    "down" :{
      "2" :{
        answer: 'EARNINGS',
        row: 0,
        col: 3
      },
      "3" : {
        answer: 'CAREER',
        row: 0,
        col: 11
      },
      "4" : {
        answer: 'WORLD',
        row: 1,
        col: 9
      },
      "6" : {
        answer: 'STRATEGY',
        row: 2,
        col: 8
      },
      "7" : {
        answer: "BANK",
        row: 2,
        col: 14
      },
      "10": {
        answer: 'PERCENT',
        row: 4,
        col: 1
      },
      "13" : {
        answer: 'EXIT',
        row: 7,
        col: 12
      },
      "16" : {
        answer: "POWER",
        row: 8,
        col: 9
      },
      "17" : {
        answer: 'REQUEST',
        row: 9,
        col: 14
      },
      "19" : {
        answer: 'SALE',
        row: 10,
        col: 0
      },
      "20" : {
        answer: "HOPE",
        row : 11,
        col : 8
      },
      "21" : {
        answer: 'DATA',
        row: 11,
        col: 11
      }
    }
  },
  {'across': {'1': {'answer': 'AHEM', 'row': 1, 'col': 1}, '5': {'answer': 'NANA', 'row': 1, 'col': 6}, '9': {'answer': 'CLOVE', 'row': 1, 'col': 11}, '14': {'answer': 'DIVA', 'row': 2, 'col': 1}, '15': {'answer': 'OWES', 'row': 2, 'col': 6}, '16': {'answer': 'LAVAS', 'row': 2, 'col': 11}, '17': {'answer': 'AMEN', 'row': 3, 'col': 1}, '18': {'answer': 'MANICURIST', 'row': 3, 'col': 6}, '20': {'answer': 'MANDRAKE', 'row': 4, 'col': 1}, '22': {'answer': 'ABIDE', 'row': 4, 'col': 10}, '23': {'answer': 'AIDE', 'row': 5, 'col': 4}, '24': {'answer': 'RIMA', 'row': 5, 'col': 9}, '25': {'answer': 'SPARES', 'row': 6, 'col': 1}, '28': {'answer': 'MANATEES', 'row': 6, 'col': 8}, '32': {'answer': 'EOSIN', 'row': 7, 'col': 1}, '33': {'answer': 'DOZEN', 'row': 7, 'col': 7}, '34': {'answer': 'LAT', 'row': 7, 'col': 13}, '35': {'answer': 'ASSN', 'row': 8, 'col': 1}, '36': {'answer': 'SORES', 'row': 8, 'col': 6}, '37': {'answer': 'DOGE', 'row': 8, 'col': 12}, '38': {'answer': 'TIE', 'row': 9, 'col': 1}, '39': {'answer': 'ETWAS', 'row': 9, 'col': 5}, '40': {'answer': 'REPEL', 'row': 9, 'col': 11}, '41': {'answer': 'OTTOMANS', 'row': 10, 'col': 1}, '43': {'answer': 'CAMERA', 'row': 10, 'col': 10}, '44': {'answer': 'LUMS', 'row': 11, 'col': 4}, '45': {'answer': 'SARA', 'row': 11, 'col': 9}, '46': {'answer': 'LADLE', 'row': 12, 'col': 2}, '48': {'answer': 'FUMANCHU', 'row': 12, 'col': 8}, '52': {'answer': 'MANHANDLED', 'row': 13, 'col': 1}, '54': {'answer': 'DOUR', 'row': 13, 'col': 12}, '55': {'answer': 'GROAT', 'row': 14, 'col': 1}, '56': {'answer': 'DADE', 'row': 14, 'col': 7}, '57': {'answer': 'ELLA', 'row': 14, 'col': 12}, '58': {'answer': 'TANTE', 'row': 15, 'col': 1}, '59': {'answer': 'STEN', 'row': 15, 'col': 7}, '60': {'answer': 'DEAL', 'row': 15, 'col': 12}}, 'down': {'1': {'answer': 'ADAM', 'row': 1, 'col': 1}, '2': {'answer': 'HIMA', 'row': 1, 'col': 2}, '3': {'answer': 'EVEN', 'row': 1, 'col': 3}, '4': {'answer': 'MANDARIN', 'row': 1, 'col': 4}, '5': {'answer': 'NOMADS', 'row': 1, 'col': 6}, '6': {'answer': 'AWAKE', 'row': 1, 'col': 7}, '7': {'answer': 'NENE', 'row': 1, 'col': 8}, '8': {'answer': 'ASI', 'row': 1, 'col': 9}, '9': {'answer': 'CLUBMAN', 'row': 1, 'col': 11}, '10': {'answer': 'LARIAT', 'row': 1, 'col': 12}, '11': {'answer': 'OVID', 'row': 1, 'col': 13}, '12': {'answer': 'VASE', 'row': 1, 'col': 14}, '13': {'answer': 'EST', 'row': 1, 'col': 15}, '19': {'answer': 'CAINES', 'row': 3, 'col': 10}, '21': {'answer': 'RIEN', 'row': 4, 'col': 5}, '24': {'answer': 'RAZES', 'row': 5, 'col': 9}, '25': {'answer': 'SEATO', 'row': 6, 'col': 1}, '26': {'answer': 'POSIT', 'row': 6, 'col': 2}, '27': {'answer': 'ASSET', 'row': 6, 'col': 3}, '28': {'answer': 'MORAS', 'row': 6, 'col': 8}, '29': {'answer': 'ELOPE', 'row': 6, 'col': 13}, '30': {'answer': 'EAGER', 'row': 6, 'col': 14}, '31': {'answer': 'STELA', 'row': 6, 'col': 15}, '33': {'answer': 'DOWNS', 'row': 7, 'col': 7}, '36': {'answer': 'STAMEN', 'row': 8, 'col': 6}, '37': {'answer': 'DEMANDED', 'row': 8, 'col': 12}, '39': {'answer': 'EMULATE', 'row': 9, 'col': 5}, '40': {'answer': 'RARA', 'row': 9, 'col': 11}, '42': {'answer': 'OLDHAT', 'row': 10, 'col': 4}, '43': {'answer': 'CAMDEN', 'row': 10, 'col': 10}, '45': {'answer': 'SUEDE', 'row': 11, 'col': 9}, '46': {'answer': 'LARA', 'row': 12, 'col': 2}, '47': {'answer': 'ANON', 'row': 12, 'col': 3}, '48': {'answer': 'FLAT', 'row': 12, 'col': 8}, '49': {'answer': 'COLE', 'row': 12, 'col': 13}, '50': {'answer': 'HULA', 'row': 12, 'col': 14}, '51': {'answer': 'URAL', 'row': 12, 'col': 15}, '52': {'answer': 'MGT', 'row': 13, 'col': 1}, '53': {'answer': 'DDS', 'row': 13, 'col': 7}}}, {'across': {'1': {'answer': 'ACCRA', 'row': 1, 'col': 1}, '6': {'answer': 'SAGS', 'row': 1, 'col': 7}, '10': {'answer': 'CHIP', 'row': 1, 'col': 12}, '14': {'answer': 'CROAT', 'row': 2, 'col': 1}, '15': {'answer': 'PLOT', 'row': 2, 'col': 7}, '16': {'answer': 'PANE', 'row': 2, 'col': 12}, '17': {'answer': 'CINDERELLA', 'row': 3, 'col': 1}, '19': {'answer': 'ANTE', 'row': 3, 'col': 12}, '20': {'answer': 'TIMED', 'row': 4, 'col': 3}, '21': {'answer': 'DRESSER', 'row': 4, 'col': 9}, '23': {'answer': 'EUROPA', 'row': 5, 'col': 1}, '25': {'answer': 'ITA', 'row': 5, 'col': 9}, '26': {'answer': 'ERE', 'row': 5, 'col': 13}, '27': {'answer': 'MDI', 'row': 6, 'col': 1}, '28': {'answer': 'OPS', 'row': 6, 'col': 5}, '30': {'answer': 'LUG', 'row': 6, 'col': 9}, '31': {'answer': 'LSD', 'row': 6, 'col': 13}, '32': {'answer': 'MATH', 'row': 7, 'col': 1}, '34': {'answer': 'STOOPED', 'row': 7, 'col': 6}, '37': {'answer': 'ALEUT', 'row': 8, 'col': 1}, '39': {'answer': 'EEC', 'row': 8, 'col': 7}, '40': {'answer': 'RAPID', 'row': 8, 'col': 11}, '44': {'answer': 'BESPOKE', 'row': 9, 'col': 4}, '47': {'answer': 'NOTA', 'row': 9, 'col': 12}, '48': {'answer': 'SGT', 'row': 10, 'col': 1}, '51': {'answer': 'RPM', 'row': 10, 'col': 5}, '52': {'answer': 'SAB', 'row': 10, 'col': 9}, '54': {'answer': 'RED', 'row': 10, 'col': 13}, '55': {'answer': 'PRE', 'row': 11, 'col': 1}, '56': {'answer': 'COO', 'row': 11, 'col': 5}, '57': {'answer': 'GASTRO', 'row': 11, 'col': 10}, '59': {'answer': 'HERBERT', 'row': 12, 'col': 1}, '61': {'answer': 'BLOWS', 'row': 12, 'col': 9}, '62': {'answer': 'ETNA', 'row': 13, 'col': 1}, '63': {'answer': 'THREEBEARS', 'row': 13, 'col': 6}, '67': {'answer': 'REAL', 'row': 14, 'col': 1}, '68': {'answer': 'EENS', 'row': 14, 'col': 6}, '69': {'answer': 'ADIOS', 'row': 14, 'col': 11}, '70': {'answer': 'ELLE', 'row': 15, 'col': 1}, '71': {'answer': 'DRAT', 'row': 15, 'col': 6}, '72': {'answer': 'BEDEW', 'row': 15, 'col': 11}}, 'down': {'1': {'answer': 'ACC', 'row': 1, 'col': 1}, '2': {'answer': 'CRI', 'row': 1, 'col': 2}, '3': {'answer': 'CONTRITE', 'row': 1, 'col': 3}, '4': {'answer': 'RADIO', 'row': 1, 'col': 4}, '5': {'answer': 'ATEMPO', 'row': 1, 'col': 5}, '6': {'answer': 'SPED', 'row': 1, 'col': 7}, '7': {'answer': 'ALL', 'row': 1, 'col': 8}, '8': {'answer': 'GOLDILOCKS', 'row': 1, 'col': 9}, '9': {'answer': 'STARTUP', 'row': 1, 'col': 10}, '10': {'answer': 'CPAS', 'row': 1, 'col': 12}, '11': {'answer': 'HANSEL', 'row': 1, 'col': 13}, '12': {'answer': 'INTERS', 'row': 1, 'col': 14}, '13': {'answer': 'PEERED', 'row': 1, 'col': 15}, '18': {'answer': 'REAPS', 'row': 3, 'col': 6}, '22': {'answer': 'EAGER', 'row': 4, 'col': 11}, '23': {'answer': 'EMMA', 'row': 5, 'col': 1}, '24': {'answer': 'UDAL', 'row': 5, 'col': 2}, '29': {'answer': 'STEPMOTHER', 'row': 6, 'col': 7}, '33': {'answer': 'HUB', 'row': 7, 'col': 4}, '35': {'answer': 'OEO', 'row': 7, 'col': 8}, '36': {'answer': 'DAN', 'row': 7, 'col': 12}, '38': {'answer': 'TERCE', 'row': 8, 'col': 5}, '41': {'answer': 'PORTSAID', 'row': 8, 'col': 13}, '42': {'answer': 'ITER', 'row': 8, 'col': 14}, '43': {'answer': 'DADO', 'row': 8, 'col': 15}, '45': {'answer': 'SPORTED', 'row': 9, 'col': 6}, '46': {'answer': 'EAGLE', 'row': 9, 'col': 10}, '48': {'answer': 'SPHERE', 'row': 10, 'col': 1}, '49': {'answer': 'GRETEL', 'row': 10, 'col': 2}, '50': {'answer': 'TERNAL', 'row': 10, 'col': 3}, '53': {'answer': 'BAOBAB', 'row': 10, 'col': 11}, '58': {'answer': 'SWEDE', 'row': 11, 'col': 12}, '60': {'answer': 'BALE', 'row': 12, 'col': 4}, '61': {'answer': 'BEST', 'row': 12, 'col': 9}, '64': {'answer': 'RNA', 'row': 13, 'col': 8}, '65': {'answer': 'ROE', 'row': 13, 'col': 14}, '66': {'answer': 'SSW', 'row': 13, 'col': 15}}}, {'across': {'1': {'answer': 'PEALS', 'row': 1, 'col': 2}, '6': {'answer': 'MOTHERS', 'row': 1, 'col': 9}, '13': {'answer': 'REXREED', 'row': 2, 'col': 1}, '15': {'answer': 'ARBITER', 'row': 2, 'col': 9}, '16': {'answer': 'UNCLEAR', 'row': 3, 'col': 1}, '17': {'answer': 'NEATASA', 'row': 3, 'col': 9}, '18': {'answer': 'BRIE', 'row': 4, 'col': 1}, '19': {'answer': 'NEH', 'row': 4, 'col': 6}, '21': {'answer': 'ARS', 'row': 4, 'col': 10}, '22': {'answer': 'LOTS', 'row': 5, 'col': 1}, '23': {'answer': 'GOAD', 'row': 5, 'col': 7}, '25': {'answer': 'OSER', 'row': 5, 'col': 12}, '29': {'answer': 'EDE', 'row': 6, 'col': 1}, '30': {'answer': 'LASTS', 'row': 6, 'col': 5}, '32': {'answer': 'SUAVE', 'row': 6, 'col': 11}, '33': {'answer': 'SAG', 'row': 7, 'col': 4}, '34': {'answer': 'COATTAIL', 'row': 7, 'col': 8}, '36': {'answer': 'MOTHEROFPEARL', 'row': 8, 'col': 2}, '39': {'answer': 'LOVERSOF', 'row': 9, 'col': 1}, '40': {'answer': 'SET', 'row': 9, 'col': 10}, '41': {'answer': 'STEPS', 'row': 10, 'col': 1}, '42': {'answer': 'AFTER', 'row': 10, 'col': 7}, '44': {'answer': 'RLS', 'row': 10, 'col': 13}, '47': {'answer': 'TENS', 'row': 11, 'col': 1}, '48': {'answer': 'ADER', 'row': 11, 'col': 6}, '49': {'answer': 'SEAT', 'row': 11, 'col': 12}, '50': {'answer': 'ISL', 'row': 12, 'col': 4}, '52': {'answer': 'EUR', 'row': 12, 'col': 8}, '54': {'answer': 'EAVE', 'row': 12, 'col': 12}, '55': {'answer': 'MAGNETO', 'row': 13, 'col': 1}, '59': {'answer': 'MEANDER', 'row': 13, 'col': 9}, '61': {'answer': 'ABETTOR', 'row': 14, 'col': 1}, '62': {'answer': 'PATTERS', 'row': 14, 'col': 9}, '63': {'answer': 'HEROINE', 'row': 15, 'col': 1}, '64': {'answer': 'PEARS', 'row': 15, 'col': 10}}, 'down': {'1': {'answer': 'PENROD', 'row': 1, 'col': 2}, '2': {'answer': 'EXCITE', 'row': 1, 'col': 3}, '3': {'answer': 'ARLES', 'row': 1, 'col': 4}, '4': {'answer': 'LEE', 'row': 1, 'col': 5}, '5': {'answer': 'SEAN', 'row': 1, 'col': 6}, '6': {'answer': 'MAN', 'row': 1, 'col': 9}, '7': {'answer': 'OREAD', 'row': 1, 'col': 10}, '8': {'answer': 'TBAR', 'row': 1, 'col': 11}, '9': {'answer': 'HITSOUTAT', 'row': 1, 'col': 12}, '10': {'answer': 'ETA', 'row': 1, 'col': 13}, '11': {'answer': 'RES', 'row': 1, 'col': 14}, '12': {'answer': 'SRA', 'row': 1, 'col': 15}, '13': {'answer': 'RUBLE', 'row': 2, 'col': 1}, '14': {'answer': 'DREGS', 'row': 2, 'col': 7}, '20': {'answer': 'HOTCOFFEE', 'row': 4, 'col': 8}, '24': {'answer': 'ASOF', 'row': 5, 'col': 9}, '26': {'answer': 'SAAR', 'row': 5, 'col': 13}, '27': {'answer': 'EVIL', 'row': 5, 'col': 14}, '28': {'answer': 'REL', 'row': 5, 'col': 15}, '30': {'answer': 'LAHRS', 'row': 6, 'col': 5}, '31': {'answer': 'AGES', 'row': 6, 'col': 6}, '32': {'answer': 'STEER', 'row': 6, 'col': 11}, '33': {'answer': 'STEPSINTO', 'row': 7, 'col': 4}, '35': {'answer': 'APSE', 'row': 7, 'col': 10}, '36': {'answer': 'MOTE', 'row': 8, 'col': 2}, '37': {'answer': 'OVEN', 'row': 8, 'col': 3}, '38': {'answer': 'ROAD', 'row': 8, 'col': 7}, '39': {'answer': 'LST', 'row': 9, 'col': 1}, '43': {'answer': 'TRUMP', 'row': 10, 'col': 9}, '44': {'answer': 'READER', 'row': 10, 'col': 13}, '45': {'answer': 'LAVERS', 'row': 10, 'col': 14}, '46': {'answer': 'STERS', 'row': 10, 'col': 15}, '48': {'answer': 'ALTON', 'row': 11, 'col': 6}, '49': {'answer': 'SENTA', 'row': 11, 'col': 12}, '51': {'answer': 'SETI', 'row': 12, 'col': 5}, '53': {'answer': 'REAP', 'row': 12, 'col': 10}, '55': {'answer': 'MAH', 'row': 13, 'col': 1}, '56': {'answer': 'ABE', 'row': 13, 'col': 2}, '57': {'answer': 'GER', 'row': 13, 'col': 3}, '58': {'answer': 'ORE', 'row': 13, 'col': 7}, '60': {'answer': 'ATE', 'row': 13, 'col': 11}}}, {'across': {'1': {'answer': 'OPA', 'row': 1, 'col': 1}, '4': {'answer': 'ERSATZ', 'row': 1, 'col': 7}, '10': {'answer': 'TSAR', 'row': 1, 'col': 14}, '14': {'answer': 'SET', 'row': 1, 'col': 19}, '17': {'answer': 'DAS', 'row': 2, 'col': 1}, '18': {'answer': 'BREATHE', 'row': 2, 'col': 6}, '19': {'answer': 'RAVE', 'row': 2, 'col': 14}, '20': {'answer': 'APE', 'row': 2, 'col': 19}, '21': {'answer': 'ESS', 'row': 3, 'col': 1}, '22': {'answer': 'DERAILED', 'row': 3, 'col': 5}, '23': {'answer': 'ETON', 'row': 3, 'col': 14}, '24': {'answer': 'RID', 'row': 3, 'col': 19}, '25': {'answer': 'STEPIN', 'row': 4, 'col': 1}, '27': {'answer': 'SLAB', 'row': 4, 'col': 8}, '28': {'answer': 'NEWDEAL', 'row': 4, 'col': 14}, '30': {'answer': 'SORRENTO', 'row': 5, 'col': 1}, '32': {'answer': 'SAMITE', 'row': 5, 'col': 10}, '35': {'answer': 'ATOM', 'row': 5, 'col': 18}, '37': {'answer': 'ARTESIAN', 'row': 6, 'col': 1}, '38': {'answer': 'TICONDEROGA', 'row': 6, 'col': 11}, '41': {'answer': 'SENT', 'row': 7, 'col': 4}, '42': {'answer': 'COTTON', 'row': 7, 'col': 9}, '44': {'answer': 'ONEGUN', 'row': 7, 'col': 16}, '45': {'answer': 'PAPS', 'row': 8, 'col': 1}, '48': {'answer': 'GEFALLEN', 'row': 8, 'col': 6}, '50': {'answer': 'SUNDAES', 'row': 8, 'col': 15}, '51': {'answer': 'OCT', 'row': 9, 'col': 1}, '52': {'answer': 'STRANDER', 'row': 9, 'col': 5}, '53': {'answer': 'HORA', 'row': 9, 'col': 14}, '54': {'answer': 'STEREO', 'row': 10, 'col': 1}, '56': {'answer': 'CATO', 'row': 10, 'col': 8}, '57': {'answer': 'RAW', 'row': 10, 'col': 13}, '58': {'answer': 'ABBE', 'row': 10, 'col': 18}, '62': {'answer': 'SURRENDEROFCORNWALLIS', 'row': 11, 'col': 1}, '67': {'answer': 'EPOS', 'row': 12, 'col': 1}, '68': {'answer': 'ERY', 'row': 12, 'col': 7}, '69': {'answer': 'BOUE', 'row': 12, 'col': 11}, '70': {'answer': 'ARDENT', 'row': 12, 'col': 16}, '71': {'answer': 'SPAS', 'row': 13, 'col': 5}, '73': {'answer': 'SUNGMASS', 'row': 13, 'col': 10}, '75': {'answer': 'AGO', 'row': 13, 'col': 19}, '76': {'answer': 'LEOPARD', 'row': 14, 'col': 1}, '80': {'answer': 'WINDISCH', 'row': 14, 'col': 9}, '81': {'answer': 'ATOP', 'row': 14, 'col': 18}, '82': {'answer': 'AVIATE', 'row': 15, 'col': 1}, '83': {'answer': 'CANKER', 'row': 15, 'col': 8}, '84': {'answer': 'TIAS', 'row': 15, 'col': 15}, '86': {'answer': 'VALLEYFORGE', 'row': 16, 'col': 1}, '88': {'answer': 'MONMOUTH', 'row': 16, 'col': 14}, '92': {'answer': 'ANTE', 'row': 17, 'col': 1}, '93': {'answer': 'INTERN', 'row': 17, 'col': 7}, '95': {'answer': 'ARGENTIA', 'row': 17, 'col': 14}, '96': {'answer': 'SARANAC', 'row': 18, 'col': 2}, '99': {'answer': 'HARD', 'row': 18, 'col': 11}, '101': {'answer': 'TEETER', 'row': 18, 'col': 16}, '102': {'answer': 'CTN', 'row': 19, 'col': 1}, '103': {'answer': 'LOCO', 'row': 19, 'col': 5}, '104': {'answer': 'CITEDFOR', 'row': 19, 'col': 10}, '106': {'answer': 'ERA', 'row': 19, 'col': 19}, '107': {'answer': 'ROK', 'row': 20, 'col': 1}, '108': {'answer': 'TERR', 'row': 20, 'col': 5}, '109': {'answer': 'PLATOON', 'row': 20, 'col': 10}, '110': {'answer': 'RCS', 'row': 20, 'col': 19}, '111': {'answer': 'INS', 'row': 21, 'col': 1}, '112': {'answer': 'SLED', 'row': 21, 'col': 5}, '113': {'answer': 'ALLEGE', 'row': 21, 'col': 10}, '114': {'answer': 'SES', 'row': 21, 'col': 19}}, 'down': {'1': {'answer': 'ODESSA', 'row': 1, 'col': 1}, '2': {'answer': 'PASTOR', 'row': 1, 'col': 2}, '3': {'answer': 'ASSERT', 'row': 1, 'col': 3}, '4': {'answer': 'ERR', 'row': 1, 'col': 7}, '5': {'answer': 'REASON', 'row': 1, 'col': 8}, '6': {'answer': 'SAIL', 'row': 1, 'col': 9}, '7': {'answer': 'ATLAS', 'row': 1, 'col': 10}, '8': {'answer': 'THEBATTLEOFBUNKERHILL', 'row': 1, 'col': 11}, '9': {'answer': 'ZED', 'row': 1, 'col': 12}, '10': {'answer': 'TRENTON', 'row': 1, 'col': 14}, '11': {'answer': 'SATEEN', 'row': 1, 'col': 15}, '12': {'answer': 'AVOW', 'row': 1, 'col': 16}, '13': {'answer': 'REND', 'row': 1, 'col': 17}, '14': {'answer': 'SARATOGA', 'row': 1, 'col': 19}, '15': {'answer': 'EPILOGUE', 'row': 1, 'col': 20}, '16': {'answer': 'TED', 'row': 1, 'col': 21}, '18': {'answer': 'BENNINGTON', 'row': 2, 'col': 6}, '22': {'answer': 'DIESE', 'row': 3, 'col': 5}, '26': {'answer': 'PRESS', 'row': 4, 'col': 4}, '29': {'answer': 'EARED', 'row': 4, 'col': 18}, '31': {'answer': 'TATER', 'row': 5, 'col': 7}, '33': {'answer': 'MITER', 'row': 5, 'col': 12}, '34': {'answer': 'ICON', 'row': 5, 'col': 13}, '36': {'answer': 'MANS', 'row': 5, 'col': 21}, '39': {'answer': 'DOUR', 'row': 6, 'col': 16}, '40': {'answer': 'ENNA', 'row': 6, 'col': 17}, '42': {'answer': 'CANARY', 'row': 7, 'col': 9}, '43': {'answer': 'OLDTO', 'row': 7, 'col': 10}, '45': {'answer': 'POSSE', 'row': 8, 'col': 1}, '46': {'answer': 'ACTUP', 'row': 8, 'col': 2}, '47': {'answer': 'PTERO', 'row': 8, 'col': 3}, '49': {'answer': 'FACERS', 'row': 8, 'col': 8}, '50': {'answer': 'SOWN', 'row': 8, 'col': 15}, '52': {'answer': 'SEE', 'row': 9, 'col': 5}, '53': {'answer': 'HAREMS', 'row': 9, 'col': 14}, '55': {'answer': 'RRS', 'row': 10, 'col': 4}, '57': {'answer': 'ROUGIR', 'row': 10, 'col': 13}, '58': {'answer': 'ALD', 'row': 10, 'col': 18}, '59': {'answer': 'BLEAT', 'row': 10, 'col': 19}, '60': {'answer': 'BINGO', 'row': 10, 'col': 20}, '61': {'answer': 'ESTOP', 'row': 10, 'col': 21}, '63': {'answer': 'DEAD', 'row': 11, 'col': 7}, '64': {'answer': 'CONDE', 'row': 11, 'col': 12}, '65': {'answer': 'WASHINGTON', 'row': 11, 'col': 16}, '66': {'answer': 'ARS', 'row': 11, 'col': 17}, '71': {'answer': 'SATE', 'row': 13, 'col': 5}, '72': {'answer': 'PREY', 'row': 13, 'col': 6}, '73': {'answer': 'SINGE', 'row': 13, 'col': 10}, '74': {'answer': 'ACTOR', 'row': 13, 'col': 15}, '76': {'answer': 'LAVA', 'row': 14, 'col': 1}, '77': {'answer': 'EVANSTON', 'row': 14, 'col': 2}, '78': {'answer': 'OILTANKS', 'row': 14, 'col': 3}, '79': {'answer': 'PALER', 'row': 14, 'col': 4}, '80': {'answer': 'WART', 'row': 14, 'col': 9}, '81': {'answer': 'ASONE', 'row': 14, 'col': 18}, '83': {'answer': 'CONCORD', 'row': 15, 'col': 8}, '85': {'answer': 'AMEER', 'row': 15, 'col': 17}, '87': {'answer': 'FIACRE', 'row': 16, 'col': 7}, '88': {'answer': 'MADDOG', 'row': 16, 'col': 14}, '89': {'answer': 'UTTERS', 'row': 16, 'col': 19}, '90': {'answer': 'TIERCE', 'row': 16, 'col': 20}, '91': {'answer': 'HARASS', 'row': 16, 'col': 21}, '94': {'answer': 'NATAL', 'row': 17, 'col': 12}, '97': {'answer': 'ALTS', 'row': 18, 'col': 5}, '98': {'answer': 'NOEL', 'row': 18, 'col': 6}, '100': {'answer': 'RETE', 'row': 18, 'col': 13}, '102': {'answer': 'CRI', 'row': 19, 'col': 1}, '104': {'answer': 'CPA', 'row': 19, 'col': 10}, '105': {'answer': 'FOE', 'row': 19, 'col': 15}}}, {'across': {'1': {'answer': 'AJAX', 'row': 1, 'col': 1}, '5': {'answer': 'WHOOP', 'row': 1, 'col': 6}, '10': {'answer': 'CRAB', 'row': 1, 'col': 12}, '14': {'answer': 'BALI', 'row': 2, 'col': 1}, '15': {'answer': 'HEAVE', 'row': 2, 'col': 6}, '16': {'answer': 'HAME', 'row': 2, 'col': 12}, '17': {'answer': 'ADMIRALFARRAGUT', 'row': 3, 'col': 1}, '20': {'answer': 'DEA', 'row': 4, 'col': 1}, '21': {'answer': 'ALPS', 'row': 4, 'col': 5}, '22': {'answer': 'OPERA', 'row': 4, 'col': 11}, '23': {'answer': 'AVES', 'row': 5, 'col': 4}, '24': {'answer': 'MOAS', 'row': 5, 'col': 9}, '26': {'answer': 'DAPPER', 'row': 6, 'col': 1}, '29': {'answer': 'MUIR', 'row': 6, 'col': 8}, '30': {'answer': 'PAP', 'row': 6, 'col': 13}, '33': {'answer': 'IRIS', 'row': 7, 'col': 1}, '34': {'answer': 'PASSE', 'row': 7, 'col': 7}, '35': {'answer': 'EGO', 'row': 7, 'col': 13}, '36': {'answer': 'GENERALSHERIDAN', 'row': 8, 'col': 1}, '40': {'answer': 'ICE', 'row': 9, 'col': 1}, '41': {'answer': 'AMITY', 'row': 9, 'col': 5}, '42': {'answer': 'DANE', 'row': 9, 'col': 12}, '43': {'answer': 'TAD', 'row': 10, 'col': 1}, '44': {'answer': 'PENS', 'row': 10, 'col': 5}, '45': {'answer': 'CALLAS', 'row': 10, 'col': 10}, '47': {'answer': 'PINY', 'row': 11, 'col': 4}, '48': {'answer': 'RACE', 'row': 11, 'col': 9}, '49': {'answer': 'CHORE', 'row': 12, 'col': 1}, '52': {'answer': 'AONE', 'row': 12, 'col': 8}, '53': {'answer': 'AFT', 'row': 12, 'col': 13}, '56': {'answer': 'ROBERTEDWARDLEE', 'row': 13, 'col': 1}, '60': {'answer': 'ALOE', 'row': 14, 'col': 1}, '61': {'answer': 'OREAD', 'row': 14, 'col': 6}, '62': {'answer': 'OGLE', 'row': 14, 'col': 12}, '63': {'answer': 'TEEN', 'row': 15, 'col': 1}, '64': {'answer': 'MANNA', 'row': 15, 'col': 6}, '65': {'answer': 'CALM', 'row': 15, 'col': 12}}, 'down': {'1': {'answer': 'ABAD', 'row': 1, 'col': 1}, '2': {'answer': 'JADE', 'row': 1, 'col': 2}, '3': {'answer': 'ALMA', 'row': 1, 'col': 3}, '4': {'answer': 'XII', 'row': 1, 'col': 4}, '5': {'answer': 'WHALER', 'row': 1, 'col': 6}, '6': {'answer': 'HELPS', 'row': 1, 'col': 7}, '7': {'answer': 'OAFS', 'row': 1, 'col': 8}, '8': {'answer': 'OVA', 'row': 1, 'col': 9}, '9': {'answer': 'PER', 'row': 1, 'col': 10}, '10': {'answer': 'CHAPS', 'row': 1, 'col': 12}, '11': {'answer': 'RAGE', 'row': 1, 'col': 13}, '12': {'answer': 'AMUR', 'row': 1, 'col': 14}, '13': {'answer': 'BETA', 'row': 1, 'col': 15}, '18': {'answer': 'RAVE', 'row': 3, 'col': 5}, '19': {'answer': 'ROARER', 'row': 3, 'col': 11}, '23': {'answer': 'APSE', 'row': 5, 'col': 4}, '24': {'answer': 'MUSHY', 'row': 5, 'col': 9}, '25': {'answer': 'OISE', 'row': 5, 'col': 10}, '26': {'answer': 'DIGIT', 'row': 6, 'col': 1}, '27': {'answer': 'ARECA', 'row': 6, 'col': 2}, '28': {'answer': 'PINED', 'row': 6, 'col': 3}, '29': {'answer': 'MASTS', 'row': 6, 'col': 8}, '30': {'answer': 'PEDAL', 'row': 6, 'col': 13}, '31': {'answer': 'AGANA', 'row': 6, 'col': 14}, '32': {'answer': 'PONES', 'row': 6, 'col': 15}, '34': {'answer': 'PLINY', 'row': 7, 'col': 7}, '37': {'answer': 'RAPIER', 'row': 8, 'col': 5}, '38': {'answer': 'AMEN', 'row': 8, 'col': 6}, '39': {'answer': 'IDLE', 'row': 8, 'col': 12}, '45': {'answer': 'CANADA', 'row': 10, 'col': 10}, '46': {'answer': 'ACER', 'row': 10, 'col': 11}, '47': {'answer': 'PREEN', 'row': 11, 'col': 4}, '48': {'answer': 'ROWAN', 'row': 11, 'col': 9}, '49': {'answer': 'CRAT', 'row': 12, 'col': 1}, '50': {'answer': 'HOLE', 'row': 12, 'col': 2}, '51': {'answer': 'OBOE', 'row': 12, 'col': 3}, '52': {'answer': 'ADEN', 'row': 12, 'col': 8}, '53': {'answer': 'ALGA', 'row': 12, 'col': 13}, '54': {'answer': 'FELL', 'row': 12, 'col': 14}, '55': {'answer': 'TEEM', 'row': 12, 'col': 15}, '57': {'answer': 'TOM', 'row': 13, 'col': 6}, '58': {'answer': 'ERA', 'row': 13, 'col': 7}, '59': {'answer': 'DOC', 'row': 13, 'col': 12}}}
]

export default crosswords