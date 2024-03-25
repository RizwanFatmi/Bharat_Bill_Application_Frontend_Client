
import React, { useState } from "react";
import "./sidebar.css";
import profilePic from '../../assets/Image/Profile_Photo.jpg';
import { useNavigate, useLocation } from 'react-router-dom'

const Sidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const currentPath = location.pathname;


  return (
    <>
      <div className="ImgBox">
        <img src={profilePic} alt="..." className="img-fluid ProfilePic" />
      </div>
      <p className='ProfileTitle'>HARRY SINGH</p>
      <div className="ButtonSet">
        <button
          className={currentPath === '/user/profile' ? "SidebarButtonActive" : "SidebarButton"}
          onClick={() => navigate('/user/profile')}
        >
          Profile
        </button>
        <button
          className={currentPath === '/user/password' ? "SidebarButtonActive" : "SidebarButton"}
          onClick={() => navigate('/user/password')}
        >
          Password
        </button>
        <button
          className={currentPath === '/user/organisation' ? "SidebarButtonActive" : "SidebarButton"}
          onClick={() => navigate('/user/organisation')}
        >
          Organisation
        </button>
        <button
          className={currentPath === '/user/product' ? "SidebarButtonActive" : "SidebarButton"}
          onClick={() => navigate('/user/product')}
        >
          Product
        </button><button
          className={currentPath === '/user/bill' ? "SidebarButtonActive" : "SidebarButton"}
          onClick={() => navigate('/user/bill')}
        >
          Bill
        </button><button
          className={currentPath === '/user/report' ? "SidebarButtonActive" : "SidebarButton"}
          onClick={() => navigate('/user/report')}
        >
          Report
        </button><button
          className={currentPath === '/user/productwise' ? "SidebarButtonActive" : "SidebarButton"}
          onClick={() => navigate('/user/productwise')}
        >
          Product Wise
        </button>
        {/* Add similar lines for other buttons */}
      </div>
    </>
  );
};

export default Sidebar;
