import React from 'react'

const CustomerInfo = () => {


    return (
        <>
            <div className='flex items-center justify-between px-3 py-2'>

                <div className='flex flex-col items-start'>
                    <h1 className='text-[#f5f5f5] text-sm font-semibold tracking-wide'>
                        Customer Name
                    </h1>
                    <p className='text-[#ababab] text-xs font-medium mt-1'>#101/Dine in</p>
                    <p className='text-[#ababab] text-xs font-medium mt-2'>November 14, 2025 11:54 PM</p>
                </div>

                <button className='bg-[#f6b100] text-xl font-bold p-2 rounded-lg'>CN</button>
            </div>
        </>
    )
}

export default CustomerInfo
