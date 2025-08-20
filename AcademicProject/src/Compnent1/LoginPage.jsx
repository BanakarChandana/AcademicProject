import React, { useState } from 'react'; 
import { useNavigate } from 'react-router-dom';
import { FaSquareInstagram, FaTwitter, FaFacebook } from "react-icons/fa6"; 

function LoginPage() {
    const [showLogin, setLogin] = useState(true);
    const navigate = useNavigate(); 
    const [showUsername,setUsername]=useState('')
    const[Password,setPassword]=useState('')


      

    const closeLogin = () => {
        setLogin(false);
        navigate('/');
    };

   
      const isFormValid = showUsername.trim() !== '' && Password.trim() !== '';
    return (
        <div>
            
            {showLogin && (
                <div 
                    className='flex justify-center items-center fixed inset-0 bg-amber-50 w-full h-screen bg-contain bg-no-repeat' 
                    style={{ 
                        backgroundImage: "url(https://images.pexels.com/photos/3965548/pexels-photo-3965548.jpeg)", 
                        backgroundSize: 'cover', 
                        backgroundPosition: 'center', 
                        backgroundRepeat: 'no-repeat' 
                    }} 
                >
                    <div className='p-8 rounded-lg shadow-lg'>
                        <button 
                            onClick={closeLogin} 
                            className="absolute top-2 right-2 text-2xl mr-4 hover:text-blue-600" 
                            aria-label="Close Login"> X
                        </button>
                        <div>
                            <p className='text-2xl ml-40 mb-2'><b>Login</b></p>
                            <input
                                type='text'
                                placeholder='Username'
                                value={showUsername}
                                onChange={(e)=>setUsername(e.target.value)}
                                className="w-full px-4 py-2 rounded bg-gray-100 text-black focus:ring-2 focus:outline-none mb-4 focus:ring-blue-400"
                            />
                            <input
                                type="password"
                                placeholder="Password"
                                value={Password}
                                onChange={(e)=>setPassword(e.target.value)}
                                className="w-full px-4 py-2 rounded bg-gray-100 text-black focus:ring-2 focus:outline-none mb-4 focus:ring-blue-400"
                            />
                            <button 
                                className="w-full bg-blue-400 hover:bg-blue-200 text-white py-2 rounded" 
                                onClick={()=>{
                                   if(!isFormValid)return;
                                   alert("Welcome to TrendyThreads! Your journey starts here.");
                                  navigate('/Home')} } > Login
                            </button>
                            <div className="mt-4 text-sm text-black text-center">
                                <a href="#" className="hover:underline">
                                    Forgot password?
                                </a>
                            </div>
                            <div className='flex gap-4 text-4xl mt-8 justify-center'>
                                <FaSquareInstagram className="bg-amber-50 cursor-pointer transform transition duration-300 hover:scale-120" />
                                <FaTwitter className="bg-amber-50 cursor-pointer transform transition duration-300 hover:scale-125"/>
                                <FaFacebook className="bg-amber-50 cursor-pointer transform transition duration-300 hover:scale-125"/>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default LoginPage;

