import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { userLogin } from "../services/AuthApi";
const Login = () => {
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');
    setMessage('');

    if (!email || !password) {
      setError("Email and Password are required.");
      return;
    }

    try {
      const response = await userLogin({ email, password, user_type: "admin" });
      setMessage(response.message);

      // Handle token and navigate to admin dashboard
      console.log('Token:', response.token);
      if (response.token) {
        sessionStorage.setItem('authToken', response.token);
      }
      navigate('/product_Add', { state: { token: response.token, email, userType: "admin" } });
    } catch (err) {
      setError(err.response?.data?.error || 'Failed to log in');
    }
  };  
  return (
    <>
      <div className='container h-screen'>
        <form className='w-full h-screen flex flex-col items-center' onSubmit={handleLogin}>
            <div className='flex items-center w-96 h-auto m-auto flex-col gap-3'>
            <h1 className='text-center text-3xl text-black mb-4'>Login</h1>
            <input type="text" 
                   name="email" 
                   id="email" 
                   autoComplete="given-name" 
                   className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" 
                   placeholder='email'
                   onChange={(e) => setEmail(e.target.value)}
            />
            <input type="password" 
                   name="password" 
                   id="password" 
                   autoComplete="given-name" 
                   className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" 
                   placeholder='password'
                   onChange={(e) => setPassword(e.target.value)}
            />
            <p><a href="/forgotpassword" className="text-red-500 mt-2">Forgot Password?</a></p>
            <button 
              type='submit' 
              className='bg-black w-full rounded text-white p-2'
            >
              Log In
            </button>
            <p>Don't have an account ? <a href="/signup" className="text-blue-500 mt-2">Signup</a></p>
            </div>
            {message && <p className='text-green-500 mt-2'>{message}</p>}
        {error && <p className='text-red-500 mt-2'>{error}</p>}
        </form>
      </div>
    </>
  )
}

export default Login
