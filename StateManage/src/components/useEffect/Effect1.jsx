import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const products = [
  'Kurkure',
  'Tedha Medha',
  'Takatak',
  'Lays',
  'Yo-Fun'
];

const Effect1 = () => {
  const [cart, setCart] = useState([]);
  const [triggerAnimation, setTriggerAnimation] = useState(false);

  const clickHandler = (e) => {
    e.preventDefault();
    setCart((prevCart) => {
      const newCart = [...prevCart];
      newCart.push(e.target.value);
      return newCart;
    });
  };

  const clearHandler = (e) => {
    e.preventDefault();
    setCart([]);
  };

  useEffect(() => {
    setTriggerAnimation(true);

    const timer = setTimeout(() => {
      setTriggerAnimation(false);
    }, 900);

    return () => {
      clearTimeout(timer);
    };
  }, [cart]);

  const cartClasses = triggerAnimation ? 'animate-jello cart' : 'cart';

  const itemsOnSale = products.map((itemOnSale, index) => (
    <li key={index} className="mb-2" >
      <form>
        <span className="flex text-xl items-center">
          {itemOnSale}
          <button onClick={clickHandler} value={itemOnSale} className="ml-2 bg-blue-500 text-white px-1 py-1 rounded">
            Add to cart
          </button>
        </span>
      </form>
    </li>
  ));

  const cartItems = cart.map((item, index) => (
    <li key={index} className="ml-2 text-xl">
      {item}
    </li>
  ));

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
      <div className="bg-white p-6 rounded shadow-lg">
        <h2 className="text-2xl font-bold">useEffect use case</h2>
        <h3 className="text-xl font-bold">Running on state change: trigger animation on new array value</h3>
        <h4 className="text-blue-500 font-bold">Starship Marketplace</h4>
        <ul>{itemsOnSale}</ul>
        <div className={`bg-gray-200 p-2 rounded mt-2 ${cartClasses}`}>
          <span className="text-lg font-bold">Cart</span>
        </div>
        <div className="mt-2">
          <p className="font-bold">Elements in cart:</p>
          <ul>{cartItems}</ul>
        </div>
        <form>
          <button onClick={clearHandler} className="bg-red-500 text-white px-2 py-1 rounded" value="clear">
            Clear cart
          </button>
        </form>
        <Link to={'/'} className="text-black-500 mt-4">Go to home page</Link>
      </div>
    </div>
  );
};

export default Effect1;
