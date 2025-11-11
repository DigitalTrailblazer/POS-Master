import React from 'react'
import { FaCheckDouble, FaCircle } from 'react-icons/fa'

const OrderList = () => {
    return (
        <div className='flex items-center gap-5 mb-2'>
            
            <button className='bg-[#f6b100] text-xl p-2 font-bold rounded-lg'>
                PS
            </button>

            <div className='w-full flex items-center justify-between'>

                <div className='flex flex-col items-start gap-1'>
                    <h1 className='text-[#f5f5f5] text-lg font-semibold tracking-wide'>
                        Piyush Shrivastava 
                    </h1>
                    <p className='text-xs text-[#ababab]'>
                        8 Items 
                    </p>
                </div>

                <div>
                    <h1 className='text-[#f6b100] text-xs font-semibold border border-[#f6b100] rounded-lg p-1'>Table No: 3</h1>
                </div>

                <div className='flex flex-col items-start gap-1'>
                    <p className='px-4 text-green-600'>
                        <FaCheckDouble className='inline mr-2' /> Ready 
                    </p>
                    <p className='text-[#ababab] text-xs'>
                        <FaCircle className='inline mr-2 text-green-600' /> Ready to Serve 
                    </p>
                </div>

            </div>
        </div>
    )
}

export default OrderList
