import React, { useState } from 'react'
import restro_image from '../assets/restaurant-img.jpg'
import logo from '../assets/logo.png'
import { Link } from "react-router-dom";
import Register from '../components/auth/Register';
import Login from '../components/auth/Login';



const Auth = () => {

    const [isRegister, setIsRegister] = useState(false)


    return (
        <div className='flex min-h-screen w-full'>
            
            {/* left section */}
            <div className="hidden lg:block w-1/2 relative">
                
                <img
                    src={restro_image}
                    alt="restro_image"
                    className="absolute inset-0 w-full h-full object-cover"
                />

                {/* BLACK OVERLAY (shade only) */}
                <div className="absolute inset-0 bg-black/60"></div>

                <blockquote className="absolute bottom-2 px-8 mb-10 text-white text-xl italic">
                    "Serve customers the best food with prompt and friendly service in a 
                    welcoming atmosphere, and they'll keep coming back."
                    
                    <br />
                    <span className="block mt-2 text-yellow-400">- Founder of Restro</span>
                </blockquote>
            </div>


            {/* right section */}
            <div className='w-full lg:w-1/2 min-h-screen bg-[#1a1a1a] py-10 px-7 lg:p-6 lg:px-15'>

                <div className='flex flex-col items-center gap-1'>
                    <img 
                        src={logo} 
                        alt="restro_logo" 
                        className='h-16 w-16 lg:h-14 lg:w-14 border-2 border-[#f5f5f5] rounded-full p-1'
                    />

                    <h1 className='text-[#f5f5f5] text-2xl lg:text-lg font-semibold tracking-wider'>
                        Restro
                    </h1>
                </div>

                <h2 className='text-3xl text-center mt-8 mb-8 text-yellow-400 font-semibold'>
                    {/* {isRegister ? "Join the Restaurant - Restro" : "Welcome Back — Log In"} */}
                    {
                        isRegister ? (
                            <>Join the Restaurant – <i>Restro</i></>
                        ) : (
                            "Welcome Back — Log In"
                        )
                    }
                </h2>


                {isRegister ? <Register setIsRegister={setIsRegister} /> : <Login />}


                <div className='flex justify-center mt-2'>

                    <p className='text-[#ababab] text-sm'>
                        <span className='mr-1'>
                            {isRegister ? "Already have an account?" : "Don't have an account?"}
                        </span>
                        
                        <Link 
                            onClick={() => setIsRegister(!isRegister)}
                            className="text-yellow-400 font-semibold hover:underline"
                        >
                            {isRegister ? "Log In" : "Sign Up"}
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Auth
