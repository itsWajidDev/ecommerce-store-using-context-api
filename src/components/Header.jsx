import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../Context'; // Named import

export default function Header() {
  const { cart } = useContext(CartContext);

  return (
    <div className='bg-slate-400 flex justify-between items-center max-w-[1200px] border rounded mx-auto p-4 mt-2 '>
      <div className='p-4 bg-slate-550 text-gray-50'>
        <h2 className='text-lg font-bold'>WajidShop</h2>
      </div>

      <nav>
        <ul className='flex gap-4 p-2'>
          <li>
            <Link to='/' className='text-white hover:text-blue-800 font-medium'>Home</Link>
          </li>
          <li>
            <Link to='/cartapp' className='text-white hover:text-blue-800 font-medium'>
              Cart ({cart.length})
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
