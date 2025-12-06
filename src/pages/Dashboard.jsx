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
    <div className='flex flex-row absolute top-20 h-auto left-85 justify-between space-x-4'>
        <div className='bg-[linear-gradient(166deg,#000000_0%,#020028_50%,#02002800_100%)] bg-no-repeat bg-[padding-box] shadow-[0_0_15.29px_15.29px_15.29px_15.29px_rgba(2,32,40,0.5)] h-27 w-45 rounded-lg text-[#FFFFFF]  pl-3 pt-2 justify-center opacity-70'>
            <h3 className='text-lg 2xl:text-2xl'>Active Users</h3>
            <span>number</span>
        </div>
        <div className='bg-[linear-gradient(166deg,#000000_0%,#020028_50%,#02002800_100%)] bg-no-repeat bg-[padding-box] shadow-[0_0_15.29px_15.29px_15.29px_15.29px_rgba(2,32,40,0.5)] h-27 w-45 rounded-lg text-[#FFFFFF] text-lg 2xl:text-2xl pl-3 pt-2 justify-center opacity-70'>
            <span>Total Games Played</span>
            
        </div>
    </div>
    <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 p-4 lg:col-span-2 flx-1 overflow-auto absolute bg-[#020028] w-auto sm:top-27 md:top-27 lg:top-31 xl:top-36 2xl:top-39 sm:left-30 md:left-40  lg:left-50 xl:left-64 right-0 sm:pl-8 sm:pr-5 sm:pt-4 md:pl-9 md:pr-6 md:pt-4 xl:pl-15 xl:pr-10 xl:pt-7 2xl:pl-18 2xl:pr-12 2xl:pt-8'>
        <div className='h-auto w-auto items-center bg-[linear-gradient(166deg,#000005_0%,#020028_19%,#00000000_100%)] bg-no-repeat bg-[padding-box]  border-1 border-[#9B9476] rounded-lg p-4'>
              <h1 className='sm:text-sm md:text-sm lg:text-lg xl:text-xl 2xl:text-2xl text-gray-400'>Game Performance</h1>      
              <p className='sm:text-xs md:text-xs lg-text-sm xl:text-sm text-gray-400'>Comparision between infinity and time game</p>      
             <LineChart
                style={{ width: '100%', aspectRatio: 1.618, maxWidth: "923.31px", maxHeight:"404.85px" }}
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
                <Line type="monotone" dataKey="users" stroke="#FF007D" strokeWidth={2}/>
                <Line type="monotone" dataKey="user2" stroke="#00E6FF" strokeWidth={2}/>
                <XAxis dataKey="name" />
                <YAxis width="auto" label={{ value: 'users', position: 'insideLeft', angle: -90 }} />
                <Legend align="right" />
                <Tooltip />
            </LineChart>
        </div>
        <div className='relative h-auto w-auto items-center bg-[linear-gradient(166deg,#000005_0%,#020028_19%,#00000000_100%)] bg-no-repeat bg-[padding-box] border-1 border-[#9B9476] rounded-lg p-4'>
            <h1 className='sm:text-sm md:text-sm lg:text-lg xl:text-xl 2xl:text-2xl text-gray-400'>Revenue Growth</h1>      
            <p className='sm:text-xs md:text-xs lg-text-sm xl:text-sm text-gray-400'>Monthly revenue for past 6 months</p>   
            <BarChart
            style={{   width: '100%', aspectRatio: 1.618, maxWidth: "456.7px", maxHeight:"405.85px" }}
            responsive
            data={data}
            className='sm:h-35 sm:w-60 md:h-42 md:w-72 lg:h-56 lg:w-95 xl:h-70 xl:w-119'
            >
            <XAxis dataKey='name'/>
            <YAxis dataKey='users'/>
            <Bar dataKey="users" fill="#8884d8" />
            </BarChart>
        </div>
        <div className='items-center h-auto bg-[linear-gradient(166deg,#000005_0%,#020028_19%,#00000000_100%)] bg-no-repeat bg-[padding-box] border-1 border-[#9B9476] rounded-lg p-4'>
            <h1 className='sm:text-sm md:text-sm lg:text-lg xl:text-xl 2xl:text-2xl justify-center items-center text-white mb-2'>Top Selling Items</h1>
            <h3 className='sm:text-xs md:text-xs lg-text-sm xl:text-sm justify-center items-center text-white'>Most popular items by sales</h3>
            <div className='items-center h-auto mb-1 bg-[#020028] border-2 border-[#9B9476] rounded-lg mt-2'>
               
                <TableFormat 
                columns={DemoData.columns}
                data={DemoData.data}
                />

            </div>
        </div>
        <div className='items-center h-auto bg-[linear-gradient(166deg,#000005_0%,#020028_19%,#00000000_100%)] bg-no-repeat bg-[padding-box] border-1 border-[#9B9476] rounded-lg p-4'>
            <h1 className='sm:text-sm md:text-sm lg:text-lg xl:text-xl 2xl:text-2xl justify-center items-center text-white mb-2'>Top Selling Items</h1>
            <h3 className='sm:text-xs md:text-xs lg-text-sm xl:text-sm justify-center items-center text-white'>Most popular items by sales</h3>
            <div className='items-center h-auto mb-1 bg-[#020028] border-2 border-[#9B9476] rounded-lg mt-2'>
        
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

