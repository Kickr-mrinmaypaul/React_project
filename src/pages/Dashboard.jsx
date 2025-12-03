import React from 'react'
import { Search,BellDot } from 'lucide-react';
import Navbar from '../components/Navbar';
import { CartesianGrid, Legend, Line, LineChart, XAxis, YAxis, Tooltip,  BarChart, Bar } from 'recharts';
import gameItems from '../user/gameItems';


export default function Dashboard() {
    const data = [
  { name: "Jan", users: 400 , user2: 500},
  { name: "Feb", users: 300 , user2: 250 },
  { name: "Mar", users: 500 , user2: 600},
  { name: "Apr", users: 200 , user2: 300},
  { name: "May", users: 700 , user2: 700},
];

  return (
    // <nav className='justify-between top-0 right-0 left-1/6 space-y-10 w-auto absolute'>
    //   <div className='flex justify-between items-center bg-purple-500 px-5 pt-5 pb-20'>
    //     <h1 className='text-3xl text-amber-50'>Dashboard Overview</h1>
    //     <div className='flex justify-between items-center space-x-4'>
    //       <div className='flex bg-[#39384d] items-center border-0 rounded-2xl px-8 py-2 space-x-3 text-amber-50 text-lg'>
    //         <Search className='flex h-6 w-6'/>
    //         <input type="search" placeholder='search for anything'/>
    //      </div>
    //      <div>
    //         <button className=' bg-[#39384d] border-0 p-2 rounded-2xl cursor-pointer text-amber-50'><BellDot className='flex w-6 h-7'/></button>
    //       </div>
    //     </div>
    //   </div>
    // </nav>
    <div >
    {/* <Navbar/> */}
    
    <div className='grid grid-cols-2 flx-1 overflow-auto absolute sm:space-x-2 md:space-x-2 lg:space-x-3 xl:space-x-5 2xl:space-x-7 sm:space-y-3 md:space-y-3 lg:space-y-4 xl:space-y-5 2xl:space-y-7 bg-[#020028] w-auto sm:top-27 md:top-27 lg:top-31 xl:top-36 2xl:top-39 sm:left-30 md:left-40  lg:left-50 xl:left-64 right-0 border-2 border-l-[#1a656d] sm:pl-8 sm:pr-5 sm:pt-4 md:pl-9 md:pr-6 md:pt-4 xl:pl-15 xl:pr-10 xl:pt-7 2xl:pl-18 2xl:pr-12 2xl:pt-8'>
        <div className='sm:h-35 sm:w-82 md:h-42 md:w-99 lg:h-56 lg:w-132 xl:h-70 xl:w-165 2xl:h-84 2xl:w-198 items-center bg-[#000005] border-2 border-[#9B9476] rounded-lg sm:p-1.5 sm:pb-3 md:p-2 md:pb-3.5 lg:p-2.5 lg:pb-5 xl:p-3 xl:pb-6 2xl:p-3.5 2xl:pb-7'>
              <h1 className='sm:text-sm md:text-sm lg:text-lg xl:text-xl 2xl:text-2xl text-gray-400'>Game Performance</h1>      
              <p className='sm:text-xs md:text-xs lg-text-sm xl:text-sm text-gray-400'>Comparision between infinity and time game</p>      
             <LineChart
                style={{ width: '100%', aspectRatio: 1.618, maxWidth: 600, maxHeight: '100%' }}
                responsive
                data={data}
                margin={{
                top: 20,
                right: 20,
                bottom: 5,  
                left: 0,
                }}
                >
                <CartesianGrid stroke="#aaa" strokeDasharray="5 5" />
                <Line type="monotone" dataKey="users" stroke="purple" strokeWidth={2}/>
                <Line type="monotone" dataKey="user2" stroke="blue" strokeWidth={2}/>
                <XAxis dataKey="name" />
                <YAxis width="auto" label={{ value: 'users', position: 'insideLeft', angle: -90 }} />
                <Legend align="right" />
                <Tooltip />
            </LineChart>
        </div>
        <div className='sm:h-35 sm:w-60 sm:ml-12 sm:pt-2.5 sm:p-1.5 sm:pb-5 md:h-42 md:w-72 md:ml-15 md:pt-3 md:p-2 md:pb-6 lg:h-56 lg:w-95 lg:ml-20 lg:pt-4 lg:p-2.5 lg:pb-8 xl:h-70 xl:w-119 xl:ml-25 xl:pt-5 xl:p-3 xl:pb-10 2xl:h-84 2xl:w-143 2xl:ml-30 2xl:pt-6 2xl:p-3.5 2xl:pb-12 items-center bg-[#000005] border-2 border-[#9B9476] rounded-lg'>
            <h1 className='sm:text-sm md:text-sm lg:text-lg xl:text-xl 2xl:text-2xl text-gray-400'>Revenue Growth</h1>      
            <p className='sm:text-xs md:text-xs lg-text-sm xl:text-sm text-gray-400'>Monthly revenue for past 6 months</p>   
            <BarChart
            style={{  width: '100%', aspectRatio: 1.618, maxWidth: 500, maxHeight: '100%' }}
            responsive
            data={data}
            className='sm:h-35 sm:w-60 md:h-42 md:w-72 lg:h-56 lg:w-95 xl:h-70 xl:w-119'
            >
            <XAxis dataKey='name'/>
            <YAxis dataKey='users'/>
            <Bar dataKey="users" fill="#8884d8" />
            </BarChart>
        </div>
        <div className='items-center sm:h-32 md:h-40 lg:h-52 xl:h-65 2xl:h-78 bg-[#000005] border-2 border-[#9B9476] rounded-lg sm:p-1 md:p-1 lg:p-2 xl:p-2 2xl:p-3'>
            <h1 className='sm:text-sm md:text-sm lg:text-lg xl:text-xl 2xl:text-2xl justify-center items-center text-white mb-2'>Top Selling Items</h1>
            <h3 className='sm:text-xs md:text-xs lg-text-sm xl:text-sm justify-center items-center text-white'>Most popular items by sales</h3>
            <div className='items-center h-auto bg-[#020028] border-2 border-[#9B9476] rounded-lg mt-2'>
                <table className='text-sm text-gray-400 px-2'>
                    <thead className='justify-between'>
                        <tr>
                            <th className="sm:px-3 sm:py-0.5 md:px-3.5 md:py-1 lg:px-5 lg:py-1 xl:px-6 xl:py-1 2xl:px-7 2xl:py-1.5">Item Name</th>
                            <th className="sm:px-3 sm:py-0.5 md:px-3.5 md:py-1 lg:px-5 lg:py-1 xl:px-6 xl:py-1 2xl:px-7 2xl:py-1.5">Type</th>
                            <th className="sm:px-3 sm:py-0.5 md:px-3.5 md:py-1 lg:px-5 lg:py-1 xl:px-6 xl:py-1 2xl:px-7 2xl:py-1.5">Price</th>
                            <th className="sm:px-3 sm:py-0.5 md:px-3.5 md:py-1 lg:px-5 lg:py-1 xl:px-6 xl:py-1 2xl:px-7 2xl:py-1.5">Units Sold</th>
                            </tr>
                    </thead>

                    <tbody>
                        {gameItems.map((item) => (
                        <tr key={item.id} className="border-gray-600 hover:bg-gray-700">
                        <td className="sm:px-3 sm:py-0.5 md:px-3.5 md:py-1 lg:px-5 lg:py-1 xl:px-6 xl:py-1 2xl:px-7 2xl:py-1.5 text-center">{item.itemName}</td>
                        <td className="sm:px-3 sm:py-0.5 md:px-3.5 md:py-1 lg:px-5 lg:py-1 xl:px-6 xl:py-1 2xl:px-7 2xl:py-1.5 text-center">{item.type}</td>
                        <td className="sm:px-3 sm:py-0.5 md:px-3.5 md:py-1 lg:px-5 lg:py-1 xl:px-6 xl:py-1 2xl:px-7 2xl:py-1.5 text-center">{item.price}</td>
                        <td className="sm:px-3 sm:py-0.5 md:px-3.5 md:py-1 lg:px-5 lg:py-1 xl:px-6 xl:py-1 2xl:px-7 2xl:py-1.5 text-center">{item.unitsSold}</td>
                    </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
        <div className='items-center sm:h-32 md:h-40 lg:h-52 xl:h-65 2xl:h-78 bg-[#000005] border-2 border-[#9B9476] rounded-lg sm:p-1 md:p-1 lg:p-2 xl:p-2 2xl:p-3'>
            <h1 className='sm:text-sm md:text-sm lg:text-lg xl:text-xl 2xl:text-2xl justify-center items-center text-white mb-2'>Top Selling Items</h1>
            <h3 className='sm:text-xs md:text-xs lg-text-sm xl:text-sm justify-center items-center text-white'>Most popular items by sales</h3>
            <div className='items-center h-auto bg-[#020028] border-2 border-[#9B9476] rounded-lg mt-2'>
                <table className='text-sm text-gray-400 px-2'>
                    <thead className='justify-between'>
                        <tr>
                            <th className="sm:px-3 sm:py-0.5 md:px-3.5 md:py-1 lg:px-5 lg:py-1 xl:px-6 xl:py-1 2xl:px-7 2xl:py-1.5">Item Name</th>
                            <th className="sm:px-3 sm:py-0.5 md:px-3.5 md:py-1 lg:px-5 lg:py-1 xl:px-6 xl:py-1 2xl:px-7 2xl:py-1.5">Type</th>
                            <th className="sm:px-3 sm:py-0.5 md:px-3.5 md:py-1 lg:px-5 lg:py-1 xl:px-6 xl:py-1 2xl:px-7 2xl:py-1.5">Price</th>
                            <th className="sm:px-3 sm:py-0.5 md:px-3.5 md:py-1 lg:px-5 lg:py-1 xl:px-6 xl:py-1 2xl:px-7 2xl:py-1.5">Units Sold</th>
                            </tr>
                    </thead>

                    <tbody>
                        {gameItems.map((item) => (
                        <tr key={item.id} className="border-gray-600 hover:bg-gray-700">
                        <td className="sm:px-3 sm:py-0.5 md:px-3.5 md:py-1 lg:px-5 lg:py-1 xl:px-6 xl:py-1 2xl:px-7 2xl:py-1.5 text-center">{item.itemName}</td>
                        <td className="sm:px-3 sm:py-0.5 md:px-3.5 md:py-1 lg:px-5 lg:py-1 xl:px-6 xl:py-1 2xl:px-7 2xl:py-1.5 text-center">{item.type}</td>
                        <td className="sm:px-3 sm:py-0.5 md:px-3.5 md:py-1 lg:px-5 lg:py-1 xl:px-6 xl:py-1 2xl:px-7 2xl:py-1.5 text-center">{item.price}</td>
                        <td className="sm:px-3 sm:py-0.5 md:px-3.5 md:py-1 lg:px-5 lg:py-1 xl:px-6 xl:py-1 2xl:px-7 2xl:py-1.5 text-center">{item.unitsSold}</td>
                    </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    </div>
    </div>
  )
}
