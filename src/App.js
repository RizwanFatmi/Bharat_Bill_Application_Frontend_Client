import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// IMPORTING REACT COMPONENTS BEFORE LOGIN : 
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import Signup from "./components/SignUp/SignUp";
import Pricing from "./components/Pricing/Pricing";
import ContactUs from "./components/Contact_Us/Contact";

// IMPORTING REACT COMPONENTS AFTER LOGIN : 
import Profile from "./components/User_Dashboard/Profile";
import Password from "./components/User_Dashboard/Password";
import Organisation from "./components/User_Dashboard/Organisation";
import Product from "./components/User_Dashboard/Product";
import Bill from "./components/User_Dashboard/Bill";
import Report from "./components/User_Dashboard/Report";
import ProductWise from "./components/User_Dashboard/ProductWise";
import InvoiceFormat from "./components/Invoice/InvoiceFormat";
import CreateInvoice from "./components/Invoice/CreateInvoice";

// IMPORTING REACT COMPONENTS FOR ERROR 404 : 
import Error404 from "./components/Error404/Error404";


function App() {

  

  return (
    <>
      <Router>
      <Navbar expanded={true} />
        <Routes>
          
          {/* BEFORE LOGIN*/}
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/login" element={<Login />}></Route>
          <Route exact path="/signup" element={<Signup />}></Route>
          <Route exact path="/pricing" element={<Pricing />}></Route>
          <Route exact path="/contactus" element={<ContactUs />}></Route>

          {/* AFTER LOGIN*/}
          <Route exact path="/user/profile" element={<Profile />}></Route>
          <Route exact path="/user/password" element={<Password />}></Route>
          <Route exact path="/user/organisation" element={<Organisation />}></Route>
          <Route exact path="/user/product" element={<Product />}></Route>
          <Route exact path="/user/bill" element={<Bill />}></Route>
          <Route exact path="/user/report" element={<Report />}></Route>
          <Route exact path="/user/productwise" element={<ProductWise />}></Route>
          <Route exact path="/user/invoiceformat" element={<InvoiceFormat />}></Route>
          <Route exact path="/user/createinvoice" element={<CreateInvoice />}></Route>

         {/* ERROR 404*/}
          <Route exact path="*" element={<Error404 />} />

        </Routes>
        <Footer expanded={true} />
      </Router>

    </>
  );
}

export default App;
