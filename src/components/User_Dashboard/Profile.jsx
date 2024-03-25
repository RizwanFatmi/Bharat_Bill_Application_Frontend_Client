import React, {useEffect} from 'react'
import "./sidebar.css";
import "./userdashboard.css";
import profilePic from '../../assets/Image/Profile_Photo.jpg';
import { useNavigate } from 'react-router-dom'
import { PiUploadThin } from 'react-icons/pi';
import Sidebar from "./Sidebar.jsx";



const Profile = () => {
  const navigate = useNavigate();
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
      <div className="WhiteContentBox shadow">
      <p style={{color: "#2980B9", marginBottom: "20px", fontWeight: "bold", fontSize: "20px", textAlign:"center", textDecoration: "underline", textUnderlineOffset: "6px"}}>EDIT PROFILE</p>

        {/*PROFILE PICTURE COMPONENT*/}
        <div className="dashboarsBox">
     <div className="row">
      <div className="col-5" style={{width: '170px'}}>
      <div className="ImgUploadBox border text-center">
      <PiUploadThin className="mx-auto" style={{fontSize: '80', color: "gray", marginTop: "20px"}}/>
      <p style={{fontSize: '14px', color: "gray"}}>Drag File To Upload</p>
      </div>
      </div>
      <div className="col-7 ">
        <div className="ImgContentBox">
        <button className="ImgUploadBtn shadow">Choose a file</button>
        <p className="ImgBoxText">Acceptable Formats: jpg, png only<br></br>Max file size is 50kb</p>
        </div>
      </div>
     </div>
     <hr />

  {/*PROFILE INFORMATION COMPONENT*/}
 
        <div className="row">
        <div className="col" style={{minWidth: "270px"}}>
        <p className="ProfileChangeTitle">First Name</p>
        <input type="text" className="ProfileChangeInput border"/>
        </div>
        <div className="col" style={{minWidth: "270px"}}>
        <p className="ProfileChangeTitle">Last Name</p>
        <input type="text" className="ProfileChangeInput border"/>
        </div>
        </div>
        <div className="row">
        <div className="col" style={{minWidth: "270px"}}>
        <p className="ProfileChangeTitle">Email</p>
        <input type="text" className="ProfileChangeInput border"/>
        </div>
        <div className="col" style={{minWidth: "270px"}}>
        <p className="ProfileChangeTitle">Phone</p>
        <input type="text" className="ProfileChangeInput border"/>
        </div>
        </div>
        <p className="ProfileChangeTitle">Address</p>
        <input type="text" className="ProfileChangeInput border"/>
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
  