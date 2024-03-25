import React from 'react'
import './info.css'
import infoImage from '../../assets/Image/Info.png';


function Info() {
    return (<>


<div className='px-3 mx-auto mt-4 HomePageInfo' style={{maxWidth: '1600px'}}>
          <div class="row px-4 py-3 infobg ">
            <div class="col-sm-4 " style={{ minWidth: "250px"}}>
            <div className=" mt-5" >
              <h2><b>Create your invoice in minimal effort</b></h2>
              <p style={{ fontSize: '18px', marginTop: "20px", color: "gray" }}>Create cusomisable, professional invoices in seconds, and send them to the customers. By using this website you can create invoices easily and after creating the invoice you can export it on PDF so that you can send it to the customers. You can also download different reports in excell format. It reduce the time and effort and make a huge difference.</p>    
          </div>
          <div className='row '>
            <div className='col mt-3'>
                <div className='row'>
                    <div className='col-2'>
                        <i class="fa fa-check-circle tickicon"  aria-hidden="true"></i>
                    </div>
                    <div className='col-10'>
                <p><b>Send professional invoices directly</b></p>
            </div>
                </div>
            </div>
            <div className='col mt-3' >
                <div className='row'>
                    <div className='col-2'>
                        <i class="fa fa-check-circle tickicon"  aria-hidden="true"></i>
                    </div>
                    <div className='col-10'>
                <p><b>Export PDF invoices easily </b></p>
            </div>
                </div>
            </div>
          </div>
          <div className='row'>
            <div className='col mt-3'>
                <div className='row'>
                    <div className='col-2'>
                        <i class="fa fa-check-circle tickicon"  aria-hidden="true"></i>
                    </div>
                    <div className='col-10'>
                <p><b>Track your Invioces</b></p>
            </div>
                </div>
            </div>
            <div className='col mt-3'>
                <div className='row'>
                    <div className='col-2'>
                        <i class="fa fa-check-circle tickicon"  aria-hidden="true"></i>
                    </div>
                    <div className='col-10'>
                <p><b>Download excell reports easily</b></p>
            </div>
                </div>
            </div>
          </div>
            </div>
            <div class="col-sm-8" style={{ minWidth: "200px"}}>
            <img src={infoImage} alt="Loading" style={{width: "100%", height: "100%"}}/>
           </div>

          </div>
          
          
          </div>
    


    
    </>)
}

export default Info;