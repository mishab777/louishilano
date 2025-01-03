import React from "react";
import { MdDelete } from "react-icons/md";
import { RiFileEditFill } from "react-icons/ri";
import { getItems, createItems } from "../services/AdminApi";
import { useState, useEffect } from "react";

const Dashboard = () => {
    const [items, setItems] = useState([]);

    const [values, setValues] = useState({
        sku: '',
        spec: '',
        color: '',
        size: '',
    })

    const handleChange = (e) => {
        const { name, value } = e.target
        console.log(name, value)
        setValues({
            ...values,
            [name]: value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        try{
            const submittedData = setValues
            console.log(submittedData)
            let response;
    
            response = await createItems(submittedData)
            console.log(response)

            if (response.success){
                alert('Item added successfully')
            }
            else{
                alert('Failed to add item')
            }
        }
        catch(err){
            console.log(err)
        }
    }   

    
    useEffect(() => {
        getItemData();
    }, []);

    const getItemData = async () => {
        try{
            const response = await getItems()
            if (response.success){
                setItems(response.data)
            }
        }
        catch(err){
            console.log(err)
        }
    }

    return (
        <>
            <div className="fixed left-0 top-0 w-48 bg-black h-full">
                <div className="w-full flex flex-col items-start justify-start p-3 gap-3">
                    <h1 className="w-full p-2 text-2xl text-white border-b border-gray-500 mb-4">
                        Admin
                    </h1>
                    <a href="" className="text-white font-light">
                        Overview
                    </a>
                    <a href="" className="text-white font-light">
                        Add Product
                    </a>
                    <a href="" className="text-white font-light">
                        View Products
                    </a>
                </div>
            </div>
            <div className="w-auto ml-48 p-5 flex flex-col gap-5">
                <h2 className="text-2xl font-semibold mb-3">Add Product</h2>
                <div>
                    <form onSubmit={handleSubmit}>
                        <div className="flex items-start w-96 flex-col gap-3">
                            <select
                                name=""
                                id=""
                                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                            >
                                <option value="" disabled>
                                    Type
                                </option>
                                <option value="">Perfume</option>
                                <option value="">Wallet</option>
                                <option value="">Bags</option>
                                <option value="">Sandals</option>
                                <option value="">Watches</option>
                            </select>
                            <input
                                onChange={handleChange}
                                type="text"
                                name="sku"
                                id="name"
                                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                                placeholder="SKU"
                            />
                            <input
                                onChange={handleChange}
                                type="text"
                                name="spec"
                                id="email"
                                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                                placeholder="Spec"
                            />
                            <input
                                onChange={handleChange}
                                type="text"
                                name="color"
                                id="phone"
                                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                                placeholder="Color"
                            />
                            <input
                                onChange={handleChange}
                                type="text"
                                name="size"
                                id="password"
                                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                                placeholder="Size"
                            />
                            <button
                                type="submit"
                                className="bg-black w-full rounded text-white p-1"
                            >
                                Add
                            </button>
                        </div>
                    </form>
                </div>
                <div>
                    <h2 className="text-2xl font-semibold mb-3">View all</h2>
                    <table className="table w-full border-collapse border border-slate-300">
                        <thead className="border-collapse border border-slate-300">
                            <tr className="border-collapse border border-slate-300">
                                <th className="border-collapse border border-slate-300 p-2">
                                    Category
                                </th>
                                <th className="border-collapse border border-slate-300">SKU</th>
                                <th className="border-collapse border border-slate-300">
                                    Spec
                                </th>
                                <th className="border-collapse border border-slate-300">
                                    Color
                                </th>
                                <th className="border-collapse border border-slate-300">
                                    Size
                                </th>
                                <th className="border-collapse border border-slate-300">
                                    Edit
                                </th>
                                <th className="border-collapse border border-slate-300">
                                    Remove
                                </th>
                            </tr>
                        </thead>
                        <tbody className="border-collapse border border-slate-300">
                            <tr>
                                <td className="border-collapse border border-slate-300 p-2">
                                    Perfume
                                </td>
                                <td className="border-collapse border border-slate-300 p-2">
                                    P-1001
                                </td>
                                <td className="border-collapse border border-slate-300 p-2">
                                    1961
                                </td>
                                <td className="border-collapse border border-slate-300 p-2">
                                    None
                                </td>
                                <td className="border-collapse border border-slate-300 p-2">
                                    50 ML
                                </td>
                                <td className="border-collapse border border-slate-300 p-2">
                                    <button className="w-full flex items-center justify-center">
                                        <RiFileEditFill color="blue" />
                                    </button>
                                </td>
                                <td className="border-collapse border border-slate-300 p-2">
                                    <button className="w-full flex items-center justify-center">
                                        <MdDelete color="red" />
                                    </button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <ul>
                        {items.map((post) => (
                        <li key={post.id}>{post.title}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </>
    );
};

export default Dashboard;
