import React, { useState } from 'react';
import apiClient from '../services/api';

const Otp = ({ phoneNumber }) => {
  const [otp, setOtp] = useState('');
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');

  const handleVerify = async (e) => {
    e.preventDefault();
    setError('');
    setMessage('');

    try {
      const response = await apiClient.post('verify-otp/', { phone_number: phoneNumber, otp });
      setMessage(response.data.message);
      console.log('Token:', response.data.token); // Handle token storage here if needed
    } catch (err) {
      if (err.response) {
        setError(err.response.data.error || 'Failed to verify OTP');
      } else {
        setError('An unexpected error occurred');
      }
    }
  };

  return (
    <div className='container'>
      <form className='w-full h-screen flex flex-col items-center' onSubmit={handleVerify}>
        <div className='flex items-center w-96 h-auto m-auto flex-col gap-3'>
          <h1 className='text-center text-3xl text-black mb-4'>Enter OTP</h1>
          <input
            type='text'
            name='otp'
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
            className='block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6'
            placeholder='OTP'
          />
          <button type='submit' className='bg-black w-full rounded text-white p-2'>Verify</button>
          {message && <p className='text-green-500 mt-2'>{message}</p>}
          {error && <p className='text-red-500 mt-2'>{error}</p>}
        </div>
      </form>
    </div>
  );
};

export default Otp;
