import React from 'react'
import { Link } from 'react-router-dom';

export default function Sidebar() {
  return (
    <div className='flex flex-col w-1/6 bg-[#020028] overflow-auto justify-center items-center pt-5 min-h-screen'>
        <img src="https://img.freepik.com/free-vector/bird-colorful-gradient-design-vector_343694-2506.jpg?semt=ais_hybrid&w=740&q=80" 
        alt="logo" 
        className='flex h-28 w-28 mb-8'
        />
        <div className='flex flex-col justify-between'>
            <ul className='flex flex-col text-l text-[#FFFFFF] pl-3 space-y-5 h-screen relative'>
            <li><Link to="/">Dashboard</Link></li>
            <li><Link to="#">Users</Link></li>
            <li><Link to="#">Sales & Inventory</Link></li>
            <li><Link to="#">Leaderboard</Link></li>
            <li><Link to="#">Notification</Link></li>
            <li><Link to="#">Admin Setting</Link></li>
            <li><Link to="#">Contact Query</Link></li>
        </ul>
        <ul>
            <li>
                <button className=' text-[#FFFFFF] mb-1'>Log out</button>
            </li>
            <div>
                <button className='bg-[#1ECBF061] px-12 py-3 border rounded-xl mb-5'>
                <img src="" alt="" />
                    Admin
                </button>
            </div>
        </ul>
        </div>
    </div>
  )
}
