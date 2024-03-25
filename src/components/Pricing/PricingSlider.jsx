import React from "react";
import "../Pricing/pricingslider.css"

const PricingSlider = () => {
  return (
    <>
    
    <div className="Pricingslider container-fluid w-100 h-100">
        <div className="slidertext mt-5 mb-2">
          <h1 className="mx-auto text-center" style={{color:"white", fontSize: "52px" , fontFamily: "'Roboto Slab', sans-serif"}} >Select the Best Web Hosting </h1>
          <h1 className="mx-auto text-center " style={{color:"#24DFD9", fontSize: "40px" , fontFamily: "'Roboto Slab', sans-serif"}} ><b>Plan for Your Website</b></h1>
          <p  className="mx-auto text-center mt-3 " style={{color: "white", fontSize: "18px", marginBottom: '40px'}}>From basic to advanced, we have a web hosting plan that's right for you<br></br>Compare our options and select the one that meets your needs.</p>
       
        </div>

      </div>

  
 
    </>
  );
};

export default PricingSlider;
