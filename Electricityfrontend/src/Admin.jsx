import React from "react";
import { useNavigate } from "react-router-dom";
import "./admin.css"; // For styling
import paymentimg from "./Images/paymentimg.jpeg";

const AdminDashboard = () => {
  const navigate = useNavigate();
  

  const handleLogout = () => {
    // Logic to clear user session
    navigate("/login");
  };

  return (
    <div className="dashboard-container">
      {/* Header Section */}
      <header className="header">
        <h2>Electricity Billing System-Admin Dashboard</h2>
        <nav>
          <ul style={{fontWeight:"bold"}} >
            <li onClick={handleLogout}>Logout</li>
          </ul>
        </nav>
      </header>

      {/* Main Content */}
      <div className="content">
        {/* Left Sidebar with Options */}
        <div className="sidebar">
          <button onClick={() => navigate('/addconsumer')}>Add Consumer</button>
          <button onClick={() => navigate('/viewallconsumer')}>All Consumer Reports</button>
          <button onClick={() => navigate('/delete')}>Delete Consumer</button>
          <button onClick={() => navigate('/update')}>Update Consumer Details</button>
          <button onClick={() => navigate('/generatebill')}>Generate Bill</button>
          <button onClick={() => navigate('/viewallbill')}>View All Bill</button>
          <button onClick={() => navigate('/updatebill')}>Update Bill</button>
          <button>FAQ Management</button>
        </div>

        {/* Right Panel */}
        <div className="right-panel">
          
            <img
              src={paymentimg}
              alt="paymentimg"
              className="mobile-image"
            />
          
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
