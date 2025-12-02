import React from 'react'
import { Search, FunnelPlus } from 'lucide-react'
import users from '../user/gameItems'

export default function Users() {
  return (
    <div className='bg-[#020028] absolute h-screen w-auto top-36 left-1/6 right-0 border-2 border-l-[#1a656d]  pl-15 pr-10 pt-10 pb-5'>
        <div className='bg-[#000005] border-2 border-[#9B9476] rounded-2xl h-auto p-3'>
            <h1 className='text-xl text-amber-50'>User List</h1>
            <h3 className='text-sm text-amber-50'>View and manage all users</h3>
            <div className='flex flex-row justify-between items-center '>
                <div className='flex bg-[#39384d] items-center border-0 rounded-2xl px-8 py-2 space-x-3 text-amber-50 text-lg mt-3'>
                    <Search className='flex h-6 w-6'/>
                    <input type="search" placeholder='search users' className='text-white'/>
                </div>
                
                <button className='flex bg-[#9B9476] text-amber-50 text-lg px-3 py-1.5 cursor-pointer border-1 border-[#A1A1A1] rounded-2xl items-center'><FunnelPlus className='flex h- w-7'/>Filter</button>
            </div>
            

            <div className='bg-[#000005] border-2 border-[#9B9476] rounded-2xl h-auto p-3 mt-5 overflow-x-auto'>
                <table className='text-sm text-amber-50 px-3'>
                    <thead className='justify-between '>
                        <tr className='flex flex-row space-x-30 items-center'>
                            <th>S.No</th>
                            <th>USER-ID</th>
                            <th>Username</th>
                            <th>Account type</th>
                            <th>Login details</th>
                            <th>Coin balance</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                </table>
            </div>
            <div className='flex flex-row right-0  space-x-3 mt-5'>
                <button className='bg-[#000005] border-1 border-[#9B9476] px-4 py-1 rounded-sm text-[#9B9476] cursor-pointer'>Previous</button>
                <button className='bg-[#D8D7D7] border-1 border-[#BBBBBB] px-4 py-1 rounded-sm text-gray-600 cursor-pointer'>Next</button>
            </div>
        </div>
    </div>
  )
}
