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

    <nav className='justify-between flex flex-col top-0 right-0 sm:left-30 md:left-40  lg:left-50 xl:left-64 space-y-10 sm:w-auto md:w-auto lg:w-auto xl:w-auto 2xl:w-auto absolute'>
      <div className='flex justify-between items-center bg-[#1a656d] sm:px-4 md:px-4 lg:px-5 xl:px-7 2xl:px-9 sm:pt-3 md:pt-3 lg:pt-4 xl:pt-5 2xl:pt-7 sm:pb-15 md:pb-15 lg:pb-17 xl:pb-20 2xl:pb-23'>
        <h1 className='sm:text-lg md:text-lg lg:text-2xl xl:text-3xl 2xl:4xl text-amber-50'>Dashboard Overview</h1>
        <div className='flex justify-between items-center sm:space-x-2 md:space-x-2 lg:space-x-3 xl:space-x-4 2xl:space-x-5'>
          <div className='flex bg-[#39384d] items-center border-0 rounded-2xl sm:px-5 sm:py-1.5 md:px-5 md:py-1.5 lg:px-6 lg:py-1.5 xl:px-8 xl:py-2 2xl:px-10 2xl:py-3 sm:spacex-1 md:space-x-1 lg:space-x-2 xl:space-x-3 2xl:space-x-4 text-amber-50 sm:text-sm md:text-sm lg:text-sm xl:text-lg'>
            <Search className='flex sm:h-3 sm:w-3 md:h-3 md:w-3 lg:h-4 lg:w-4 xl:h-6 xl:w-6 2xl:h-7 2xl-w-7'/>
            <input type="search" placeholder='search for anything'/>
         </div>
         <div>
            <button className=' bg-[#39384d] text-amber-50 border-0 p-2 rounded-2xl cursor-pointer'><BellDot className='sm:w-4 sm:h-5 md:w-4 md:h-5 lg:w-5 lg:h-6 xl:w-6 xl:h-7 2xl:w-7 2xl:h-8'/></button>
          </div>
        </div>
      </div>
    </nav>
  )
}
