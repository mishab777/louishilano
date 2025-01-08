import React from 'react'
import { FaSquarePlus } from "react-icons/fa6"; 
import { useState } from 'react'
import { postSize } from '../../../services/Admin/ProductAPI';

const SizeAdd = (props) => {
    const {category, getSizeData} = props; 
    const [isModalOpen, setIsModalOpen] = useState(false);

    const [values, setValues] = useState({
        name: '',
        category: '',
    })

    const handleChange = (e) => {
        const { name, value} = e.target
        console.log(name, value)
        setValues({
            ...values,
            [name]: value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        try{
            const submittedData = {
                ...values,
                name: values.name|| '',
                category: values.category || '',
            };
            console.log(submittedData)
            let response;
            response = await postSize(submittedData)
            console.log(response)
            if (response.success){
                alert('Size added successfully')
                setValues({ name: '', category: ''})
                toggleModal();
                getSizeData();
            }
            else{
                alert('Failed to add size')
            }
        }
        catch(err){
            console.log(err)
        }
    }


    const toggleModal = () => {
        setIsModalOpen(!isModalOpen);
    };

  return (
    <div>
       <div>
            {/* Modal toggle */}
            <button
                onClick={toggleModal}
                className=""
                type="button"
            >
                <FaSquarePlus className="size-7 text-gray-900 bg-white hover:bg-primary/20 focus:ring-4 focus:outline-none focus:ring-primary font-medium rounded-lg text-sm" />
            </button>

            {/* Main modal */}
            {isModalOpen && (
                <div
                    className="fixed top-0 right-0 left-0 z-50 flex justify-center items-center w-full h-full bg-black bg-opacity-50"
                >
                    <div className="relative p-4 w-full max-w-md max-h-full">
                        {/* Modal content */}
                        <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                            {/* Modal header */}
                            <div className="flex items-center justify-between p-2 md:p-2 border-b rounded-t dark:border-gray-600">
                                <h3 className="text-md font-semibold text-gray-900 dark:text-white">
                                    Create Size
                                </h3>
                                <button
                                    onClick={toggleModal}
                                    className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                                >
                                    <svg
                                        className="w-3 h-3"
                                        aria-hidden="true"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 14 14"
                                    >
                                        <path
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                                        />
                                    </svg>
                                    <span className="sr-only">Close modal</span>
                                </button>
                            </div>
                            {/* Modal body */}
                            <form onSubmit={handleSubmit} className="p-4 md:p-5">
                                <div className="grid gap-4 mb-4 grid-cols-2">
                                    <div className="col-span-2">
                                        <label
                                            htmlFor="name"
                                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                        >
                                            Category
                                        </label>
                                        <select className='w-full rounded-md p-1.5 bg-gray-50 border border-gray-300 text-gray-900'
                                            name="category" id=""
                                            onChange={handleChange}
                                            >
                                            <option value="">Select Category</option>
                                            {   
                                                category?.length > 0 &&
                                                category?.map((cat) => ( 
                                                    <option key={cat.id} value={cat.id}>{cat.name}</option>
                                                ))
                                            }
                                        </select>
                                    </div>
                                </div>
                                <div className="grid gap-4 mb-4 grid-cols-2">
                                    <div className="col-span-2">
                                        <label
                                            htmlFor="name"
                                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                        >
                                            Size
                                        </label>
                                        <input
                                            type="text"
                                            name="name"
                                            id="name"
                                            onChange={handleChange}
                                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-1.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                            placeholder="Type size"
                                            required
                                        />
                                    </div>
                                </div>
                                <button
                                    onClick={handleSubmit}
                                    className="text-white inline-flex items-center bg-primary/80 hover:bg-primary/95 focus:ring-4 focus:outline-none focus:ring-primary font-medium rounded-lg text-sm px-5 py-1.5 text-center dark:bg-primary dark:hover:bg-primary dark:focus:ring-primary"
                                >
                                    <svg
                                        className="me-1 -ms-1 w-5 h-5"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                                            clipRule="evenodd"
                                        ></path>
                                    </svg>
                                    Add Size
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            )}
        </div>
    </div>
  )
}

export default SizeAdd
