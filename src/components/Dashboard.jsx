import React from 'react'

export default function Dashboard() {
  return (
    <div className='flex justify-between items-center min-w-full'>
            <div className='flex justify-between items-center bg-purple-500 px-5 pt-5 pb-20'>
            <h1 className='text-3xl text-amber-50'>Dashboard Overview</h1>
            <div className='flex space-x-5'>
                <input type="search" placeholder='search for anything' className='bg-amber-50 border-0 rounded-2xl px-8 py-2'/>
                <button className='bg-amber-50 border-0 p-2 rounded-2xl'>Icon</button>
            </div>
        </div>
    </div>
  )
}
