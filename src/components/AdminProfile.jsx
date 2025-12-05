import React, { useState, useRef } from "react";
import { Pencil } from "lucide-react";

export default function AdminProfile() {
  const fileInputRef = useRef(null);

  const [savedImage, setSavedImage] = useState(null);
  const [savedName, setSavedName] = useState("Super");
  const [savedLastName, setSavedLastName] = useState("Admin")
  const [savedEmail, setSavedEmail] = useState("admin@gmail.com");
 
  const [previewImage, setPreviewImage] = useState(null);
  const [tempName, setTempName] = useState(savedName + " " + savedLastName);
  const [tempLastNmae, setTempLastName] = useState(savedLastName)
  const [tempEmail, setTempEmail] = useState(savedEmail);

  const [editDetails, setEditDetails] = useState(true);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) setPreviewImage(URL.createObjectURL(file));
  };

  const handleButtonRef = () => fileInputRef.current.click();

  const handleEditDetails = () => {
    setEditDetails(!editDetails);
    setPreviewImage(null); 
    setTempName(savedName);
    setTempEmail(savedEmail);
  };

  const handleSaveDetails = () => {
    if (previewImage) setSavedImage(previewImage);
    setSavedName(tempName);
    setSavedLastName(tempLastNmae);
    setSavedEmail(tempEmail);

    setPreviewImage(null);
    setEditDetails(true); 
  };

  return (
    <div className="bg-[#9B94764D] mt-2 border-2 border-[#9B9476] rounded-2xl h-auto p-4">
      
      <div className="flex justify-between">
        <h1 className="text-[#E9E7E7] text-lg font-semibold">
          Profile Information
        </h1>

        {editDetails ? (
          <button
            onClick={handleEditDetails}
            className="bg-[#FFFFFF] px-3 py-1 rounded-sm border-[#343434] cursor-pointer text-black hover:bg-[#020028] hover:text-amber-50 font-semibold"
          >
            Edit Details
          </button>
        ) : (
          <div className="flex space-x-2">
            <button
              onClick={handleEditDetails}
              className="bg-[#020028] px-6 py-1 rounded-sm border  border-white text-white hover:bg-white cursor-pointer hover:text-[#020028] font-semibold"
            >
              Back
            </button>
            <button
              onClick={handleSaveDetails}
              className="bg-[#FFFFFF] px-3 py-1 rounded-sm border-[#343434] text-black cursor-pointer hover:bg-[#020028] hover:text-amber-50 font-semibold"
            >
              Save Details
            </button>
          </div>
        )}
      </div>

      <div className="flex justify-between space-x-5 mt-4">
        
        {editDetails ? (
          
          <div className="flex flex-col bg-[#9B9476] border-0 rounded-lg h-65 w-50 items-center space-y-3">
            <img
              src={savedImage || "https://via.placeholder.com/150?text=Profile"}
              alt="Profile"
              className="h-25 w-25 rounded-full border border-[#707070] mt-3 object-cover"
            />
            <div className="flex flex-col items-center">
              <h3 className="text-sm text-amber-50 font-semibold">Admin User</h3>
              <p className="text-sm text-amber-50 font-semibold">Super admin</p>
            </div>
          </div>
        ) : (
         
          <div className="flex flex-col bg-[#9B9476] border-0 rounded-lg h-65 w-50 items-center space-y-3">
            <img
              src={previewImage || savedImage || "https://via.placeholder.com/150?text=Profile"}
              alt="Profile"
              className="h-40 w-40 rounded-full border border-[#707070] mt-3 object-cover"
            />
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="hidden"
              ref={fileInputRef}
            />
            <button
              onClick={handleButtonRef}
              className="flex items-center cursor-pointer space-x-2 mt-2 text-white font-semibold border-2 border-white bg-[#9B9476] hover:bg-[#c3bda1] rounded-md px-3 py-1"
            >
              <Pencil className="h-4 w-4" /> Change Photo
            </button>
          </div>
        )}

        <div className="bg-[#707070] w-1/3 flex-1 overflow-hidden p-5 rounded-sm">
          <p className="text-[#45E9FD] text-sm font-semibold">User Information</p>
           
          {editDetails ? (
            <div>
                <label htmlFor="name" className="text-lg text-white font-semibold">Name</label>
                <p className="text-amber-50 text-sm font-semibold">{savedName + " " + savedLastName}</p>
            </div>
          ) : (
            <div className="flex flex-row space-x-3 mb-3">
              <label htmlFor="firstname" className="text-sm font-semibold text-[#FFFFFF]">First Name:</label>
              <input
              value={tempName}
              onChange={(e) => setTempName(e.target.value)}
              placeholder="Enter Name"
              className="text-amber-50 text-sm font-semibold border-1 border-[#FFFFFF] rounded-sm py-1 pl-1"
              type="text"
            />
            <label htmlFor="lastname" className="text-sm font-semibold text-[#FFFFFF]">Last Name:</label>
            <input 
            value={tempLastNmae}
            onChange={(e)=> setTempLastName(e.target.value)}
            placeholder="Enter your last name"
            className="text-amber-50 text-sm font-semibold border-1 border-[#FFFFFF] rounded-sm py-1 pl-1"
            type="text" />
            </div>
            
          )}

          {editDetails ? (
            <div className="flex flex-col space-x-3">
                <label htmlFor="name" className="text-lg text-white font-semibold">Email:</label>
                <p className="text-amber-50 text-sm font-semibold">{savedEmail}</p>
            </div>
          ) : (
            <div>
              <label htmlFor="email" className="text-sm font-semibold text-[#FFFFFF]">Enter Email:</label>
              <input
              value={tempEmail}
              onChange={(e) => setTempEmail(e.target.value)}
              placeholder="Enter Email"
              className="text-amber-50 text-sm font-semibold border-1 border-[#FFFFFF] rounded-sm py-1 pl-1 ml-2"
            />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
