import React,{useState} from 'react'
import { Search, FunnelPlus, EllipsisVertical  } from 'lucide-react'
import users from '../user/users'
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { Link } from 'react-router-dom'
import { Outlet } from 'react-router-dom'
import UsersTable from '../components/TableTemplate/TableFormat'
import UsersData from '../user/UsersData.json'


export default function Users() {
    const [isBlocked, setIsBlocked] = useState({});

    const handleBlock = (id) =>{
        setIsBlocked((prev)=>({
            ...prev,[id]: true,
        }));
    }

    const handleUnblock = (id) =>{
        setIsBlocked((prev)=>({
            ...prev, [id]: false,
        }))
    }
    const highlightedClasses = " text-sm text-black bg-red-200 px-3";
    const defaultClasses = "text-sm text-amber-50 px-3"

  return (
    <div className='bg-[#020028] flx-1 overflow-auto absolute h-screen w-auto sm:top-27 md:top-27 lg:top-31 xl:top-36 2xl:top-39 sm:left-30 md:left-40  lg:left-50 xl:left-64 right-0 border-2 border-l-[#1a656d]  sm:pl-8 sm:pr-5 sm:pt-4 md:pl-9 md:pr-6 md:pt-4 xl:pl-15 xl:pr-10 xl:pt-7 2xl:pl-18 2xl:pr-12 2xl:pt-8'>
        <div className='bg-[#000005] border-2 border-[#9B9476] rounded-2xl h-auto sm:p-2 md:p-2 lg:p-2.5 xl:p-3 2xl:p-4'>
            <h1 className='sm:text-sm md:text-sm lg:text-lg xl:text-xl 2xl:text-2xl text-amber-50'>User List</h1>
            <h3 className='sm:text-xs md:text-xs lg:text-xs xl:text-sm 2xl:text-lg text-amber-50'>View and manage all users</h3>
            <div className='flex flex-row justify-between items-center '>
                <div className='flex bg-[#39384d] items-center border-0 rounded-2xl sm:px-6 sm:py-1.5 md:px-6 md:py-1.5 lg:px-6.5 lg:py-1.5 xl:px-8 xl:py-2 2xl:px-9 2xl:py-2.5 sm:space-x-1 md:space-x-1 lg:space-x-2 xl:space-x-3  text-amber-50 sm:text-sm md:text-sm lg:text-lg xl:text-lg mt-3'>
                    <Search className='flex sm:h-4 sm:w-4 md:h-4 md:w-4 lg:h-5 lg:w-5 xl:h-6 xl:w-6 2xl:h-8 2xl:w-8'/>
                    <input type="search" placeholder='search users' className='text-white'/>
                </div>
                    <Menu as="div" className="relative inline-block">
                        <MenuButton className="inline-flex w-full justify-center cursor-pointer gap-x-1.5 rounded-md bg-[#9B9476] sm:px-2 sm:py-1 md:px-2 md:py-1 lg:px-2.5 lg:py-1.5 xl:px-3 xl:py-2 2xl:px-4 2xl:py-2.4 sm:text-xs md:text-xs lg:text-xs xl:text-sm 2xl:text-lg font-semibold text-white inset-ring-1 inset-ring-white/5 hover:bg-white/20">
                            Filter<FunnelPlus className='flex sm:h-4 sm:w-4 md:h-4 md:w-4 lg:h-5 lg:w-5 xl:h-6 xl:w-6 2xl:h-8 2xl:w-8'/>
                            <ChevronDownIcon aria-hidden="true" className="-mr-1 sm:size-3 md:size:3 lg:size-4 xl:size-5 2xl:size-7 text-gray-400" />
                        </MenuButton>

                        <MenuItems
                            transition
                            className="absolute right-0 z-10 mt-2 w-56 origin-top-right divide-y divide-white/10 rounded-md bg-gray-800 outline-1 -outline-offset-1 outline-white/10 transition data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in"
                        >
                        <div className="py-1">
                        <MenuItem>
                        <Link
                        to="#"
                        className="block px-4 py-2 text-sm text-gray-300 data-focus:bg-white/5 data-focus:text-white data-focus:outline-hidden"
                        >
                        All
                        </Link>
                        </MenuItem>
                        <MenuItem>
                        <Link
                            to="#"
                            className="block px-4 py-2 text-sm text-gray-300 data-focus:bg-white/5 data-focus:text-white data-focus:outline-hidden"
                        >
                            Infinity
                        </Link>
                    </MenuItem>
                    <MenuItem>
                        <Link
                            to="#"
                            className="block px-4 py-2 text-sm text-gray-300 data-focus:bg-white/5 data-focus:text-white data-focus:outline-hidden"
                        >
                            Time
                        </Link>
                    </MenuItem>
                </div>
                </MenuItems>
            </Menu>
            </div>
            <div className='bg-[#000005] border-2 border-[#9B9476] rounded-2xl flex-1 overflow-auto p-3 mt-5 overflow-x-auto'>
                <table className='text-sm text-amber-50 px-3'>
                    <thead className='justify-between '>
                        <tr>
                            <th className="sm:px-3 sm:py-0.5 md:px-4 md:py-1 lg:px-7 lg:py-1 xl:px-11 xl:py-1 2xl:px-13 2xl:py-1.5 sm:text-xs md:text-xs lg:text-sm xl:text-sm 2xl:text-2xl text-semibold ">S.No</th>
                            <th className="sm:px-3 sm:py-0.5 md:px-4 md:py-1 lg:px-7 lg:py-1 xl:px-11 xl:py-1 2xl:px-13 2xl:py-1.5 sm:text-xs md:text-xs lg:text-sm xl:text-sm 2xl:text-2xl text-semibold ">USER-ID</th>
                            <th className="sm:px-3 sm:py-0.5 md:px-4 md:py-1 lg:px-7 lg:py-1 xl:px-11 xl:py-1 2xl:px-13 2xl:py-1.5 sm:text-xs md:text-xs lg:text-sm xl:text-sm 2xl:text-2xl text-semibold ">Username</th>
                            <th className="sm:px-3 sm:py-0.5 md:px-4 md:py-1 lg:px-7 lg:py-1 xl:px-11 xl:py-1 2xl:px-13 2xl:py-1.5 sm:text-xs md:text-xs lg:text-sm xl:text-sm 2xl:text-2xl text-semibold ">Account type</th>
                            <th className="sm:px-3 sm:py-0.5 md:px-4 md:py-1 lg:px-7 lg:py-1 xl:px-11 xl:py-1 2xl:px-13 2xl:py-1.5 sm:text-xs md:text-xs lg:text-sm xl:text-sm 2xl:text-2xl text-semibold ">Login details</th>
                            <th className="sm:px-3 sm:py-0.5 md:px-4 md:py-1 lg:px-7 lg:py-1 xl:px-11 xl:py-1 2xl:px-13 2xl:py-1.5 sm:text-xs md:text-xs lg:text-sm xl:text-sm 2xl:text-2xl text-semibold ">Coin balance</th>
                            <th className="sm:px-3 sm:py-0.5 md:px-4 md:py-1 lg:px-7 lg:py-1 xl:px-11 xl:py-1 2xl:px-13 2xl:py-1.5 sm:text-xs md:text-xs lg:text-sm xl:text-sm 2xl:text-2xl text-semibold ">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((users, index)=>(
                        <tr key={users.id} className={`border-gray-600 hover:bg-gray-700 ${isBlocked[users.id] ? highlightedClasses : defaultClasses}` }>
                            <td className="sm:px-3 sm:py-0.5 md:px-4 md:py-1 lg:px-7 lg:py-1 xl:px-11 xl:py-1 2xl:px-13 2xl:py-1.5 text-center sm:text-xs md:text-xs lg:text-sm xl:text-sm 2xl:text-2xl">{index + 1}</td>
                            <td className="sm:px-3 sm:py-0.5 md:px-4 md:py-1 lg:px-7 lg:py-1 xl:px-11 xl:py-1 2xl:px-13 2xl:py-1.5 text-center sm:text-xs md:text-xs lg:text-sm xl:text-sm 2xl:text-2xl">{users.userId}</td>
                            <td className="sm:px-3 sm:py-0.5 md:px-4 md:py-1 lg:px-7 lg:py-1 xl:px-11 xl:py-1 2xl:px-13 2xl:py-1.5 text-center sm:text-xs md:text-xs lg:text-sm xl:text-sm 2xl:text-2xl">{users.username}</td>
                            <td className="sm:px-3 sm:py-0.5 md:px-4 md:py-1 lg:px-7 lg:py-1 xl:px-11 xl:py-1 2xl:px-13 2xl:py-1.5 text-center sm:text-xs md:text-xs lg:text-sm xl:text-sm 2xl:text-2xl">{users.accountType}</td>
                            <td className="sm:px-3 sm:py-0.5 md:px-4 md:py-1 lg:px-7 lg:py-1 xl:px-11 xl:py-1 2xl:px-13 2xl:py-1.5 text-center sm:text-xs md:text-xs lg:text-sm xl:text-sm 2xl:text-2xl">{users.loginDetails}</td>
                            <td className="sm:px-3 sm:py-0.5 md:px-4 md:py-1 lg:px-7 lg:py-1 xl:px-11 xl:py-1 2xl:px-13 2xl:py-1.5 text-center sm:text-xs md:text-xs lg:text-sm xl:text-sm 2xl:text-2xl">{users.coinBalance}</td>
                            <td className="sm:px-3 sm:py-0.5 md:px-4 md:py-1 lg:px-7 lg:py-1 xl:px-11 xl:py-1 2xl:px-13 2xl:py-1.5 text-center sm:text-xs md:text-xs lg:text-sm xl:text-sm 2xl:text-2xl">
                            <Menu as="div" className="relative inline-block">
                                <MenuButton className="inline-flex w-full justify-center cursor-pointer gap-x-1.5 rounded-md bg-white/10 px-3 py-2 text-sm font-semibold text-white inset-ring-1 inset-ring-white/5 hover:bg-white/20">
                                 < EllipsisVertical className='sm:h-3 sm:w-3 md:h-3 md:w-3 lg:h-4 lg:w-4 xl:h-5 xl:w-5 2xl:h-7 2xl:w-7'/>
                                <ChevronDownIcon aria-hidden="true" className="-mr-1 sm:size-2 md:size-2 lg:size-3 xl:size-4 2xl:size-5 text-gray-400" />
                                 </MenuButton>

                                <MenuItems
                                    transition
                                    className="absolute right-0 z-10 mt-2 w-56 origin-top-right divide-y divide-white/10 rounded-md bg-gray-800 outline-1 -outline-offset-1 outline-white/10 transition data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in"
                                >
                                    <div className="py-1">
                                    <MenuItem>
                                    <button
                                        onClick={()=>handleBlock(users.id)}
                                        to="#"
                                        className="block px-4 py-2 text-sm cursor-pointer text-gray-300 data-focus:bg-white/5 data-focus:text-white data-focus:outline-hidden"
                                    >
                                        Block
                                    </button>
                                </MenuItem>
                                <MenuItem>
                                    <button
                                        onClick={()=>handleUnblock(users.id)}
                                        to="#"
                                        className="block px-4 py-2 text-sm cursor-pointer text-gray-300 data-focus:bg-white/5 data-focus:text-white data-focus:outline-hidden"
                                    >
                                        Unblock
                                    </button>
                                </MenuItem>
                                <MenuItem>
                                    <Link
                                        to="/users/viewusers"
                                        className="flex justify-start px-4 py-2 text-sm text-gray-300 data-focus:bg-white/5 data-focus:text-white data-focus:outline-hidden"
                                    >
                                        View Users
                                    </Link>
                                </MenuItem>
                            </div>
                            </MenuItems>
                            </Menu>
                            </td>
                        </tr>
                        ))}
                    </tbody>
                </table>
                {/* <UsersTable tableData={UsersData}/> */}
            </div>
            <div className='flex flex-row right-0  space-x-3 mt-5'>
                <button className='bg-[#000005] border-1 border-[#9B9476] px-4 py-1 rounded-sm text-[#9B9476] cursor-pointer'>Previous</button>
                <button className='bg-[#D8D7D7] border-1 border-[#BBBBBB] px-4 py-1 rounded-sm text-gray-600 cursor-pointer'>Next</button>
            </div>
        </div>
    </div>
  )
}
