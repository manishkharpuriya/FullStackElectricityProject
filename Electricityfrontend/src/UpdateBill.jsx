import axios from "axios";
import { useState, useRef } from "react";
import './addCon.css';

const UpdateBill = () => {
    const [record, setRecord] = useState(null);
    const [error, setError] = useState(null); // To store error messages

    // Refs for form inputs
    const ref1 = useRef(null); // Bill Id
    const ref2 = useRef(null); // Month
    const ref3 = useRef(null); // Current Reading
    const ref4 = useRef(null); // Previous Reading
    const ref5 = useRef(null); // Consumer ID

    const updateBill = async () => {
        // Validate inputs
        if (!ref1.current.value || !ref2.current.value || !ref3.current.value || !ref4.current.value || !ref5.current.value) {
            setError('All fields are required.');
            return;
        }

        // Prepare the request payload
        const payload = {
            month: ref2.current.value,
            current_reading: parseInt(ref3.current.value),
            previous_reading: parseInt(ref4.current.value),
            electricity_cust: { id: parseInt(ref5.current.value) } // If the backend expects an object
        };

        console.log('Sending request to API with payload:', payload);

        try {
            const res = await axios.put(`http://localhost:6767/update/${ref1.current.value}`, payload);
            const { data } = res;
            setRecord(data); // Set the API response to record state
            setError(null); // Clear any previous errors
        } catch (error) {
            console.error('Error updating bill:', error.response?.data);
            setError('Failed to update the bill. Check the input and try again.');
        }
    };

    return (
        <>
            <div>
                <header className="header">
                    <h1>UPDATE BILL DETAILS</h1>
                </header>
                
                {error && <p style={{ color: 'red' }}>{error}</p>} {/* Display error message if any */}

                <table className="ta">
                    <tbody>
                        <tr>
                            <td>Bill Id </td>
                            <td><input type="number" ref={ref1} placeholder="Enter Bill ID" /></td>
                        </tr>
                        <tr>
                            <td>Month </td>
                            <td><input type="month" ref={ref2} /></td>
                        </tr>
                        <tr>
                            <td>Current Reading </td>
                            <td><input type="number" ref={ref3} placeholder="Enter Current Reading" /></td>
                        </tr>
                        <tr>
                            <td>Previous Reading </td>
                            <td><input type="number" ref={ref4} placeholder="Enter Previous Reading" /></td>
                        </tr>
                        <tr>
                            <td>Consumer Id </td>
                            <td><input type="number" ref={ref5} placeholder="Enter Consumer ID" /></td>
                        </tr>
                        <tr>
                            <td colSpan="2"><button onClick={updateBill}>Update Bill</button></td>
                        </tr>
                    </tbody>
                </table>

                {record && (
                    <>
                        <h2>Updated Bill Details</h2>
                        <table border={1} className="ta">
                            <thead>
                                <tr>
                                    <th>BILL ID</th>
                                    <th>MONTH</th>
                                    <th>CURRENT READING</th>
                                    <th>PREVIOUS READING</th>
                                    <th>CONSUMER ID</th>
                                    <th>TOTAL UNITS</th>
                                    <th>TOTAL BILL</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>{record.id}</td>
                                    <td>{record.month}</td>
                                    <td>{record.current_reading}</td>
                                    <td>{record.previous_reading}</td>
                                    <td>{record.electricity_cust?.id}</td>
                                    <td>{record.units}</td>
                                    <td>{record.totalBill}</td>
                                </tr>
                            </tbody>
                        </table>
                    </>
                )}
            </div>
        </>
    );
}

export default UpdateBill;
