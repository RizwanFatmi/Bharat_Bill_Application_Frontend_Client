import React, {useState,useEffect} from 'react'
import './invoiceformat.css';
import Logo from '../../assets/Image/Organisation_Logo.jpg';
import { PiPrinterFill } from 'react-icons/pi';
import { FaFilePdf } from 'react-icons/fa';
import { FaImage } from "react-icons/fa6";
import Select from 'react-select';


function InvoiceFormat() {
  useEffect(() => {
    window.scrollTo(0, 0)
  },[]);

  const options = [
    { value: 'Format 001', label: 'Format 001' },
    { value: 'Format 002', label: 'Format 002' },
    { value: 'Format 003', label: 'Format 003' },
  ];
  const [selectedOption, setSelectedOption] = useState(null);
    return (<>

 <div className='px-3'>
 <div className='UpperBox border flex shadow'>
  <div className='row '>
  <div className='col-8 mx-auto mb-2'style={{textAlign: "end"}}>
  <div className='ProfileChangeInput002 border px-2' style={{paddingTop: "1px", paddingBottom: "1px", marginTop: "2px", textAlign: "start", borderRadius: "30px"}}>
  <Select
        defaultValue={selectedOption}
        onChange={setSelectedOption}
                options={options}
                placeholder="Select Invoice Format"
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
    </div>
    <div className='col-4 mx-auto' style={{minWidth: "270px", textAlign: "center"}}>
    <button className="pdfbtn shadow mt-1 mr-3 " style={{borderRadius: "30px"}}><FaFilePdf  style={{fontSize: "19px"}}/></button>
    <button className="xclbtn shadow mt-1 mr-3 ml-1" style={{borderRadius: "30px"}}><FaImage style={{fontSize: "18px"}}/></button>
    <button className="printbtn shadow mt-1  mr-3 ml-1" style={{borderRadius: "30px"}}><PiPrinterFill  style={{fontSize: "23px"}}/></button>
    </div>
  </div>
</div>
 <div className='InvoiceBox border shadow'>
   <div className='row'>
    <div className='col'>
        <div className='CompanyLogoBox'>
        <img src={Logo} alt=".." class="img-fluid"/>
        </div>
    </div>
    <div className='col'>
        <div className='text-end pt-3'>
        <p style={{fontSize: '22px'}}><b>Special food & drink</b></p>
        <p style={{marginTop: "-20px", fontSize: "16px"}}>148, North Street</p>
        <p style={{marginTop: "-20px", fontSize: "16px"}}>Greater south avenue</p>
        <p style={{marginTop: "-20px", fontSize: "16px"}}>New York, U.S</p>
        </div>
    </div>
   </div>
   <div>

   <hr  />
   <div className='px-4 mx-auto' style={{ width: "180px"}}>
   <h2 className='text-center' style={{color: "gray"}}>INVOICE</h2>
   </div>
   <div className='row'>
    <div className='col'>
       <div className=' pt-3'>
        <p style={{fontSize: "15px", fontWeight: '500'}}>Bill To</p>
        <p style={{fontSize: '22px', marginTop: "-10px"}}><b>Special food & drink</b></p>
        <p style={{marginTop: "-20px", fontSize: "16px", fontWeight: '400'}}>148, North Street</p>
        <p style={{marginTop: "-20px", fontSize: "16px", fontWeight: '400'}}>Greater south avenue</p>
        <p style={{marginTop: "-20px", fontSize: "16px", fontWeight: '400'}}>New York, U.S</p>
        <p style={{fontSize: "16px", fontWeight: '400'}}>+91 8215565885</p>
        <p style={{marginTop: "-20px", fontSize: "16px", fontWeight: '400'}}>specialfood@yahoo.in</p>
        <p style={{fontSize: "15px", fontWeight: '500'}}>GSTIN: 10DKFIK0256IN</p>
        </div>
        {/*
        <div className=' pt-3'>
        <p style={{fontSize: "15px", fontWeight: '500'}}>Ship To</p>
        <p style={{marginTop: "-10px", fontSize: "16px", fontWeight: '400'}}>148, North Street</p>
        <p style={{marginTop: "-20px", fontSize: "16px", fontWeight: '400'}}>Greater south avenue</p>
        <p style={{marginTop: "-20px", fontSize: "16px", fontWeight: '400'}}>New York, U.S</p>
        </div>
        */}
    </div>
    <div className='col'>
        <div className='text-end pt-3'>
        <p style={{ fontSize: "18px", fontWeight: "500"}}>Invoice#</p>
        <p style={{marginTop: "-20px",fontSize: '19px'}}><b>INV-0000002</b></p>
        <p style={{ fontSize: "18px", fontWeight: "500"}}>Date#</p>
        <p style={{marginTop: "-20px",fontSize: '19px'}}><b>26-11-2023 11:33:26</b></p>
        </div>
    </div>
   </div>
   {/*TABLE START*/}
   <div className='TableBox mt-5 table-responsive' style={{boxShadow: "none", borderRadius: "5px"}} >
   <table class="table">
  <thead style={{backgroundColor: "#05A22E", color: "white"}}>
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
    <tr>
      <th className= "text-center" scope="row" style={{borderLeft: " solid 1px #DCDCDC", borderRight: "solid 1px #DCDCDC", borderTop: 'solid 0px gray', borderBottom: "solid 0px gray"}}>3</th>
      <td style={{borderLeft: " solid 1px #DCDCDC", borderRight: "solid 1px #DCDCDC", borderTop: 'solid 0px gray', borderBottom: "solid 0px gray"}}>Chicken Loaded Sandwich </td>
      <td className= "text-center" style={{borderLeft: " solid 1px #DCDCDC", borderRight: "solid 1px #DCDCDC", borderTop: 'solid 0px gray', borderBottom: "solid 0px gray"}}>1</td>
      <td className= "text-end" style={{borderLeft: " solid 1px #DCDCDC", borderRight: "solid 1px #DCDCDC", borderTop: 'solid 0px gray', borderBottom: "solid 0px gray"}}>100.00</td>
      <td className= "text-end" style={{borderLeft: " solid 1px #DCDCDC", borderRight: "solid 1px #DCDCDC", borderTop: 'solid 0px gray', borderBottom: "solid 0px gray"}}>100.00</td>
      <td className= "text-end" style={{borderLeft: " solid 1px #DCDCDC", borderRight: "solid 1px #DCDCDC", borderTop: 'solid 0px gray', borderBottom: "solid 0px gray"}}>18.00</td>
      <td className= "text-end" style={{borderLeft: " solid 1px #DCDCDC", borderRight: "solid 1px #DCDCDC", borderTop: 'solid 0px gray', borderBottom: "solid 0px gray"}}>118.00</td>
    </tr>
    <tr>
      <th className= "text-center" scope="row" style={{borderLeft: " solid 1px #DCDCDC", borderRight: "solid 1px #DCDCDC", borderTop: 'solid 0px gray', borderBottom: "solid 0px gray"}}>4</th>
      <td style={{borderLeft: " solid 1px #DCDCDC", borderRight: "solid 1px #DCDCDC", borderTop: 'solid 0px gray', borderBottom: "solid 0px gray"}}>Chicken Loaded Sandwich </td>
      <td className= "text-center" style={{borderLeft: " solid 1px #DCDCDC", borderRight: "solid 1px #DCDCDC", borderTop: 'solid 0px gray', borderBottom: "solid 0px gray"}}>2</td>
      <td className= "text-end" style={{borderLeft: " solid 1px #DCDCDC", borderRight: "solid 1px #DCDCDC", borderTop: 'solid 0px gray', borderBottom: "solid 0px gray"}}>100.00</td>
      <td className= "text-end" style={{borderLeft: " solid 1px #DCDCDC", borderRight: "solid 1px #DCDCDC", borderTop: 'solid 0px gray', borderBottom: "solid 0px gray"}}>200.00</td>
      <td className= "text-end" style={{borderLeft: " solid 1px #DCDCDC", borderRight: "solid 1px #DCDCDC", borderTop: 'solid 0px gray', borderBottom: "solid 0px gray"}}>36.00</td>
      <td className= "text-end" style={{borderLeft: " solid 1px #DCDCDC", borderRight: "solid 1px #DCDCDC", borderTop: 'solid 0px gray', borderBottom: "solid 0px gray"}}>236.00</td>
    </tr>
    <tr>
      <th className= "text-center" scope="row" style={{borderLeft: " solid 1px #DCDCDC", borderRight: "solid 1px #DCDCDC", borderTop: 'solid 0px gray', borderBottom: "solid 0px gray"}}>5</th>
      <td style={{borderLeft: " solid 1px #DCDCDC", borderRight: "solid 1px #DCDCDC", borderTop: 'solid 0px gray', borderBottom: "solid 0px gray"}}>Chicken Loaded Sandwich </td>
      <td className= "text-center" style={{borderLeft: " solid 1px #DCDCDC", borderRight: "solid 1px #DCDCDC", borderTop: 'solid 0px gray', borderBottom: "solid 0px gray"}}>4</td>
      <td className= "text-end" style={{borderLeft: " solid 1px #DCDCDC", borderRight: "solid 1px #DCDCDC", borderTop: 'solid 0px gray', borderBottom: "solid 0px gray"}}>100.00</td>
      <td className= "text-end" style={{borderLeft: " solid 1px #DCDCDC", borderRight: "solid 1px #DCDCDC", borderTop: 'solid 0px gray', borderBottom: "solid 0px gray"}}>400.00</td>
      <td className= "text-end" style={{borderLeft: " solid 1px #DCDCDC", borderRight: "solid 1px #DCDCDC", borderTop: 'solid 0px gray', borderBottom: "solid 0px gray"}}>72.00</td>
      <td className= "text-end" style={{borderLeft: " solid 1px #DCDCDC", borderRight: "solid 1px #DCDCDC", borderTop: 'solid 0px gray', borderBottom: "solid 0px gray"}}>472.00</td>
    </tr>
  </tbody>
</table>
   </div>
   {/*TABLE END*/}

<div className='ml-auto px-3 pt-3  mt-2' style={{width: '230px', border: "solid 1px #DCDCDC"}}>
<div className='row' style={{marginTop: '-8px'}}>
<p className='col'>Taxable: </p>
<p className='text-end col'>1500.00 </p>
</div>
<div className='row' style={{marginTop: '-12px'}}>
<p className='col'>CGST: </p>
<p className='text-end col'>200.00 </p>
</div>
<div className='row' style={{marginTop: '-12px'}}>
<p className='col'>SGST: </p>
<p className='text-end col'>200.00 </p>
</div>

</div>
<div className='row'>
  <div className='col'>
   
  </div>
  <div className='col'>
  <div className='ml-auto px-3' style={{width: '230px', border: "solid 1px #DCDCDC", backgroundColor: '#E2FFD9'}}>
<div className='row' style={{marginBottom: "-10px", fontWeight: "500", marginTop: "2px"}}>
<p className='col'>Total: </p>
<p className='text-end col'>1900.00 </p>
</div>
</div>
  </div>
</div>
<div  className= "Authsig">
      <p style={{fontWeight: "bolder", fontSize: "18px", marginLeft: "10px"}}>For Special Food & Drink</p>
      <p style={{fontSize: "16px", marginLeft: "10px", marginTop: "-10px"}}>Authorised Signatury</p>

    </div>

   </div>
   <p className='invoiceNote mt-5' style={{fontSize: "16px", color: '#6B6B6B'}}><b style={{color: "green"}}>Note: </b>  You can contact us on <b>"+91 8215652356"</b> and and mail us on <b>"specialfoodshop@gmail.com".</b></p>
 </div>
 
 </div>
    
    </>)
}

export default InvoiceFormat;