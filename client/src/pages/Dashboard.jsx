import React, { useState } from 'react'
import {MdCategory, MdTableBar} from 'react-icons/md'
import {BiSolidDish} from 'react-icons/bi'
import Metrics from '../components/dashboard/Metrics'
import RecentOrders from '../components/dashboard/RecentOrders'
import Modal from '../components/dashboard/Modal'


const buttons = [
  { label: "Add Table", icon: <MdTableBar />, action: "table" },
  { label: "Add Category", icon: <MdCategory />, action: "category" },
  { label: "Add Dishes", icon: <BiSolidDish />, action: "dishes" }
]

const tabs = ["Metrics", "Orders", "Payment"]


const Dashboard = () => {

    const [isTableModalOpen, setIsTableModalOpen] = useState(false)
    const [activeTab, setActiveTab] = useState("Metrics")

    const handleModalOpen = (action) => {
        if(action === "table"){
            setIsTableModalOpen(true)
        }
    }
  
    return (
        <div className='bg-[#1f1f1f] h-[calc(100vh-5rem)]'>
            <div className='py-14 px-6 md:px-4 container mx-auto flex items-center justify-between'>

                <div className='flex items-center gap-3'>
                    {
                        buttons.map(({label, icon, action}) => {
                            return(
                                <button
                                    onClick={() => handleModalOpen(action)}
                                    className='cursor-pointer flex items-center gap-2 px-8 py-3 bg-[#1a1a1a] hover:bg-[#262626] text-[#f5f5f5] rounded-lg font-semibold text-md'    
                                >
                                    {label} {icon}
                                </button>
                            )
                        })
                    }
                </div> 

                <div className='flex items-center gap-3'>
                    {
                        tabs.map((tab) => {
                            return(
                                <button
                                    onClick={() => setActiveTab(tab)}
                                    className={
                                        `${activeTab === tab ? "bg-[#262626]" : "bg-[#1a1a1a]"} 
                                        cursor-pointer flex items-center gap-2 px-8 py-3  text-[#f5f5f5] rounded-lg font-semibold text-md`
                                    }    
                                >
                                    {tab}
                                </button>
                            )
                        })
                    }
                </div>  
            </div>

            {
                activeTab === "Metrics" && <Metrics />
            }
            {
                activeTab === "Orders" && <RecentOrders />
            }

            {
                isTableModalOpen && <Modal setIsTableModalOpen={setIsTableModalOpen} />
            }
        </div>
    )
}

export default Dashboard
