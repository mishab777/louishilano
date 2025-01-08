import React, { useState } from "react";
import Product from "../Product";
import ProductTable from "./components/ProductTable/ProductTable";
import TableHeader from "./components/ProductTable/TableHeader";
import { CiViewList } from "react-icons/ci";

const ProductList = () => {

    const [search, setSearch] = useState("");
       
    return (
        <div>
            
            <div className="bg-gradient-to-r from-black/80 via-gold to-black/80 p-1 rounded-lg backdrop-blur flex justify-between items-center mb-2">
                <p className="text-white flex items-center">
                    <CiViewList size={30} className="font-bold" />
                    Product List
                </p>
                <button className="bg-gold rounded px-2 me-2 hover:scale-105 ">Add Item</button>
            </div>
            <div className="p-3 ">
                <TableHeader {...{setSearch}}/>
                <div className="mt-2">
                    <ProductTable {...{search}}/>
                </div>
            </div>
        </div>
    );
};

export default ProductList;
