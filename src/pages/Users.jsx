import React,{useState} from 'react'
import { Search, FunnelPlus, EllipsisVertical  } from 'lucide-react'
import users from '../user/users'
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { Link } from 'react-router-dom'
import { Outlet } from 'react-router-dom'
import UsersTable from '../components/TableTemplate/TableFormat'
import UsersData from '../user/UsersData.json'
import FilterButton from '../components/ButtonComponent/FilterButton'

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

    const userListFilter = [
    { label: "Active", value: "Active" },
    { label: "Inactive", value: "Inactive" }
    ];

    const actionFilter = [
        {label: "Block", value: "Block"},
        {label: "Unblock", value: "Unblock"},
        {label: "View User", value: "View User"}
    ]

    const highlightedClasses = " text-sm text-black bg-red-200 px-3";
    const defaultClasses = "text-sm text-amber-50 px-3"

  return (
    <div className='bg-[#020028] flx-1 overflow-auto absolute h-screen w-auto sm:top-27 md:top-27 lg:top-31 xl:top-36 2xl:top-39 sm:left-30 md:left-40  lg:left-50 xl:left-64 right-0  p-3'>
        <div className='border-1 border-[#9B9476] bg-[linear-gradient(170deg,#000005_0%,#020028_19%,#00000000_100%)] bg-origin-padding rounded-2xl h-auto p-2'>
            <h1 className='sm:text-sm md:text-sm lg:text-lg xl:text-xl 2xl:text-2xl text-[#FFFFFF]'>User List</h1>
            <h3 className='sm:text-xs md:text-xs lg:text-xs xl:text-sm 2xl:text-lg text-[#FFFFFF] opacity-50'>View and manage all users</h3>
            <div className='flex flex-row justify-between items-center xl:mt-2'>
                <div className='flex bg-[#FCFCFC] items-center border border-[#A1A1A1] rounded-md xl:px-8 xl:py-1.5 xl:gap-2'>
                    <Search className='flex xl:h-5 2xl:h-6 sm:h-3 text-[#A1A1A1]'/>
                    <input type="search" placeholder='Search users' className='xl:text-md xl:text-[#A1A1A1]'/>
                </div>

            <FilterButton
            lable='Filter'
            icon={<FunnelPlus className='flex sm:h-4 sm:w-4 md:h-4 md:w-4 lg:h-5 lg:w-5 xl:h-6 xl:w-6 2xl:h-8 2xl:w-8'/>}
            items={userListFilter}
            />

            </div>
            <div className='bg-[linear-gradient(166deg,#000005_0%,#020028_19%,#00000000_100%)] bg-no-repeat bg-[padding-box] border-1 border-[#9B9476] rounded-2xl flex-1 overflow-auto p-3 mt-5 overflow-x-auto'>
                <table className='text-sm text-[#919191] px-3'>
                    <thead className='justify-between '>
                        <tr>
                            <th className="sm:px-3 sm:py-0.5 md:px-4 md:py-1 lg:px-7 lg:py-1 xl:px-11 xl:py-1 2xl:px-13 2xl:py-1.5 sm:text-xs md:text-xs lg:text-sm xl:text-sm 2xl:text-2xl ">S.No</th>
                            <th className="sm:px-3 sm:py-0.5 md:px-4 md:py-1 lg:px-7 lg:py-1 xl:px-11 xl:py-1 2xl:px-13 2xl:py-1.5 sm:text-xs md:text-xs lg:text-sm xl:text-sm 2xl:text-2xl  ">USER-ID</th>
                            <th className="sm:px-3 sm:py-0.5 md:px-4 md:py-1 lg:px-7 lg:py-1 xl:px-11 xl:py-1 2xl:px-13 2xl:py-1.5 sm:text-xs md:text-xs lg:text-sm xl:text-sm 2xl:text-2xl ">Username</th>
                            <th className="sm:px-3 sm:py-0.5 md:px-4 md:py-1 lg:px-7 lg:py-1 xl:px-11 xl:py-1 2xl:px-13 2xl:py-1.5 sm:text-xs md:text-xs lg:text-sm xl:text-sm 2xl:text-2xl  ">Account type</th>
                            <th className="sm:px-3 sm:py-0.5 md:px-4 md:py-1 lg:px-7 lg:py-1 xl:px-11 xl:py-1 2xl:px-13 2xl:py-1.5 sm:text-xs md:text-xs lg:text-sm xl:text-sm 2xl:text-2xl  ">Login details</th>
                            <th className="sm:px-3 sm:py-0.5 md:px-4 md:py-1 lg:px-7 lg:py-1 xl:px-11 xl:py-1 2xl:px-13 2xl:py-1.5 sm:text-xs md:text-xs lg:text-sm xl:text-sm 2xl:text-2xl  ">Coin balance</th>
                            <th className="sm:px-3 sm:py-0.5 md:px-4 md:py-1 lg:px-7 lg:py-1 xl:px-11 xl:py-1 2xl:px-13 2xl:py-1.5 sm:text-xs md:text-xs lg:text-sm xl:text-sm 2xl:text-2xl  ">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((users, index)=>(
                        <tr key={users.id} className={`border-gray-600 hover:bg-gray-700 ${isBlocked[users.id] ? highlightedClasses : defaultClasses}` }>
                            <td className="text-[#919191] sm:px-3 sm:py-0.5 md:px-4 md:py-1 lg:px-7 lg:py-1 xl:px-11 xl:py-1 2xl:px-13 2xl:py-1.5 text-center sm:text-xs md:text-xs lg:text-sm xl:text-sm 2xl:text-2xl">{index + 1}</td>
                            <td className="text-[#919191] sm:px-3 sm:py-0.5 md:px-4 md:py-1 lg:px-7 lg:py-1 xl:px-11 xl:py-1 2xl:px-13 2xl:py-1.5 text-center sm:text-xs md:text-xs lg:text-sm xl:text-sm 2xl:text-2xl">{users.userId}</td>
                            <td className="text-[#919191] sm:px-3 sm:py-0.5 md:px-4 md:py-1 lg:px-7 lg:py-1 xl:px-11 xl:py-1 2xl:px-13 2xl:py-1.5 text-center sm:text-xs md:text-xs lg:text-sm xl:text-sm 2xl:text-2xl">{users.username}</td>
                            <td className="text-[#919191] sm:px-3 sm:py-0.5 md:px-4 md:py-1 lg:px-7 lg:py-1 xl:px-11 xl:py-1 2xl:px-13 2xl:py-1.5 text-center sm:text-xs md:text-xs lg:text-sm xl:text-sm 2xl:text-2xl">{users.accountType}</td>
                            <td className="text-[#919191] sm:px-3 sm:py-0.5 md:px-4 md:py-1 lg:px-7 lg:py-1 xl:px-11 xl:py-1 2xl:px-13 2xl:py-1.5 text-center sm:text-xs md:text-xs lg:text-sm xl:text-sm 2xl:text-2xl">{users.loginDetails}</td>
                            <td className="text-[#919191] sm:px-3 sm:py-0.5 md:px-4 md:py-1 lg:px-7 lg:py-1 xl:px-11 xl:py-1 2xl:px-13 2xl:py-1.5 text-center sm:text-xs md:text-xs lg:text-sm xl:text-sm 2xl:text-2xl">{users.coinBalance}</td>
                            <td className="sm:px-3 sm:py-0.5 md:px-4 md:py-1 lg:px-7 lg:py-1 xl:px-11 xl:py-1 2xl:px-13 2xl:py-1.5 text-center sm:text-xs md:text-xs lg:text-sm xl:text-sm 2xl:text-2xl">
                            <Menu as="div" className="relative inline-block">
                                <MenuButton className="inline-flex w-full justify-center cursor-pointer gap-x-1.5 rounded-md bg-white/10 px-3 py-2 text-sm font-semibold text-[#919191] inset-ring-1 inset-ring-white/5 hover:bg-white/20">
                                 < EllipsisVertical className='sm:h-3 sm:w-3 md:h-3 md:w-3 lg:h-4 lg:w-4 xl:h-5 xl:w-5 2xl:h-7 2xl:w-7'/>
                                <ChevronDownIcon aria-hidden="true" className="-mr-1 sm:size-2 md:size-2 lg:size-3 xl:size-4 2xl:size-5 text-gray-400" />
                                 </MenuButton>

                                <MenuItems
                                    transition
                                    className="absolute right-0 z-10 mt-1 w-28 origin-top-right divide-y border-[#00000040] shadow-md divide-white/10 rounded-md bg-[#FFFFFF] outline-1 -outline-offset-1 outline-white/10 transition data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in"
                                >
                                    <div className="py-1">
                                    <MenuItem>
                                    <button
                                        onClick={()=>handleBlock(users.id)}
                                        to="#"
                                        className="block px-3 py-1 text-sm cursor-pointer text-[#010028] font-semibold data-focus:outline-hidden"
                                    >
                                        Block
                                    </button>
                                </MenuItem>
                                <MenuItem>
                                    <button
                                        onClick={()=>handleUnblock(users.id)}
                                        to="#"
                                        className="block px-3 py-1 text-sm cursor-pointer text-[#010028] font-semibold data-focus:outline-hidden"
                                    >
                                        Unblock
                                    </button>
                                </MenuItem>
                                <MenuItem>
                                    <Link
                                        to="/users/viewusers"
                                        className="flex justify-start px-3 py-1 text-sm cursor-pointer text-[#010028] font-semibold data-focus:outline-hidden"
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
            <div className='flex flex-row w-full justify-end space-x-3 mt-2 py-1'>
                <button className='bg-[#000005] border-1 border-[#A1A1A1] px-4 py-1 rounded-sm text-[#BBBBBB] cursor-pointer'>Previous</button>
                <button className='bg-[#D8D7D7] border-1 border-[#BBBBBB] px-4 py-1 rounded-sm text-[#333333] cursor-pointer'>Next</button>
            </div>
        </div>
    </div>
  )
}
