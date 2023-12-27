import PropTypes from 'prop-types';
import { useState, useMemo, useCallback } from "react";
import { Link } from "react-router-dom";
const SortedList = ({ list, sortFunc }) => {
  console.log("SortedList render");

  const sortedList = useMemo(() => {
    console.log("Running Sort");
    return [...list].sort(sortFunc);
  }, [list, sortFunc]);

  return (
    <div className="mt-4 bg-gray-200 p-4 rounded">
      Sorted List: {sortedList.join(", ")}
    </div>
  );
};

SortedList.propTypes = {
  list: PropTypes.array.isRequired,
  sortFunc: PropTypes.func.isRequired,
};

//If you want to see you firefox lag run this function 
// const calculateTotal = (numbers) => {
//   console.log("Running Heavy Calculation");
//   for (let i = 0; i < 100000000; i++) {
//     continue;
//   }
//   return numbers.reduce((acc, number) => acc + number, 0);
// };


const Memo = () => {
  const [numbers] = useState([10, 20, 30]);
  const [names] = useState(["Nischay", "Piyush", "Raj", "Raghav", "Rohit"]);
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

  const total = useMemo(() => numbers.reduce((acc, number) => acc + number, 0), [numbers]);
  const countTotal = count1 + count2;

  const sortFunc = useCallback((a, b) => a.localeCompare(b) * -1, []);

  const clearTotal = () => {
    setCount1(0);
    setCount2(0);
  };

  return (
    <div className="h-screen flex flex-col justify-center items-center bg-gradient-to-b from-purple-500 to-indigo-600">
      <div className="mb-4 text-3xl font-bold text-white">Total: {total}</div>
      <div className="mb-4 text-3xl font-bold text-white">Names: {names.join(", ")}</div>
      <SortedList list={names} sortFunc={sortFunc} />
      <button
        className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold text-xl py-2 px-4 rounded"
        onClick={() => setCount1(count1 + 1)}
      >
        Increment Count1: {count1}
      </button>
      <button
        className="ml-4 mr-4 bg-green-500 hover:bg-green-700 text-white font-bold text-xl py-2 px-4 rounded"
        onClick={() => setCount2(count2 + 1)}
      >
        Increment Count2: {count2}
      </button>
      <button
        className="mt-4 bg-red-500 hover:bg-red-700 text-white font-bold text-xl py-2 px-4 rounded"
        onClick={clearTotal}
      >
        Clear Total
      </button>
      <div className="mt-4 text-3xl font-bold text-white">Total: {countTotal}</div>

      <Link to={'/'} className="text-black-500 mt-4" >Go to home page</Link>
    </div>
  );
};

export default Memo;
