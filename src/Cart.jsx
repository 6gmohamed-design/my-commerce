import React from 'react';
import { contextprovider } from './contextprovider';
import { useContext } from 'react';
import all_products from './assets/all_product.js';

const Cart = () => {
  const { cartitems, removefromCart, count, sizeshowen, setCount } = useContext(contextprovider);

  const cartProducts = all_products.filter((item) => cartitems[item.id] > 0);
  const total = cartProducts.reduce(
    (sum, item) => sum + item.new_price * cartitems[item.id],
    0
  );

  return (
    <div className='w-full h-full mt-20 py-10 bg-[#f9f9f9]'>
      <div className='max-w-[80%] mx-auto min-h-[100vh]'>
        <table className='w-full border-collapse mb-10'>
          <thead>
            <tr className='bg-[#1d3557] text-white'>
              <th className='p-2 border border-gray-300'>Image</th>
              <th className='p-2 border border-gray-300'>Name</th>
              <th className='p-2 border border-gray-300'>Size</th>
              <th className='p-2 border border-gray-300'>Quantity</th>
              <th className='p-2 border border-gray-300'>Price</th>
              <th className='p-2 border border-gray-300'>Remove</th>
            </tr>
          </thead>
          <tbody>
            {cartProducts.map((item) => (
              <tr key={item.id} className='text-center bg-white'>
                <td className='p-2 border border-gray-300'>
                  <img
                    src={item.image}
                    alt={item.name}
                    className='w-[120px] h-[120px] object-contain rounded-xl mx-auto'
                  />
                </td>
                <td className='p-2 border border-gray-300'>
                  <h2 className='text-lg font-semibold text-[#333]'>{item.name}</h2>
                </td>
                <td className='p-2 border border-gray-300'>
                  <p className='text-lg font-bold text-[#e63946]'>{sizeshowen[item.id]}</p>
                </td>
                <td className='p-2 border border-gray-300'>
                  <p className='text-lg font-bold text-[#e63946]'>{count}</p>
                </td>
                <td className='p-2 border border-gray-300'>
                  <p className='text-lg font-bold text-[#2a9d8f]'>${item.new_price}</p>
                </td>
                <td className='p-2 border border-gray-300'>
                  <button
                    onClick={() => {
                      removefromCart(item.id);
                      setCount(count - 1);
                    }}
                    className='bg-[#e63946] text-white px-4 py-2 rounded-xl hover:bg-[#d62828] transition-all duration-300'
                  >
                    Remove
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Cart Summary and Coupon Section */}
        <div className='flex justify-between items-start gap-6 w-full mx-auto'>
          {/* Cart Total */}
          <div className='flex flex-col gap-4 w-full bg-white p-6 rounded-xl shadow-md'>
            <h1 className='text-xl font-bold text-[#e63946] text-center'>Cart Total</h1>
            <h2 className='text-lg font-semibold text-[#333] border-b pb-2'>
              Subtotal: <span className='text-[#2a9d8f]'>${total}</span>
            </h2>
            <p className='text-lg font-semibold text-[#333] border-b pb-2'>
              Shipping Fee: <span className='text-[#2a9d8f]'>$5.00</span>
            </p>
            <p className='text-lg font-semibold text-[#333] border-b pb-2'>
              Total: <span className='text-[#2a9d8f]'>${total + 5}</span>
            </p>
            <button className='bg-[#1d3557] text-white px-4 py-2 rounded-xl hover:bg-[#457b9d] transition-all duration-300'>
              Checkout
            </button>
          </div>

          {/* Coupon Code */}
          <div className='flex flex-col gap-4 bg-white p-6 rounded-xl shadow-md w-full'>
            <h3 className='text-lg font-bold text-[#e63946] text-center'>
              Have a Coupon Code?
            </h3>
            <div className='flex gap-2 items-center'>
              <input
                type='text'
                placeholder='Enter coupon code'
                className='p-2 rounded-xl border-2 border-gray-300 w-full text-[#333] bg-[#f9f9f9]'
              />
              <button className='bg-[#1d3557] text-white px-4 py-2 rounded-xl hover:bg-[#457b9d] transition-all duration-300'>
                Apply
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;