import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
// import Products from './Pages/Products/Products.Jsx';
import Home from './Pages/HomePage/Home'
import Aboutus from './Pages/AboutUs/AboutUs';
import ContactUs from './Pages/ContactUs/ContactUs';
import Reportingtool from './Pages/Products/reportingtool_products';
import DeleveryEZ from './Pages/Products/deliverEZ_products';
import Ctm from './Pages/Products/ctm_products';


import Careers from './Pages/Careers/Careers';
import Customers from './Pages/Customers/Customers';
import Domain from './Pages/DomainExpertise/DomainExpertise';
import Foundation from './Pages/Foundation/Foundation';
import AssetmanagementProducts from './Pages/Products/assetmanagement_products';
import Services from './Pages/Services/Services';
import TaskTickerManagementProducts from "./Pages/Products/task_products";
import Mobileappdev from './Pages/Services/Mobileappdev';
import Oracle from './Pages/Services/Oracle';
import Nfic from './Pages/Services/Nfic';
import Bigdata from './Pages/Services/Bigdata';
import Sap from './Pages/Services/Sap';
import Enterprise from './Pages/Services/Enterprise';
import Digital from './Pages/Services/Digital';
import Training from './Pages/Services/Training';
import Testing from './Pages/Services/Testing';
import Web from './Pages/Services/Web';
import Cloud from './Pages/Services/Cloud';
import Cyber from './Pages/Services/Cyber';
import Creative from './Pages/Services/Creative';


function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} ></Route>
        <Route path='aboutus' element={<Aboutus />} ></Route>
        <Route path='contactus' element={<ContactUs />} ></Route>
        <Route path='careers' element={<Careers />} ></Route>
        <Route path='customers' element={<Customers />} ></Route>
        <Route path='domain' element={<Domain/>} ></Route>
        <Route path='foundation' element={<Foundation />} ></Route>
        <Route path='assetmanagement' element={<AssetmanagementProducts />} ></Route>
        {/* <Route path='taskticketmanagementsystem' element={<TaskTickerManagementProducts />} ></Route> */}
        <Route path='reportingtool' element={<Reportingtool />} ></Route>
        <Route path='assetmanagement' element={<AssetmanagementProducts />} ></Route>
        <Route path='tasktickettanagementsystem' element={<TaskTickerManagementProducts />} ></Route>
        <Route path='services' element={<Services />} ></Route>

          <Route path="mobileappdevelopment" element={<Mobileappdev/>}></Route>
          <Route path="oracleapplication" element={<Oracle/>}></Route>
          <Route path="nfcrfidservices" element={<Nfic/>}></Route>
          <Route path="bigdata" element={<Bigdata/>}></Route>
          <Route path="celltowermanagement" element={<Ctm/>}></Route>

          <Route path="deliveryez" element={<DeleveryEZ/>}></Route>

          <Route path="sap" element={<Sap/>}></Route>
          <Route path="enterpriseapplication" element={<Enterprise/>}></Route>
          <Route path="trainingandplacement" element={<Training/>}></Route>
          <Route path="digitalmarketing" element={<Digital/>}></Route>
          <Route path="testingservices" element={<Testing/>}></Route>
          <Route path="digitalmarketing" element={<Digital/>}></Route>
          <Route path="websolutions" element={<Web/>}></Route>
          <Route path="cloudcomputing" element={<Cloud/>}></Route>
          <Route path="cybersecurity" element={<Cyber/>}></Route>
          <Route path="systemsapplicationandproducts" element={<Sap/>}></Route>

          <Route path="creativedesigning" element={<Creative/>}></Route>     </Routes>

    </Router>
    
  );
}

export default App;