// src/services/PostApi.js
import axiosInstance from '../services/BaseUrl';

// export const getCategory = async () => {
//   const response = await axiosInstance.get('admin_app/product/');
//   return response.data;
// };

export const getItems = async () => {
  const response = await axiosInstance.get('admin_app/product/');
  return response.data;
};

export const createItems = async (postData) => {
  const response = await axiosInstance.post('admin_app/product/', postData); 
  return response.data;
};

