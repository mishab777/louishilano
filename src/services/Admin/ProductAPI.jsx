import axiosInstance from '../../services/BaseUrl';

export const getCategoryList = async () => {
    const response = await axiosInstance.get('admin_app/category/');
    return response.data;
  };

export const postCategory = async (postData) => {
    const response = await axiosInstance.post('admin_app/category/', postData);
    return response.data;
  };