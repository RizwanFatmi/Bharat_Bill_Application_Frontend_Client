import React from "react";
import "./contactform.css";
import ContactUsImage from '../../assets/Image/Contact_Us.png';


const ContactForm = () => {

  return (
    <>
      <div className="container-fluid contactformsection pt-5 ">

      <div className="mx-auto card  w-100   ContactInfo" style={{ maxWidth: "1300px"}} >
        <div className="row mx-auto w-100 ">
          <div className="mx-auto col-5 content p-5 " style={{minWidth: "300px"}}>
            <img src={ContactUsImage} alt="..." className="img-fluid"/>
            <h5 className="font-weight-bold pb-2 mt-2 ml-4  " style={{color: "rgb(6, 96, 170)"}}>
              Contact Info.
            </h5>
          
           <p style={{color: "rgb(6, 96, 170)"}} className="pt-2 ml-4"><i class="fa fa-envelope mr-3" aria-hidden="true"></i>demo@gmail.com</p>
           <div className="row  py-1 " style={{marginLeft: '14px'}}>
            <div className="col-1" style={{maxWidth: '30px', color: "rgb(6, 96, 170)"}}><i class="fa fa-map-marker " aria-hidden="true" style={{fontSize:"20px"}}></i></div>
            <div className="col-11">
           <p  className="" style={{fontSize: '14px', color: "rgb(6, 96, 170)"}}>123 Dartmouth Street Boston,<br></br> Massachusetts 02156 United States</p>
           </div>
          </div>




          </div>


          <div className="col-7  px-5 py-4 mx-auto formBox" style={{minWidth: "180px"}}>
              <div className=" ">
                <h4 className="mx-auto text-center  ctitle" >Thank you for your interest in our company</h4>
                <hr />
                <div className="row pt-2">
                  <div className="col">
                    <p className="ProfileChangeTitle mt-3 mx-auto" style={{minWidth: "180px"}}>First Name</p>
                    <input type="text" className="ProfileChangeInput border" style={{borderRadius: "8px"}} />
                  </div>
                  <div className="col">
                    <p className="ProfileChangeTitle mt-3 mx-auto" style={{minWidth: "180px"}}>Last Name</p>
                    <input type="text" className="ProfileChangeInput border" style={{borderRadius: "8px"}} />
                  </div>
                </div>
                <div className="row">
                  <div className="col">
                    <p className="ProfileChangeTitle mt-3 mx-auto" style={{minWidth: "180px"}}>Email</p>
                    <input type="text" className="ProfileChangeInput border" style={{borderRadius: "8px"}} />
                  </div>
                  <div className="col">
                    <p className="ProfileChangeTitle mt-3 mx-auto" style={{minWidth: "180px"}}>Phone</p>
                    <input type="text" className="ProfileChangeInput border" style={{borderRadius: "8px"}} />
                  </div>
                </div>
                <p className="ProfileChangeTitle mt-3">Message</p>
                <textarea rows={4} className="ProfileChangeInput border" style={{borderRadius: "8px"}} />
              </div>
              <div className="text-end">
              <button className="ContactUsFormSendMessageBtn  mt-4 px-5">Send Message</button>
              </div>
            </div>
          </div>
        </div>

       
      </div>
    </>
  );
};

export default ContactForm;
