import React, { useState } from 'react'
import {motion} from 'framer-motion'
import {IoMdClose} from 'react-icons/io'
import {useMutation} from '@tanstack/react-query'
import { enqueueSnackbar } from 'notistack'
import { addTable } from '../../https'

const Modal = ({ setIsTableModalOpen }) => {

    const [tableData, setTableData] = useState({
        tableNo : "",
        seats : ""
    }) 

    const handleInputChange = (e) => {
        
        const {name, value} = e.target
        setTableData((prev) => ({...prev, [name] : value}))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(tableData)

        tableMutation.mutate(tableData)
    }
  
    const handleCloseModal = () => {
        setIsTableModalOpen(false)
    }


    // ADD TABLE
    const tableMutation = useMutation({
        mutationFn: (reqData) => {
            return addTable(reqData)
        },

        onSuccess: (resData) => {
            setIsTableModalOpen(false)

            const {data} = resData
            enqueueSnackbar(data?.message, {variant : "success"})
        },

        onError: (error) => {
            const {data} = error.response
            enqueueSnackbar(data?.message, {variant : "error"})
        }
    })
  
    return (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
            <motion.div 
                initial={{opacity: 0, scale: 0.9}}
                animate={{opacity: 1, scale: 1}}
                exit={{opacity: 0, scale: 0.9}}
                transition={{duration: 0.3, ease: "easeInOut"}}
                className="bg-[#262626] w-96 p-6 rounded-lg shadow-lg"
            >

                {/* Modal Header */}
                <div className='flex items-center justify-between mb-4'>

                    <h2 className='text-[#f5f5f5] text-xl font-semibold'>
                        Add Table 
                    </h2>
                    <button
                        onClick={handleCloseModal}
                        className='text-[#f5f5f5] hover:text-red-500'
                    >
                        <IoMdClose size={24} />
                    </button>
                </div>

                {/* Modal Body */}
                <form 
                    onClick={handleSubmit} 
                    className="space-y-4 mt-10"
                >
                    
                    <div>
                        <label className='block text-[#ababab] text-sm font-medium mb-1 mt-3'>
                            Table Number
                        </label>
                        <div className='flex items-center rounded-lg bg-[#1f1f1f] py-2.5 px-4'>
                            <input 
                                type="number" 
                                name='tableNo'
                                value={tableData.tableNo}
                                onChange={handleInputChange}
                                required
                                className='bg-transparent flex-1 text-white focus:outline-none'
                            />
                        </div>
                    </div>

                    <div>
                        <label className='block text-[#ababab] text-sm font-medium mb-1 mt-3'>
                            Number of Seats
                        </label>
                        <div className='flex items-center rounded-lg bg-[#1f1f1f] py-2.5 px-4'>
                            <input 
                                type="number" 
                                name='seats'
                                required
                                value={tableData.seats}
                                onChange={handleInputChange}
                                className='bg-transparent flex-1 text-white focus:outline-none'
                            />
                        </div>
                    </div>

                    {/* submit button */}
                    <button 
                        type="submit"
                        className="w-full mt-10 py-2.5 bg-yellow-400 text-lg rounded font-medium transition-all duration-300 hover:bg-yellow-500 hover:scale-[1.02] active:scale-[0.98]"

                    >
                        Add Table 
                    </button>

                </form>

            </motion.div>
        </div>
    )
}

export default Modal
