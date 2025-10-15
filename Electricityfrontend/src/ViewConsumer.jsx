import axios from 'axios';
import { useState } from 'react';
import './addCon.css';

const ViewAllConsumers = () => {
  const [record, setRecord] = useState([]); // Ensure record is an array initially

  const viewAllConsumers = async () => {
    try {
      const res = await axios.get(`http://localhost:6767/getAll`);
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
             <h1>VIEW CONSUMER REPORTS</h1>
        </header>
      <button onClick={viewAllConsumers}>View All Customers</button>
      <br /><br />
      
      <table border={1} className='ta'>
        <thead>
          <tr>
            <th>CUSTOMER ID</th>
            <th>FIRST NAME</th>
            <th>LAST NAME</th>
            <th>ADDRESS</th>
            <th>PHONE NO</th>
            <th>EMAIL</th>
          </tr>
        </thead>
        <tbody>
          {Array.isArray(record) && record.length > 0 ? (
            record.map((element, index) => (
              <tr key={index}>
                <td>{element.id}</td>
                <td>{element.firstname}</td>
                <td>{element.lastname}</td>
                <td>{element.address}</td>
                <td>{element.phone}</td>
                <td>{element.email}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="6" style={{ textAlign: "center" }}>No Customers Available</td>
            </tr>
          )}
        </tbody>
      </table>
    </>
  );
};

export default ViewAllConsumers;
