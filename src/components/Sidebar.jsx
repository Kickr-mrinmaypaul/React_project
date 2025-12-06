import React, { useState } from 'react'
import logo from '../assets/logo2xl.png'
import { Link } from 'react-router-dom';
import { House, ChartNoAxesCombined, Gamepad2, Weight, ChartColumnStacked, Bell, Settings ,Headset ,  LogOut} from 'lucide-react';

export default function Sidebar() {
    const [activeIndex, setActiveIndex] = useState(0);

  const menuItems = [
    { icon: <House className='sm:h-3 sm:w-3 md:h-3 md:w-3 lg:h-4 lg:w-4 xl:h-5 xl:w-5' />, label: "Dashboard", to: "/" },
    { icon: <ChartNoAxesCombined className='sm:h-3 sm:w-3 md:h-3 md:w-3 lg:h-4 lg:w-4 xl:h-5 xl:w-5'/>, label: "Users", to: "/users" },
    { icon: <Gamepad2 className='sm:h-3 sm:w-3 md:h-3 md:w-3 lg:h-4 lg:w-4 xl:h-5 xl:w-5' />, label: "Games", to: "#" },
    { icon: <Weight className='sm:h-3 sm:w-3 md:h-3 md:w-3 lg:h-4 lg:w-4 xl:h-5 xl:w-5'/>, label: "Sales & Inventory", to: "#" },
    { icon: <ChartColumnStacked className='sm:h-3 sm:w-3 md:h-3 md:w-3 lg:h-4 lg:w-4 xl:h-5 xl:w-5'/>, label: "Leaderboard", to: "#" },
    { icon: <Bell className='sm:h-3 sm:w-3 md:h-3 md:w-3 lg:h-4 lg:w-4 xl:h-5 xl:w-5'/>, label: "Notification", to: "#" },
    { icon: <Settings className='sm:h-3 sm:w-3 md:h-3 md:w-3 lg:h-4 lg:w-4 xl:h-5 xl:w-5'/>, label: "Admin Setting", to: "/admin" },
    { icon: <Headset className='sm:h-3 sm:w-3 md:h-3 md:w-3 lg:h-4 lg:w-4 xl:h-5 xl:w-5'/>, label: "Contact Query", to: "#" },
  ];
    
  return (
    <aside className='sm:h-screen md:h-screen lg:h-screen xl-h-screen 2xl:h-screen'>
        <div className='container h-full'>
            <nav className='flex flex-col sm:w-30 md:w-40 lg:w-50 xl:w-64 bg-[#020028] border-r-[#07E0FC8A] border-b-[#07E0FC8A] border-2  bg-cover rounded-sm shadow-md opacity-90 items-start pt-5 sm:h-full md:h-full lg:h-full xl:h-full 2xl-h-full'>
                <div className='flex justify-center items-center '>
                    <img src={logo}
                    alt="logo" 
                    className='flex xs:h-7 xs-w-7 sm:h-10 sm:w-10 md:h-12 md:w-12 lg:h-25 lg:w-25 xl:h-[182px] xl-w-[185px] 2xl:h-[185px] 2xl:w-[187px]  opacity-100 '
                />
                </div>
                <div className='flex flex-col justify-between sm:space-y-7 md:space-y-10 lg:space-y-10 xl:space-y-15'>
                    <div className="flex flex-col justify-center text-white pl-3 sm:space-y-1 md:space-y-1 lg:space-y-1 xl:space-y-2 2xl:space-y-3 h-auto relative">
                        {menuItems.map((item, index) => (
                        <button
                            key={index}
                            onClick={() => setActiveIndex(index)}
                            className={`flex items-center sm:space-x-1 md:space-x-1 lg:space-x-2 xl:space-x-2 sm:px-1 md:px-3 lg:px-5 xl:px-7 sm:text-sm md:text-sm lg:text-sm xl:text-lg py-1 rounded-sm cursor-pointer transition-all duration-200
                            ${activeIndex === index ? "bg-gradient-to-r from-[#F1CC30] to-[#08BC2C] text-white" : "hover:bg-gradient-to-r from-[#F1CC30] to-[#08BC2C] text-white"}
                            `}
                        >
                            {item.icon}
                            <Link to={item.to}>{item.label}</Link>
                        </button>
                        ))}
                    </div>
                    <div>
                        <div className='flex hover:bg-gradient-to-r xl:rounded-sm xl:mx-3 from-[#F1CC30] to-[#08BC2C]'>
                            <button className='flex items-center sm:space-x-1 md:space-x-1 lg:space-x-2 xl:space-x-2 sm:px-1 md:px-3 lg:px-5 xl:px-7 sm:text-sm md:text-sm lg:text-sm xl:text-lg py-1 text-[#FFFFFF] cursor-pointer  transition-all duration-200'>
                                <LogOut className='sm:h-3 sm:w-3 md:h-3 md:w-3 lg:h-4 lg:w-4 xl:h-5 xl:w-5'/>
                                Log out
                            </button>
                        </div>
                        <div className='flex mt-2 justify-center items-center'>
                            <button className='bg-[#1ECBF061] text-[#FFFFFF] sm:px-6 sm:py-1 md:px-6 md:py-1 lg:px-7 lg:py-2 xl:px-18 xl:py-3 sm:mx-2 md:mx-2 lg:mx-3 xl:mx-4 border rounded-md mb-5'>
                                <img src="" alt="" />
                                Profile
                            </button>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    </aside>
  )
}