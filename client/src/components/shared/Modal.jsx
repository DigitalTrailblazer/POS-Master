import React from 'react'

const Modal = ({title, onClose, isOpen, children}) => {
  
    if(!isOpen){
        return null;
    }
    return (
        <div className='fixed inset-0 bg-black/50 flex items-center justify-center z-50'>
        
            <div className='bg-[#1a1a1a] shadow-lg w-[450px] mx-4 rounded p-4'>
                <div className='flex justify-between items-center px-6 py-4 border-b border-[#333]'>
                    <h2 className='text-[#f5f5f5] text-xl font-semibold'>{title}</h2>
                    <button
                        onClick={onClose}
                        className='text-gray-500 hover:text-gary-300 text-2xl cursor-pointer'
                    >
                        &times;
                    </button>
                </div>

                <div className='p-6'>
                    {children}
                </div>
            </div>

        </div>
    )
}

export default Modal
