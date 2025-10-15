import React from "react";
import { Link } from "react-router-dom";
import './Header.css'

const Header =()=>{
    return(<>
     <div style={{textAlign:"left"}}> 
       <h3>Electricity Billing</h3>
    </div>
    <div className="suv">
  <Link to='/' style={{margin:100, color:'whitesmoke'}}>Home</Link>
  <Link to='/about' style={{margin:100, color:'whitesmoke'}}>About</Link>
  <Link to='/faqs' style={{margin:100, color:'whitesmoke'}}>FAQs</Link>
  <Link to='/login' style={{margin:100, color:'whitesmoke'}}>Login</Link>
  <Link to='/contact' style={{margin:100, color:'whitesmoke'}}>Contact</Link>
  <Link to='/feedback' style={{margin:100, color:'whitesmoke'}}>Feedback</Link>
    </div>
    </>)
}
export default Header;