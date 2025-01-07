import axiosInstance from '../services/BaseUrl';

export const createUser = async (formData) => {
    const response = await axiosInstance.post('user_acc/signup/', formData);
    return response.data;
};

export const getUser = async () => {
    const response = await axiosInstance.get('user_acc/signup/');
    return response.data;
}; 

export const deleteUser = async () =>{
    const response = await axiosInstance.delete('user_acc/signup/');
    return response.data;
};

export const editUser = async (putData) =>{
     const response = await axiosInstance.put('user_acc/signup/', putData);
     return response.data;
};

export const verifyOtp = async (postData) =>{
    const response = await axiosInstance.post('user_acc/verify-otp/', postData);
    return response.data;
};  
export const userLogin = async (data) =>{
    const response = await axiosInstance.post('user_acc/user_login/', data);
    return response.data;
};   
export const userLogout = async (data) =>{
    const response = await axiosInstance.post('user_acc/logout_user/', data);
    return response.data;
}; 
export const forgotPassword = async (data) =>{
    const response = await axiosInstance.post('user_acc/forgot_password/', data);
    return response.data; 
};
export const resetPassword = async (data) =>{
    const response = await axiosInstance.post('user_acc/reset_password/',data);
    return response.data;
};