
import React,{useState} from 'react'
import AdminProfile from '../components/AdminProfile';
import AdminSettings from '../components/AdminSettings';

export default function Admin() {

    // const[editDetails, setEditDetails] = useState(true);
    // const[profile, setProfile] = useState(false);

    const [activeComponent, setActiveComponent] = useState(null);

    const renderActiveComponent = () =>{
        switch(activeComponent){
            case 'A':
                return <AdminProfile/>
            case 'B':
                return <AdminSettings/>
            default:
                return <AdminProfile/>
        }
    }

    // const handleEditDetails = () =>{
    //     setEditDetails(!editDetails);
    // }
    
    // Demo Admin data
    const name = "Admin";
    const email ="admin@gmail.com";

  return (
    <div  className='bg-[#020028] flx-1 overflow-auto absolute h-screen w-auto sm:top-27 md:top-27 lg:top-31 xl:top-36 2xl:top-39 sm:left-30 md:left-40  lg:left-50 xl:left-64 right-0 border-2 border-l-[#1a656d]  sm:pl-8 sm:pr-5 sm:pt-4 md:pl-9 md:pr-6 md:pt-4 xl:pl-15 xl:pr-10 xl:pt-7 2xl:pl-18 2xl:pr-12 2xl:pt-8'>
        <div className="inline-flex rounded-md shadow -space-x-px pt-2 " role="group">
            <button
                onClick={()=> setActiveComponent("A")}
                type="button"
                className="bg-gray-500 text-[#E9E7E7] border border-[#E9E7E7] hover:bg-[#E9E7E7] hover:text-[#000000] font-medium text-sm px-2 py-1 rounded-l-md transition-colors cursor-pointer"
            >
                Profile
            </button>

            <button
                onClick={()=> setActiveComponent('B')}
                type="button"
                className="bg-gray-500 text-[#E9E7E7] border border-[#E9E7E7] hover:bg-[#E9E7E7] hover:text-[#000000] font-medium text-sm px-2 py-1 rounded-r-md transition-colors cursor-pointer"
            >
                Settings
            </button>
        </div>
        {/* <div className='bg-[#9B94764D] mt-2 border-2 border-[#9B9476] rounded-2xl h-auto sm:p-1.5 md:p-2 lg:p-1.5 xl:p-2 2xl:p-4'>
                <div className='flex flex-row justify-between'>
                    <h1 className='text-[#E9E7E7] text-lg font-semibold'>Profile Information</h1>

                    {editDetails ? (
                        <div className=''>
                            <button
                                onClick={handleEditDetails}
                                className='bg-[#FFFFFF] px-3 py-1 rounded-sm border-[#343434] text-black cursor-pointer hover:bg-[#020028] hover:text-amber-50  font-semibold'>
                                    Edit Details
                            </button>
                        </div>
                        
                    ): (
                        <div className='flex flex-row space-x-2'>
                            <button
                                onClick={handleEditDetails}
                                className='bg-[#020028] px-6 py-1 rounded-sm border border-white text-white cursor-pointer hover:bg-white hover:text-[#020028]  font-semibold'
                            > 
                            Back
                            </button>

                            <button
                                 onClick={handleEditDetails}
                                className='bg-[#FFFFFF] px-3 py-1 rounded-sm border-[#343434] text-black cursor-pointer hover:bg-[#020028] hover:text-amber-50  font-semibold'
                                Save Details
                            >
                                Save Details
                            </button>
                        </div>
                    )}
                </div>
                {editDetails ? (
                    <div className='flex justify-between space-x-5 mt-4 pb-1 px-0.5'>
                        <div className='flex flex-col bg-[#9B9476] border-0 rounded-lg h-65 w-50 items-center space-y-3'>
                            <img src="https://media.licdn.com/dms/image/v2/C4D0BAQFzYHA4ygtkMg/company-logo_200_200/company-logo_200_200/0/1642661001136/kickr_technology_logo?e=2147483647&v=beta&t=qo533mSc55QOQv5CWwUDaViJ_nNB8PMkN48qw1-8tL4"
                                alt="Profile" 
                                className='flex h-40 w-40 justify-center items-center content-center rounded-full border border-[#707070] mt-3'
                            />
                            <div className='flex flex-col justify-between items-center content-center'>
                                <h3 className='text-sm text-amber-50 font-semibold'>Admin User</h3>
                                <p className='text-sm text-amber-50 font-semibold'>Super admin</p>
                            </div>
                        </div>
                        <div className='bg-[#707070] w-1/3 flex-1 overflow-hidden rounded-sm p-5'>
                            <p className='text-[#45E9FD] text-sm font-semibold'>User Information</p>
                            <p className='text-amber-50 text-lg font-semibold'>Name</p>
                            <p className='text-amber-50 text-sm font-semibold'>{name}</p>
                            <p className='text-amber-50 text-lg font-semibold'>Email:</p>
                            <p className='text-amber-50 text-sm font-semibold'>{email}</p>
                        </div>
                    </div>
                ):(
                    <div className='flex justify-between space-x-5 mt-4 pb-1 px-0.5'>
                        <div className='flex flex-col bg-[#9B9476] border-0 rounded-lg h-65 w-50 items-center space-y-3'>
                            <img src="https://media.licdn.com/dms/image/v2/C4D0BAQFzYHA4ygtkMg/company-logo_200_200/company-logo_200_200/0/1642661001136/kickr_technology_logo?e=2147483647&v=beta&t=qo533mSc55QOQv5CWwUDaViJ_nNB8PMkN48qw1-8tL4"
                             alt="Profile" 
                             className='flex h-25 w-25 justify-center items-center content-center rounded-full border border-[#707070] mt-3'
                             />
                            <div className='flex flex-col justify-between items-center content-center'>
                                <h3 className='text-sm text-amber-50 font-semibold'>Admin User</h3>
                                <p className='text-sm text-amber-50 font-semibold'>Super admin</p>
                            </div>

                        </div>
                        <div className='bg-[#707070] w-1/3 flex-1 overflow-hidden rounded-sm p-5'>
                            <p className='text-[#45E9FD] text-sm font-semibold'>User Information</p>
                            <p className='text-amber-50 text-lg font-semibold'>Name</p>
                            <input 
                            placeholder='Enter Name'
                            className='text-amber-50 text-sm font-semibold border-1 border-black rounded-sm py-1'></input>
                            <p className='text-amber-50 text-lg font-semibold'>Email:</p>
                            <input 
                            placeholder='Enter Email:'
                            className='text-amber-50 text-sm font-semibold border-1 border-black rounded-sm py-1'></input>
                        </div>
                        
                    </div>
                )}
        </div> */}
        {renderActiveComponent()}
    </div>
  )
}
