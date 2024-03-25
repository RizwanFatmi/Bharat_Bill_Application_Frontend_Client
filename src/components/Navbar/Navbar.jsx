import React from 'react';
import './navbar.css'
import { NavLink, useNavigate } from "react-router-dom";
import sign from '../../assets/Image/Signup_Logo.png';
import logo from '../../assets/Image/Company_Logo.png';


const Navbar = () => {

  const activeLink = 'text-light text-decoration-none fw-bold'
  const normalLink = 'text-light text-decoration-none'
  const navigate = useNavigate();




  return (
    <>
      <header className=''>
        <nav class="  navbar navbar-expand-lg pt-2 px-5 pb-2 ">

          {/*MOBILE VIEW*/}
          <div className='mob'>
            <div className='row' >
              <div className='col-2' >
                <div >
                  <img src={logo} alt='...' style={{ width: "40px", marginRight: "10px", marginLeft: '-15px' }} />
                </div>
              </div>
              <div className='col-10 ' style={{ marginTop: "2px" }}>
                <p class="navbar-brand m-0">Bharat Bill</p>
              </div>
            </div>
          </div>

          {/*NAV LINK*/}
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon  pt-1" ><i class="fa fa-bars" style={{fontSize: '25px', color: 'white', cursor: "pointer"}} aria-hidden="true"></i></span>
          </button>
          <div class="collapse navbar-collapse " id="navbarSupportedContent" >
          <div className='' style={{ width: "300px" }}></div>
            <ul class="navbar-nav centerData">
              <NavLink to='/' className={({ isActive }) => (isActive ? activeLink : normalLink)} style={{ marginTop: '9px', marginRight: 'auto', fontWeight: '6s00', fontSize: '20px' }}>Home</NavLink>
              <NavLink to='/pricing' className={({ isActive }) => (isActive ? activeLink : normalLink)} style={{ marginTop: '10px', marginRight: 'auto', fontWeight: '6s00', fontSize: '20px' }}>Pricing</NavLink>
              <NavLink to='/user/profile' className={({ isActive }) => (isActive ? activeLink : normalLink)} style={{ marginTop: '10px', fontWeight: '6s00', fontSize: '20px', marginRight: 'auto' }}>Dashboard</NavLink>
              <NavLink to='/contactus' className={({ isActive }) => (isActive ? activeLink : normalLink)} style={{ marginTop: '10px', fontWeight: '6s00', fontSize: '20px', marginRight: 'auto' }}>Contact Us</NavLink>
            </ul>
            <button class="btn btn4 my-2 my-sm-0 px-3" onClick={()=>navigate("/login")} style={{border: "solid 1px white"}}><b>Login</b></button>
           <a href='https://services.gst.gov.in/services/searchtp'  target="_blank"><button class=" btn btn3  my-2 ml-3  px-3"  style={{ marginRight: "10px", border: "solid 1px white"}}><b>Check GSTIN Status</b></button></a>
          </div>
        </nav>

        {/*DESKTOP VIEW*/}
        <div className="desktop">
          <nav class="navbar   navbar-expand-lg pt-0  px-5 " style={{ marginTop: "5px" }}>
            <div style={{ marginTop: "-10px" }} >
              <div className='row  ' style={{ width: "95vw" }}>
                <div className='col-6 '>
                  <div className='row' style={{ width: "550px" }}>
                    <div className='col-2' >
                      <div>
                      <img src={logo} alt='...' style={{ height: "50px", marginTop: "-20px" }} />
                      </div>
                    </div>
                    <div className='col-10 ' style={{ marginLeft: "-20px", marginTop: "-7px" }}>
                    <p class="navbar-brand "style={{ fontSize: "20px" }} >Bharat Bill</p>
                    </div>
                  </div>
                </div>

               {/*RIGHT PART OF NAVBAR*/}
                <div className='col-6  text-start '>
                  <div className='row' style={{ width: "350px", marginLeft: "auto" }}>
                    <div className='col'>
                      <div className='loginlogo' onClick={() => navigate("/signup")} style={{ borderRadius: "30px", backgroundColor: "white", width: "45px", height: "45px", marginLeft: "auto", paddingLeft: '12px', paddingRight: '12px', paddingBottom: "10px", paddingTop: '8px' }}>
                      <img src={sign} alt='...' className="rounded " style={{ height: "30px", cursor: 'pointer' }} />
                      </div>
                    </div>
                    <div className='col '>
                    <p  onClick={() => navigate("/signup")} style={{cursor:'pointer', color:'white', marginTop:"10px", marginLeft:"-10px"}}>Hi! Please Sign Up</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </header>

    </>
  )}

export default Navbar;