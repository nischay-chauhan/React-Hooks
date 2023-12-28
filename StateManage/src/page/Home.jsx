import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="h-screen flex flex-col justify-center items-center bg-gradient-to-t from-blue-500 to-purple-700 text-white">
      <h1 className="text-6xl font-bold mb-8">
        State Management Exercise
      </h1>
      <ul className="text-3xl list-none p-0">
        <li >
          <Link className="text-yellow-300 hover:underline" to="/usestate">
            UseState Example
          </Link>
        </li>
      </ul>
      <ul className="text-3xl list-none p-0 mt-4">
        <li>
          <Link className="text-yellow-300 hover:underline" to="/reducer">
            UseReducer Example
          </Link>
        </li>
        
      </ul>
      <ul className="text-3xl list-none p-0 mt-4">
        <li>
          <Link className="text-yellow-300 hover:underline" to="/memo">
            UseMemo & Callback Example
          </Link>
        </li>
      </ul>
      <ul className="text-3xl list-none p-0 mt-4">
        <li>
          <Link className="text-yellow-300 hover:underline" to="/effect">
            UseEffect Example
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Home;
