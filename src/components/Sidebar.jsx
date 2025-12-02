import React from 'react'
import { Link } from 'react-router-dom';
import { House, ChartNoAxesCombined, Gamepad2, Weight, ChartColumnStacked, Bell, Settings ,Headset ,  LogOut} from 'lucide-react';

export default function Sidebar() {
  return (
    <aside className=' h-screen'>
    <nav className='flex flex-col w-1/6 bg-[#020028] items-center pt-5 min-h-screen'>
        <img src="https://img.freepik.com/free-vector/bird-colorful-gradient-design-vector_343694-2506.jpg?semt=ais_hybrid&w=740&q=80" 
        alt="logo" 
        className='flex h-28 w-28 mb-8'
        />
        <div className='flex flex-col justify-between space-y-20'>
            <ul className='flex flex-col text-l text-[#FFFFFF] pl-3 space-y-5 h-auto  relative '>
            <li className='flex space-x-2 hover:bg-[#F1CC30] px-5 py-1 rounded-sm'> <House className='h-5 w-5'/><Link to="/" >Dashboard</Link></li>
            <li  className='flex space-x-2 hover:bg-[#F1CC30] px-5 py-1 rounded-sm'><ChartNoAxesCombined className='h-5 w-5' /><Link to="/users">Users</Link></li>
            <li  className='flex space-x-2 hover:bg-[#F1CC30] px-5 py-1 rounded-sm'><Gamepad2  className='h-5 w-5'/><Link to="#">Games</Link></li>
            <li  className='flex space-x-2 hover:bg-[#F1CC30] px-5 py-1 rounded-sm'><Weight  className='h-5 w-5'/><Link to="#">Sales & Inventory</Link></li>
            <li  className='flex space-x-2 hover:bg-[#F1CC30] px-5 py-1 rounded-sm'><ChartColumnStacked className='h-5 w-5'/><Link to="#">Leaderboard</Link></li>
            <li  className='flex space-x-2 hover:bg-[#F1CC30] px-5 py-1 rounded-sm'><Bell className='h-5 w-5'/><Link to="#">Notification</Link></li>
            <li  className='flex space-x-2 hover:bg-[#F1CC30] px-5 py-1 rounded-sm'><Settings className='h-5 w-5'/><Link to="#">Admin Setting</Link></li>
            <li  className='flex space-x-2 hover:bg-[#F1CC30] px-5 py-1 rounded-sm'><Headset className='h-5 w-5'/><Link to="#">Contact Query</Link></li>
            
        </ul>
        <ul>
            <li className='flex hover:bg-[#F1CC30] px-5 py-1 rounded-sm'>
                <button className='flex space-x-3 text-[#FFFFFF] cursor-pointer'><LogOut className='h-5 w-5'/>Log out</button>
            </li>
            <div className='mt-2'>
                <button className='bg-[#1a656d] text-[#FFFFFF] px-12 py-3 border rounded-xl mb-5'>
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
