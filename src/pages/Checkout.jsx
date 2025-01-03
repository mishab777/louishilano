import React from 'react'
import { MdOutlineDelete } from "react-icons/md";
import Navbar from '../components/navbar/Navbar';
import { IoBagHandleOutline } from "react-icons/io5";
import { IoCallOutline } from "react-icons/io5";
import { HiOutlineMail } from "react-icons/hi";
import { MdOutlineWhatsapp } from "react-icons/md";



const Checkout = () => {
  return (
    <>
    <Navbar/>
    <div className='container grid grid-cols-12 p-5 gap-5'>
        <div className='md:col-span-8 col-span-12'>
        <div className='w-full flex flex-col items-start justify-center p-5 border gap-4 border-gray-300'>
            <h2 className='uppercase text-xl'>Shipping Address</h2>
            <form className='w-full'>
                <div className='grid md:grid-cols-2 grid-cols-1 gap-3 mb-3'>
                    <div className='flex flex-col items-start'>
                        <label htmlFor="" className='text-xs mb-1'>FIRST NAME</label>
                        <input type="text" name="" id="" placeholder='First Name' className='font-light w-full border border-gray-200 p-2'/>
                    </div>
                    <div className='flex flex-col items-start'>
                    <label htmlFor="" className='text-xs mb-1'>LAST NAME</label>
                    <input type="text" name="" id="" placeholder='Last Name' className='font-light w-full border border-gray-200 p-2'/>
                    </div>
                </div>
                <div className='w-full mb-3'>
                <div className='flex flex-col items-start'>
                    <label htmlFor="" className='text-xs mb-1'>ADDRESS LINE</label>
                    <textarea type="text" name="" id="" placeholder='Address Line' className='font-light w-full border border-gray-200 p-2'></textarea>
                    </div>
                </div>
                <div className='grid md:grid-cols-3 grid-cols-1 gap-3 mb-3'>
                <div className='flex flex-col items-start'>
                    <label htmlFor="" className='text-xs mb-1'>CITY</label>
                    <input type="text" name="" id="" placeholder='City' className='font-light w-full border border-gray-200 p-2'/>
                    </div>
                    <div className='flex flex-col items-start'>
                    <label htmlFor="" className='text-xs mb-1'>STATE</label>
                    <input type="text" name="" id="" placeholder='State' className='font-light w-full border border-gray-200 p-2'/>
                    </div>
                    <div className='flex flex-col items-start'>
                    <label htmlFor="" className='text-xs mb-1'>ZIP CODE</label>
                    <input type="text" name="" id="" placeholder='Zip code' className='font-light w-full border border-gray-200 p-2'/>
                    </div>
                    <div className='flex flex-col items-start'>
                    <label htmlFor="" className='text-xs mb-1'>CONTACT NUMBER</label>
                    <input type="text" name="" id="" placeholder='Number' className='font-light w-full border border-gray-200 p-2'/>
                    </div>
                </div>
                <h3 className='text-sm mb-2'>DELIVERY METHOD</h3>
                <div className='border flex items-center mb-2 justify-center p-3 border-black w-full'>
                    <p className='text-xs'>Estimated delivery within 2 - 3 business days. Delivery between 9 am - 8 pm, Monday to Friday. A signature will be required upon delivery.</p>
                </div>
                <button className='w-auto text-xs h-auto p-4 text-white bg-black'>CONTINUE TO PAYMENT</button>
            </form>
        </div>
        </div>
        <div className='md:col-span-4 col-span-12'>
            <div className='w-full flex flex-col items-center justify-start p-5 border border-gray-300'>
            <h5 className='text-sm text-center uppercase'>Order Summary</h5>
            <span className='text-sm text-center mb-3 flex flex-row items-center gap-1'><IoBagHandleOutline/>1 ITEM</span>
            <div className='w-full flex flex-row items-center justify-center gap-3'>
                <img src="https://louishilano.com/wp-content/uploads/2024/03/WhatsApp-Image-2024-03-24-at-6.39.26-AM.jpeg" alt="" className='w-20 h-20 object-contain'/>
                <div className='text-xs gap-1'>Pouch bag <br />
                     Color : Black <br />
                     SKU : B1001
                     </div>
            </div>
            <div className='w-full flex flex-col items-start justify-center border-t border-gray-300 pt-3 gap-2'>
                <div className='w-full flex flex-row justify-between items-center'>
                    <span className='text-sm'>Subtotal</span>
                    <span className='text-sm'>AED 2,999</span>
                </div>
                <div className='w-full flex flex-row justify-between items-center'>
                    <span className='text-sm'>Shipping</span>
                    <span className='text-sm'>Free</span>
                </div>
                <div className='w-full flex flex-row justify-between items-center'>
                    <span className='text-sm'>Estimated Tax</span>
                    <span className='text-sm'>AED 0</span>
                </div>
                <div className='w-full flex flex-row justify-between items-center'>
                    <span className='text-sm'>Estimated Total</span>
                    <h3 className='text-2xl font-light'>AED 2,999</h3>
                </div>
                <p className='text-xs mt-2'>You will incur charges when the shipment is dispatched. For personalized or custom-made orders, you will be billed at the time of the order placement.</p>
            </div>
            </div>
            <div className='w-full mt-3 flex flex-col items-start justify-center p-5 border gap-3 border-gray-300'>
                <h2 className='text-sm border-b pb-1'>MAY WE HELP?</h2>
                <a className='text-xs flex flex-row gap-1 cursor-pointer items-center underline'><IoCallOutline/>+971 987 6543 21</a>
                <a className='text-xs flex flex-row gap-1 cursor-pointer items-center underline'><HiOutlineMail/>louishilanouae@gmail.com</a>
                <a className='text-xs flex flex-row gap-1 cursor-pointer items-center underline'><MdOutlineWhatsapp/>+971 987 6543 21</a>
            </div>
        </div>
    </div>
    </>
  )
}

export default Checkout