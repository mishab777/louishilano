import React from 'react'
import { MdOutlineDelete } from "react-icons/md";


const Cart = () => {
  return (
    <>
    <div className='bg-hero-cart bg-fixed flex justify-center items-end p-10 md:h-80 h-72 bg-cover bg-center'>
        <h2 className='text-white text-5xl text-cente'>Shopping Bag</h2>
    </div>
    <div className='container grid grid-cols-12 p-5 gap-5'>
        <div className='md:col-span-8 col-span-12'>
            <div className='w-full border-b border-gray-300 pb-2'>
                <h5 className='text-sm'>YOUR COLLECTIONS</h5>
            </div>
            <div className='flex flex-row items-center justify-between w-full py-3 gap-3 border-b border-gray-300'>
                <img src="https://louishilano.com/wp-content/uploads/2024/03/WhatsApp-Image-2024-03-24-at-6.39.26-AM.jpeg" alt="" className='w-64 h-auto object-contain' />
                <div className='flex flex-col items-start justify-start h-auto gap-2'>
                    <span >Item : Pouch Bag</span>
                    <span >Color : Black</span>
                    <span >SKU : B-1001</span>
                    <span >Category : Bag</span>
                    <form>
                        <select name="" id="" className='border outline-none border-black p-2 text-black'>
                            <option value="" selected disabled>Quantity</option>
                            <option value="">1</option>
                        </select>
                    </form>
                </div>
                <div className='flex flex-col items-center h-full justify-between gap-3'>
                    <h2 className='text-xl text-black'>$ 2,199</h2>
                    <button className='border-b-2 border-black flex flex-row items-center gap-1 outline-none bg-transparent'><MdOutlineDelete/>Remove</button>
                </div>
            </div>
        </div>
        <div className='md:col-span-4 col-span-12'>
            <div className='w-full flex flex-col items-start justify-start p-5 border border-gray-300'>
            <h5 className='text-sm uppercase'>Order Summary</h5>
            <span className='text-xs text-gray-400 mb-3'>LHCART10012024</span>
            <div className='w-full flex flex-col items-start justify-center border-t border-gray-300 pt-3 gap-2'>
                <div className='w-full flex flex-row justify-between items-center'>
                    <span className='text-sm'>Subtotal</span>
                    <span className='text-sm'>$ 2,999</span>
                </div>
                <div className='w-full flex flex-row justify-between items-center'>
                    <span className='text-sm'>Shipping</span>
                    <span className='text-sm'>$ Free</span>
                </div>
                <div className='w-full flex flex-row justify-between items-center'>
                    <span className='text-sm'>Estimated Tax</span>
                    <span className='text-sm border-b border-black'>Calculate</span>
                </div>
                <div className='w-full flex flex-row justify-between items-center'>
                    <span className='text-sm'>Estimated Total</span>
                    <h3 className='text-2xl font-light'>$ 2,999</h3>
                </div>
                <p className='text-xs mt-2'>You will incur charges when the shipment is dispatched. For personalized or custom-made orders, you will be billed at the time of the order placement.</p>
                <button className='bg-black text-white p-3 text-xs w-full mt-2'>CHECKOUT</button>
            </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Cart