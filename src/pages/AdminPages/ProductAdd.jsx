import React, { useEffect, useState } from 'react'
import Cropper from 'react-easy-crop';
import { AiTwotoneShop } from "react-icons/ai";
import { IoMdCheckmark } from "react-icons/io";
import CategoryAdd from './components/CategoryAdd';
import SizeAdd from './components/SizeAdd';
import ColorAdd from './components/ColorAdd';
import { getCategoryList, getColorList, getProduct, getSizeList, postProduct, updateProduct } from '../../services/Admin/ProductAPI';
import { getCroppedImg } from './components/cropImage';
import { CiViewList } from "react-icons/ci";
import { useNavigate, useParams } from 'react-router-dom';

const ProductAdd = ({ mode }) => {
    
    const { id } = useParams();

    const [product, setProduct] = useState({
        name: '',
        sku: '',
        spec: '',
        category: '',
        gender: '',
        colors: '',
        sizes: '',
        price: '',
        stock: '',
        description: '',
        discounts_per: '',
        discounts_amt: '',
        images: [],

    });

    const [productDetails, setProductDeatils] = useState(null)
    const [selectedColor, setSelectedColor] = useState(null);
    const [selectedSize, setSelectedSize] = useState('');
    const [selectedGender, setSelectedGender] = useState('')
    const [category, setCategory] = useState([]);
    const [size, setSize] = useState([]);
    const [colors, setColor] = useState([]);

    //  ----- Image ----
    const [uploadedImages, setUploadedImages] = useState([]); // Finalized cropped images
    const [tempImage, setTempImage] = useState(null); // Temporary uncropped image
    const [selectedImage, setSelectedImage] = useState(null); // Display selected finalized image
    const [selectedFile, setSelectedFile] = useState([]);
    const [crop, setCrop] = useState({ x: 0, y: 0 });
    const [zoom, setZoom] = useState(1);
    const [croppedArea, setCroppedArea] = useState(null);
    const [isCropping, setIsCropping] = useState(false);

    const [categorySize, setCategorySize] = useState([null]);

    const [selectedCategory, setSelectedCategory] = useState('');
    const [squ, setSqu] = useState(null);

    const navigate = useNavigate();

    // ---- Gender ---
    const gender = ['Men', 'Women', 'Unisex']
    const handleGenderClick = (gen) => {
        setSelectedGender(gen);
        setProduct({
            ...product,
            gender: gen,
        });
    }

    // ---- size ---
    // const sizes = ['SM', 'L', 'XL', 'XXL', 'XXXL'];
    const handleSizeClick = (size, id) => {
        setSelectedSize(size);
        setProduct({
            ...product,
            sizes: [id],
        });
    };

    // ---- Color ---

    const handleColorClick = (id) => {
        setSelectedColor(id);
        setProduct({
            ...product,
            colors: [id],
        });
    }

    useEffect(() => {
        getCategoryData();
        getSizeData();
        getColorData();

    }, []);

    // ----- get Category ----
    const getCategoryData = async () => {
        try {
            const response = await getCategoryList()
            if (response.success) {
                setCategory(response.data)
            }
        }
        catch (err) {
            console.log(err)
        }
    }

    // ---- get Size ----
    const getSizeData = async () => {
        try {
            const response = await getSizeList()
            if (response.success) {
                setSize(response.data)
            }
        }
        catch (err) {
            console.log(err)
        }
    }

    // ---- get Color ----
    const getColorData = async () => {
        try {
            const response = await getColorList()
            if (response.success) {
                setColor(response.data)
            }
        }
        catch (err) {
            console.log(err)
        }
    }

    // ----- Category Handle Change ----
    const handleCategoryChange = (e) => {

        console.log(e.target.value, '222222222222222')
        setSelectedCategory(e.target.value)
        setProduct({
            ...product,
            category: e.target.value
        })

    }


    // ----- Squ useEffect ---
    useEffect(() => {
        if (selectedCategory && category.length > 0) {
            const matchedCategory = category.find(
                (data) => data.id == selectedCategory
            );

            if (matchedCategory) {
                setSqu(`${matchedCategory.sku_prefix}-${matchedCategory.sku_start}`);
                setProduct({
                    ...product,
                    sku: `${matchedCategory.sku_prefix}-${matchedCategory.sku_start}`,
                });

                //---- get size by category ----
                const sizeData = size.filter((data) => data.category == matchedCategory.id);

                setCategorySize(sizeData);
            } else {
                setSqu(null);
                setCategorySize(null);
            }
        }
    }, [selectedCategory, category, size]);


    // ---- Image Handle ----
    // useEffect(() => {
    //     // Decode URLs before setting them
    //     const decodedUrls = imageUrls.map((url) => decodeURIComponent(url));
    //     setUploadedImages(decodedUrls);
    // }, [imageUrls]);
    // Handle file input change
    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const tempImageUrl = URL.createObjectURL(file);
            setTempImage(tempImageUrl); // Set the temporary image for cropping
            setIsCropping(true); // Open cropping modal
        }
    };

    // Save cropped image
    const handleCropSave = async () => {
        try {
            const croppedImage = await getCroppedImg(tempImage, croppedArea);
    
            const response = await fetch(croppedImage);
            const blob = await response.blob();
            const croppedFile = new File([blob], `cropped-${Date.now()}.jpg`, {
                type: blob.type,
            });
    
            setSelectedFile((prev) => [...prev, croppedFile]);

            // Use URLs for preview purposes
            setUploadedImages((prev) => [...prev, URL.createObjectURL(croppedFile)]);
    
            setTempImage(null);
            setIsCropping(false);
        } catch (error) {
            console.error("Error cropping the image:", error);
        }
    };
    

    // Cancel cropping
    const handleCancelCrop = () => {
        setTempImage(null); // Clear temporary image
        setIsCropping(false); // Close cropping modal
    };

    // On crop complete
    const onCropComplete = (_, croppedAreaPixels) => {
        setCroppedArea(croppedAreaPixels);
    };

    // ---- Product Submit ----
    const handleChanges = (e) => {
        const { name, value } = e.target;
        console.log(name, value);
        setProduct({
            ...product,
            [name]: value,
        });
    }

    const handleSubmit = async (e) => {

        e.preventDefault();
       
    
        try {
            
            // Create a FormData object
            const formData = new FormData();
            
            // Add product fields to FormData
            formData.append("name", product.name || "");
            formData.append("spec", product.spec || "");
            formData.append("sku", product.sku || "");
            formData.append("category", product.category || "");
            formData.append("gender", product.gender || "");
            formData.append("price", product.price || "");
            formData.append("stock", product.stock || "");
            formData.append("description", product.description || "");
            formData.append("discounts_per", product.discounts_per || "");
            formData.append("discounts_amt", product.discounts_amt || "");
  
            // Add array fields to FormData
            // Add array fields with checks

            if (Array.isArray(product.colors)) {
                product.colors.forEach((color) => formData.append(`colors`, color));
            } else {
                console.error("product.colors is not an array:", product.colors);
            }

            if (Array.isArray(product.sizes)) {
                product.sizes.forEach((size) => formData.append(`sizes`, size));
            } else {
                console.error("product.sizes is not an array:", product.sizes);
            }

            selectedFile.forEach((image, index) => {
                formData.append(`images[]`, image); // Ensure image is a File object
            });

            // Debugging FormData before submission
            for (const pair of formData.entries()) {
                console.log(`${pair[0]}:`, pair[1]);
            }
    
            // Send FormData to backend
            let response;
            if (id){
                response = await updateProduct( id,formData);
                if (response.success) {
                    productDataClear();
                    alert("Product Updated successfully");
                    navigate("/product_Add");
                } else {
                    alert("Failed to Update product");
                }
            }
            else{
                response = await postProduct(formData);
                if (response.success) {
                    productDataClear();
                    alert("Product added successfully");
                } else {
                    alert("Failed to add product");
                }
            }
    
            
        } catch (err) {
            console.error("Error submitting product:", err);
        }
    };
    

    const productDataClear = () => {
        setProduct({
            name: '',
            sku: '',
            spec: '',
            category: '',
            gender: '',
            colors: '',
            sizes: '',
            price: '',
            stock: '',
            description: '',
            discounts_per: '',
            discounts_amt: '',
            images: [],
        });
        setSelectedColor(null);
        setSelectedSize(null);
        setSelectedGender(null);
        setUploadedImages([]);
        setTempImage(null);
        setSelectedImage(null);
        setCrop({ x: 0, y: 0 });
        setZoom(1);
        setCroppedArea(null);
        setIsCropping(false);

    };

    useEffect(() => {
        getEditedData();

    }, [selectedCategory])

    const getEditedData = async () => {
        try {
            if (mode === 'edit') {
                const response = await getProduct(id);
                if (response.success) {

                    setProductDeatils(response.data)
                    const data = response.data;
                    setSelectedGender(data?.gender)

                    setSelectedCategory(data?.category_details?.id)
                    setSelectedSize(data?.sizes_details[0]?.name);
                    
                    // Decode and set uploaded images
                    const decodedUrls = data.image_urls.map((url) => decodeURIComponent(url));
                    setUploadedImages(decodedUrls);
                    setSelectedImage(decodedUrls[0] || null);

                    // setUploadedImages(data?.image_urls);
                    // setSelectedImage(data?.image_urls[0]);
                    // setTempImage(data?.image_urls);
                    setProduct({
                        name: data?.name,
                        sku: data?.sku,
                        spec: data?.spec,
                        colors: data?.colors || [],
                        price: data?.price || '',
                        stock: data?.stock || '',
                        description: data?.description || '',
                        discounts_per: data?.discounts_per || '',
                        discounts_amt: data?.discounts_amt || '',
                        images: decodedUrls,
                        gender:data?.gender,
                        category:data?.category_details?.id,
                        sizes: data?.sizes_details[0]?.name
                        // images: data?.images || [],
                    });

                    // Set additional states
                    setSelectedColor(data?.colors_details[0]?.id || null);


                }
            }
        } catch (err) {
            console.error("Error fetching edited data:", err);
        }
    };


    return (
        <div>
            <div className="bg-gradient-to-r from-black/80 via-gold to-black/80 p-1 rounded-lg backdrop-blur flex justify-between items-center mb-2">
                <p className="text-white flex items-center">
                    <AiTwotoneShop size={30} className="font-bold" />
                    Add New Product
                </p>
                {/* <button className="bg-gold rounded px-2 ">Add Item</button> */}
            </div>
            <div className='p-4'>
                <form onSubmit={handleSubmit}>

                    <div className="grid grid-cols-3 gap-4  p-2 rounded-md">
                        <div className='col-span-2 '>

                            <div className='grid grid-cols-2 gap-3 bg-gray-100 border-solid border-2 border-gray-300 p-2 rounded-lg'>
                                <div className="">
                                    <div className='p-2'>
                                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">SKU</label>
                                        <input type="text" id="first_name" readOnly
                                            name='sku'
                                            value={product.sku}
                                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                            placeholder="SKU" required
                                        />
                                    </div>
                                </div>

                                <div className="">
                                    <div className='p-2'>
                                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Product Name</label>
                                        <input type="text" id="first_name"
                                            onChange={handleChanges}
                                            value={product.name}
                                            name='name'
                                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                            placeholder="Product Name" required
                                        />
                                    </div>
                                </div>
                                <div className="">
                                    <div className='p-2'>
                                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Spec</label>
                                        <input type="text" id="first_name"
                                            onChange={handleChanges}
                                            name='spec'
                                            value={product.spec}
                                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                            placeholder="Product Spec"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <div className="p-2">
                                        <p className="flex items-center gap-2">Gender</p>
                                        <div className="grid grid-cols-3 gap-1 mt-3">
                                            {gender.map((gen) => (
                                                <input
                                                    readOnly
                                                    type="text"
                                                    value={gen}
                                                    key={gen}
                                                    onClick={() => handleGenderClick(gen)}
                                                    className={`border rounded-md text-center outline-none cursor-pointer transition-all ${selectedGender === gen
                                                            ? 'bg-violet-300 border-violet-950'
                                                            : 'border-gray-300 hover:bg-violet-300 hover:border-violet-500'
                                                        }`}
                                                />
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                <div className="">
                                    <div className='p-2'>
                                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                            <p className='flex items-center gap-2'>Category <CategoryAdd {...{ getCategoryData }} /></p>
                                        </label>
                                        <select className='w-full rounded-md p-1.5 bg-gray-50 border border-gray-300 text-gray-900'
                                            name="category" id="" value={selectedCategory||''}
                                            onChange={handleCategoryChange}>
                                            <option >Select Category</option>
                                            {
                                                category.map((cat) => (
                                                    <option key={cat.id} value={cat.id}>{cat.name}</option>
                                                ))
                                            }
                                        </select>
                                    </div>
                                </div>

                                <div>
                                    <div className='p-2'>
                                        <label htmlFor=""></label>
                                        <p className="flex items-center gap-2">
                                            Size <SizeAdd {...{ category, getSizeData }} />
                                        </p>
                                        <div className="grid grid-cols-5 gap-1 mt-3">
                                            {categorySize?.map((sizes) => (
                                                <input readOnly type="text" name="" id="" key={sizes} value={sizes?.name}
                                                    onClick={() => handleSizeClick(sizes?.name, sizes?.id)}
                                                    className={`border rounded-md text-center outline-none cursor-pointer transition-all ${selectedSize === sizes?.name
                                                            ? 'bg-violet-300 border-violet-950'
                                                            : 'border-gray-300 hover:bg-violet-300 hover:border-violet-500'
                                                        }`}
                                                />

                                            ))}
                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <div className='p-2'>
                                        <label htmlFor=""></label>
                                        <p className="flex items-center gap-2">
                                            Color <ColorAdd {...{ getColorData }} />
                                        </p>
                                        <div>
                                            <div className="flex gap-2 flex-wrap mt-3">
                                                {colors.map((color) => (
                                                    <div
                                                        key={color.id}
                                                        onClick={() => handleColorClick(color.id)}
                                                        style={{ backgroundColor: color.color_code, cursor: 'pointer' }}
                                                        className={`p-2 border-solid border-2 rounded-full hover:scale-125 ${selectedColor === color.id ? 'scale-125 border-blue-500' : 'border-black'
                                                            } ${color.colorClass}`}

                                                    ></div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-span-2'>
                                    <div className='p-2'>
                                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Descriptions</label>
                                        <textarea
                                            className='border-solid border-gray-700 border-2 w-full rounded-md p-1'
                                            name="description"
                                            value={product.description} // Bind state to textarea
                                            onChange={handleChanges} // Update state on change
                                        />
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
                                            name='price'
                                            onChange={handleChanges}
                                            value={product?.price||''}
                                        />
                                    </div>
                                    <div className='p-2'>
                                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Stock</label>
                                        <input type="text" id="first_name"
                                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                            placeholder="Stock" required
                                            name='stock'
                                            onChange={handleChanges}
                                            value={product?.stock||''}
                                        />
                                    </div>
                                    <div className='p-2'>
                                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Discount %</label>
                                        <input type="text" id="first_name"
                                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                            placeholder="Discount"
                                            name='discounts_per'
                                            onChange={handleChanges}
                                            value={product?.discounts_per||''}
                                        />
                                    </div>
                                    <div className='p-2'>
                                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Discount Amt</label>
                                        <input type="text" id="first_name"
                                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                            placeholder="Discount"
                                            name='discounts_amt'
                                            onChange={handleChanges}
                                            value={product?.discounts_amt||''}
                                        />
                                    </div>
                                </div>
                            </div>

                        </div>


                        {/* <div className='col-span-1'>     */}

                        <div className="bg-gray-100 border-solid border-2 border-gray-300 p-2 rounded-lg">
                            <div>
                                <p className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                    Uploaded Images
                                </p>

                                <div className="flex justify-center">
                                    {selectedImage ? (
                                        <img
                                            className="w-40 rounded-md shadow-[0_3px_10px_rgb(0,0,0,0.2)] shadow-primary/50"
                                            src={decodeURIComponent(selectedImage)} // Decode URL if necessary
                                            alt="Selected"
                                        />
                                    ) : (
                                        <p className="text-gray-500">No image selected</p>
                                    )}
                                </div>

                                <div className="mt-2 grid grid-cols-4 gap-2 p-2">
                                {uploadedImages.length > 0 ? (
                                    uploadedImages.map((image, index) => (
                                        <div key={index} onClick={() => setSelectedImage(image)}>
                                            <img
                                                className="cursor-pointer rounded-md hover:shadow-[0_3px_10px_rgb(0,0,0,0.2)] hover:scale-110 hover:duration-150"
                                                src={decodeURIComponent(image)} // Decode URL if necessary
                                                alt={`Uploaded ${index}`}
                                            />
                                        </div>
                                    ))
                                ) : (
                                    <p className="text-gray-500">No images available</p>
                                )}

                                    <div className="col-span-4">
                                        <div className="flex items-center justify-center w-full">
                                            <label
                                                htmlFor="dropzone-file"
                                                className="flex flex-col items-center justify-center border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-gray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
                                            >
                                                <div className="flex flex-col items-center justify-center pt-5 pb-6">
                                                    <svg
                                                        className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        fill="none"
                                                        viewBox="0 0 20 16"
                                                    >
                                                        <path
                                                            stroke="currentColor"
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            strokeWidth="2"
                                                            d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                                                        />
                                                    </svg>
                                                    <p className="mb-2 text-xs text-gray-500 dark:text-gray-400">
                                                        <span className="font-semibold">Click to upload</span>
                                                    </p>
                                                </div>
                                                <input
                                                    id="dropzone-file"
                                                    type="file"
                                                    className="hidden"
                                                    accept="image/*"
                                                    onChange={handleFileChange}
                                                />
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {isCropping && tempImage && (
                                <div className="absolute top-0 left-0 w-full h-full bg-gray-900 bg-opacity-75 flex items-center justify-center">
                                    <div className="relative w-96 h-96 bg-white">
                                        <Cropper
                                            image={tempImage}
                                            crop={crop}
                                            zoom={zoom}
                                            aspect={7 / 8} // Aspect ratio of crop area
                                            onCropChange={setCrop}
                                            onZoomChange={setZoom}
                                            onCropComplete={onCropComplete}
                                        />
                                        <div className="absolute bottom-4 left-0 right-0 flex justify-between px-4">
                                            <button
                                                onClick={handleCancelCrop}
                                                className="bg-red-500 text-white px-4 py-2 rounded-lg"
                                            >
                                                Cancel
                                            </button>
                                            <button
                                                type="button"
                                                onClick={handleCropSave}
                                                className="bg-green-500 text-white px-4 py-2 rounded-lg"
                                            >
                                                Save
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                    <div className='flex justify-end'>

                        <div>
                            <button type="submit"
                                className="focus:outline-none text-white bg-primary/70 hover:bg-primary/90 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-1.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">
                                <p className='flex items-center'><IoMdCheckmark className='size-5' />Add Product</p>
                            </button>
                        </div>
                    </div>

                </form>
            </div>


        </div>
        // </div>

    )
}

export default ProductAdd