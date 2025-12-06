
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
    <div  className='bg-[#020028] flx-1 overflow-auto absolute h-screen w-auto sm:top-27 md:top-27 lg:top-31 xl:top-36 2xl:top-39 sm:left-30 md:left-40  lg:left-50 xl:left-64 right-0 sm:pl-8 sm:pr-5 sm:pt-4 md:pl-9 md:pr-6 md:pt-4 xl:pl-15 xl:pr-10 xl:pt-7 2xl:pl-18 2xl:pr-12 2xl:pt-8'>
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

        {renderActiveComponent()}

    </div>
  )
}
