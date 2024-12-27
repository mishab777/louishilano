import React, { useState } from 'react';
import apiClient from '../services/api'; // Ensure this is correctly imported

const Signup = ({ onOtpSent }) => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setMessage('');

    try {
      const response = await apiClient.post('send-otp/', { phone_number: phoneNumber });
      setMessage(response.data.message);
      onOtpSent(phoneNumber); // Pass phone number to OTP component
    } catch (err) {
      if (err.response) {
        setError(err.response.data.error || 'Failed to send OTP');
      } else {
        setError('An unexpected error occurred');
      }
    }
  };

  return (
    <div className='container'>
      <form className='w-full h-screen flex flex-col items-center' onSubmit={handleSubmit}>
        <div className='flex items-center w-96 h-auto m-auto flex-col gap-3'>
          <h1 className='text-center text-3xl text-black mb-4'>Sign Up</h1>
          <input
            type='text'
            name='phone_number'
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            className='block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6'
            placeholder='Phone Number'
          />
          <button type='submit' className='bg-black w-full rounded text-white p-2'>Send OTP</button>
          {message && <p className='text-green-500 mt-2'>{message}</p>}
          {error && <p className='text-red-500 mt-2'>{error}</p>}
        </div>
      </form>
    </div>
  );
};

export default Signup;
