import { useNavigate } from "react-router-dom";

const NotFound : React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col justify-center items-center w-screen h-screen">
      <p className="text-xl">Oops! Appears you are lost.</p>
      {/* <img src='/404.png' className="m-3 rounded-lg drop-shadow-lg" alt="Pencils getting lost cartoon"/> */}
      <button className="rounded mt-3 p-3 bg-indigo-500 text-white" onClick={() => navigate('/')}>
        Play the Daily Puzzle
      </button>
    </div>
  );
}

export default NotFound;
