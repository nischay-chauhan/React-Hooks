/* eslint-disable react/no-children-prop */
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const ApiCall = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://fakestoreapi.com/products');
        setData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="bg-black w-full h-full flex flex-col justify-center items-center text-white">
      
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div>
        <p className=" border p-4  text-xl mb-4 text-gray-500">
        This component demonstrates the use of the useState hook to manage the state of the data and loading variables. The data state holds the fetched product information, and loading indicates whether the data is still being loaded.
      </p>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mb-6 gap-4">
        
          {Array.isArray(data) && data.length > 0 ? (
            data.map((item) => (
              <div key={item.id} className="bg-gray-800 p-4 rounded shadow">
                <h2 className="text-xl font-bold mb-2">{item.title}</h2>
                <p className="text-gray-400">{item.description}</p>
                <p className="text-green-500 mt-2">${item.price}</p>
              </div>
            ))
          ) : (
            <p>No data available</p>
          )}
        </div>
        </div>
      )}
      <Link
        to={"/next"}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold text-xl py-2 px-4 rounded mt-4"
      >
        Next
      </Link>
      <Link to={'/'} className="text-blue-500 mt-4" children={"Go to home page"} />
    </div>
  );
};

export default ApiCall;
