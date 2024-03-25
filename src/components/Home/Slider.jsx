import React from 'react'
import './slider.css';
import image from '../../assets/Image/Home_Slider.png';
import { useNavigate } from "react-router-dom";



const Slider = () => {
  const navigate = useNavigate();


  return (
    <>
  <div className="HomeSlider container-fluid w-100 h-100">
    <div className='row'>
      <div className='col-6'>
    
        <div className="slidertext mt-5 ">
          <h2 className="ml-5" style={{color:"white", fontSize: "40px" , fontFamily: "'Roboto Slab', sans-serif"}} >Collect & Reconcile</h2>
          <h2 className="ml-5" style={{color:"#24DFD9", fontSize: "40px" , fontFamily: "'Roboto Slab', sans-serif"}} ><b>Invoice Payments</b></h2>
          <h2 className="ml-5" style={{color:"white", fontSize: "40px" , fontFamily: "'Roboto Slab', sans-serif"}} >Automatically</h2>
          <h4 className="ml-5 mt-4 cont">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Exercitationem eum eius voluptatibus eaque, fugiat unde adipisci qui fugit ut maiores.</h4>
          <button  class="btn ml-5 my-4 px-4 py-2"  onClick={() => navigate("/signup")}>Get Started</button>
          
          
        </div>   
      </div>
      <div className='col-6'>
        <div className='imagebox text-end' style={{maxHeight: "400px"}}>
        <img src={image} alt="" className='sliderimage img-fluid pr-5 ' />
        </div>
      </div>
    </div>
    </div>

    <div className='extension'></div>

    </>
  )
}

export default Slider;