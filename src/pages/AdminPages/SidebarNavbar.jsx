import React, { useState } from "react";
import { RxDashboard } from "react-icons/rx";
import { BsBoxes } from "react-icons/bs";
import { TbCashRegister } from "react-icons/tb";
import { IoSettingsOutline } from "react-icons/io5";
import { Link } from 'react-router-dom';
import { Outlet, useNavigate } from 'react-router-dom';
import hero from "../../assets/lh-logo-1.png"
import { FaTable } from "react-icons/fa";
// logout api
import { userLogout } from "../../services/AuthApi";
const Sidebar = () => {
    // State to control the visibility of the sidebar
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);

    // State to control the theme (dark/light)
    const [isDarkMode, setIsDarkMode] = useState(false);

    // Function to toggle sidebar visibility
    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    // Function to toggle dark mode
    const toggleDarkMode = () => {
        setIsDarkMode(!isDarkMode);
        document.documentElement.classList.toggle("dark");
    };

    const navigate = useNavigate();
    // logout function
    const handleLogout = async () => {
        try{
            await userLogout();
            sessionStorage.removeItem('authToken');
            navigate('/login');            
        }catch(error){
            console.error('Logout failed:', error.response?.data || error.message);
        }
    };     
    return (
        <div className={`flex ${isDarkMode ? "dark" : ""}`}>
            {/* Navbar */}
            <nav className="fixed top-0 z-50 w-full bg-primary   dark:bg-gray-800 ">
                <div className="px-4 py-3 lg:px-5 flex items-center justify-between">
                    <div className="flex items-center">
                        {/* Sidebar Toggle Button */}
                        <button
                            onClick={toggleSidebar}
                            type="button"
                            className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                        >
                            <span className="sr-only">Toggle Sidebar</span>
                            <svg
                                className="w-6 h-6"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
                                    clipRule="evenodd"
                                ></path>
                            </svg>
                        </button>

                        {/* Logo */}
                        <a href="#" className="flex items-center ml-3">
                            {/* <img
                                src="https://flowbite.com/docs/images/logo.svg"
                                className="h-8 mr-3"
                                alt="Logo"
                            /> */}
                            <img className="h-12 mr-3" src={hero} alt="" />
                           
                        </a>
                    </div>

                    {/* User and Dark Mode Toggle */}
                    <div className="flex items-center">
                        {/* Dark Mode Button */}
                        <button
                            onClick={toggleDarkMode}
                            className="p-2 rounded-lg text-gray-500 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700"
                        >
                            {isDarkMode ? (
                                <svg
                                    className="w-6 h-6"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M10 2a8 8 0 100 16 8 8 0 000-16zm-4 8a4 4 0 018 0 4 4 0 01-8 0z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            ) : (
                                <svg
                                    className="w-6 h-6"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path d="M10 3a7 7 0 000 14v-1a6 6 0 110-12v-1z" />
                                    <path d="M15 10a5 5 0 11-10 0 5 5 0 0110 0z" />
                                </svg>
                            )}
                        </button>

                        {/* User Profile */}
                        <button
                            type="button"
                            className="flex text-sm bg-gray-800 rounded-full focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600 ml-4"
                        >
                            <span className="sr-only">Open user menu</span>
                            <img
                                className="w-8 h-8 rounded-full"
                                src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                                alt="User"
                            />
                        </button>
                    </div>
                </div>
            </nav>

            {/* Sidebar */}
            <aside
                style={{ top: "4rem" }}
                className={`fixed top-0 left-0 z-40 w-64 h-full shadow-inner   bg-primary/30 dark:bg-gray-800 transition-transform ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"
                    }`}
                aria-label="Sidebar"
            >
                <div className="h-full px-4 py-4 overflow-y-auto border-r mt-10 ">
                    <ul className="space-y-2">
                        <li  onClick={() => navigate('/')}>
                            <a
                                href="#"
                                className="flex items-center p-2 text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg"
                            >
                        
                            <div className="flex items-center">
                                <RxDashboard className="size-7" />
                                <span className="ml-3">Page View</span>
                            </div>
                              
                            </a>
                        </li>

                        <li onClick={() => navigate('/product_Add')}>
                            <a
                                href="#"
                                className="flex items-center p-2 text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg"
                            >
                     
                              <div className="flex items-center">
                                  <BsBoxes className="size-7" />
                                  <span className="ml-3">Product Add</span>
                              </div>
                               
                            </a>
                        </li>

                        <li onClick={() => navigate('/product_list')}>
                            <a
                                href="#"
                                className="flex items-center p-2 text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg"
                            >
                                
                                <div className="flex items-center">
                                    <FaTable className="size-7"/>
                                    <span className="ml-3">Product List</span>
                                </div>
                           
                            </a>
                        </li>
                        
                        <li>
                            <a
                                href="#"
                                className="flex items-center p-2 text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg"
                            >
                                <div className="flex items-center">
                                    <IoSettingsOutline className="size-7" />
                                    <span className="ml-3">Settings</span>
                                </div>
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                onClick={handleLogout}
                                className="flex items-center p-2 text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg"
                            >
                                <div className="flex items-center">
                                    <IoSettingsOutline className="size-7" />
                                    <span className="ml-3">Logout</span>
                                </div>
                            </a>
                        </li>
                    </ul>
                </div>
            </aside>

            {/* Main Content */}
            <div
                className={`flex-grow p-0  pt-20 dark:bg-black transition-all ${isSidebarOpen ? "ml-64" : ""
                    }`}
            >
                <div className=" mx-2 border-solid border-2 border-primary/30  rounded-lg dark:bg-slate-600">
                    <Outlet /> {/* Render child routes here */}
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
