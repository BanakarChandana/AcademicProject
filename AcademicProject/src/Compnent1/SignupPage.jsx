import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function SignupPage() {
  const [showSignup, setSignup] = useState(true);
  const navigate = useNavigate();
  const[showEmail,setEmail]=useState('')
  const[showPassword,setPassword]=useState('')

  

  const closeSignup = () => {
    setSignup(false);
    navigate('/')
  };

 
  const isFormValid = showEmail.trim() !== '' && showPassword.trim() !== '';


  return (
    <div>
    
      
      {showSignup && (
        <div className='flex justify-center items-center fixed inset-0 bg-amber-50 w-full h-screen bg-contain bg-no-repeat' style={{ backgroundImage: "url(https://images.pexels.com/photos/3965545/pexels-photo-3965545.jpeg)", backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>
          <div className='p-8 rounded-lg shadow-lg'>
            <button onClick={closeSignup} className="absolute top-2 right-2 text-2xl mr-4 hover:text-blue-600">X</button>
            <div className="flex justify-center mb-6">
              <p><b className='text-2xl'>Signup</b></p>
            </div>
      
            <input
              type="email"
              placeholder="Email"
              value={showEmail}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 rounded bg-gray-100 text-black focus:ring-2 focus:outline-none mb-4 focus:ring-blue-400"
              aria-label="Email"
            />
            <input
              type="password"
              placeholder="Password"
              value={showPassword}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 rounded bg-gray-100 text-black focus:ring-2 focus:outline-none mb-4 focus:ring-blue-400"
              aria-label="Password"
            />
            <button 
              className="w-full bg-blue-400 hover:bg-blue-500 text-white font-semibold py-2 rounded-full transition duration-200" 
              onClick={()=>{
                if(!isFormValid)return;
                alert("Welcome to TrendyThreads! Your journey starts here.");
                navigate('/Home')}}>
              Sign Up
            </button>
            <p className="text-center mt-4 text-blue-500 hover:underline cursor-pointer">Forgot Password</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default SignupPage;
