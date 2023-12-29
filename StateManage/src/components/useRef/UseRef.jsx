import { useRef, useState, useEffect } from "react";

const UseRef = () => {
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const idRef = useRef(1);
  const [names, setNames] = useState([
    { id: idRef.current++, name: "Rahul" },
    { id: idRef.current++, name: "Raj" },
  ]);

  const onAddName = () => {
    setNames([
      ...names,
      {
        id: idRef.current++,
        name: inputRef.current.value,
      },
    ]);
    inputRef.current.value = "";
  };

  const deleteName = (id) => {
    setNames(names.filter((name) => name.id !== id));
  }

  const clearAll = () => {
    setNames([]);
  }

  return (
    <>
    <div className="flex flex-col justify-center items-center min-h-screen bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
    <div className="flex items-center mb-4 ">
    <h1 className="text-3xl font-bold mb-4">UseRef Example</h1>
    </div>
   
      <div className="bg-white p-8 rounded-lg shadow-lg mb-4">
        {names.map((name) => (
          <li className="mb-2 text-xl" key={name.id}>
            {name.id} : {name.name} 
            <button onClick={() => deleteName(name.id)} className="ml-2 bg-red-500 text-white px-1 py-1 rounded">Delete </button>
          </li>
        ))}
      </div>
      <input
        className="h-10 w-40 mt-1 border rounded px-2 focus:outline-none"
        type="text"
        ref={inputRef}
      />
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded mt-2"
        onClick={onAddName}
      >
        Add Name
      </button>
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded mt-2"
        onClick={clearAll}
      >
        Clear Name
      </button>
      <div className="container p-4 border mt-4" >
      <p className="text-xl font-bold mb-3  text-white">The useRef hook is used to create a reference to the input element, allowing us to focus on it when the component mounts. The idRef is a state variable used to generate unique IDs for each name added to the list.</p>
    </div>
    </div>
    </>

  );
};

export default UseRef;
