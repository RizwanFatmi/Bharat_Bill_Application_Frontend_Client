import React, { useState, useEffect } from "react";
import "./sidebar.css";
import "./userdashboard.css";
import profilePic from '../../assets/Image/Profile_Photo.jpg';
import { useNavigate } from 'react-router-dom'
import { MdOutlineVisibility } from "react-icons/md";
import { MdOutlineVisibilityOff } from "react-icons/md";
import Sidebar from "./Sidebar.jsx";



const Profile = () => {

  const navigate = useNavigate();
  const [passwordVisible1, setPasswordVisible1] = useState(false);
  const [passwordVisible2, setPasswordVisible2] = useState(false);
  const [passwordVisible3, setPasswordVisible3] = useState(false);
  useEffect(() => {
    window.scrollTo(0, 0)
  },[]);
    return (
      <>
    <div style={{marginBottom: "-20px"}}>
    <div className="row">
    <div className="col-3 Sidebar">
    <Sidebar />
    </div>
    <div className="col-9 ContentBox">
    <div className="WhiteContentBox shadow" style={{maxWidth: '500px'}}>
    <p style={{color: "#2980B9", marginBottom: "20px", fontWeight: "bold", fontSize: "20px", textAlign:"center", textDecoration: "underline", textUnderlineOffset: "6px"}}>CHANGE PASSWORD</p>
       {/*PROFILE INFORMATION COMPONENT*/}
       <div className="dashboarsBox">
    
        <p className="ProfileChangeTitle">Current Password</p>
        <div className="ProfileChangeInput border">
        <input type={passwordVisible1?'text':'password'} className="PasswordInputBox"/>
        {passwordVisible1?  
        <MdOutlineVisibilityOff style={{fontSize: '20px', marginLeft: "20px", color: "gray"}} className="text-[16px] cursor-pointer text-[#57595b]" onClick={()=>setPasswordVisible1(!passwordVisible1)}/>: <MdOutlineVisibility style={{fontSize: '20px', marginLeft: "20px", color: "gray"}} className="text-[16px] cursor-pointer text-[#57595b]" onClick={()=>setPasswordVisible1(!passwordVisible1)}/>}
        </div>
        <p className="ProfileChangeTitle">New Password</p>
        <div className="ProfileChangeInput border">
        <input type={passwordVisible2?'text':'password'} className="PasswordInputBox"/>
        {passwordVisible2? 
        <MdOutlineVisibilityOff style={{fontSize: '20px', marginLeft: "20px", color: "gray"}} className="text-[16px] cursor-pointer text-[#57595b]" onClick={()=>setPasswordVisible2(!passwordVisible2)}/>: <MdOutlineVisibility style={{fontSize: '20px', marginLeft: "20px", color: "gray"}} className="text-[16px] cursor-pointer text-[#57595b]" onClick={()=>setPasswordVisible2(!passwordVisible2)}/>}
        </div>
        <p className="ProfileChangeTitle">Confirm Password</p>
        <div className="ProfileChangeInput border">
        <input type={passwordVisible3?'text':'password'} className="PasswordInputBox"/>
        {passwordVisible3? 
        <MdOutlineVisibilityOff style={{fontSize: '20px', marginLeft: "20px", color: "gray"}} className="text-[16px] cursor-pointer text-[#57595b]" onClick={()=>setPasswordVisible3(!passwordVisible3)}/>: <MdOutlineVisibility style={{fontSize: '20px', marginLeft: "20px", color: "gray"}} className="text-[16px] cursor-pointer text-[#57595b]" onClick={()=>setPasswordVisible3(!passwordVisible3)}/>}
        </div>
        <div className="text-center">
        <button className="SaveChanges shadow">Save changes</button>
        </div>
    </div>
    </div>
    </div>
    </div>
    </div>
      </>
    );
  };
  
  export default Profile;
  