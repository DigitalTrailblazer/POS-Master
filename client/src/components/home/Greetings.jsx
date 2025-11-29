import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';

const Greetings = () => {

    const userData = useSelector(state => state.user)

    const [dateTime, setDateTime] = useState(new Date());

    useEffect(() => {
    // setInterval runs the callback every 1000 ms
    const timer = setInterval(() => {
      setDateTime(new Date()); // updates state with current date and time
    }, 1000);

    return () => clearInterval(timer);
  }, []);


    return (
        <div className='px-5 mt-3 flex justify-between items-center'>
            
            <div>
                <h1 className="text-[#f5f5f5] text-2xl font-semibold tracking-wide ">
                    Good Morning, {userData.name || "TEST USER"}
                </h1>
                <p className="text-[#ababab] text-sm">
                    Deliver excellence with every service you offer
                </p>
            </div>

            <div>
                <h2 className='text-[#f5f5f5] text-3xl font-semibold tracking-wide'>
                    {dateTime.toLocaleTimeString('en-IN')}
                </h2>
                <h2 className='text-[#ababab] text-sm'>
                    {dateTime.toLocaleDateString('en-IN', { day: '2-digit', month: 'long', year: 'numeric' })}
                </h2>
            </div>
        </div>
    )
}

export default Greetings
