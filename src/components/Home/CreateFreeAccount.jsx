import React from 'react'
import './createfreeaccount.css'
import { NavLink, useNavigate } from "react-router-dom";


function CreateFreeAccount() {
  const navigate = useNavigate();
    return (<>
    <div className='mx-auto px-4' style={{maxWidth: '1600px'}}>
  <div className='freeaccountbox'>
    <div className='row'>
        <div className='col-8 boxContent'>
        <h2 ><b>Create a free trail account</b></h2>
        <p style={{fontSize: '14px', marginTop: "20px"}}>Signup to the Bharat Bill and create your first five bills free. </p>
        </div>
        <div className='col-4 boxButton' style={{minWidth: '250px'}}>
        <button className='getStartedBTN my-4 px-4' onClick={() => navigate("/signup")}>Get Started</button>
        </div>
    </div>
    </div>
  </div>
    
    </>)
}

export default CreateFreeAccount;