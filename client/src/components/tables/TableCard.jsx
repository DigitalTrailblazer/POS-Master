import React from 'react'

const TableCard = ({ name, status, initial}) => {


    return (
        <>
        <div className='bg-[#262626] w-[270px] rounded-lg mb-3 p-4 cursor-pointer hover:bg-[#1f1f1f]'>
            
            <div className='flex items-center justify-between px-1'>

                <h1 className='text-[#f5f5f5] text-base font-semibold'>{name}</h1> 
                <p className={`${status === "Booked" ? " text-green-600 bg-[#2b493e]" : "bg-[#987724] text-white"} text-xs py-1 px-3 rounded-lg`}>
                    {status}
                </p>
            </div>

            <div className='flex items-center justify-center my-3'>
                <h1 className='bg-[#025cca] text-white text-xl font-semibold w-16 h-16 flex items-center justify-center rounded-full'>
                    {initial}
                </h1>
            </div>
        </div>
        </>
    )
}

export default TableCard