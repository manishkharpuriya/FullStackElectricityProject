import axios from 'axios';
import { useState } from 'react';
import './addCon.css';

const ViewAllBill = () => {
  const [record, setRecord] = useState([]); // Ensure record is an array initially

  const viewBill = async () => {
    try {
      const res = await axios.get(`http://localhost:6767/viewAll`);
      const { data } = res;
      
      // Ensure data is an array, otherwise set it to an empty array
      setRecord(Array.isArray(data) ? data : []);
    } catch (error) {
      console.error('Error fetching consumers:', error);
      setRecord([]); // Set to an empty array on error to avoid map issues
    }
  };

  return (
    <>
      <header className="header">
             <h1>VIEW BILL REPORTS</h1>
        </header>
      <button onClick={viewBill}>View All Bill</button>
      <br /><br />
      
      <table border={1} className='ta'>
        <thead>
          <tr>
            <th>BILL ID</th>
            <th>MONTH</th>
            <th>CURRENT READING</th>
            <th>PREVIOUS READING</th>
            <th>TOTAL UNITS</th>
            <th>TOTAL BILL</th>
            <th>CONSUMER ID</th>
          </tr>
        </thead>
        <tbody>
          {Array.isArray(record) && record.length > 0 ? (
            record.map((element, index) => (
              <tr key={index}>
                <td>{element.id}</td>
                <td>{element.month}</td>
                <td>{element.current_reading}</td>
                <td>{element.previous_reading}</td>
                <td>{element.units}</td>
                <td>{element.totalBill}</td>
                
                <td>{element.electricity_cust ? element.electricity_cust.id : 'N/A'}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="6" style={{ textAlign: "center" }}>No Bills Available</td>
            </tr>
          )}
        </tbody>
      </table>
    </>
  );
};

export default ViewAllBill;
