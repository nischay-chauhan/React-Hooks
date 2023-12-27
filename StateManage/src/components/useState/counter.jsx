import  { useState, useEffect } from 'react';

function Counter() {
  const [count, setCount] = useState(() => {
    const storedCount = sessionStorage.getItem('count');
    return storedCount ? parseInt(storedCount, 10) : 10;
  });

  const [doc, setDoc] = useState(0);

  const addOne = () => {
    setCount(count + doc);
  };

  const minusOne = () => {
    setCount(count - doc);
  };

  const handleChange = (e) => {
    setDoc(parseInt(e.target.value, 10));
  };

  const resetTotal = () => {
    setCount(0);
  };

  useEffect(() => {
    sessionStorage.setItem('count', count.toString());
  }, [count]);

  return (
    <div className='h-screen bg-pink-300 flex justify-center flex-col items-center'>
      <div className=''>
        <h1 className='text-9xl font-bold mb-4'>{count}</h1>
      </div>
      <div className='container flex justify-center items-center'>
        <button className='mr-3 w-full bg-blue-500 hover:bg-blue-700 text-white font-bold text-xl py-2 px-4 rounded' onClick={addOne}>
          + {doc}
        </button>
        <button className='w-full bg-blue-500 hover:bg-blue-700 text-white font-bold text-xl py-2 px-4 rounded' onClick={minusOne}>
          - {doc}
        </button>
      </div>
      <label className='text-xl font-bold mt-6'>Enter the number by which you want to Increase and Decrease the counter</label>
      <input
        type='number'
        value={doc}
        onChange={handleChange}
        className='mt-6 bg-pink-400 hover:bg-pink-700 text-white font-bold text-xl py-2 px-4 rounded'
      />
      <button className='mt-4 bg-gray-500 hover:bg-gray-700 text-white font-bold text-xl py-2 px-4 rounded' onClick={resetTotal}>
        Reset Total
      </button>
    </div>
  );
}

export default Counter;
