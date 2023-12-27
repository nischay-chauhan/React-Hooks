/* eslint-disable react/no-children-prop */
import { useReducer } from "react";
import { Link } from "react-router-dom";

 const UserForm = () => {
    const[state , dispatch] = useReducer(
      (state , action) => ({
        ...state,
        ...action,
      }),
      {
        first : " ",
        last :  " ",
      }
    );
    return (
<div className="m-2  flex flex-col justify-center items-center bg-gradient-to-t from-gray-700 to-gray-900">
  <div className="bg-gray-800 p-6 spacing-6 m-2  rounded">
    <input
      className="p-2 mr-3 rounded mb-4 bg-gray-600 text-white"
      type="text"
      placeholder="first name"
      value={state.first}
      onChange={(e) => dispatch({ first: e.target.value })}
    />
    <input
      className="p-2 rounded mb-4 bg-gray-600 text-white"
      type="text"
      placeholder="Last name"
      value={state.last}
      onChange={(e) => dispatch({ last: e.target.value })}
    />
    <div className="text-white text-xl py-2 px-4 rounded">First: {state.first}</div>
    <div className="text-white text-xl py-2 px-4 rounded">Last: {state.last}</div>
  </div>
</div>

    )
 }

const Reducer = () => {
  const [state, dispatch] = useReducer((state, action) => {
    switch (action.type) {
      case "SET_NAME":
        return { ...state, name: action.payload };
      case "ADD_NAME":
        return {...state , 
          names:[...state.names , state.name],
          name : "",
        };
      case "CLEAR_NAME":
        return { ...state, names: [] };
      default:
        return state;
    }
  }, {
    names: [],
    name: "",
  });

  return (
<div className=" h-screen flex flex-col justify-center items-center bg-gradient-to-t from-gray-700 to-gray-900">
<p className=" box-border text-white text-xl py-2 px-4 rounded border m-10"> 
    In this React program, the <code>useReducer</code> hook is employed to manage complex state logic
    for two distinct components: <code>UserForm</code> and <code>Reducer</code>. The <code>useReducer</code>
    hook is a powerful tool in React that helps in managing state transitions in a predictable manner.
</p>
  <ul className="list-none p-0">
    {state.names.map((name, index) => (
      <li key={index} className="text-white text-xl py-2 px-4 my-2 bg-gray-800 rounded">
        {name}
      </li>
    ))}
  </ul>
  <input
    className="p-2 rounded my-4"
    type="text"
    value={state.name}
    onChange={(e) => dispatch({ type: "SET_NAME", payload: e.target.value })}
  />
  <div className="flex flex-row  m-1 ">
  <button
    className="mr-2 bg-blue-500 hover:bg-blue-700 text-white font-bold text-xl py-2 px-4 rounded"
    onClick={() => dispatch({ type: "ADD_NAME" })}
  >
    Add Name
  </button>
  <button
    className="bg-blue-500 hover:bg-blue-700 text-white font-bold text-xl py-2 px-4 rounded"
    onClick={() => dispatch({ type: "CLEAR_NAME" })}
  >
    clear Name
  </button>
  </div>
  <UserForm />

  <Link to={'/'} className="text-blue-500 mt-4" children={"Go to home page"} />
</div>

  );
};

export default Reducer ;
