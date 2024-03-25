import React from 'react'
import './howitwork.css'
import HowItWorksImage from '../../assets/Image/How_It_Works.png';
import { useNavigate } from "react-router-dom";




function HowItWorks() {

  const navigate = useNavigate();



    return (<>


<div className='px-3 mx-auto' style={{maxWidth: '1600px'}}>
  
  <div className="ml-4 mt-5" >
  <h3 style={{color: "rgb(3, 76, 136)"}}><b>How It Works</b></h3>
              <p style={{ fontSize: '15px', color:"gray" }}>Find out what you can do with this website.</p>    
          </div>


          <div class="row px-4 pt-1">
            <div class="col-sm-8 mb-4" style={{ minWidth: "320px"}}>
              <div className='hiwImageBox shadow' style={{height: "100%"}}>
            <img src={HowItWorksImage} alt="Loading" style={{width: "100%", height: "100%"}} className='hiwImageBox' />     
            </div>  
            </div>
            <div class="col-sm-4 mb-4 " style={{ minWidth: "200px"}}>
              
                <div className='hiwCard  mt-0' onClick={() => navigate("/signup")}>
                  <p  style={{ fontWeight: "500"}} className='hiwCardTitle'>1. One-time customer setup</p>
                  <p style={{ color: "gray"}}>First you have to signup for free and then you can add your organisation details and products.</p>
                </div>
                <div className='hiwCard ' onClick={() => navigate("/pricing")}>
                  <p  style={{ fontWeight: "500"}} className='hiwCardTitle'>2. Payment</p>
                  <p style={{ color: "gray"}}>After creating account successfully, you can make first five invoice free, after that you will have to take subscription.</p>
                </div>
                <div className='hiwCard  ' onClick={() => navigate("/user/createinvoice")}>
                  <p  style={{ fontWeight: "500"}} className='hiwCardTitle'>3. Create Bill</p>
                  <p style={{ color: "gray"}}>After taking subscription, you can create unlimited invoices till your subscription expiry date.</p>
                </div>
                <div className='hiwCard  ' onClick={() => navigate("/user/report")}>
                  <p  style={{ fontWeight: "500"}} className='hiwCardTitle'>4. Keep Track</p>
                  <p style={{ color: "gray"}}>You can track your bills and download reports like:- sales report, product wise report, etc.</p>
                </div>
          </div>

          </div>
          
          
          </div>
    
    </>)
}

export default HowItWorks;