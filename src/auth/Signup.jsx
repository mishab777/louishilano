import React ,{ useState }from 'react'
import { createUser } from "../services/AuthApi";
import { useNavigate } from 'react-router-dom';
const Signup = () => {
  const [values, setValues] =useState({
    first_name:"",
    email:"",
    password:"",
    user_type: "admin",
  });
  const [message,setMessage] = useState("");
  const [error,setError] = useState("");
  const navigate = useNavigate();
  const handleChange = (e) =>{
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setMessage("");
    try {
          const submittedData = values;
          console.log("Submitted Data:", submittedData);
    
          let response = await createUser(submittedData);
          console.log(response);
          if (response.success) {
            setMessage(response.message || "Admin signed up successfully.");
            navigate('/login');
     
          } else {
            setError(response.error || "An error occurred during signup.");
          }
    } catch (err) {
          console.error("Error:", err); 
          if (err.response) {
            setError(
              err.response.data.error ||
                err.response.data.message ||
                "An error occurred during signup."
            );
          } else {
            setError("An unexpected error occurred. Please try again later.");
          }      
    }
  };  
  return (
    <>
      <div className='container'>
      <form className='w-full h-screen flex flex-col items-center'
         onSubmit={handleSubmit}>
            <div className='flex items-center w-96 h-auto m-auto flex-col gap-3'>
            <h1 className='text-center text-3xl text-black mb-4'>Sign Up</h1>
            <input type="text" 
                   name="first_name" 
                   id="first_name" 
                   className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" 
                   placeholder='Name'
                   onChange={handleChange}
            />
            <input type="text" 
                   name="email" 
                   id="email" 
                   className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" 
                   placeholder='Email'
                   onChange={handleChange}
             />
            <input type="text" 
                   name="password" 
                   id="password" 
                   className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" 
                   placeholder='Password'
                   onChange={handleChange}
            />
            <button
               type='submit' 
               className='bg-black w-full rounded text-white p-2'
            >
              Sign Up
            </button>
            <p>already have an account ? <a href="/login" className="text-blue-500 mt-2">Login</a></p>
            {message && <p className="text-green-500 mt-2">{message}</p>}
            {error && <p className="text-red-500 mt-2">{error}</p>}
            </div>
        </form>
      </div>
    </>
  )
}

export default Signup
 