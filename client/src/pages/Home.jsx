import React from 'react'
import BottomNav from '../components/shared/BottomNav'
import Greetings from '../components/home/Greetings'

const Home = () => {
    
    return (
        <section className='bg-[#1f1f1f] h-[calc(100vh-5rem)] overflow-hidden flex gap-3'>

            {/* left panel */}
            <div className='flex-3'>
                <Greetings />
            </div>

            {/* right panel */}
            <div className='bg-red-600 flex-3'>

            </div>

            {/* navigations */}
            <BottomNav />
        </section>
    )
}

export default Home
