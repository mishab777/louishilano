import React from 'react'
import "./home.css"
import hero from "../assets/image-1.jpg"
import card1 from "../assets/card-1.jpg"
import card2 from "../assets/card-2.jpeg"
import card3 from "../assets/card-3.jpeg"
import card4 from "../assets/card-4.jpg"

const Home = () => {
  return (
    <>
    <div className="flex flex-col md:flex-row h-screen justify-between items-center bg-black">
  <h1 className='md:text-5xl text-3xl h-auto text-center mx-auto text-gray-400 tracking-wider font-normal uppercase'>We Believe <br /> We Can All Make <br /> A Stylish For You</h1>
  <img src={hero} alt="" />
    </div>
    <div className="container pt-5 section-1">
        <h1 className='md:text-4xl text-3xl text-center m-4'>OUR COLLECTIONS</h1>
        <p className='text-center w-auto text-gray-500 mx-auto text-lg'>Discover premium bags, shoes, wallets, sandals, and perfumes <br /> crafted for style and functionality—elevate your everyday essentials with elegance.</p>
        <div class="grid p-3 my-5 grid-cols-2 md:grid-cols-4 gap-4">
  <div className='p-3'>
    <div className='max-w-sm bg-white overflow-hidden'>
      <img src={card1} alt="" className='w-full mb-3 md:h-80 h-40 object-cover'/>
      <h3 className='uppercase text-center border-b-gray-400 pb-1 border-b-2'>Perfumes</h3>
    </div>
  </div>
  <div className='p-3'>
    <div className='max-w-sm bg-white overflow-hidden'>
      <img src={card2} alt="" className='w-full mb-3 md:h-80 h-40 object-cover'/>
      <h3 className='uppercase text-center border-b-gray-400 pb-1 border-b-2'>WALLETS</h3>
    </div>
  </div>
  <div className='p-3'>
    <div className='max-w-sm bg-white overflow-hidden'>
      <img src={card3} alt="" className='w-full mb-3 md:h-80 h-40 object-cover'/>
      <h3 className='uppercase text-center border-b-gray-400 pb-1 border-b-2'>BAGS</h3>
    </div>
  </div>
  <div className='p-3'>
    <div className='max-w-sm bg-white overflow-hidden'>
      <img src={card4} alt="" className='w-full mb-3 h-80 object-cover'/>
      <h3 className='uppercase text-center border-b-gray-400 pb-1 border-b-2'>SANDALS</h3>
    </div>
  </div>
</div>
</div>
<div className="container p-5">
  <div className="grid md:grid-cols-2 grid-cols-1 gap-5">
    <div className='bg-hero-pattern flex flex-col justify-between items-center h-screen bg-cover bg-center p-10'>
      <button className='bg-gradient-to-r p-3 text-white from-gray-500/50 to-gray-300/50'>WOMEN</button>
     <div className='flex flex-col justify-between items-center'>
       <h1 className='text-center text-white mb-4 md:text-4xl tracking-wide font-light'>BAG FOR HER</h1>
       <button className="px-4 py-3 text-sm border-white border-2 bg-gradient-to-r from-gray-500/50 to-gray-300/50 backdrop-blur-sm text-white">
  EXPLORE THE COLLECTION
</button>
      </div>
    </div>
    <div className='bg-hero-pattern-2 flex flex-col justify-between items-center p-10 h-screen bg-cover bg-center'>
    <button className='bg-gradient-to-r p-3 text-white from-gray-500/50 to-gray-300/50'>MEN</button>
     <div className='flex flex-col justify-between items-center'>
       <h1 className='text-center text-white mb-4 md:text-4xl tracking-wide font-light'>SHOE FOR HIM</h1>
       <button className="px-4 py-3 text-sm border-white border-2 bg-gradient-to-r from-gray-500/50 to-gray-300/50 backdrop-blur-sm text-white">
  EXPLORE THE COLLECTION
</button>
      </div>
    </div>
  </div>
</div>
    </>
  )
}

export default Home