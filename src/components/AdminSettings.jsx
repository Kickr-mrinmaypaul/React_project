import React,{useState} from 'react'
import { Eye, EyeOff, Check } from 'lucide-react';
import axios from 'axios';

export default function AdminSettings() {
    const [showNewPassword, setNewShowPassword] = useState(false);
    const [showReEnterPassword, setShowReEnterPassword] = useState(false);
    const [isVerified, setIsVerified] = useState(false);

    const [currentPassword, setCurrentPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [reEnterPassword, setReEnterPassword] = useState("");


    //This fiel will cover when the backend API will call
    const handleCurrentPasswordSubmit = async (e) =>{
        e.preventDefault();
        if(!currentPassword || currentPassword.length == 0){
            alert("Enter the Current Password");
            return;
        }
        try{
            const response = await axios.get('',{currentPassword});
            if(response.data.sucess){
                alert("Current Password Verified");
                setIsVerified(true);
            }else{
                alert("Current Password Incorrect.");
                isVerified(false);
            }
        }catch(error){
            console.log("Erron on verifying password.");
            setIsVerified(false);
        }
        setCurrentPassword("");
    }

    const handlepasswordSubmit = async(e) =>{
        e.preventDefault();
        if(!isVerified){
            alert("Verify the Current Password");
            return;
        }
        if(newPassword !== reEnterPassword){
            alert("New Password and Confirm Password do not match!");
            return;
        }
        try {
            const response = await axios.post('',{newPassword});
            if(response.data.sucess){
                alert("Password change Sucessfully.");
                setIsVerified(false);
                setNewPassword("");
                setReEnterPassword("");
            }else{
                alert("Failed to Changing Password");
            }
            
        } catch (error) {
            console.error(error);
            alert("Error changing Password");
        }
        setNewPassword("");
        setReEnterPassword("");
    }

    const toggleNewPassword =()=>{
        setNewShowPassword(!showNewPassword);
    }
    const toggleReEnterPassword = () =>{
        setShowReEnterPassword(!showReEnterPassword);
    }
  return (
        <div className='bg-[#020028] mt-2 border-1 border-[#9B9476] rounded-2xl sm:p-1.5 md:p-2 lg:p-1.5 xl:p-2 2xl:p-4 mb-5'>
                <h3 className='text-xl text-[#FFFFFF] font-semibold ml-2'>Settings & Controls</h3>
                <div className='mt-3 ml-2 bg-[#9B94764D] p-3 rounded-md w-1/2 flex-1 overflow-hidden'>
                    <span className='text-lg text-[#45E9FD] font-semibold'>Change Password</span>
                    <form action="submit" 
                            onSubmit={handlepasswordSubmit}
                            className='flex flex-col space-y-2'>
                        <label htmlFor="currentPassword"
                            className='text-sm text-[#FFFFFF]'
                        >
                            Current Password
                        </label>
                        <div className="relative w-1/2">
                            <input
                                id="currentPassword"
                                value={currentPassword}
                                onChange={(e)=> setCurrentPassword(e.target.value)}
                                type="text"
                                placeholder="Enter Your Current Password"
                                className="text-gray-500 pl-1 pr-10 font-semibold border-2 border-[#FFFFFF] shadow-md rounded-sm py-1 w-full"
                            />

                            <button
                                    onClick={handleCurrentPasswordSubmit}
                                    type="button"
                                    className="absolute right-2 top-1/2 -translate-y-1/2 text-[#FFFFFF] cursor-pointer text-xs"
                             >
                            {/* //     here the verification button will be placed */}
                                <Check className='text-[#07f20b]'/>
                            </button>
                        </div>
                        
                        <label htmlFor="newPassword"
                            className='text-sm text-[#FFFFFF]'
                        >
                            New Password
                        </label>
                            
                        <div className="relative w-1/2">
                            <input
                                id="newPassword"
                                value={newPassword}
                                onChange={(e)=> setNewPassword(e.target.value)}
                                type={showNewPassword ? "text" : "password"}
                                placeholder="Enter New Password"
                                className="text-gray-500 pl-1 pr-10 font-semibold border-2 border-[#FFFFFF] shadow-md rounded-sm py-1 w-full"
                            />

                            <button
                                    type="button"
                                    onClick={toggleNewPassword}
                                    className="absolute right-2 top-1/2 -translate-y-1/2 text-white"
                            >
                                {showNewPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                            </button>
                        </div>
                       
                        <label htmlFor="confirmPassword"
                            className='text-sm text-[#FFFFFF]'
                        >
                            Confirm Password
                        </label>
                        <div className="relative w-1/2">
                            <input
                              id="newPassword"
                              value={reEnterPassword}
                              onChange={(e)=> setReEnterPassword(e.target.value)}
                              type={showReEnterPassword ? "text" : "password"}
                              placeholder="Enter New Password"
                               className="text-gray-500 pl-1 pr-10 font-semibold border-2 border-[#FFFFFF] shadow-md rounded-sm py-1 w-full"
                            />

                             <button
                              type="button"
                               onClick={toggleReEnterPassword}
                               className="absolute right-2 top-1/2 -translate-y-1/2 text-white"
                             >
                               {showReEnterPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                             </button>
                            </div>
                        <button type='submit' className=' text-[#343434] text-sm font-semibold px-4 py-2 border border-[#00000059] rounded-lg bg-[#FFFFFF] justify-start w-1/4 mt-2 cursor-pointer'>Submit</button>
                    </form>
                </div>
        </div>
  )
}
