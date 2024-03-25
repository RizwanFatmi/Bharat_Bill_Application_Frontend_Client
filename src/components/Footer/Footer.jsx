import React from 'react'
import './footer.css'
import logo from '../../assets/Image/Company_Logo.png'

function Footer() {
    return (<>

<div className='footer' style={{ paddingBottom: "5px"}}>
<div className='row '>

    <div className='col mt-4'>
      <div style={{width: "210px"}}>
   <img src={logo} alt="" style={{width: '80px'}}/> 
   <h3 className='mt-2'><b>Bharat Bill</b></h3>
    <p style={{fontFamily: "cursive", fontSize: "18px"}}>Thank you for showing interest in our company.</p> 
  
          </div>
    </div>

    <div className='col mt-4'  style={{minWidth: '150px'}}>
    <div style={{maxWidth: "200px"}}>
        <p className='mt-3'>We understand the importance of effective invoicing and reporting in today's business world and are here to assist you as needed.</p>
    </div>
    </div>


    <div className='col mt-4'  style={{minWidth: '160px'}}>
      <div className='ml-3'>
       <p  className='my-3'><b>COMPANY</b></p>
       <a href='/' style={{textDecoration: "none", color: "rgb(77, 77, 77)"}}> <p style={{fontSize: '15px'}}>About Bharat Bill</p></a>
       <a href='/' style={{textDecoration: "none", color: "rgb(77, 77, 77)"}}><p style={{fontSize: '15px'}}>Blog</p></a>
       <a href='/' style={{textDecoration: "none", color: "rgb(77, 77, 77)"}}> <p style={{fontSize: '15px'}}>Pricing</p></a>
       </div>
    </div>

    <div className='col mt-4'  style={{minWidth: '180px'}}>
    <div className='ml-3'>
       <p  className='my-3'><b>USEFUL LINKS</b></p>
       <a href='https://services.gst.gov.in/services/searchtp'  target="_blank" style={{textDecoration: "none", color: "rgb(77, 77, 77)"}}> <p style={{fontSize: '15px'}}>Check GST Status</p></a>
       <a href='http://www.etdut.gov.in/exciseonline/misc/GST_HSN-SAC_CODES.pdf' target="_blank"  style={{textDecoration: "none", color: "rgb(77, 77, 77)"}}><p style={{fontSize: '15px'}}>Check Product HSN</p></a>
       <a href='/' style={{textDecoration: "none", color: "rgb(77, 77, 77)"}}> <p style={{fontSize: '15px'}}>Privicy Policy</p></a>
       <a href='/' style={{textDecoration: "none", color: "rgb(77, 77, 77)"}}> <p style={{fontSize: '15px'}}>Help</p></a>
    </div>
    </div>

    <div className='col mt-4' style={{minWidth: '200px'}}>
    <div className='ml-3'>
       <p  className='my-3'><b>CONTACT</b></p>
       <a href='/' style={{textDecoration: "none", color: "rgb(77, 77, 77)"}}>
        <div className='row'>
          <div className='col-2' style={{maxWidth: "30px"}}> <i class="fa fa-home" aria-hidden="true"></i></div>
          <div className='col-10'> <p style={{fontSize: '15px'}}>Panta, Bihar, India</p></div>
        </div>
        </a>
        <a href='/' style={{textDecoration: "none", color: "rgb(77, 77, 77)"}}>
        <div className='row'>
          <div className='col-2' style={{maxWidth: "30px"}}> <i class="fa fa-envelope " aria-hidden="true"></i></div>
          <div className='col-10'> <p style={{fontSize: '15px'}}>test@gmail.com</p></div>
        </div>
        </a>
        <a href='/' style={{textDecoration: "none", color: "rgb(77, 77, 77)"}}>
        <div className='row'>
          <div className='col-2' style={{maxWidth: "30px"}}> <i class="fa fa-phone mr-3" aria-hidden="true"></i></div>
          <div className='col-10'> <p style={{fontSize: '14px'}}>+ 91 821xxxx6010</p></div>
        </div>
        </a>
    </div>
    </div>
    
</div>

<hr />

    
<div className="row" style={{maxWidth: "180px"}}>
          <div className="col-4">
            <div style={{width: "40px",height: "40px", backgroundColor: '#4062BD', borderRadius: "25px", cursor: "pointer"}}>
            <i class="fa fa-facebook" aria-hidden="true" style={{fontSize: "23px", marginTop: "9px", marginLeft: "12px", color: "white"}}></i>
            </div>
          </div>
          <div className="col-4">
          <div style={{width: "40px",height: "40px", backgroundColor: '#E8B31B', borderRadius: "25px", cursor: "pointer"}}>
            <i class="fa fa-instagram" aria-hidden="true" style={{fontSize: "25px", marginTop: "7px", marginLeft: "9px", color: "white"}}></i>
            </div>
          </div>
          <div className="col-4">
            <div style={{width: "40px",height: "40px", backgroundColor: '#21618C', borderRadius: "25px", cursor: "pointer"}}>
            <i class="fa fa-twitter" aria-hidden="true" style={{fontSize: "25px", marginTop: "9px", marginLeft: "9px", color: "white"}}></i>
            </div>
            
          </div>
        
          </div>
          <p className="mt-2 mb-0 text-center" style={{color: "gray", fontSize: "14px"}}>@ 2024 BharatBill | All Rights Reserved</p>

</div>



    
    </>)
}

export default Footer;