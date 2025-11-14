import React from 'react'
import BottomNav from '../components/shared/BottomNav'
import Greetings from '../components/home/Greetings'
import StatCard from '../components/home/StatCard'

import { BsCashCoin } from "react-icons/bs";
import { GrInProgress } from "react-icons/gr";
import RecentOrder from '../components/home/RecentOrder';
import PopularDishes from '../components/home/PopularDishes';

const Home = () => {
    
    return (
        <section className='bg-[#1f1f1f] h-[calc(100vh-5rem)] overflow-hidden flex gap-3'>

            {/* left panel */}
            <div className='flex-3'>
                <Greetings />

                <div className='mt-4 px-5 w-full flex items-center gap-4'>
                    <StatCard title="Total Earnings" icon={<BsCashCoin />} number={512} footerNum={1.6} />
                    <StatCard title="In Progress" icon={<GrInProgress />} number={16} footerNum={3.6} />
                </div>

                <RecentOrder />
            </div>

            {/* right panel */}
            <div className='mt-3 flex-2'>
                <PopularDishes />
            </div>

            {/* bottom_navigations */}
            <BottomNav />
        </section>
    )
}

export default Home
