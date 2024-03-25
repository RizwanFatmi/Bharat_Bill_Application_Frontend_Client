import React, { useEffect } from "react";
import "./sidebar.css";
import { useNavigate } from 'react-router-dom'
import { INVOICE_LIST } from "../../data/data";
import { IoSearchOutline } from "react-icons/io5";
import { AiOutlineDelete } from "react-icons/ai";
import { FaRegFilePdf } from "react-icons/fa";
import NoInvoiceLogo from "../../assets/Image/No_Invoice.jpg";
import Sidebar from "./Sidebar.jsx";






const Bill = () => {

  const navigate = useNavigate();
  const invoiceList = true;
  useEffect(() => {
    window.scrollTo(0, 0)
  },[]);
    return (
      <>
    <div style={{marginBottom: "-20px"}}>
    <div className="row">
    <div className="col-3 Sidebar">
    <Sidebar />
    </div>
    <div className="col-9 ContentBox px-4">
      {invoiceList? (<>
    <div className="ProductTableBox shadow">
    <p style={{color: "#2980B9", marginBottom: "20px", fontWeight: "bold", fontSize: "20px", textAlign:"center", textDecoration: "underline", textUnderlineOffset: "6px"}}>INVOICE LIST</p> 
 
    <div className="mb-4 mx-auto ProductUpperPart" style={{justifyContent: "center"}}>
    <div className="SearchInput border  mr-3" style={{borderRadius: "30px", height: "40px", marginTop: '30px'}}>
    <IoSearchOutline className="mx-2 mb-1" />
   <input type="text" className=""  placeholder="Search invoice here.." style={{border: "none", width: '80%', outline: "none"}}/>
   </div>
     <div className="btnSeprator">
    <button className="SaveChanges shadow mr-4 " style={{borderRadius: "30px", width: "120px"}}>Search</button>
    </div>
     <div className="btnSeprator">
   <button className="SaveChanges shadow mr-4" style={{borderRadius: "30px", width: "120px"}} onClick={()=>navigate('/user/createinvoice')}>Create Bill</button>
   </div>
    <div className="btnSeprator">
   <button className="DeleteBtn  shadow" style={{borderRadius: "30px", width: "120px"}}  data-bs-toggle="modal" data-bs-target="#deleteAllBills">Delete All </button>
   </div>
   </div>

   
   <div className="table-responsive">
    <table class="WholeTable table"  style={{width: '100%'}}>
  <thead >
  <tr  style={{color: "#A9ADAF", fontWeight: "bold", height: "40px"}}>
      <th style={{paddingLeft: "20px", color: "#343536"}} scope="col">Sr.No.</th>
      <th style={{paddingLeft: "20px", color: "#343536"}} scope="col">Date</th>
      <th style={{paddingLeft: "20px", color: "#343536"}} scope="col">Invoice No</th>
      <th style={{paddingLeft: "20px", color: "#343536"}} scope="col">Party Name</th>
      <th style={{paddingLeft: "20px", color: "#343536"}} scope="col">Place</th>
      <th style={{paddingLeft: "20px", color: "#343536"}}scope="col">Amount</th>
      <th style={{paddingLeft: "20px", color: "#343536"}}scope="col">Action</th>
    </tr>
  </thead>
  <tbody className="TableBody" >
    {INVOICE_LIST? (<>
    {INVOICE_LIST.map((data, index)=>(
         <tr className="tablerow" onClick={()=>navigate('/user/invoiceformat')}>
        <td className="py-2" style={{paddingLeft: "20px", color: "#343536"}}>{index+1}</td>
        <td className="py-2" style={{paddingLeft: "20px", color: "#343536"}}>{data.Date}</td>
        <td className="py-2" style={{paddingLeft: "20px", color: "#343536"}}>{data.InoiveNo}</td>
        <td className="py-2" style={{paddingLeft: "20px", color: "#343536"}}>{data.PartyName}</td>
        <td className="py-2" style={{paddingLeft: "20px", color: "#343536"}}>{data.Place}</td>
        <td className="py-2" style={{paddingLeft: "20px", color: "#343536"}}>{data.Amount}</td>
        <td className="py-2" style={{paddingLeft: "20px", color: "#343536"}}>
          <FaRegFilePdf className="EditProduct"  />
          <AiOutlineDelete className="DeleteProduct"  data-bs-toggle="modal" data-bs-target="#deleteBill" />
        </td>
   </tr>
    ))}
    </>):(<></>)}
  </tbody>
</table>
</div>
<div className="">
<nav aria-label="...">
  <ul class="pagination">
    <li class="page-item disabled px-1 ">
      <span class="page-link" style={{borderRadius: '50px'}}>Previous</span>
    </li>
    <li class="page-item active px-1 " aria-current="page">
      <span class="page-link" style={{borderRadius: '50px', backgroundColor: "rgb(6, 96, 170)"}}>1</span>
    </li>
    <li class="page-item px-1   " aria-current="page">
      <span class="page-link" style={{borderRadius: '50px', color: "black"}}>2</span>
    </li>
    <li class="page-item px-1  " aria-current="page">
    <span class="page-link" style={{borderRadius: '50px', color: "black"}}>3</span>
    </li>
    <li class="page-item px-1  ">
      <span class="page-link" style={{borderRadius: '50px', color: "black"}}>Next</span>
    </li>
  </ul>
</nav>
</div>
</div>
</>):(<>
  <div className="ProductTableBox mt-5" style={{paddingTop:"50px", paddingBottom:"50px", verticalAlign: "middle", height: "45%"}}>
  <div className="text-center">
    <img src={NoInvoiceLogo} alt=".." style={{width: "150px"}} />
    <p style={{color: "gray", fontSize: "20px", marginTop: "10px"}}>Invoice not found</p>
     <button className="SaveChanges shadow  mt-2" style={{borderRadius: "5px"}} onClick={()=>navigate('/user/createinvoice')}>Create New Invoice</button>
  </div>
  </div>

</>)}
</div>
    </div>
    </div>



    
    {/* Model 1: Delete Bill */}
    <div class="  modal fade" id="deleteBill" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content mx-auto px-3 pb-4" style={{width: "100%", borderRadius: "15px"}}>
        <div class="modal-body">        
        <p style={{color: "black", marginBottom: "20px",marginTop: "20px", fontWeight: "bold", fontSize: "23px"}}>Are you sure you want to delete this invoice?</p>    
        <p className="ProfileChangeTitle002" style={{fontSize: '17px'}}>This action will delete your invoice permanently. You cannot undo this action. </p>
        <div className="text-end mt-4">
        <button type="button" data-bs-dismiss="modal" aria-label="Close" className="SaveChanges003 ">Cancel</button>
        <button className="SaveChanges004 "> <AiOutlineDelete style={{fontSize: "18px", marginBottom: "4px", marginRight:"7px"}}  data-bs-toggle="modal" data-bs-target="#deleteProduct" />Delete</button>
        </div>
        </div></div>
        </div>
        </div>
   

   


  {/* Model 3: Delete All Bills */}
  <div class="  modal fade" id="deleteAllBills" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content mx-auto px-3 pb-4" style={{width: "100%", borderRadius: "15px"}}>
        <div class="modal-body">        
        <p style={{color: "black", marginBottom: "20px",marginTop: "20px", fontWeight: "bold", fontSize: "23px"}}>Are you sure you want to delete all your Bills?</p>    
        <p className="ProfileChangeTitle002" style={{fontSize: '17px'}}>This action will delete all your bills permanently. You cannot undo this action. </p>
        <div className="text-end mt-4">
        <button type="button" data-bs-dismiss="modal" aria-label="Close" className="SaveChanges003 ">Cancel</button>
        <button className="SaveChanges004 "> <AiOutlineDelete style={{fontSize: "18px", marginBottom: "4px", marginRight:"7px"}}  data-bs-toggle="modal" data-bs-target="#deleteProduct" />Delete All</button>
        </div>
        </div></div>
        </div>
        </div>

      </>
    );
  };
  
  export default Bill;
  