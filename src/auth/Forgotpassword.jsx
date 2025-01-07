import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {forgotPassword} from "../services/AuthApi";
const Forgotpassword = () => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');
    setMessage('');

    if (!email) {
      setError("Email is required.");
      return;
    }

    try {
      const response = await forgotPassword({ email});
      setMessage(response.message);

      // Navigate to OTP verification page, passing email and user type
      navigate('/resetpassword', { state: { email} });

    } catch (err) {
      setError(err.response?.data?.error || 'Failed to log in');
    }
  };

  return (
    <div className='container h-screen'>
      <form className='w-full h-screen flex flex-col items-center' onSubmit={handleLogin}>
        <div className='flex items-center w-96 h-auto m-auto flex-col gap-3'>
          <h1 className='text-center text-3xl text-black mb-4'>Forgot Password?</h1>
          <input 
            type="email" 
            name="email" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" 
            placeholder="Enter email " 
          />
         
          <button type='submit' className='bg-black w-full rounded text-white p-2'>
            Proceed
          </button>          
          <p>Back to Login ? <a href="/login" className="text-blue-500 mt-2">Login</a></p>
        </div>
        {message && <p className='text-green-500 mt-2'>{message}</p>}
        {error && <p className='text-red-500 mt-2'>{error}</p>}
      </form>
    </div>
  );
};

export default Forgotpassword;
