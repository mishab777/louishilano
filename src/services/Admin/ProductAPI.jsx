import axiosInstance from '../../services/BaseUrl';


// ----- Category API -----
export const getCategoryList = async () => {
    const response = await axiosInstance.get('admin_app/category/');
    return response.data;
  };

export const postCategory = async (postData) => {
    const response = await axiosInstance.post('admin_app/category/', postData);
    return response.data;
  };

// ----- Size API -----
export const getSizeList = async () => {
    const response = await axiosInstance.get('admin_app/size/');
    return response.data;
  };

export const postSize = async (postData) => {
    const response = await axiosInstance.post('admin_app/size/', postData);
    return response.data;
  };


// ----- Color API -----
export const getColorList = async () => {
    const response = await axiosInstance.get('admin_app/color/');
    return response.data;
  };

export const postColor = async (postData) => {
    const response = await axiosInstance.post('admin_app/color/', postData);
    return response.data;
  };


// ----- Product API -----
export const getProductList = async () => {
    const response = await axiosInstance.get('admin_app/product/');
    return response.data;
  };


// export const postProduct = async (postData) => {
//   const response = await axiosInstance.post('admin_app/product/', postData );
    
//   return response.data;
// };
  



export const postProduct = async (postData) => {
  const response = await axiosInstance.post('admin_app/product/', postData, {
    headers: {
      'Content-Type': 'multipart/form-data',  
    },
  });
  return response.data;
};



export const getProduct = async (id) => {
    const response = await axiosInstance.get(`admin_app/product/${id}/`);
    return response.data;
  };

  
export const updateProduct = async (id, postData) => {
    const response = await axiosInstance.put(`admin_app/product/${id}/`, postData, {
      headers: {
        'Content-Type': 'multipart/form-data',  
      },
    });
    return response.data;
  };

export const deleteProduct = async (id) => {
    const response = await axiosInstance.delete(`admin_app/product/${id}/`);
    return response.data;
  }