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
    <div>
    {/* <Navbar/> */}
    
    <div className='grid grid-cols-2 space-x-5 space-y-5 bg-[#020028] absolute h-auto w-auto top-36 left-1/6 right-0 border-2 border-l-[#1a656d] pl-15 pr-10 pt-10 pb-22'>
        <div className='items-center bg-[#000005] border-2 border-[#9B9476] rounded-lg p-3'>
              <h1 className='text-xl text-gray-400'>Game Performance</h1>      
              <p className='text-sm text-gray-400'>Comparision between infinity and time game</p>      
             <LineChart
                style={{ width: '100%', aspectRatio: 1.618, maxWidth: 600 }}
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
                <Line type="monotone" dataKey="users" stroke="purple" strokeWidth={2} name="Game Performance" />
                <Line type="monotone" dataKey="user2" stroke="blue" strokeWidth={2} name="Game Performance" />
                <XAxis dataKey="name" />
                <YAxis width="auto" label={{ value: 'users', position: 'insideLeft', angle: -90 }} />
                <Legend align="right" />
                <Tooltip />
            </LineChart>
        </div>
        <div className='items-center bg-[#000005] border-2 border-[#9B9476] rounded-lg pt-5 p-3'>
            <h1 className='text-xl text-gray-400'>Revenue Growth</h1>      
            <p className='text-sm text-gray-400'>Monthly revenue for past 6 months</p>   
            <BarChart
            style={{ width: '100%', maxWidth: '400px', maxHeight: '100px', aspectRatio: 1.618,  maxHeight: 500 }}
            responsive
            data={data}
            >
            <XAxis dataKey='name'/>
            <YAxis dataKey='users'/>
            <Bar dataKey="users" fill="#8884d8" />
            </BarChart>
        </div>
        <div className='items-center  bg-[#000005] border-2 border-[#9B9476] rounded-lg p-3'>
            <h1 className='text-lg justify-center items-center text-white mb-2'>Top Selling Items</h1>
            <h3 className='text-sm justify-center items-center text-white'>Most popular items by sales</h3>
            <div className='items-center bg-[#020028] border-2 border-[#9B9476] rounded-lg p-3 mt-2'>
                <table className='text-sm text-gray-400 px-3'>
                    <thead className='justify-between'>
                        <tr>
                            <th className="px-4 py-2">Item Name</th>
                            <th className="px-4 py-2">Type</th>
                            <th className="px-4 py-2">Price</th>
                            <th className="px-4 py-2">Units Sold</th>
                            </tr>
                    </thead>

                    <tbody>
                        {gameItems.map((item) => (
                        <tr key={item.id} className="border-gray-600 hover:bg-gray-700">
                        <td className="px-4 py-2 text-center">{item.itemName}</td>
                        <td className="px-4 py-2 text-center">{item.type}</td>
                        <td className="px-4 py-2 text-center">{item.price}</td>
                        <td className="px-4 py-2 text-center">{item.unitsSold}</td>
                    </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
        <div className='items-center  bg-[#000005] border-2 border-[#9B9476] rounded-lg p-3'>
            <h1 className='text-lg justify-center items-center text-white mb-2'>Top Selling Items</h1>
            <h3 className='text-sm justify-center items-center text-white'>Most popular items by sales</h3>
            <div className='items-center bg-[#020028] border-2 border-[#9B9476] rounded-lg p-3 mt-2'>
                <table className='text-sm text-gray-400 px-3'>
                    <thead className='justify-between'>
                        <tr>
                            <th className="px-4 py-2">Item Name</th>
                            <th className="px-4 py-2">Type</th>
                            <th className="px-4 py-2">Price</th>
                            <th className="px-4 py-2">Units Sold</th>
                            </tr>
                    </thead>

                    <tbody>
                        {gameItems.map((item) => (
                        <tr key={item.id} className="border-gray-600 hover:bg-gray-700">
                        <td className="px-4 py-2 text-center">{item.itemName}</td>
                        <td className="px-4 py-2 text-center">{item.type}</td>
                        <td className="px-4 py-2 text-center">{item.price}</td>
                        <td className="px-4 py-2 text-center">{item.unitsSold}</td>
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
