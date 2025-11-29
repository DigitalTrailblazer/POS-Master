import React, { useState } from 'react'

const Login = () => {

    const [showPassword, setShowPassword] = useState(false)
    const [formData, setFormData] = useState({

        email : "",
        password: ""
    })

    const handleInputChange = (e) => {

        setFormData({...formData, [e.target.name] : e.target.value})
    }

    const togglePasswordVisibility = () => {

        setShowPassword((prev) => !prev)
    }

    const handleFormSubmit = (e) => {

        e.preventDefault()
        console.log(formData)

        setFormData({
            email : "",
            password : ""
        })
        setShowPassword(false)
    }

    return (
        <div>
            <form action="" onSubmit={handleFormSubmit}>

                <div>
                    <label className='block text-[#ababab] text-sm font-medium mb-1 mt-3'>
                        Email
                    </label>
                    <div className='flex items-center rounded-lg bg-[#1f1f1f] py-2.5 px-4'>
                        <input 
                            type="email" 
                            name='email'
                            value={formData.email}
                            onChange={handleInputChange}
                            required
                            placeholder='Enter employee email'
                            className='bg-transparent flex-1 text-white focus:outline-none'
                        />
                    </div>
                </div>

                <div>
                    <label className='block text-[#ababab] text-sm font-medium mb-1 mt-3'>
                        Password
                    </label>
                    <div className='flex items-center rounded-lg bg-[#1f1f1f] py-2.5 px-4'>
                        <input 
                            type={showPassword ? "text" : "password"} 
                            name='password'
                            value={formData.password}
                            onChange={handleInputChange}
                            required
                            placeholder='Enter password'
                            className='bg-transparent flex-1 text-white focus:outline-none'
                        />
                    </div>
                </div>

                {/* submit button */}
                <button 
                    type="submit"
                    className="w-full mt-10 py-2.5 bg-yellow-400 text-lg rounded font-medium transition-all duration-300 hover:bg-yellow-500 hover:scale-[1.02] active:scale-[0.98]"

                >
                    Log In
                </button>
            </form>
        </div>
    )
}

export default Login
