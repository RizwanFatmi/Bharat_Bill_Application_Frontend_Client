import React from 'react';
import './features.css';
import { NavLink, useNavigate } from "react-router-dom";






function Features() {
    const navigate = useNavigate();
    return (<>
<div className='Features'>

<div className='FeaturesHeading'>
    <h1><b>Features that support your business</b></h1>
    <p style={{color: "gray", fontSize: "18px"}}>This website will allow you to create and track invoices and you can also generate invoice wise and product wise sales report</p>
</div>

<div className='FeaturesBody'>
<div className='row'>
    <div className='col-3 cardcol'>
        <div className='featuresCard shadow '  onClick={() => navigate("/user/organisation")}>
            <div className='iconbox' style={{ backgroundColor: "#20ADE5"}}>
           <i class="fa fa-university mt-1" style={{fontSize: "40px", color: "white"}} aria-hidden="true"></i>
           </div>
            <h5>Add/Update</h5>
            <h5>Organisation</h5>
            <p style={{color: "gray"}}>Add and update your company details here</p>
        </div>
    </div>
    <div className='col-3 cardcol'>
         <div className='featuresCard shadow '  onClick={() => navigate("/user/product")}>
            <div className='iconbox' style={{ backgroundColor: "#ED3434"}}>
           <i class="fa fa-archive mt-1" style={{fontSize: "40px", color: "white"}} aria-hidden="true"></i>
           </div>
            <h5>Add/Update</h5>
            <h5>Product or Item</h5>
            <p style={{color: "gray"}}>Add and update product details here</p>
        </div>
    </div>
    <div className='col-3 cardcol'>
         <div className='featuresCard shadow ' onClick={() => navigate("/user/createinvoice")}>
            <div className='iconbox' style={{ backgroundColor: "#77DE38"}}>
           <i class="fa fa-file-text mt-1" style={{fontSize: "40px", color: "white"}} aria-hidden="true"></i>
           </div>
            <h5>Create/Raise</h5>
            <h5>Invoice or Bill</h5>
            <p style={{color: "gray"}}>Create or Raise invoice from here</p>
        </div>
    </div>
    <div className='col-3 cardcol'>
         <div className='featuresCard shadow ' onClick={() => navigate("/user/report")}>
            <div className='iconbox' style={{ backgroundColor: "#F07A22"}}>
           <i class="fa fa-bar-chart mt-1" style={{fontSize: "40px", color: "white"}} aria-hidden="true"></i>
           </div>
            <h5>Get/Generate</h5>
            <h5>Sales Report</h5>
            <p style={{color: "gray"}}>Get or generate report from here</p>
        </div>
    </div>
</div>

</div>
<div className='px-4 mt-5'>
    <div style={{color: "gray", height: "3px"}} />
    
</div>
</div>
    </>)
}

export default Features;