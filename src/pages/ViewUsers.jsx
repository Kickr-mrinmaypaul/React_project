import React,{useState} from 'react'
import viewUserData from '../user/viewUserData'
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { Search, FunnelPlus, EllipsisVertical  } from 'lucide-react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { Link } from 'react-router-dom'
import GameHistory from '../components/GameHistory'
import Transitions from '../components/Transitions'
import PurchasedItems from '../components/PurchasedItems'
import FilterButton from '../components/ButtonComponent/FilterButton'

export default function ViewUsers() {
    const [activeComponent, setActiveComponents] = useState(null);

    const renderActiveComponent = () =>{
        switch(activeComponent){
            case 'A':
                return <GameHistory/>
            case 'B':
                return <Transitions/>    
            case 'C':
                return <PurchasedItems/>
            default:
                return <GameHistory/>
        }
    }

    const gameHistofyFilter = [
    { label: "All", value: "all" },
    { label: "Infinity", value: "infinity" },
    { label: "Time", value: "time" }
  ];
     
  const transactionFilter = [
    { label: "All", value: "all" },
    { label: "Coin", value: "Coin" },
    { label: "Power Ups", value: "Power Ups" }
  ];

  const purchasedFilter = [
    { label: "All", value: "all" },
    { label: "Snake", value: "Snake" },
    { label: "Background", value: "Background" },
    { label: "Power-Ups", value: "Power-Ups" }
  ];

  const getFilterOptions = () =>{
    switch(activeComponent){
        case 'A':
            return gameHistofyFilter;
        case 'B':
            return transactionFilter;
        case 'C':
            return purchasedFilter;
        default :
            return gameHistofyFilter;
    }
  };

  return (
    <div className='bg-[#020028] flx-1 overflow-auto absolute h-full w-auto sm:top-27 md:top-27 lg:top-31 xl:top-36 2xl:top-39 sm:left-30 md:left-40 lg:left-50 xl:left-64 right-0 p-4 '>
        <div className='bg-[linear-gradient(166deg,#000005_0%,#020028_19%,#00000000_100%)] bg-no-repeat bg-[padding-box] border-1 border-[#9B9476] rounded-2xl flex-1 overflow-auto p-3'> 
            <h1 className='sm:text-sm md:text-sm lg:text-lg xl:text-xl 2xl:text-2xl text-amber-50'>User List</h1>
            <h3 className='sm:text-xs md:text-xs lg:text-xs xl:text-sm 2xl:text-lg text-amber-50'>Detailed user information</h3>
            <div className='grid grid-cols-1 xl:grid-cols-2 flex-1 overflow-hidden mt-4'>
                <div className='w-3/4 border-1 border-[#9B9476] bg-[linear-gradient(166deg,#000005_0%,#020028_19%,#00000000_100%)] bg-no-repeat bg-[padding-box] rounded-2xl p-2'>
                    <h1 className='text-xl text-amber-50'>User Information</h1>
                    <div className='flex flex-col justify-center items-center'>
                        <img src="https://media.licdn.com/dms/image/v2/C4D0BAQFzYHA4ygtkMg/company-logo_200_200/company-logo_200_200/0/1642661001136/kickr_technology_logo?e=2147483647&v=beta&t=qo533mSc55QOQv5CWwUDaViJ_nNB8PMkN48qw1-8tL4" 
                            alt="profile" 
                            className=' h-20 w-20 rounded-full justify-center items-center mb-2 mt-4'
                        />
                        <h2 className='text-lg text-amber-50'>Player Name</h2>
                        <p className='text-sm text-amber-50'>Active Link</p>

                        <table className="table-auto text-gray-300 w-full mt-4">
                            <tbody>
                                {viewUserData.map((viewUserData, index) => (
                                <tr key={index}>
                                     <th className="px-4 py-2 text-left">
                                        {viewUserData.label}
                                    </th>
                                    <td className="px-4 py-2">
                                        {viewUserData.value}
                                    </td>
                                </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className='w-auto left-0 overflow-auto border-1 border-[#9B9476] bg-[linear-gradient(166deg,#000005_0%,#020028_19%,#00000000_100%)] bg-no-repeat bg-[padding-box] p-2 rounded-2xl'>
                    <h1 className='text-xl text-amber-50'>User Activity</h1>
                    <div className='flex flex-row justify-between'>
                        <div className="inline-flex rounded-md shadow -space-x-px pt-2" role="group">
                            <button
                                onClick={()=> setActiveComponents('A')}
                                type="button"
                                className="bg-gray-500 text-[#E9E7E7] border border-[#E9E7E7] hover:bg-[#E9E7E7] hover:text-[#000000] font-medium text-sm px-2 py-1 rounded-l-md transition-colors cursor-pointer"
                            >
                                Game History
                            </button>

                            <button
                                onClick={()=> setActiveComponents('B')}
                                type="button"
                                className="bg-gray-500 text-[#E9E7E7] border border-[#E9E7E7] hover:bg-[#E9E7E7] hover:text-[#000000] font-medium text-sm px-2 py-1 transition-colors cursor-pointer"
                            >
                                Transitions
                            </button>

                            <button
                                onClick={()=> setActiveComponents('C')}
                                type="button"
                                className="bg-gray-500 text-[#E9E7E7] border border-[#E9E7E7] hover:bg-[#E9E7E7] hover:text-[#000000] font-medium text-sm px-2 py-1 rounded-r-md transition-colors cursor-pointer"
                            >
                                Purchased items
                            </button>
                        </div>
                        <div >

                            <FilterButton
                            lable='Filter'
                            icon={<FunnelPlus className='flex sm:h-4 sm:w-4 md:h-4 md:w-4 lg:h-5 lg:w-5 xl:h-6 xl:w-6 2xl:h-8 2xl:w-8'/>}
                            items={getFilterOptions()}
                            />

                        </div>
                    </div>
                        <div>
                            {renderActiveComponent()}
                        </div>
                </div>
            </div>
        </div>
    </div>
  )
}
