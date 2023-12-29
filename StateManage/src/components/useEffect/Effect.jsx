import { useEffect , useState } from "react";
import { Link } from "react-router-dom";
const array = [
  { key: '1', type: 'planet', value: 'Tatooine' },
  { key: '2', type: 'planet', value: 'Alderaan' },
  { key: '3', type: 'starship', value: 'Death Star' },
  { key: '4', type: 'starship', value: 'CR90 corvette' },
  { key: '5', type: 'starship', value: 'Star Destroyer' },
  { key: '6', type: 'person', value: 'Luke Skywalker' },
  { key: '7', type: 'person', value: 'Darth Vader' },
  { key: '8', type: 'person', value: 'Leia Organa' },
];

const Effect = () => {
  const [inputValue, setInputValue] = useState('');
  const [inputType, setInputType] = useState('');
  const [filteredArray, setFilteredArray] = useState(array);

  const inputValueHandler = (e) => {
    setInputValue(e.target.value);
  };

  const inputTypeHandler = (e) => {
    setInputType(e.target.value);
  };

  useEffect(() => {
    setFilteredArray(() => {
      const newArray = array
        .filter((item) => item.value.includes(inputValue))
        .filter((item) => item.type.includes(inputType));
      return newArray;
    });
  }, [inputValue, inputType]);

  const listItems = filteredArray.map((item) => (
    <tr key={item.key}>
      <td className="border px-4 py-2">{item.type}</td>
      <td className="border px-4 py-2">{item.value}</td>
    </tr>
  ));

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-blue-500 to-purple-500">
      <div className="bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold mb-4">useEffect use case</h2>
        <h3 className="text-xl mb-4">Running on state change: live filtering</h3>
        <form className="max-w-md flex justify-between items-center mb-4">
          <div>
            <label htmlFor="input-type">Filter by <b>type</b></label><br />
            <input
              type="text"
              id="input-type"
              autoComplete="off"
              onChange={inputTypeHandler}
              className="h-6 w-40 mt-1"
            />
          </div>
          <div>
            <label htmlFor="input-value">Filter by <b>value</b></label><br />
            <input
              type="text"
              id="input-value"
              autoComplete="off"
              onChange={inputValueHandler}
              className="h-6 w-40 mt-1"
            />
          </div>
        </form>
        <table className="w-80 border border-gray-300">
          <thead>
            <tr>
              <th className="border px-4 py-2">Type</th>
              <th className="border px-4 py-2">Value</th>
            </tr>
          </thead>
          <tbody>
            {listItems}
          </tbody>
        </table>
        
      </div>
      <div className="flex flex-col">
      <Link to={'/effect1'} className="mt-4 bg-green-500 hover:bg-green-700 text-white font-bold text-xl py-2 px-4 rounded" >Next Example</Link>
      <Link to={'/'} className="px-2 text-queen-blue-500 hover:text-white mt-4" >Go to home page</Link>

      </div>


    </div>
  );
};

export default Effect;