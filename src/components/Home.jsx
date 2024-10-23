import React, { useContext, useState } from 'react';
import SingleProduct from './SingleProduct';
import { CartContext } from '../Context'; // Named import
import Hero from './Hero';

export default function Home() {
  const { cart, setCart } = useContext(CartContext); // Use context correctly

  const productArray = [
    {
      "id": "f94e73b9-6f8d-41eb-85e7-23301d0b5064",
      "name": "Intelligent Cotton Keyboard",
      "price": "75.00",
      "image": "https://www.deltaapparel.com/prodimg/large/M209_041524163410.png"
    },
    {
      "id": "a4b4d77c-7f4b-467b-84cb-54a238cf1588",
      "name": "Ergonomic Wooden Mouse",
      "price": "28.99",
      "image": "https://www.deltaapparel.com/prodimg/large/1539MU_021624132712.png"
    },
    {
      "id": "f764eb8a-9fe3-4a8a-9367-bf4577427c9f",
      "name": "Sleek Granite Computer",
      "price": "95.00",
      "image": "https://www.deltaapparel.com/prodimg/large/682M_021523111344.png"
    },
    {
      "id": "2a9c2d98-1fa8-40b7-a74d-5025d518126d",
      "name": "Fantastic Plastic Shoes",
      "price": "48.50",
      "image": "https://www.deltaapparel.com/prodimg/large/M305_021523141122.png"
    },
    {
      "id": "d309d057-3080-4eaf-a53f-30e5d7d1e3f8",
      "name": "Handcrafted Fresh Pizza",
      "price": "18.99",
      "image": "https://www.deltaapparel.com/prodimg/large/M805_021523150603.png"
    },
    {
      "id": "a56829ae-2c66-4033-892e-b92ec539e21c",
      "name": "Licensed Rubber Chair",
      "price": "63.75",
      "image": "https://www.deltaapparel.com/prodimg/large/1539MU_021624132712.png"
    },
    {
      "id": "b78d6f8f-ea64-401f-9b36-2d58f837a1d1",
      "name": "Practical Concrete Pants",
      "price": "54.00",
      "image": "https://www.deltaapparel.com/prodimg/large/210M_021523094234.png"
    },
    {
      "id": "cbb4d73e-f0c2-4f60-a03b-4c5b82d9a541",
      "name": "Gorgeous Cotton Shirt",
      "price": "34.95",
      "image": "https://www.deltaapparel.com/prodimg/large/1535MU_021624132803.png"
    },
    {
      "id": "d252cdae-7a2f-41db-a674-52669f11f312",
      "name": "Incredible Plastic Soap",
      "price": "12.50",
      "image": "https://www.deltaapparel.com/prodimg/large/m290_021624132838.png"
    },
    {
      "id": "3b8e1f83-934d-48ff-a8e0-4d92b8be6857",
      "name": "Awesome Frozen Hat",
      "price": "24.99",
      "image": "https://www.deltaapparel.com/prodimg/large/M305US_021624132621.png"
    }
  ];

  const [products] = useState(productArray);

  return (
    <div><Hero />
            
    

    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-4 max-w-[1200px] m-auto bg-slate-300 mb-4'>
      {products.map((product) => (
        <div key={product.id}>
          <SingleProduct product={product} />
        </div>
      ))}
    </div>
    </div>
  );
}
