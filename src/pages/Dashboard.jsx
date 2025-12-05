import React from 'react'
import { Search,BellDot } from 'lucide-react';
import Navbar from '../components/Navbar';
import { CartesianGrid, Legend, Line, LineChart, XAxis, YAxis, Tooltip,  BarChart, Bar } from 'recharts';
import gameItems from '../user/gameItems';
import TableFormat from '../components/TableTemplate/TableFormat';
import DemoData from '../user/DemoData.json'

export default function Dashboard() {
    const data = [
  { name: "Jan", users: 400 , user2: 500},
  { name: "Feb", users: 300 , user2: 250 },
  { name: "Mar", users: 500 , user2: 600},
  { name: "Apr", users: 200 , user2: 300},
  { name: "May", users: 700 , user2: 700},
];

  return (
    <div >
    {/* <Navbar/> */}
    <div className='flex flex-row absolute top-20  left-85 justify-between space-x-4'>
        <div className='bg-[#020028] h-27 w-45 rounded-lg text-[#FFFFFF]  pl-3 pt-2 justify-center opacity-70'>
            <h3 className='text-lg 2xl:text-2xl'>Active Users</h3>
            <span>number</span>
        </div>
        <div className='bg-[#020028] h-27 w-45 rounded-lg text-[#FFFFFF] text-lg 2xl:text-2xl pl-3 pt-2 justify-center opacity-70'>
            <span>Total Games Played</span>
            
        </div>
    </div>
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
               
                <TableFormat 
                columns={DemoData.columns}
                data={DemoData.data}
                />

            </div>
        </div>
        <div className='items-center sm:h-32 md:h-40 lg:h-52 xl:h-65 2xl:h-78 bg-[#000005] border-2 border-[#9B9476] rounded-lg sm:p-1 md:p-1 lg:p-2 xl:p-2 2xl:p-3'>
            <h1 className='sm:text-sm md:text-sm lg:text-lg xl:text-xl 2xl:text-2xl justify-center items-center text-white mb-2'>Top Selling Items</h1>
            <h3 className='sm:text-xs md:text-xs lg-text-sm xl:text-sm justify-center items-center text-white'>Most popular items by sales</h3>
            <div className='items-center h-auto bg-[#020028] border-2 border-[#9B9476] rounded-lg mt-2'>
        
                <TableFormat 
                columns={DemoData.columns}
                data={DemoData.data}
                />

            </div>
        </div>
    </div>
    </div>
  )
}

