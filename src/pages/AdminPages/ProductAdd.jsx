import React, { useEffect, useState } from 'react'
import { AiTwotoneShop } from "react-icons/ai";
import { IoMdCheckmark } from "react-icons/io";
import { FaSquarePlus } from "react-icons/fa6";
import ImageOne from '../../assets/item-sample/14363.jpg'
import ImageTwo from '../../assets/item-sample/14189.jpg'
import CategoryAdd from './components/CategoryAdd';
import SizeAdd from './components/SizeAdd';
import ColorAdd from './components/ColorAdd';
import { getCategoryList } from '../../services/Admin/ProductAPI';

const ProductAdd = () => {
   
    const [selectedColor, setSelectedColor] = useState(null);
    const [selectedSize, setSelectedSize] = useState(null);
    const [selectedGender, setSelectedGender] = useState(null)
    const [category, setCategory] = useState([]);

    const [selectedCategory, setSelectedCategory] = useState(null);
    const [squ, setSqu] = useState(null);

    // ---- Gender ---
    const gender = ['Men', 'Women', 'Unisex', 'Boys', 'girls']
    const handleGenderClick = (gen) => {
        setSelectedGender(gen);
    }

    // ---- size ---
    const sizes = ['SM', 'L', 'XL', 'XXL', 'XXXL'];
    const handleSizeClick = (size) => {
        setSelectedSize(size);
    };

    // ---- Color ---
    const colors = [
        { id: 1, colorClass: 'bg-red-700' },
        { id: 2, colorClass: 'bg-black' },
        { id: 3, colorClass: 'bg-white' },
        { id: 4, colorClass: 'bg-yellow-400' },
        { id: 5, colorClass: 'bg-orange-400' },
        { id: 6, colorClass: 'bg-pink-400' },
    ];

    const handleColorClick = (id) => {
        setSelectedColor(id);
    }

    useEffect(() => {
        getCategoryData();
        
    }, []);

    // ----- get Category ----
    const getCategoryData = async () => {
        try{
            const response = await getCategoryList()
            if (response.success){
                setCategory(response.data)
            }
        }
        catch(err){
            console.log(err)
        }
    }

    // ----- Handle Change ----
    const handleCategoryChange = (e) => {
        console.log(e.target.value)
        setSelectedCategory(e.target.value)
    }


    // ----- Squ useEffect ---
    useEffect(() => {
        if (selectedCategory && category.length > 0) {
            const matchedCategory = category.find(
                (data) => data.id == selectedCategory
            );

            if (matchedCategory) {
                setSqu(`${matchedCategory.sku_prefix}-${matchedCategory.sku_start}`);
            } else {
                setSqu(null);
            }
        }
    }, [selectedCategory, category]);


  return (
    <div>
        <div className='p-4'>
            <div className='flex justify-between'>
                <h3 className='m-1 flex items-center gap-1'><AiTwotoneShop className='size-7'/> Add New Product</h3>
                <div>
                    <button type="button" 
                        className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-1.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">
                        <p className='flex items-center'><IoMdCheckmark className='size-5'/> Add Product</p>
                    </button>
                </div>
            </div>
            <div className="grid grid-cols-3 gap-4  p-2 rounded-md">
                <div className='col-span-2 '>
                    
                    <div className='grid grid-cols-2 gap-3 bg-gray-100 border-solid border-2 border-gray-300 p-2 rounded-lg'>
                        <div className="">
                            <div className='p-2'>
                                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">SKU</label>
                                <input type="text" id="first_name" readOnly 
                                    value={squ}
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                                    placeholder="SKU" required 
                                />
                            </div>
                        </div>

                        <div className="">
                            <div  className='p-2'>
                                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Product Name</label>
                                <input type="text" id="first_name" 
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                                    placeholder="Product Name" required 
                                />
                            </div>
                        </div>
                        
                        <div className="">
                            <div  className='p-2'>
                                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                    <p className='flex items-center gap-2'>Category <CategoryAdd/></p>
                                </label>
                                <select className='w-full rounded-md p-1.5 bg-gray-50 border border-gray-300 text-gray-900'
                                     name="" id=""
                                     onChange={handleCategoryChange}>
                                    {
                                        category.map((cat) => ( 
                                            <option key={cat.id} value={cat.id}>{cat.name}</option>
                                        ))
                                    }
                                </select>
                            </div>
                        </div>

                        <div>
                            <div  className='p-2'>
                                <p className='flex items-center gap-2'>Gender</p>
                                <div className='grid grid-cols-5 gap-1 mt-3'>
                                    {
                                        gender.map((gen) => (
                                            <a 
                                            href="#"
                                            key={gen}
                                            onClick={()=> handleGenderClick(gen)}
                                            className={`border rounded-md text-center cursor-pointer transition-all ${
                                                selectedGender === gen
                                                ? 'bg-violet-300 border-violet-950'
                                                : 'border-gray-300 hover:bg-violet-300 hover:border-violet-500'
                                            }`}
                                            >
                                                <p className='text-center'>{gen}</p>
                                            </a>
                                        ))
                                    }
                                   
                                </div>
                            </div>
                        </div>

                        <div>
                            <div  className='p-2'>
                                <label htmlFor=""></label>
                                <p className="flex items-center gap-2">
                                    Size <SizeAdd/>
                                </p>
                                <div className="grid grid-cols-5 gap-1 mt-3">
                                    {sizes.map((size) => (
                                        <a
                                            href="#"
                                            key={size}
                                            onClick={() => handleSizeClick(size)}
                                            className={`border rounded-md text-center cursor-pointer transition-all ${
                                                selectedSize === size
                                                    ? 'bg-violet-300 border-violet-950'
                                                    : 'border-gray-300 hover:bg-violet-300 hover:border-violet-500'
                                            }`}
                                        >
                                            <p>{size}</p>
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <div>
                            <div  className='p-2'>
                                <label htmlFor=""></label>
                                <p className="flex items-center gap-2">
                                    Color <ColorAdd/>
                                </p>
                                <div>
                                    <div className="flex gap-2 flex-wrap mt-3">
                                        {colors.map((color) => (
                                            <div
                                                key={color.id}
                                                onClick={() => handleColorClick(color.id)}
                                                className={`p-2 border-solid border-2 rounded-full hover:scale-125 ${
                                                    selectedColor === color.id ? 'scale-125 border-blue-500' : 'border-black'
                                                } ${color.colorClass}`}
                                                style={{ cursor: 'pointer' }}
                                            ></div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-span-2'>
                            <div className='p-2'>
                                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Descriptions</label>
                                <textarea className='  border-solid border-gray-700 border-2 w-full rounded-md p-1' name="" id=""></textarea>
                            </div>
                        </div>
                    </div>
                    <div className=' bg-gray-100 border-solid border-2 border-gray-300 p-2 rounded-lg mt-2'>
                       
                        <div className='grid grid-cols-2 gap-3'>
                            <div className='p-2'>
                                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Price</label>
                                <input type="text" id="first_name" 
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                                    placeholder="Price" required 
                                />
                            </div>
                            <div className='p-2'>
                                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Stock</label>
                                <input type="text" id="first_name" 
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                                    placeholder="Stock" required 
                                />
                            </div>
                            <div className='p-2'>
                                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Discount</label>
                                <input type="text" id="first_name" 
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                                    placeholder="Discount" required 
                                />
                            </div>
                        </div>
                    </div>

                </div>

                

                <div className=" bg-gray-100 border-solid border-2 border-gray-300 p-2 rounded-lg">
                    <div>
                        <p className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Uploaded image</p>
                        <div className='flex justify-center'>
                            <img className='w-40 rounded-md ' src={ImageOne} alt="" />
                        </div>

                        <div className='grid grid-cols-4 gap-2 p-2'>
                            <div>
                                <img src={ImageTwo} alt="" />
                            </div>
                            <div>
                                <img src={ImageTwo} alt="" />
                            </div>
                            <div>
                                <img src={ImageTwo} alt="" />
                            </div>
                            <div>
                                <img src={ImageTwo} alt="" />
                            </div>
                            <div className='col-span-4'>
                                <div className="flex items-center justify-center w-full">
                                    <label for="dropzone-file" className="flex flex-col items-center justify-center  border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-gray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                                        <div className="flex flex-col items-center justify-center pt-5 pb-6">
                                            <svg className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"/>
                                            </svg>
                                            <p className="mb-2 text-xs text-gray-500 dark:text-gray-400"><span className="font-semibold">Click to upload</span> or drag and drop</p>
                                            {/* <p className="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p> */}
                                        </div>
                                        <input id="dropzone-file" type="file" className="hidden" />
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                {/* <div className="col-span-2 bg-purple-300">04</div>
                <div className="bg-pink-400">05</div>
                <div className="bg-pink-500">06</div>
                <div className="col-span-2 bg-pink-900">07</div> */}
            </div>
        </div>
    </div>
  )
}

export default ProductAdd