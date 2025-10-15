import axios from "axios";
import { useState,useRef } from 'react';
import './addCon.css';
const AddNewCustomer = ()=>{
    const[record,setRecord] = useState({});
    const ref2 = useRef(null);
    const ref3 = useRef(null);
    const ref5 = useRef(null);
    
    const ref7 = useRef(null);
    const ref8 = useRef(null);
    
    const addCustomer = async () => {
        try {
            const data = {
                firstname: ref2.current.value,
                lastname: ref3.current.value,
                address: ref5.current.value,
               
                phone: ref7.current.value,
                email: ref8.current.value,
                
            };
            const res = await axios.post(`http://localhost:6767/saved`, data);
            const message = res.data;
            setRecord(message);
            alert("Data Submited Successfully")
        } catch (error) {
            console.error('Error adding customer:', error);
            // Handle error here, e.g., set an error state
        }
    };
    return(<>
        <div>
        <header className="header">
             <h1>ADD NEW CONSUMER </h1>
        </header>

        <table className="ta">
        <tbody className="body">
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
        <td>: <input type="text" ref={ref5}></input></td>
        </tr>
        <tr>
        <td>Phone No </td>
        <td>: <input type="text" ref={ref7}></input></td>
        </tr>
        <tr>
        <td>Email </td>
        <td>: <input type="email" ref={ref8}></input></td>
        </tr>
        <tr>
        <td><button onClick={addCustomer}>Add Consumer</button></td>
        
        </tr>
        </tbody>
        </table>
        {record && <p style={{marginLeft:200}}>{JSON.stringify(record)}</p>}     
           </div>
        </>);
}
export default AddNewCustomer;