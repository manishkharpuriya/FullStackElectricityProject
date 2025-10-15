import axios from 'axios';
import { useState, useRef } from 'react';
import './addCon.css';

const DeleteCon = ()=>{
    const[record,setRecord] = useState(null);
    const ref1 = useRef(null);

    const deleteCon = async ()=>{
        const res = await axios.delete(`http://localhost:6767/delete/${ref1.current.value}`);
        const {data} = res;
        setRecord(data);
        alert("Customer Detailes Deleted Successfully")
    }
    return(<>
        <div style={{textAlign:"center"}}>
        <header className="header">
             <h1>DELETE CONSUMER DETAILS</h1>
        </header>
        <div style={{fontWeight:"bold"}}>
        Enter a Customer Id : <input type="text" ref={ref1}></input><br></br><br></br>
        </div>
        <button onClick={deleteCon}>Delete Customer</button>

        <p>{record}</p>
        </div>
        </>)
}
export default DeleteCon;