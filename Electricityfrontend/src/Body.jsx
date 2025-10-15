import React from "react";
import { Routes, Route } from "react-router";
import Home from "./Home";
import About from "./About";
import FAQs from "./FAQs";
import Login from "./Login";
import Contact from "./Contact";
import Feedback from "./Feedback";
import AdminDashboard from "./Admin";
import AddNewCustomer from "./AddConsumer";
import ViewAllConsumers from "./ViewConsumer";
import DeleteCon from "./DeleteCon";
import UpdateCon from "./UpdateCon";
import GenerateBill from "./GenerateBill";
import ViewAllBill from "./ViewAllBill";
import UpdateBill from "./UpdateBill";


const Body =()=>{
    return(<>
    <div>
    <Routes>
    <Route path="/" element={<Home/>}></Route>
    <Route path="/about" element={<About/>}></Route>
    <Route path="/faqs" element={<FAQs/>}></Route>
    <Route path="/login" element={<Login/>}></Route>
    <Route path="/dashboard" element={<AdminDashboard/>}></Route>
    <Route path="*" element={<Login/>}></Route>
    <Route path="/contact" element={<Contact/>}></Route>
    <Route path="/feedback" element={<Feedback/>}></Route>

    {/* Dashboard Route */}
    <Route path="/" element={<AdminDashboard />} />

    {/* Routes for Other Pages */}
    <Route path="/addconsumer" element={<AddNewCustomer />} />
    <Route path="/viewallconsumer" element={<ViewAllConsumers />} />
    <Route path="/delete" element={<DeleteCon />} />  
    <Route path="/update" element={<UpdateCon />} />
    <Route path="/generatebill" element={<GenerateBill />} /> 
    <Route path="/viewallbill" element={<ViewAllBill />} /> 
    <Route path="/updatebill" element={<UpdateBill />} /> 
  


    {/*
    <Route path="/add-payment" element={<AddPayment />} />
    <Route path="/add-faq" element={<AddFAQ />} />
    <Route path="/user-report" element={<UserReport />} />
    */}
    

  </Routes>
  </div>
    </>)
}
export default Body;