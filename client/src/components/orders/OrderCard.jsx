import React from 'react'
import { FaCheckDouble, FaCircle } from 'react-icons/fa'

const OrderCard = () => {
    return (
        <>
            <div className='bg-[#262626] w-[450px] rounded-lg mb-3 p-4'>
                        
                <div className='flex items-center gap-4'>
                    <button className='bg-[#f6b100] text-xl p-2 font-bold rounded-lg'>
                        PS
                    </button>
        
                    <div className='w-full flex items-center justify-between'>
        
                        <div className='flex flex-col items-start gap-1'>
                            <h1 className='text-[#f5f5f5] text-lg font-semibold tracking-wide'>
                                Piyush Shrivastava 
                            </h1>
                            <p className='text-xs text-[#ababab]'>
                                #10101 / Dine in
                            </p>
                        </div>
        
                        <div className='flex flex-col items-end gap-1'>
                            <p className=' text-green-600 text-xs bg-[#2b493e] py-1 px-3 rounded-lg'>
                                <FaCheckDouble className='inline mr-2' /> Ready 
                            </p>
                            <p className='text-[#ababab] text-xs'>
                                <FaCircle className='inline mr-2 text-green-600' /> Ready to Serve 
                            </p>
                        </div>
        
                    </div>
                </div>

                <div className='text-[#ababab] text-sm mt-4 flex items-center justify-between'>
                    <p>
                        November 14, 2025 02:07 AM
                    </p>
                    <p>8 Items</p>

                </div>
                
                <hr className='text-[#f5f5f5] w-full mt-2 border-gray-500' />

                <div className='flex items-center justify-between mt-3'>
                    <h1 className='text-[#f5f5f5] text-lg font-semibold '>
                        Total
                    </h1>
                    <p className='text-[#f5f5f5] text-lg font-semibold '>Rs 250</p>
                </div>
            </div>
        </>
    )
}

export default OrderCard
