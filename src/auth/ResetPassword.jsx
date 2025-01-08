import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { resetPassword } from "../services/AuthApi";  // Make sure this function exists

const Resetpassword = () => {
  const { state } = useLocation();  // Receive the email from the previous page
  const [email, setEmail] = useState(state?.email || '');  // Initialize email with the state passed from ForgotPassword
  const [otp, setOtp] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleResetPassword = async (e) => {
    e.preventDefault();
    setError('');
    setMessage('');

    if (!otp || !newPassword || !confirmPassword) {
      setError("All fields are required.");
      return;
    }

    if (newPassword !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    try {
      const response = await resetPassword({ email, otp, new_password: newPassword, confirm_password: confirmPassword });
      setMessage(response.data.message);  // Assuming the response contains a message field

      // Optionally, redirect to the login page after successful reset
      navigate('/login');
    } 
    catch (err) {
      setError(err.response?.data?.error || 'Failed to reset password');
    }
    
    
  };

  return (
    <div className='container h-screen'>
      <form className='w-full h-screen flex flex-col items-center' onSubmit={handleResetPassword}>
        <div className='flex items-center w-96 h-auto m-auto flex-col gap-3'>
          <h1 className='text-center text-3xl text-black mb-4'>Reset Password</h1>

          <input 
            type="text" 
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
            className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:outline-indigo-600 sm:text-sm/6" 
            placeholder="Enter OTP" 
          />

          <input 
            type="password" 
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:outline-indigo-600 sm:text-sm/6" 
            placeholder="Enter new password" 
          />

          <input 
            type="password" 
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:outline-indigo-600 sm:text-sm/6" 
            placeholder="Confirm new password" 
          />

          <button type='submit' className='bg-black w-full rounded text-white p-2'>
            Reset Password
          </button>

          <p>Back to Login? <a href="/login" className="text-blue-500 mt-2">Login</a></p>
        </div>

        {message && <p className='text-green-500 mt-2'>{message}</p>}
        {error && <p className='text-red-500 mt-2'>{error}</p>}
      </form>
    </div>
  );
};

export default Resetpassword;
