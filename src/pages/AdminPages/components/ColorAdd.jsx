import React, { useState } from 'react';
import { FaSquarePlus } from "react-icons/fa6";

const ColorAdd = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [color, setColor] = useState("#2563eb"); // State to manage the selected color

    const toggleModal = () => {
        setIsModalOpen(!isModalOpen);
    };

    const handleColorChange = (e) => {
        setColor(e.target.value);
    };

    return (
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
                <div className="fixed top-0 right-0 left-0 z-50 flex justify-center items-center w-full h-full bg-black bg-opacity-50">
                    <div className="relative p-4 w-full max-w-md max-h-full">
                        {/* Modal content */}
                        <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                            {/* Modal header */}
                            <div className="flex items-center justify-between p-2 md:p-2 border-b rounded-t dark:border-gray-600">
                                <h3 className="text-md font-semibold text-gray-900 dark:text-white">
                                    Create Color
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
                            <form className="p-4 md:p-5">
                                <div className="grid gap-4 mb-4 grid-cols-2">
                                    <div className="col-span-2">
                                        <label
                                            htmlFor="name"
                                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                        >
                                            Color Name
                                        </label>
                                        <input
                                            type="text"
                                            name="name"
                                            id="name"
                                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                            placeholder="Type color name"
                                            required
                                        />
                                    </div>
                                </div>
                                <div className="grid gap-4 mb-4 grid-cols-2">
                                    <div className="col-span-2">
                                        <label
                                            htmlFor="color-picker"
                                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                        >
                                            Color Code
                                        </label>
                                        <input
                                            type="color"
                                            className="p-1 h-10 w-14 block bg-white border border-gray-200 cursor-pointer rounded-lg dark:bg-neutral-900 dark:border-neutral-700"
                                            id="color-picker"
                                            value={color} // Controlled by state
                                            onChange={handleColorChange} // Update state on change
                                            title="Choose your color"
                                        />
                                    </div>
                                </div>
                                <button
                                    type="submit"
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
                                    Add Color
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ColorAdd;
