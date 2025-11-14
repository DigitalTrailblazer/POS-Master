import React from 'react'

const BillsInfo = () => {


    return (
        <>
            {/* total calculation */}
            <div className='flex items-center justify-between px-5 mt-1'>
                
                <p className='text-[#ababab] text-xs font-medium mt-2'>Items(4)</p>
                <h1 className='text-[#f5f5f5] text-sm font-bold'>₹240</h1>
            </div>

            <div className='flex items-center justify-between px-5'>
                
                <p className='text-[#ababab] text-xs font-medium mt-1'>Tax(5.00%)</p>
                <h1 className='text-[#f5f5f5] text-sm font-bold'>₹12</h1>
            </div>

            <div className='flex items-center justify-between px-5 mt-2'>
                
                <p className='text-[#ababab] text-sm font-medium mt-2'>Total</p>
                <h1 className='text-[#f5f5f5] text-md font-bold'>₹250</h1>
            </div>

            {/* billing methods and order placing */}
            <div className='flex items-center gap-4 px-3 mt-4'>
                <button
                    className='text-[#d2d2d2] bg-[#1f1f1f] text-md py-2 w-full cursor-pointer rounded-lg font-semibold'
                >
                    Cash 
                </button>

                <button
                    className='text-[#d2d2d2] bg-[#1f1f1f] text-md py-2 w-full cursor-pointer rounded-lg font-semibold'
                >
                    Online
                </button>
            </div>

            <div className='flex items-center gap-4 px-3 mt-2'>
                <button
                    className='text-[#ababab] bg-[#1f1f1f] text-lg py-2 cursor-pointer w-full rounded-lg font-semibold'
                >
                    Print Receipt 
                </button>

                <button
                    className='text-[#1f1f1f] bg-[#f6b100] text-lg py-2 cursor-pointer w-full rounded-lg font-semibold'
                >
                    Place Order 
                </button>
            </div>
        </>
    )   
}

export default BillsInfo
