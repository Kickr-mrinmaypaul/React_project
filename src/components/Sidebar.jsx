import React from 'react'
import { Link } from 'react-router-dom';
import { House, ChartNoAxesCombined, Gamepad2, Weight, ChartColumnStacked, Bell, Settings ,Headset ,  LogOut} from 'lucide-react';

export default function Sidebar() {
  return (
    <aside className='sm:h-screen md:h-screen lg:h-screen 2xl:h-screen'>
    <nav className='flex flex-col sm:w-30 md:w-40  lg:w-50 xl:w-64 bg-[#020028] items-center pt-5 sm:h-screen  md:h-screen lg:h-screen xl:h-screen 2xl-h-screen'>
        <img src="https://media.licdn.com/dms/image/v2/C4D0BAQFzYHA4ygtkMg/company-logo_200_200/company-logo_200_200/0/1642661001136/kickr_technology_logo?e=2147483647&v=beta&t=qo533mSc55QOQv5CWwUDaViJ_nNB8PMkN48qw1-8tL4"
        alt="logo" 
        className='flex xs:h-7 xs-w-7 sm:h-10 sm:w-10 md:h-12 md:w-12 lg:h-25 lg:w-25 xl:h-28 xl-w-29 2xl:h-30 2xl:w-30 sm:mb-6 md:mb-7 lg:mb-8 xl:mb-8 2xl:mb-10'
        />
        <div className='flex flex-col justify-between sm:space-y-7 md:space-y-10 lg:space-y-10 xl:space-y-15'>
            <ul className='flex flex-col justify-center text-[#FFFFFF] pl-3 sm:space-y-1 md:space-y-1 lg:space-y-1 xl:space-y-2 2xl:space-y-3 h-auto  relative '>
            <li className='flex sm:space-x-1 md:space-x-1 lg:space-x-1 xl:space-x-2 hover:bg-[#F1CC30] sm:px-2 md:px-3 lg:px-5 xl:px-7 sm:text-sm md:text-sm lg:text-sm xl:text-lg sm:py-1 md:py-1 lg:py-1 xl:py-2 rounded-sm'> <House className='sm:h-3 sm:w-3 md:h-3 md:w-3 lg:h-4 lg:w-4 xl:h-5 xl:w-5'/><Link to="/" >Dashboard</Link></li>
            <li  className='flex sm:space-x-1 md:space-x-1 lg:space-x-2 xl:space-x-2 hover:bg-[#F1CC30] sm:px-2 md:px-3 lg:px-5 xl:px-7 sm:text-sm md:text-sm lg:text-sm xl:text-lg py-1 rounded-sm'><ChartNoAxesCombined className='sm:h-3 sm:w-3 md:h-3 md:w-3 lg:h-4 lg:w-4 xl:h-5 xl:w-5' /><Link to="/users">Users</Link></li>
            <li  className='flex sm:space-x-1 md:space-x-1 lg:space-x-2 xl:space-x-2 hover:bg-[#F1CC30] sm:px-2 md:px-3 lg:px-5 xl:px-7 sm:text-sm md:text-sm lg:text-sm xl:text-lg py-1 rounded-sm'><Gamepad2  className='sm:h-3 sm:w-3 md:h-3 md:w-3 lg:h-4 lg:w-4 xl:h-5 xl:w-5'/><Link to="#">Games</Link></li>
            <li  className='flex sm:space-x-1 md:space-x-1 lg:space-x-2 xl:space-x-2 hover:bg-[#F1CC30] sm:px-2 md:px-3 lg:px-5 xl:px-7 sm:text-sm md:text-sm lg:text-sm xl:text-lg py-1 rounded-sm'><Weight  className='sm:h-3 sm:w-3 md:h-3 md:w-3 lg:h-4 lg:w-4 xl:h-5 xl:w-5'/><Link to="#">Sales & Inventory</Link></li>
            <li  className='flex sm:space-x-1 md:space-x-1 lg:space-x-2 xl:space-x-2 hover:bg-[#F1CC30] sm:px-2 md:px-3 lg:px-5 xl:px-7 sm:text-sm md:text-sm lg:text-sm xl:text-lg py-1 rounded-sm'><ChartColumnStacked className='sm:h-3 sm:w-3 md:h-3 md:w-3 lg:h-4 lg:w-4 xl:h-5 xl:w-5'/><Link to="#">Leaderboard</Link></li>
            <li  className='flex sm:space-x-1 md:space-x-1 lg:space-x-2 xl:space-x-2 hover:bg-[#F1CC30] sm:px-2 md:px-3 lg:px-5 xl:px-7 sm:text-sm md:text-sm lg:text-sm xl:text-lg py-1 rounded-sm'><Bell className='sm:h-3 sm:w-3 md:h-3 md:w-3 lg:h-4 lg:w-4 xl:h-5 xl:w-5'/><Link to="#">Notification</Link></li>
            <li  className='flex sm:space-x-1 md:space-x-1 lg:space-x-2 xl:space-x-2 hover:bg-[#F1CC30] sm:px-2 md:px-3 lg:px-5 xl:px-7 sm:text-sm md:text-sm lg:text-sm xl:text-lg py-1 rounded-sm'><Settings className='sm:h-3 sm:w-3 md:h-3 md:w-3 lg:h-4 lg:w-4 xl:h-5 xl:w-5'/><Link to="#">Admin Setting</Link></li>
            <li  className='flex sm:space-x-1 md:space-x-1 lg:space-x-2 xl:space-x-2 hover:bg-[#F1CC30] sm:px-2 md:px-3 lg:px-5 xl:px-7 sm:text-sm md:text-sm lg:text-sm xl:text-lg py-1 rounded-sm'><Headset className='sm:h-3 sm:w-3 md:h-3 md:w-3 lg:h-4 lg:w-4 xl:h-5 xl:w-5'/><Link to="#">Contact Query</Link></li>
            
        </ul>
        <ul>
            <li className='flex hover:bg-[#F1CC30] px-5 py-1 rounded-sm'>
                <button className='flex sm:space-x-1 md:space-x-1 lg:space-x-2 xl:space-x-2 hover:bg-[#F1CC30] sm:px-2 md:px-3 lg:px-5 xl:px-7 sm:text-sm md:text-sm lg:text-sm xl:text-lg py-1 text-[#FFFFFF] cursor-pointer'><LogOut className='sm:h-3 sm:w-3 md:h-3 md:w-3 lg:h-4 lg:w-4 xl:h-5 xl:w-5'/>Log out</button>
            </li>
            <div className='mt-2 justify-center items-center'>
                <button className='bg-[#1a656d] text-[#FFFFFF] sm:px-6 sm:py-1 md:px-6 md:py-1 lg:px-7 lg:py-2 xl:px-12 xl:py-3 sm:mx-2 md:mx-2 lg:mx-3 xl:mx-4 border rounded-xl mb-5'>
                <img src="" alt="" />
                    Profile
                </button>
            </div>
        </ul>
        </div>
    </nav>
    </aside>
  )
}
