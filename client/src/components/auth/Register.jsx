import React, { useState } from 'react'

const Register = () => {
    
    const [showPassword, setShowPassword] = useState(false)
    const [formData, setFormData] = useState({
        
        name : "", 
        email : "",
        phone : "", 
        password : "", 
        role : ""
    })

    const handleInputChange = (e) => {
        
        setFormData({...formData, [e.target.name] : e.target.value})
    }

    const handleRoleSelection = (selectedRole) => {

        setFormData({...formData, role : selectedRole})
    }

    const togglePasswordVisibility = () => {
        setShowPassword((prevState) => !prevState)
    }


    const handleFormSubmit = (e) => {
        
        e.preventDefault()
        console.log(formData)

        setFormData({
        name : "", 
        email : "",
        phone : "", 
        password : "", 
        role : ""
        })
        setShowPassword(false)
    }
    
    return (
        <div>
            <form action="" onSubmit={handleFormSubmit}>

                <div>
                    <label className='block text-[#ababab] text-sm font-medium mb-1'>
                        Name
                    </label>
                    <div className='flex items-center rounded-lg bg-[#1f1f1f] py-2.5 px-4'>
                        <input 
                            type="text" 
                            name='name'
                            value={formData.name}
                            onChange={handleInputChange}
                            required
                            placeholder='Enter employee name'
                            className='bg-transparent flex-1 text-white focus:outline-none'
                        />
                    </div>
                </div>

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
                        Phone Number
                    </label>
                    <div className='flex items-center rounded-lg bg-[#1f1f1f] py-2.5 px-4'>
                        <input 
                            type="number" 
                            name='phone'
                            value={formData.phone}
                            onChange={handleInputChange}
                            required
                            placeholder='Enter employee phone number'
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

                        <button
                            type="button"
                            onClick={togglePasswordVisibility}
                            className="ml-2 text-gray-400 hover:text-white"
                        >
                            {showPassword ? "🙈" : "👁️"}
                        </button>
                    </div>
                </div>


                <div>
                    <label className='block text-[#ababab] text-sm font-medium mb-1 mt-3'>
                        Role
                    </label>

                    <div className='flex items-center gap-3'>
                        {
                            ["Admin", "Cashier", "Waiter"].map((role) => {
                                return (
                                    <button 
                                        key={role}
                                        onClick={() => handleRoleSelection(role)} 
                                        type='button' 
                                        className={`${formData.role === role ? "border border-amber-300" : ""} cursor-pointer px-3 py-2.5 w-full bg-[#1f1f1f] rounded-lg text-[#ababab]`}
                                    >
                                        {role}
                                    </button>
                                )
                            })
                        }
                    </div>
                </div>

                {/* submit button */}
                <button 
                    type="submit"
                    className="w-full mt-8 py-2.5 bg-yellow-400 text-lg rounded font-medium transition-all duration-300 hover:bg-yellow-500 hover:scale-[1.02] active:scale-[0.98]"
                >
                    Sign Up
                </button>
            </form>
        </div>
    )
}

export default Register
