import React, {useState, useEffect} from 'react';
import './invoiceformat.css';
import { IoAddCircleOutline } from "react-icons/io5";
import Select from 'react-select';
import { PiLockKeyLight } from "react-icons/pi";
import { useNavigate } from 'react-router-dom'


function CreateInvoice() {

    const navigate = useNavigate();
    const [customer, setCustomer] = useState(false);
    const [product, setProduct] = useState(false);
    const [plan, setPlan] = useState(true);
    const [selectedOption, setSelectedOption] = useState(null);
    const options = [
      { value: 'chocolate', label: 'Chocolate' },
      { value: 'strawberry', label: 'Strawberry' },
      { value: 'vanilla', label: 'Vanilla' },
    ];

    useEffect(() => {
      window.scrollTo(0, 0)
    },[]);


    const addCustomer =()=>{
      setCustomer(true);
    }

    const addProduct =()=>{
      setProduct(true);
    }

    return (<>

    {plan? (<>
    <p style={{fontSize: "35px", fontWeight: "500", textAlign: "center", marginTop: "20px", color: "gray"}}>Create Invoice</p>
   <div className='UpperBox border mt-0'>
    {customer? (<>
    <p style={{fontWeight: "500"}}>To</p>
    <p style={{fontWeight: "700", fontSize: '20px', marginTop: "-10px"}}>Lunch Box & dinner</p>
    <p style={{marginTop: "-15px"}}>Anwar Marcket</p>
    <p style={{marginTop: "-20px"}}>U.T selhi anargunj</p>
    <p style={{marginTop: "-20px"}}>South Delhi</p>
    <p>+91 8658564512</p>
    <p style={{marginTop: "-20px"}}>lunchbox&dinner@yahoo.in</p>
    <p style={{fontWeight: "500", fontSize: "14px"}}>GSTIN: 10ABDGD5265IN</p>

    </>):(<>
      <div className='text-center'>
      <button className="SaveChanges shadow mt-2"  data-bs-toggle="modal" data-bs-target="#addCustomer" style={{borderRadius: "5px"}} >Add Customer</button> 
    </div>
    </>)}
     
      <hr />
      {product? (<>
        {/*TABLE START*/}
   <div className='TableBox table-responsive' style={{boxShadow: "none", borderRadius: "5px"}}>
   <table class="table">
  <thead style={{backgroundColor: "rgb(6, 96, 170)", color: "white"}}>
    <tr>
      <th className='text-center' scope="col" style={{border: "solid 1px white", fontWeight: '400', borderLeft: "solid 1px #05A22E"}}>#</th>
      <th scope="col" style={{border: "solid 1px white", fontWeight: '400'}}>Item & Description</th>
      <th className='text-center' scope="col" style={{border: "solid 1px white", fontWeight: '400'}}>Qty</th>
      <th className='text-end' scope="col" style={{border: "solid 1px white", fontWeight: '400'}}>Rate</th>
      <th className='text-end' scope="col" style={{border: "solid 1px white", fontWeight: '400'}}>Taxable</th>
      <th className='text-end' scope="col" style={{border: "solid 1px white", fontWeight: '400'}}>Tax</th>
      <th className='text-end' scope="col" style={{border: "solid 1px white", fontWeight: '400', borderRight: "solid 1px #05A22E"}}>Amount</th>
    </tr>
  </thead>
  <tbody style={{border: "solid 1px #DCDCDC"}}>
    <tr>
      <th className= "text-center" scope="row" style={{borderLeft: " solid 1px #DCDCDC", borderRight: "solid 1px #DCDCDC", borderTop: 'solid 0px gray', borderBottom: "solid 0px gray"}}>1</th>
      <td style={{borderLeft: " solid 1px #DCDCDC", borderRight: "solid 1px #DCDCDC", borderTop: 'solid 0px gray', borderBottom: "solid 0px gray"}}>Cheez Pizza with Paneer </td>
      <td className= "text-center" style={{borderLeft: " solid 1px #DCDCDC", borderRight: "solid 1px #DCDCDC", borderTop: 'solid 0px gray', borderBottom: "solid 0px gray"}}>2</td>
      <td className= "text-end" style={{borderLeft: " solid 1px #DCDCDC", borderRight: "solid 1px #DCDCDC", borderTop: 'solid 0px gray', borderBottom: "solid 0px gray"}}>175.00</td>
      <td className= "text-end" style={{borderLeft: " solid 1px #DCDCDC", borderRight: "solid 1px #DCDCDC", borderTop: 'solid 0px gray', borderBottom: "solid 0px gray"}}>350.00</td>
      <td className= "text-end" style={{borderLeft: " solid 1px #DCDCDC", borderRight: "solid 1px #DCDCDC", borderTop: 'solid 0px gray', borderBottom: "solid 0px gray"}}>35.00</td>
      <td className= "text-end" style={{borderLeft: " solid 1px #DCDCDC", borderRight: "solid 1px #DCDCDC", borderTop: 'solid 0px gray', borderBottom: "solid 0px gray"}}>385.00</td>
    </tr>
    <tr>
      <th className= "text-center" scope="row" style={{borderLeft: " solid 1px #DCDCDC", borderRight: "solid 1px #DCDCDC", borderTop: 'solid 0px gray', borderBottom: "solid 0px gray"}}>2</th>
      <td style={{borderLeft: " solid 1px #DCDCDC", borderRight: "solid 1px #DCDCDC", borderTop: 'solid 0px gray', borderBottom: "solid 0px gray"}}>Mango Juice Sweet & Simple </td>
      <td className= "text-center" style={{borderLeft: " solid 1px #DCDCDC", borderRight: "solid 1px #DCDCDC", borderTop: 'solid 0px gray', borderBottom: "solid 0px gray"}}>3</td>
      <td className= "text-end" style={{borderLeft: " solid 1px #DCDCDC", borderRight: "solid 1px #DCDCDC", borderTop: 'solid 0px gray', borderBottom: "solid 0px gray"}}>50.00</td>
      <td className= "text-end" style={{borderLeft: " solid 1px #DCDCDC", borderRight: "solid 1px #DCDCDC", borderTop: 'solid 0px gray', borderBottom: "solid 0px gray"}}>150.00</td>
      <td className= "text-end" style={{borderLeft: " solid 1px #DCDCDC", borderRight: "solid 1px #DCDCDC", borderTop: 'solid 0px gray', borderBottom: "solid 0px gray"}}>50.00</td>
      <td className= "text-end" style={{borderLeft: " solid 1px #DCDCDC", borderRight: "solid 1px #DCDCDC", borderTop: 'solid 0px gray', borderBottom: "solid 0px gray"}}>200.00</td>
    </tr>
  </tbody>
</table>
   </div>
   {/*TABLE END*/}
   <button className="SaveChanges shadow mt-2" data-bs-toggle="modal" data-bs-target="#addProduct" style={{borderRadius: "5px"}}>Add More Product</button>  
      </>):(<>
        <div className='text-center'>
        <button className="SaveChanges shadow mt-2" data-bs-toggle="modal" data-bs-target="#addProduct" style={{borderRadius: "5px"}}>Add Product</button> 
        </div>
      </>)}
      <hr />
      <div className='text-center'>
      <button className="SaveChanges shadow mt-2" style={{borderRadius: "5px"}} onClick={()=>navigate('/user/invoiceformat')}>Generate Invoice</button> 
      </div>
    </div>
    </>):(<>
    <div className='my-5' style={{backgroundColor: "#F1F1F1", height: '60vh'}}>
    <div style={{textAlign: "center", width: "100%", maxWidth: "500px"}} className='mx-auto px-3'>
    <PiLockKeyLight style={{fontSize: "150px", marginTop: "40px" }} />
    <p style={{fontSize: '32px', fontWeight: '500'}}>Access Restricted</p>
    <p style={{fontSize: '18px', fontWeight: '400', marginTop: '-10px'}}>You don't have plan to use this feature. If you want to create new bills Kindly buy a plan first.</p>
    <button className='SaveChanges002 mr-3' onClick={()=>navigate('/pricing')}>Buy a plan</button>
    <button className='SaveChanges002' onClick={()=>navigate('/')}>Go to home</button>
    </div>
    </div>
    </>)}


 {/* Model 1: Add Customer */}
 <div class="  modal fade" id="addCustomer" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content mx-auto px-4 pb-4" style={{width: "100%", borderRadius: "15px"}}>
            <div class="modal-body">
             
            
        <p style={{color: "green", marginBottom: "20px", fontWeight: "bold", fontSize: "20px", textAlign:"center"}}>ENTER CUSTOMER DETAILS</p> 
        
        <p className="ProfileChangeTitle002">Customer Name</p>
        <input type="text" className="ProfileChangeInput002 border"/>  
        <p className="ProfileChangeTitle002">Address Line01</p>
        <input type="text" className="ProfileChangeInput002 border"/>  
        <p className="ProfileChangeTitle002">Address Line02</p>
        <input type="text" className="ProfileChangeInput002 border"/>  
        <div className='row'>
          <div className='col'>
          <p className="ProfileChangeTitle002">City</p>
         <input type="text" className="ProfileChangeInput002 border"/>  
          </div>
          <div className='col'>
          <p className="ProfileChangeTitle002">Phone Number</p>
         <input type="text" className="ProfileChangeInput002 border"/>  
         </div>
         </div>
         <div className='row'>
          <div className='col'>
          <p className="ProfileChangeTitle002">Email</p>
        <input type="text" className="ProfileChangeInput002 border"/>  
          </div>
          <div className='col'>
          <p className="ProfileChangeTitle002">GSTIN</p>
        <input type="text" className="ProfileChangeInput002 border"/>  
         </div>
         </div>
        
       
       
        <div className="text-center mt-4">
        <button type="button" data-bs-dismiss="modal" aria-label="Close" className="SaveChanges003 ">Cancel</button>
        <button className="SaveChanges002 " data-bs-dismiss="modal" aria-label="Close" onClick={addCustomer}>Add Customer</button>
        </div>
    </div>
            </div>
       
          </div>
        </div>
   

 {/* Model 2: Add Product */}
 <div class="  modal fade" id="addProduct" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content mx-auto px-4 pb-4" style={{width: "80%", borderRadius: "15px"}}>
            <div class="modal-body">
             
            
        <p style={{color: "green", marginBottom: "20px", fontWeight: "bold", fontSize: "20px", textAlign:"center"}}>ENTER PRODUCT</p> 
        
        <p className="ProfileChangeTitle002">Product Name</p>
        <div className='ProfileChangeInput002 border px-2' style={{paddingTop: "1px", paddingBottom: "1px", marginTop: "-8px"}}>
        <Select
        defaultValue={selectedOption}
        onChange={setSelectedOption}
                options={options}
                placeholder="Select Product"
                styles={{
                  control: (baseStyles, state) => ({
                    ...baseStyles,
                    borderColor: state.isFocused ? "white" : "white",
                    "&:hover": {
                      borderColor: state.isFocused ? "white" : "white"
                    }
                  }),
                }}
                theme={(theme) => ({
                  ...theme,
          borderRadius: 10,
          colors: {
            ...theme.colors,
            primary: 'white',
          },
        })}
      />
      </div>
         <div className='row'>
          <div className='col'>
          <p className="ProfileChangeTitle002">Quantity</p>
        <input type="number" className="ProfileChangeInput002 border"/>  
          </div>
          <div className='col'>
          <p className="ProfileChangeTitle002">Rate</p>
        <input type="number" className="ProfileChangeInput002 border"/>  
         </div>
         </div>
        <div className="text-center mt-4">
        <button type="button" data-bs-dismiss="modal" aria-label="Close" className="SaveChanges003 ">Cancel</button>
        <button className="SaveChanges002" data-bs-dismiss="modal" aria-label="Close" onClick={addProduct} >Add Product</button>
        </div>
    </div>
            </div>
       
          </div>
        </div>
   


 </> )
}

export default CreateInvoice;