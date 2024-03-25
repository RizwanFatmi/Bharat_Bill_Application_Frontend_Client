import React, { useState, useEffect } from "react";
import '../Login/login.css'
import { TextField, Button, FormControlLabel, Checkbox, Grid} from '@mui/material';
import logo from '../../assets/Image/SingIn_Icon.png';

const Login = () => {

 const [forgotPasswordData, setForgotPasswordData] = useState({
    email: "",
    otp: "",
    password: "",
    confirmpassword: "",
 });
 const [otpVerification, setOtpVerification] = useState(false);
 const [passwordReset, setPasswordReset] = useState(false);
  

 const handleForgotPasswordInput = (e) =>{
setForgotPasswordData({...forgotPasswordData, [e.target.name]: e.target.value});
 }


 
 const handleforgotPassword = () =>{
  if(!forgotPasswordData.email){
    alert("Email feild cannot be blank!")
  }
  else{
    setOtpVerification(true);
  }

   }


   const handleOTPVerification = () =>{
    if(!forgotPasswordData.otp){
      alert("OTP feild cannot be blank!")
    }
    else{
      setPasswordReset(true);
    }
  
     }


     const handleChangePassword = () =>{
      if(!forgotPasswordData.password){
        alert("Password feild cannot be blank!")
      }
      else if(!forgotPasswordData.confirmpassword){
        alert("Confirm password feild cannot be blank!")
      }
      else if(forgotPasswordData.password !== forgotPasswordData.confirmpassword){
        alert("Password and confirm password should be same!")
      }
      else{
        console.log(forgotPasswordData);
        clear();
      }
    
       }



       
     const clear = () =>{
        setPasswordReset(false);
        setOtpVerification(false);
        setForgotPasswordData({...forgotPasswordData, 
          email: "",
          otp: "",
          password: "",
          confirmpassword: "",
        
        });
      }
    
   
      useEffect(() => {
        window.scrollTo(0, 0)
      },[]);
  return (
    <>
      <div className="container-fluid logmainsection" style={{marginBottom: "-20px"}}>
        <div className="row ">
          <div className="col mx-auto logimgsec">
            <div className="LoginSliderText">
              <p style={{fontSize: "18px", fontFamily: "Verdana"}}>Nice to see you again</p>
              <p style={{fontSize: "40px", marginTop: "-20px", fontFamily: "Verdana"}}>WELCOME BACK</p>
            </div>
          </div>
          <div className="col logincontentsec">
            <div className='imglogin text-center'>
            <div>
              <img className="loginPageImg" src={logo} alt="..."  style={{height: '100px', width: '100px'}}/>
            </div>
              <p style={{fontWeight: "500", marginTop: "20px", fontSize: "28px"}}>Welcome Back</p>
              <p style={{fontSize: "16px", marginTop: "-15px", color: "gray"}}>Login to continue</p>
            </div>
            <form className='mt-4 py-2 mx-auto' style={{maxWidth: "350px"}}>
            <React.Fragment>
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
             
               <Grid container>
                <Grid item xs>
                <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
                </Grid>
                <Grid item>
                <span className="mx-2  float-right" style={{color: "#2968BB", fontSize:"15px", cursor: "pointer", marginTop : "10px"}} data-bs-toggle="modal" data-bs-target="#forgotpassword">Forgot Password?</span>
                </Grid>
              </Grid>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 2, py: 1 }}
              >
                Sign In
              </Button>

             
          </React.Fragment>
               
              <p className='mx-auto text-center mt-3' style={{color: "#337FE5", fontSize: "14px",textDecoration: 'none'}}><a href='/signup' style={{ textDecoration: 'none', color: '#2968BB' }}>I don’t have an account</a></p>
             

            </form>
          </div>
        </div>
      </div>


       {/* Model 1: Forgot Password */}
      <div class="  modal fade" id="forgotpassword" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content mx-auto px-5 pb-4" style={{maxWidth: "450px", borderRadius: "15px"}}>
            <div class="modal-body">
              <div className="shadow" style={{borderRadius: '50px', width: "45px", height: "45px", padding: "10px", marginLeft: "360px", marginTop: '-30px', backgroundColor: "white"}}>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={clear}></button>
            </div>
            
        
          {!otpVerification? (<>
            <form onSubmit={handleforgotPassword}>
            <div className='text-center'>
            <React.Fragment>
            <p style={{color: "black",marginTop: "20px", fontWeight: "bold", fontSize: "35px"}}>Forgot Password</p>    
        <p className="ProfileChangeTitle002" style={{fontSize: '19px', marginTop: "-10px"}}>Enter your email address</p>   
        <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
                onChange={handleForgotPasswordInput}
                value = {forgotPasswordData.email}
              />   
      
        <div className="text-center">
        <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mb: 2, mt: 3, py: 1 }}
              >
                Continue
              </Button>
        </div>
        </React.Fragment> 
        </div>
        </form>
          </>):(<>

            {passwordReset?(<>
              <div className='text-center'>
              <form onSubmit={handleChangePassword}>
            <p style={{color: "black",marginTop: "20px", fontWeight: "bold", fontSize: "35px"}}>Reset Password</p>    
            <React.Fragment>
        <p className="ProfileChangeTitle002" style={{fontSize: '19px', marginTop: "-10px"}}>Please change your password</p> 
        <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="New Password"
                type="password"
                id="password"
                onChange={handleForgotPasswordInput}
                value = {forgotPasswordData.password}
                autoComplete="current-password"
              />  
         <TextField
                margin="normal"
                required
                fullWidth
                name="confirmpassword"
                label="Confirm Password"
                type="password"
                id="confirmpassword"
                autoComplete="current-password"
                onChange={handleForgotPasswordInput}
                value = {forgotPasswordData.confirmpassword}
              />
        
        
        <div className="text-center">
               <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mb: 2, mt: 3, py: 1 }}
              >
                Change Password
              </Button>
        </div>
        </React.Fragment>
        </form>
        </div>
            
            </>):(<>
            <div className='text-center'>
            <p style={{color: "black",marginTop: "20px", fontWeight: "bold", fontSize: "35px"}}>OTP Verification</p>    
            <form onSubmit={handleOTPVerification}>
            <React.Fragment>
        <p className="ProfileChangeTitle002" style={{fontSize: '17px', marginTop: "-10px"}}>Enter the OTP which is received at</p>  
        <p className="ProfileChangeTitle002" style={{fontSize: '19px', marginTop: "-15px", fontWeight: "500"}}>{forgotPasswordData.email}</p>    
        <TextField
                margin="normal"
                required
                fullWidth
                id="otp"
                label="Enter OTP"
                name="otp"
                autoFocus
                onChange={handleForgotPasswordInput}
                value = {forgotPasswordData.otp}
              /> 
        <div className="text-center">
        <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mb: 2, mt: 3, py: 1 }}
              >
                Verify OTP
              </Button>
        
        </div>
        </React.Fragment>
        </form>
        </div>
        </>)}

          </>)}
            

          
    </div>
            </div>
       
          </div>
        </div>
   
 
    </>
  )
}

export default Login