import React, { useState } from 'react'
import BottomNav from '../components/shared/BottomNav'
import BackButton from '../components/shared/BackButton'
import TableCard from '../components/tables/TableCard'


const tables = [
    { id: 1, name: "Table 1", status: "Booked", initial: "PS", seats: 5 },
    { id: 2, name: "Table 2", status: "Available", initial: "AM", seats: 6 },
    { id: 3, name: "Table 3", status: "Booked", initial: "JS", seats: 2 },
    { id: 4, name: "Table 4", status: "Available", initial: "HR", seats: 4 },
    { id: 5, name: "Table 5", status: "Booked", initial: "PL", seats: 3 },
    { id: 6, name: "Table 6", status: "Available", initial: "RT", seats: 4 },
    { id: 7, name: "Table 7", status: "Booked", initial: "LC", seats: 5 },
    { id: 8, name: "Table 8", status: "Available", initial: "DP", seats: 5 },
    { id: 9, name: "Table 9", status: "Booked", initial: "NK", seats: 6 },
    { id: 10, name: "Table 10", status: "Available", initial: "SB", seats: 6 },
    { id: 11, name: "Table 11", status: "Booked", initial: "GT", seats: 4 },
    { id: 12, name: "Table 12", status: "Available", initial: "JS", seats: 6 },
    { id: 13, name: "Table 13", status: "Booked", initial: "EK", seats: 2 },
    { id: 14, name: "Table 14", status: "Available", initial: "QN", seats: 6 },
    { id: 15, name: "Table 15", status: "Booked", initial: "TW", seats: 3},
    { id: 16, name: "Table 16", status: "Available", initial: "JS", seats: 6 },
    { id: 17, name: "Table 17", status: "Booked", initial: "EK", seats: 2 },
    { id: 18, name: "Table 18", status: "Available", initial: "QN", seats: 6 },
    { id: 19, name: "Table 19", status: "Booked", initial: "TW", seats: 3}
]



const Tables = () => {

    const[status, setStatus] = useState("all")

    return (
        <section className='bg-[#1f1f1f] h-[calc(100vh-5rem)] overflow-hidden'>

            <div className='px-8 py-4 mt-2 flex items-center justify-between'>    
                
                <div className='flex items-center gap-4'>
                    <BackButton />
                    <h1 className='text-[#e0e0e0] text-2xl font-bold tracking-wider'>Tables</h1>
                </div>

                <div className='flex items-center justify-around gap-4'>
                    <button
                        onClick={() => setStatus("all")}
                        className={`${status === "all" && "bg-[#383838] px-4 py-1 rounded-lg"} text-[#ababab] text-base px-4 py-1 font-semibold rounded-lg cursor-pointer`}
                    >
                        All 
                    </button>

                    <button
                        onClick={() => setStatus("available")}
                        className={`${status === "available" && "bg-[#383838] px-4 py-1 rounded-lg"} text-[#ababab] text-base px-4 py-1 font-semibold rounded-lg cursor-pointer`}
                    >
                        Available 
                    </button>

                    <button
                        onClick={() => setStatus("booked")}
                        className={`${status === "booked" && "bg-[#383838] px-4 py-1 rounded-lg"} text-[#ababab] text-base px-4 py-1 font-semibold rounded-lg cursor-pointer`}
                    >
                        Booked 
                    </button>
                </div>

            </div>

            <div className='px-12 py-3 flex flex-wrap gap-5 overflow-y-scroll h-[calc(100vh-12rem)] no-scrollbar'>
                {
                    tables.map((table) => {
                        return (
                            <TableCard key={table.id} name={table.name} status={table.status} initial={table.initial} />
                        )
                    })
                }
            </div>


            <BottomNav />
        </section>
    )
}

export default Tables