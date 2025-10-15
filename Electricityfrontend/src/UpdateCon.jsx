import axios from "axios";
import { useState,useRef } from "react";
import './addCon.css';

const UpdateCon = ()=>{
    const[record,setRecord] = useState({});
    const ref1 = useRef(null);
    const ref2 = useRef(null);
    const ref3 = useRef(null);
    const ref4 = useRef(null);
    const ref5 = useRef(null);
    const ref6 = useRef(null);
   

    const updateCon = async ()=>{
        const res = await axios.put(`http://localhost:6767/updates/${ref1.current.value}`,{
            "firstname":ref2.current.value,
            "lastname":ref3.current.value,
          
            "address":ref4.current.value,
            "phone":ref5.current.value,
            "email":ref6.current.value,
            
        })
        const{data} = res;
        setRecord(data);
    }
    return(<>
        <div>
       
        <header className="header">
             <h1>UPDATE CONSUMER DETAILS</h1>
        </header>
        <table className="ta">
        <tbody>
        <tr>
        <td>Customer Id </td>
        <td>: <input type="text" ref={ref1}></input></td>
        </tr>
        <tr>
        <td>First Name </td>
        <td>: <input type="text" ref={ref2}></input></td>
        </tr>
        <tr>
        <td>Last Name </td>
        <td>: <input type="text" ref={ref3}></input></td>
        </tr>
        <tr>
        <td>Address </td>
        <td>: <input type="text" ref={ref4}></input></td>
        </tr>
        <tr>
        <td>Phone No </td>
        <td>: <input type="text" ref={ref5}></input></td>
        </tr>
        <tr>
        <td>Email </td>
        <td>: <input type="email" ref={ref6}></input></td>
        </tr>
        
        <tr><button onClick={updateCon}>Update Consumer</button></tr>
        </tbody>
        </table>
        
        <p></p><p></p>
        {record && (
            <table border={1} className="ta">
            <thead>
            <tr>
            <th>CUSTOMER ID</th>
            <th>FIRST NAME</th>
            <th>LAST NAME </th>
            <th>ADDRESS</th>
            <th>PHONE</th>
            <th>EMAIL</th>
            
            </tr>
            </thead>
            <tbody>
            <tr>
            <td>{record.id}</td>
            <td>{record.firstname}</td>
            <td>{record.lastname}</td>
            <td>{record.address}</td>
            <td>{record.phone}</td>
            <td>{record.email}</td>
            
            </tr>
            </tbody>
            </table>
        )}
        </div>
        </>)
}
export default UpdateCon;