import React, { useEffect, useState, useContext } from 'react';
import { CartContext } from '../Context'; // Ensure the path is correct
import SingleProduct from './SingleProduct'; // Import SingleProduct component

export default function CartApp() {
  const { cart } = useContext(CartContext);

  // Ensure cart is defined before using it
  if (!cart) {
    return <div>Loading...</div>;
  }

  const [total, setTotal] = useState(0);

  useEffect(() => {
    setTotal(cart.reduce((acc, curr) => acc + Number(curr.price), 0));
  }, [cart]);

  return (
    <>
      <div className='p-4 max-w-[900px] mx-auto mt-4 shadow items-center'>
        <h2 className='text-center font-bold text-xl'>My Cart Page</h2>
        <p className='font-bold'>Total Price To Pay: <span className='font-bold underline-offset-4
'>$: {total.toFixed(2)}</span></p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-4 ">
        {cart.map((product) => (
          <SingleProduct product={product} key={product.id} />
        ))}
      </div>
    </>
  );
}
