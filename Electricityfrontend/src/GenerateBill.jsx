import axios from "axios";
import { useState, useRef } from 'react';
import './addCon.css';

const GenerateBill = () => {
    const [record, setRecord] = useState({});
    const ref1 = useRef(null);  // Consumer ID (from Customer)
    const ref2 = useRef(null);  // Month
    const ref3 = useRef(null);  // Current reading
    const ref4 = useRef(null);  // Previous reading
    
    const generateBill = async () => {
        try {
            // Construct the customer object using the value from the Consumer ID input
            const customerObject = {
                id: parseInt(ref1.current.value), // Customer ID
            };

            // Construct the bill request body with the full customer object
            const requestBody = {
                electricity_cust: customerObject,  // Sending the full Customer object
                month: ref2.current.value,
                current_reading: parseInt(ref3.current.value),
                previous_reading: parseInt(ref4.current.value),
            };

            // Send the request to the backend to generate the bill
            const res = await axios.post('http://localhost:6767/save', requestBody);
            const message = res.data;

            // Set the response to state to show the result
            setRecord(message);
            alert("Bill Generated Successfully");
        } catch (error) {
            console.error('Error generating bill:', error);
            alert('Failed to generate bill. Please try again.');
        }
    };

    return (
        <>
            <div>
                <header className="header">
                    <h1>GENERATE MONTHLY ELECTRICITY BILLING</h1>
                </header>

                <table className="ta">
                    <tbody className="body">
                        <tr>
                            <td>Consumer Id </td>
                            <td>: <input type="number" ref={ref1}></input></td>
                        </tr>
                        <tr>
                            <td>Month </td>
                            <td>: <input type="month" ref={ref2}></input></td>
                        </tr>
                        <tr>
                            <td>Current Reading </td>
                            <td>: <input type="number" ref={ref3}></input></td>
                        </tr>
                        <tr>
                            <td>Previous Reading </td>
                            <td>: <input type="number" ref={ref4}></input></td>
                        </tr>
                        <tr>
                            <td><button onClick={generateBill}>Generate Bill</button></td>
                        </tr>
                    </tbody>
                </table>

                {/* Display the response if available */}
                {record && <p style={{ marginLeft: 200 }}>{JSON.stringify(record)}</p>}
            </div>
        </>
    );
};

export default GenerateBill;
