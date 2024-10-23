import React, { useContext } from 'react';
import { CartContext } from '../Context';

export default function SingleProduct({ product }) {
  const { cart, setCart } = useContext(CartContext);

  const isInCart = cart.some(p => p.id === product.id);

  const handleAddToCart = () => {
    if (!isInCart) {
      setCart([...cart, product]);
    }
  };

  const handleRemoveFromCart = () => {
    if (isInCart) {
      setCart(cart.filter(p => p.id !== product.id));
    }
  };

  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden max-w-xs mx-auto">
      {/* Image Section */}
      <img
        className="w-full h-55 object-cover"
        src={product.image}
        alt={product.name}
      />

      {/* Content Section */}
      <div className="p-4">
        <h2 className="text-lg font-semibold text-gray-800">{product.name}</h2>
        <p className="text-gray-600">${product.price}</p>
      </div>

      {/* Button Section */}
      <div className="p-4">
        <button
          className={`w-full py-2 px-4 font-bold rounded-full ${isInCart ? 'bg-red-500 hover:bg-red-600 text-white' : 'bg-blue-500 hover:bg-blue-600 text-white'}`}
          onClick={isInCart ? handleRemoveFromCart : handleAddToCart}
        >
          {isInCart ? 'Remove From Cart' : 'Add to Cart'}
        </button>
      </div>
    </div>
  );
}
