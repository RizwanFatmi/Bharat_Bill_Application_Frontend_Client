import React, {useEffect} from 'react'
import "../Login/login.css"
import logo from '../../assets/Image/SignUp_Icon.png';
import { TextField, Button, FormControlLabel, Checkbox, Grid} from '@mui/material';

const SignUp = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  },[]);
  return (
    <>
  



      <div className="container-fluid logmainsection" style={{marginBottom: "-20px"}}> 
        <div className="row ">
          <div className="col mx-auto logimgsec">
          <div className="LoginSliderText">
              <p style={{fontSize: "18px", fontFamily: "Verdana"}}>Hi' Nice to see you</p>
              <p style={{fontSize: "40px", marginTop: "-20px", fontFamily: "Verdana"}}>WELCOME HERE</p>
              </div> 
          </div>
          <div className="col  logincontentsec"style={{paddingTop: '40px', paddingBottom: '10px'}}>
            <div className='imglogin text-center '>
            <div>
              <img src={logo} alt="..."  style={{height: '100px', width: '100px'}}/>
            </div>
              <p style={{fontWeight: "500", marginTop: "10px", fontSize: "28px"}}>Welcome</p>
              <p style={{fontSize: "16px", marginTop: "-15px", color: "gray"}}>Create your account</p>
            </div>
            <form className='mt-1 pt-1 mx-auto' style={{maxWidth: "350px"}}>      
            <React.Fragment>
            <div className='row'>
                <div className='col'>
                <TextField
                margin="normal"
                required
                fullWidth
                id="FirstName"
                label="First Name"
                name="firstName"
                autoComplete="firstname"
                autoFocus
              />
                </div>
                <div className='col'>
                <TextField
                margin="normal"
                required
                fullWidth
                id="LastName"
                label="Last Name"
                name="lastName"
                autoComplete="lastName"
                autoFocus
              />
                </div>
              </div>

            <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
               <TextField
                margin="normal"
                required
                fullWidth
                name="confirmPassword"
                label="Confirm Password"
                type="password"
                id="confirmpassword"
                autoComplete="current-password"
              />
             
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 2, py: 1 }}
              >
                Sign Up
              </Button>

             
          </React.Fragment>
               
              <p className='mx-auto text-center mt-3' style={{color: "#337FE5", fontSize: "14px",textDecoration: 'none'}}><a href='/login' style={{ textDecoration: 'none', color: '#2968BB' }}>I have an account</a></p>
             
            </form>
   
          </div>
        </div>
      </div>






      {/* Model 1: OTP Verification */}
      <div class="  modal fade" id="otpverification" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content mx-auto px-5 pb-4" style={{ width: "450px", borderRadius: "15px" }}>
            <div class="modal-body">
              <div className="shadow" style={{ borderRadius: '50px', width: "45px", height: "45px", padding: "10px", marginLeft: "360px", marginTop: '-30px', backgroundColor: "white" }}>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" ></button>
              </div>
              <div className='text-center'>
                <p style={{ color: "black", marginTop: "20px", fontWeight: "bold", fontSize: "35px" }}>OTP Verification</p>
                <p className="ProfileChangeTitle002" style={{ fontSize: '17px', marginTop: "-10px" }}>Enter the OTP which is received at</p>
                <p className="ProfileChangeTitle002" style={{ fontSize: '19px', marginTop: "-15px", fontWeight: "500" }}>royalr524@gmail.com</p>
                <input type="text" className="ProfileChangeInput002 border py-2 mb-3 mt-2" placeholder='Enter OTP' style={{ fontSize: '18px' }}
                />
                <div className="text-center">
                  <button className="SaveChanges002 py-2 " style={{ width: "100%", fontSize: "18px" }} >Verify OTP</button>
                </div>
              </div>
            </div> </div>
        </div>
      </div>














    </>
  )
}

export default SignUp