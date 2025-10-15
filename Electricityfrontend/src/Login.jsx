/*import React from "react";
import { useState } from "react";
import { useRef } from "react"

const Login =()=>{
    const adminName=useRef();
    const password=useRef();
    const[msg,setMsg]=useState();
    const[msg2,setMsg2]=useState();
    const[msg3,setMsg3]=useState();

    const loginPage=()=>{
        if (adminName.current.value=="")
        {
           setMsg2("Please enter AdminName");   
        }
        if (password.current.value=="") 
        {
            setMsg3("Please Enter Password");   
        }
        if (adminName.current.value=="Manish" && password.current.value=="Manish@123")
        {
           setMsg("Your Login Successfully....");   
        }
         else 
        {
           setMsg("Please Enter Valid AdminName and Password");   
        }
   }
    
    return(<>
    <table align="center">
        <tbody>
    <tr>
        <td style={{textAlign:'left'}}><label htmlFor="admin">Admin Name: </label></td>
        <td>: <input type="text" name="admin" placeholder="Enter Admin"ref={adminName} required/><span style={{color:'red'}}>{msg2}</span> </td>
    </tr>
    <tr>
        <td style={{textAlign:'left'}}><label htmlFor="psw">Password </label></td>
        <td>: <input type="password" name="password" placeholder="Enter Password"ref={password} required/><span style={{color:'red'}}>{msg3}</span></td>
    </tr>
</tbody>
</table>
<input type="submit" value="Login" onClick={loginPage}/>
<div>
    <h3>{msg}</h3>
</div>

</>);
}
export default Login;
    */

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./login.css";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add login logic here (e.g., API call)
    if (username === "admin" && password === "password") {
      navigate("/dashboard");
    } else {
      alert("Invalid Credentials");
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px",marginBottom:"50px"}}>
       <header className="header">
            <h2>Admin: Login to Your Account</h2>
        
      </header>
      <div className="page">
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit" >Login</button>
      </form>
      </div>
    </div>
  );
};

export default Login;

  