import React, { useEffect } from "react";
import "./sidebar.css";
import "./userdashboard.css";
import profilePic from '../../assets/Image/Profile_Photo.jpg';
import { useNavigate } from 'react-router-dom'
import { PRODUCT_LIST } from "../../data/data";
import { IoSearchOutline } from "react-icons/io5";
import { BiSolidEdit } from "react-icons/bi";
import { AiOutlineDelete } from "react-icons/ai";
import NoProductLogo from "../../assets/Image/No_Product.jpg";
import Sidebar from "./Sidebar.jsx";



const Profile = () => {

  const navigate = useNavigate();
  const productList = true
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

    {productList?(<>
    <div className="ProductTableBox shadow">
    <p style={{color: "#2980B9", marginBottom: "20px", fontWeight: "bold", fontSize: "20px", textAlign:"center", textDecoration: "underline", textUnderlineOffset: "6px"}}>PRODUCT LIST</p> 
 
   <div className="mb-4 mx-auto ProductUpperPart" style={{justifyContent: "center"}}>
    <div className="SearchInput border  mr-3" style={{borderRadius: "30px", height: "40px", marginTop: '30px'}}>
    <IoSearchOutline className="mx-2 mb-1" />
   <input type="text" className=""  placeholder="Search product here.." style={{border: "none", width: '80%', outline: "none"}}/>
   </div>
   <div className="btnSeprator">
    <button className="SaveChanges shadow   mr-4 " style={{borderRadius: "30px", width: "120px"}}>Search</button>
    </div>
    <div className="btnSeprator">
   <button className="SaveChanges shadow   mr-4  " data-bs-toggle="modal" data-bs-target="#addProduct" style={{borderRadius: "30px", width: "120px"}}>Add New</button>
   </div>
   <div className="btnSeprator">
   <button className="DeleteBtn  shadow  " style={{borderRadius: "30px", width: "120px"}}  data-bs-toggle="modal" data-bs-target="#deleteAllProduct">Delete All </button>
   </div>
   </div>
   <div className="table-responsive">
    <table class="WholeTable table"  style={{width: '100%'}}>
  <thead >
  <tr  style={{color: "#A9ADAF", fontWeight: "bold", height: "40px"}}>
      <th style={{paddingLeft: "40px", color: "#343536"}} scope="col">Sr.No.</th>
      <th style={{paddingLeft: "40px", color: "#343536"}} scope="col">Product Name</th>
      <th style={{paddingLeft: "40px", color: "#343536"}} scope="col">HSN Code</th>
      <th style={{paddingLeft: "40px", color: "#343536"}} scope="col">MRP</th>
      <th style={{paddingLeft: "40px", color: "#343536"}} scope="col">GST(%)</th>
      <th style={{paddingLeft: "40px", color: "#343536"}}scope="col">Action</th>
    </tr>
  </thead>
  <tbody className="TableBody" >
    {PRODUCT_LIST? (<>
    {PRODUCT_LIST.map((data, index)=>(
         <tr className="tablerow">
        <td className="py-2" style={{paddingLeft: "40px", color: "#343536"}}>{index+1}</td>
        <td className="py-2" style={{paddingLeft: "40px", color: "#343536"}}>{data.ProductName}</td>
        <td className="py-2" style={{paddingLeft: "40px", color: "#343536"}}>{data.HSNCode}</td>
        <td className="py-2" style={{paddingLeft: "40px", color: "#343536"}}>{data.MRP}</td>
        <td className="py-2" style={{paddingLeft: "40px", color: "#343536"}}>{data.GST}</td>
        <td className="py-2" style={{paddingLeft: "40px", color: "#343536"}}>
          <BiSolidEdit className="EditProduct"  data-bs-toggle="modal" data-bs-target="#addProduct" />
          <AiOutlineDelete className="DeleteProduct"  data-bs-toggle="modal" data-bs-target="#deleteProduct" />
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
<div>
</div>
</div>
</>):(<>
  <div className="ProductTableBox mt-5" style={{paddingTop:"50px", paddingBottom:"50px", verticalAlign: "middle", height: "45%"}}>
  <div className="text-center">
    <img src={NoProductLogo} alt=".." style={{width: "130px"}} />
    <p style={{color: "gray", fontSize: "20px", marginTop: "10px"}}>Product not found</p>
    <button className="SaveChanges shadow mt-2" data-bs-toggle="modal" data-bs-target="#addProduct" style={{borderRadius: "5px"}}>Add New Product</button>  
  </div>
  </div>

</>)}
</div>

    </div>
    </div>



    
      {/* Model 1: Add Product */}
        <div class="  modal fade" id="addProduct" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content mx-auto px-4 pb-2"style={{width: "80%", borderRadius: "15px"}}>
        <div class="modal-body">     
        <p style={{color: "green", marginBottom: "20px", fontWeight: "bold", fontSize: "20px", textAlign:"center"}}>ADD/UPDATE PRODUCT</p> 
        <p className="ProfileChangeTitle002 mt-4">Product Name</p>
        <input type="text" className="ProfileChangeInput002 border"/>  
        <div className='row mt-2'>
        <div className='col'>
        <p className="ProfileChangeTitle002">HSN</p>
        <input type="text" className="ProfileChangeInput002 border"/>  
        </div>
        <div className='col'>
        <p className="ProfileChangeTitle002">MRP</p>
        <input type="text" className="ProfileChangeInput002 border"/>  
        </div>
        <div className='col'>
        <p className="ProfileChangeTitle002">GST(%)</p>
        <input type="text" className="ProfileChangeInput002 border"/>  
        </div>
        </div>
        <div className="text-center mt-4 pt-2">
        <button type="button" data-bs-dismiss="modal" aria-label="Close" className="SaveChanges003 ">Cancel</button>
        <button className="SaveChanges002 ">Save Product</button>
        </div>
        </div></div>
        </div>
        </div>


   

    {/* Model 2: Delete Product */}
        <div class="  modal fade" id="deleteProduct" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content mx-auto px-3 pb-4" style={{width: "100%", borderRadius: "15px"}}>
        <div class="modal-body">        
        <p style={{color: "black", marginBottom: "20px",marginTop: "20px", fontWeight: "bold", fontSize: "23px"}}>Are you sure you want to delete this product?</p>    
        <p className="ProfileChangeTitle002" style={{fontSize: '17px'}}>This action will delete your product permanently. You cannot undo this action. </p>
        <div className="text-end mt-4">
        <button type="button" data-bs-dismiss="modal" aria-label="Close" className="SaveChanges003 ">Cancel</button>
        <button className="SaveChanges004 "> <AiOutlineDelete style={{fontSize: "18px", marginBottom: "4px", marginRight:"7px"}}  data-bs-toggle="modal" data-bs-target="#deleteProduct" />Delete</button>
        </div>
        </div></div>
        </div>
        </div>
   

   


  {/* Model 3: Delete All Product */}
  <div class="  modal fade" id="deleteAllProduct" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content mx-auto px-3 pb-4" style={{width: "100%", borderRadius: "15px"}}>
        <div class="modal-body ">        
        <p style={{color: "black", marginBottom: "20px",marginTop: "20px", fontWeight: "bold", fontSize: "23px"}}>Are you sure you want to delete all products?</p>    
        <p className="ProfileChangeTitle002" style={{fontSize: '17px'}}>This action will delete your all products permanently. You cannot undo this action. </p>
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
  
  export default Profile;
  