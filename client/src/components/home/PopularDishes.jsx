import React from 'react'
import butterChicken from "../../assets/butter-chicken-4.jpg";
import palakPaneer from "../../assets/butter-chicken-4.jpg";
import biryani from "../../assets/butter-chicken-4.jpg";
import masalaDosa from "../../assets/butter-chicken-4.jpg";
import choleBhature from "../../assets/butter-chicken-4.jpg";
import rajmaChawal from "../../assets/butter-chicken-4.jpg";
import paneerTikka from "../../assets/butter-chicken-4.jpg";
import gulabJamun from "../../assets/butter-chicken-4.jpg";
import pooriSabji from "../../assets/butter-chicken-4.jpg";
import roganJosh from "../../assets/butter-chicken-4.jpg";

const popularDishes = [
    {
      id: 1,
      image: butterChicken,
      name: 'Butter Chicken',
      numberOfOrders: 250,
    },
    {
      id: 2,
      image: palakPaneer,
      name: 'Palak Paneer',
      numberOfOrders: 190,
    },
    {
      id: 3,
      image: biryani,
      name: 'Hyderabadi Biryani',
      numberOfOrders: 300,
    },
    {
      id: 4,
      image: masalaDosa,
      name: 'Masala Dosa',
      numberOfOrders: 220,
    },
    {
      id: 5,
      image: choleBhature,
      name: 'Chole Bhature',
      numberOfOrders: 270,
    },
    {
      id: 6,
      image: rajmaChawal,
      name: 'Rajma Chawal',
      numberOfOrders: 180,
    },
    {
      id: 7,
      image: paneerTikka,
      name: 'Paneer Tikka',
      numberOfOrders: 210,
    },
    {
      id: 8,
      image: gulabJamun,
      name: 'Gulab Jamun',
      numberOfOrders: 310,
    },
    {
      id: 9,
      image: pooriSabji,
      name: 'Poori Sabji',
      numberOfOrders: 140,
    },
    {
      id: 10,
      image: roganJosh,
      name: 'Rogan Josh',
      numberOfOrders: 160,
    }
]


const PopularDishes = () => {
    return (
        <div className='pr-5'>

            <div className=' p-4 w-full bg-[#1a1a1a] rounded-xl'>
                
                <div className="flex justify-between items-center mb-5">
                    <h1 className="text-[#f5f5f5] text-lg font-semibold">
                        Popular Dishes 
                    </h1>
                    <a href="#" className="text-[#025cca] text-sm font-semibold hover:underline">
                        View all
                    </a>
                </div>

                <div className='overflow-y-scroll h-[577px] no-scrollbar'>
                    {
                        popularDishes.map((dish) => {
                            return (
                                <div key={dish.id} className='px-4 py-4 mx-6 mt-4 flex items-center gap-4 bg-[#1f1f1f] rounded-2xl'>
                                    
                                    <h1 className='text-[#f5f5f5] text-xl font-bold mr-4'>
                                        {dish.id < 10 ? `0${dish.id}` : dish.id}
                                    </h1>
                                    <img className='w-[50px] h-[50px] rounded-full' src={dish.image} alt={dish.name} />

                                    <div>
                                        <h1 className='text-[#f5f5f5] font-semibold tracking-wide'>
                                            {dish.name}
                                        </h1>
                                        <p className='text-[#f5f5f5] text-sm font-semibold mt-1'>
                                            <span className='text-[#ababab]'>Orders: </span>
                                            {dish.numberOfOrders}
                                        </p>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>

            </div>

        </div>
    )
}

export default PopularDishes
