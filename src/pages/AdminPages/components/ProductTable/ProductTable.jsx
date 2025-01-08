import React, { useEffect, useState } from "react";
import { getProductList } from "../../../../services/Admin/ProductAPI";
import { FaEdit } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const ProductTable = ({ search }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [productsList, setProductsList] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const navigate = useNavigate();
  const rowsPerPage = 5;

  const totalPages = Math.ceil(filteredProducts.length / rowsPerPage);
  const startIndex = (currentPage - 1) * rowsPerPage;
  const paginatedProducts = filteredProducts.slice(startIndex, startIndex + rowsPerPage);

  const changePage = (newPage) => {
    if (newPage > 0 && newPage <= totalPages) {
      setCurrentPage(newPage);
    }
  };

  // ---- Search Function -----
  useEffect(() => {
    if (search) {
      const filteredData = productsList.filter((product) =>
        product?.name.toLowerCase().includes(search.toLowerCase())
      );
      setFilteredProducts(filteredData);
    } else {
      setFilteredProducts(productsList); // Reset to full list when search is empty
    }
    setCurrentPage(1); // Reset to the first page after filtering
  }, [search, productsList]);

  // ---- Fetch Product List -----
  const getProductDetails = async () => {
    try {
      const response = await getProductList();
      if (response.success) {
        setProductsList(response.data);
        setFilteredProducts(response.data); // Set filtered data to the full list initially
      } else {
        console.log("No data found");
      }
    } catch (error) {
      console.error("Error fetching product data:", error);
    }
  };

  useEffect(() => {
    getProductDetails();
  }, []);

  return (
    <div>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gold/30 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-2">Sl No.</th>
              <th scope="col" className="px-6 py-2">Product Name</th>
              <th scope="col" className="px-6 py-2">Color</th>
              <th scope="col" className="px-6 py-2">Category</th>
              <th scope="col" className="px-6 py-2">Size</th>
              <th scope="col" className="px-6 py-2">Stock</th>
              <th scope="col" className="px-6 py-2">Price</th>
              <th scope="col" className="px-6 py-2">Action</th>
            </tr>
          </thead>
          <tbody>
            {paginatedProducts.map((product, index) => (
                
              <tr
                key={product.id}
                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
              >
                <td className="px-6 py-2">{startIndex + index + 1}</td>
                <th
                  scope="row"
                  className="px-6 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  {product.name}
                </th>
                <td className="px-6 py-2">{product?.colors_details[0]?.name}</td>
                <td className="px-6 py-2">{product?.category_details?.name}</td>
                <td className="px-6 py-2">{product?.sizes_details[0]?.name}</td>
                <td className="px-6 py-2">{product?.stock}</td>
                <td className="px-6 py-2">{product?.price}</td>
                <td className="px-6 py-2">
                 <div className="flex items-center space-x-2">
                 <a
                    onClick={() => navigate(`/product_Edit/${product.id}`)}
                    className="font-medium  dark:text-white hover:underline hover:text-black"
                  >
                    <FaEdit />
                  </a>
                  <a
                    href="#"
                    
                    className="font-medium   dark:text-white hover:underline hover:text-black"
                  >
                    <MdDeleteForever className="text-lg" />
                  </a>
                 </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <nav
          className="flex items-center justify-between pt-4"
          aria-label="Table navigation"
        >
          <span className="text-sm font-normal text-gray-500 dark:text-gray-400">
            Showing{" "}
            <span className="font-semibold text-gray-900 dark:text-white">
              {startIndex + 1}-
              {Math.min(startIndex + rowsPerPage, filteredProducts.length)}
            </span>{" "}
            of{" "}
            <span className="font-semibold text-gray-900 dark:text-white">
              {filteredProducts.length}
            </span>
          </span>
          <ul className="inline-flex -space-x-px text-sm h-8">
            <li>
              <button
                onClick={() => changePage(currentPage - 1)}
                className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              >
                Previous
              </button>
            </li>
            {Array.from({ length: totalPages }, (_, index) => (
              <li key={index}>
                <button
                  onClick={() => changePage(index + 1)}
                  className={`flex items-center justify-center px-3 h-8 text-sm leading-tight border ${
                    currentPage === index + 1
                      ? "text-blue-600 bg-blue-50"
                      : "text-gray-500 bg-white hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700"
                  }`}
                >
                  {index + 1}
                </button>
              </li>
            ))}
            <li>
              <button
                onClick={() => changePage(currentPage + 1)}
                className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              >
                Next
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default ProductTable;
