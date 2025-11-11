import  React from "react";
import { FaSearch } from "react-icons/fa";
import OrderList from "./OrderList";

const RecentOrders = () => {
    return (
        <div className="px-5 mt-4">
            <div className="w-full h-[370px] bg-[#1a1a1a] rounded-lg p-4">
                
                <div className="flex justify-between items-center mb-5">
                    <h1 className="text-[#f5f5f5] text-lg font-semibold">
                        Recent Orders
                    </h1>
                    <a href="#" className="text-[#025cca] text-sm font-semibold hover:underline">
                        View all
                    </a>
                </div>

                <div className="flex items-center bg-[#1f1f1f] rounded-md px-3 py-2">
                    <FaSearch className="text-[#b5b5b5] mr-2" size={14} />
                    <input
                        type="text"
                        placeholder="Search recent orders"
                        className="w-full bg-transparent text-[#f5f5f5] placeholder-[#8a8a8a] outline-none"
                    />

                </div>
                    
                <div className="mt-5 px-3 overflow-y-scroll h-[225px] no-scrollbar">
                    <OrderList />
                    <OrderList />
                    <OrderList />
                    <OrderList />
                    <OrderList />
                    <OrderList />
                    <OrderList />
                    <OrderList />
                    <OrderList />
                    <OrderList />
                    <OrderList />
                </div>

            </div>
        </div>
    );
};

export default RecentOrders;
