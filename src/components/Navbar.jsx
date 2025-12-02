import React from 'react';
import { Search,BellDot } from 'lucide-react';

export default function Navbar(){
  return (
    // <nav>
    //     <div className='flex justify-between items-center bg-purple-500 px-5 pt-5 pb-20 min-w-full overflow-auto'>
    //         <h1 className='text-3xl text-amber-50'>Dashboard Overview</h1>
    //         <div className='flex space-x-5'>
    //             <input type="search" placeholder='search for anything' className='bg-[#020028] border-0 rounded-2xl px-8 py-2'/>
    //             <button className='bg-amber-50 border-0 p-2 rounded-2xl'>Icon</button>
    //         </div>
    //     </div>
    // </nav>

    <nav className='justify-between top-0 right-0 left-1/6 space-y-10 w-auto absolute'>
      <div className='flex justify-between items-center bg-[#1a656d] px-7 pt-5 pb-20'>
        <h1 className='text-3xl text-amber-50'>Dashboard Overview</h1>
        <div className='flex justify-between items-center space-x-4'>
          <div className='flex bg-[#39384d] items-center border-0 rounded-2xl px-8 py-2 space-x-3 text-amber-50 text-lg'>
            <Search className='flex h-6 w-6'/>
            <input type="search" placeholder='search for anything'/>
         </div>
         <div>
            <button className=' bg-[#39384d] text-amber-50 border-0 p-2 rounded-2xl cursor-pointer'><BellDot className='w-6 h-7'/></button>
          </div>
        </div>
      </div>
    </nav>
  )
}
