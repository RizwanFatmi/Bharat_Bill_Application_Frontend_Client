import React, { useEffect } from "react";
import "./sidebar.css";
import profilePic from '../../assets/Image/Profile_Photo.jpg';
import { useNavigate } from 'react-router-dom'
import { INVOICE_LIST } from "../../data/data";
import { FaFilter } from "react-icons/fa";
import { FaFilePdf } from "react-icons/fa";
import { PiMicrosoftExcelLogoFill } from "react-icons/pi";
import { PiPrinterFill } from "react-icons/pi";
import NoReportLogo from "../../assets/Image/No_Report.jpg";
import Sidebar from "./Sidebar.jsx";



const Profile = () => {
  const report = true;
  const navigate = useNavigate();
  let TotalTaxable = 0;
  let TotalTax = 0;
  let TotalAmount = 0;

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
    <div className="col-9 ContentBox">
    {report? (<>
    <div className="ProductTableBox shadow">
    <p style={{color: "#2980B9", marginBottom: "20px", fontWeight: "bold", fontSize: "20px", textAlign:"center", textDecoration: "underline", textUnderlineOffset: "6px"}}>SALES REGISER</p> 
 
    <div className="text-center mb-4" style={{ display: "flex", justifyContent: "center", alignItems: "center", flexWrap: "wrap" }}>
  <div className="text-center">
    <input type="date" className="SearchInput border mt-4 mr-3 px-4" placeholder="Search invoice here.." style={{ borderRadius: "30px", border: "none", width: '22%', outline: "none" }} />
    <input type="date" className="SearchInput border mt-4 mr-3 px-4" placeholder="Search invoice here.." style={{ borderRadius: "30px", border: "none", width: '22%', outline: "none" }} />
  </div>
  <div className="text-center">
    <button className="SaveChanges shadow mt-4 px-5 mr-3" style={{ borderRadius: "30px" }}><FaFilter style={{ fontSize: "17px", paddingBottom: "3px" }} /> Filter</button>
  </div>
  <div className="text-center">
    <button className="pdfbtn shadow mt-4 mr-3" style={{ borderRadius: "30px" }}><FaFilePdf style={{ fontSize: "19px" }} /></button>
    <button className="xclbtn shadow mt-4 mr-3" style={{ borderRadius: "30px" }}><PiMicrosoftExcelLogoFill style={{ fontSize: "23px" }} /></button>
    <button className="printbtn shadow mt-4 mr-3" style={{ borderRadius: "30px" }}><PiPrinterFill style={{ fontSize: "23px" }} /></button>
  </div>
</div>


   
   <div className="table-responsive" style={{maxHeight: "500px"}}>
    <table class="WholeTable table"  style={{width: '100%'}}>
  <thead >
  <tr  style={{color: "#A9ADAF", fontWeight: "bold", height: "40px"}}>
      <th style={{paddingLeft: "20px", color: "#343536"}} scope="col">Sr.No.</th>
      <th style={{paddingLeft: "20px", color: "#343536"}} scope="col">Date</th>
      <th style={{paddingLeft: "20px", color: "#343536"}} scope="col">Invoice No</th>
      <th style={{paddingLeft: "20px", color: "#343536"}} scope="col">Party Name</th>
      <th style={{paddingLeft: "20px", color: "#343536"}} scope="col">Place</th>
      <th style={{paddingLeft: "20px", color: "#343536"}} scope="col">Taxable</th>
      <th style={{paddingLeft: "20px", color: "#343536"}} scope="col">Tax</th>
      <th style={{paddingLeft: "20px", color: "#343536"}}scope="col">Amount</th>
    </tr>
  </thead>
  <tbody className="TableBody" >
    {INVOICE_LIST? (<>
    {INVOICE_LIST.map((data, index)=>{

       TotalTaxable = TotalTaxable + data.Taxable;
       TotalTax = TotalTax + data.Tax;
       TotalAmount = TotalAmount + data.Amount;

       return(
         <tr className="tablerow">
        <td className="py-2" style={{paddingLeft: "20px", color: "#343536"}}>{index+1}</td>
        <td className="py-2" style={{paddingLeft: "20px", color: "#343536"}}>{data.Date}</td>
        <td className="py-2" style={{paddingLeft: "20px", color: "#343536"}}>{data.InoiveNo}</td>
        <td className="py-2" style={{paddingLeft: "20px", color: "#343536"}}>{data.PartyName}</td>
        <td className="py-2" style={{paddingLeft: "20px", color: "#343536"}}>{data.Place}</td>
        <td className="py-2" style={{paddingLeft: "20px", color: "#343536"}}>{data.Taxable}</td>
        <td className="py-2" style={{paddingLeft: "20px", color: "#343536"}}>{data.Tax}</td>
        <td className="py-2" style={{paddingLeft: "20px", color: "#343536"}}>{data.Amount}</td>
   </tr>
    )})}
    </>):(<></>)}
  </tbody>
  <tr style={{fontWeight: "bolder"}} >
        <td className="pt-1 pb-0" style={{paddingLeft: "20px", color: "#343536"}}></td>
        <td className="pt-1 pb-0" style={{paddingLeft: "20px", color: "#343536"}}></td>
        <td className="pt-1 pb-0" style={{paddingLeft: "20px", color: "#343536"}}></td>
        <td className="pt-1 pb-0" style={{paddingLeft: "20px", color: "#343536"}}></td>
        <td className="pt-1 pb-0" style={{paddingLeft: "20px", color: "#343536"}}>Total</td>
        <td className="pt-1 pb-0" style={{paddingLeft: "20px", color: "#343536"}}>{TotalTaxable}</td>
        <td className="pt-1 pb-0" style={{paddingLeft: "20px", color: "#343536"}}>{TotalTax}</td>
        <td className="pt-1 pb-0" style={{paddingLeft: "20px", color: "#343536"}}>{TotalAmount}</td>
   </tr>
</table>
</div>
</div>
</>):(<>
  <div className="ProductTableBox mt-5" style={{paddingTop:"50px", paddingBottom:"50px", verticalAlign: "middle", height: "45%"}}>
  <div className="text-center my-4">
    <img src={NoReportLogo} alt=".." style={{width: "200px"}} />
    <p style={{color: "gray", fontSize: "20px", marginTop: "10px"}}>Data not found</p>
  </div>
  </div>

</>)}
    </div>
    </div>
    </div>
      </>
    );
  };
  
  export default Profile;
  