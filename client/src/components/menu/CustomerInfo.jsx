import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { getAvatarName } from '../../utils'

const CustomerInfo = () => {

    const customerData = useSelector(state => state.customer)



    return (
        <>
            <div className='flex items-center justify-between px-3 py-2'>

                <div className='flex flex-col items-start'>
                    <h1 className='text-[#f5f5f5] text-sm font-semibold tracking-wide'>
                        {customerData.customerName || "Customer Name"}
                    </h1>
                    <p className='text-[#ababab] text-xs font-medium mt-1'>#{customerData.orderId || orderId} / Dine in</p>
                    <p className='text-[#ababab] text-xs font-medium mt-2'>  
                        {new Date(customerData.orderTime).toLocaleString('en-IN', {
                            dateStyle: "full",
                            timeStyle: "medium"
                        })}
                    </p>
                </div>

                <button className='bg-[#f6b100] text-xl font-bold p-2 rounded-lg'>{getAvatarName(customerData.customerName) || CN}</button>
            </div>
        </>
    )
}

export default CustomerInfo
