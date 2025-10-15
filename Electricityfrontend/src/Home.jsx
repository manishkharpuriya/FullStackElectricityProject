import React from "react";
import bulb4 from './Images/bulb4.jpg';
import bulb5 from './Images/bulb5.jpeg';
import onlinnebii from './Images/onlinnebii.jpeg';
import Electricity from './Images/Electricity-Bill.jpg';
import './Home.css';



const Home = () =>{

    return(<>
     <section className="banner">
        <div className="banner-content">
          <img src={Electricity} alt="Electricity" className="phone-image" />
          <h2>GET YOUR NEW <br /> ELECTRICITY CONNECTION</h2>
        </div>
      </section>

      {/* Content Section */}
      <h3 style={{textAlign:"left", margin:"2%"}}>Welcome to Electricity Billing System</h3>
      <section className="content">
      
        <div className="content-images">
       
            <div>
                <img src={bulb4} alt="bulb4" />
                <h4 style={{color:"blue"}}>ElectricityBilling System</h4>
                <p style={{textAlign:"justify"}}>An Electricity Billing System is a crucial tool for managing and streamlining the biling 
                    processes for electricity consumption. It is designed to accurately calculate the charges 
                    based on the amount of electricity consumed by users over a specified period. 
                </p>
          </div>
          <div>
                <img src={bulb5} alt="bulb5" />
                <h4 style={{color:"blue"}}>Billing Management System</h4>
                <p style={{textAlign:"justify"}}>An Electricity Billing System is a crucial tool for managing and streamlining the biling 
                    processes for electricity consumption. It is designed to accurately calculate the charges 
                    based on the amount of electricity consumed by users over a specified period. 
                </p>
          </div>
          <div>
                <img src={onlinnebii} alt="onlinnebii" />
                <h4 style={{color:"blue"}}>User Management System</h4>
                <p style={{textAlign:"justify"}}>An Electricity Billing System is a crucial tool for managing and streamlining the biling 
                    processes for electricity consumption. It is designed to accurately calculate the charges 
                    based on the amount of electricity consumed by users over a specified period. 
                </p>
          </div>
        </div>
      </section>
      <section className="about">
        <h2 style={{textAlign:"left"}}>About Electricity Billing System</h2>
        <p>
          An Electricity Billing System is a crucial tool for managing and streamlining
          the billing processes for electricity consumption. It is designed to accurately
          calculate the charges based on the amount of electricity consumed by users over
          a specified period. The system typically integrates with meters installed at
          user premises, which record energy usage, and then processes this data to
          generate bills.
        

        
          The billing system operates through several stages. Initially, the consumption
          data is collected either manually by meter readers or automatically through
          smart meters. This data is then fed into the system, which calculates the total
          consumption by subtracting the previous reading from the current one. The system
          applies the appropriate tariff, which may vary based on factors such as
          consumption slabs, peak hours, or special rates for different types of users
          (e.g., residential, commercial, or industrial).
        </p>

        <p>
          The system also incorporates various features to handle different billing
          scenarios. For instance, it can calculate penalties for late payments, apply
          discounts or rebates, and handle the billing for multiple services beyond
          electricity, such as water or gas, if integrated.
        

        
          Additionally, it generates detailed invoices that include consumption details,
          rate per unit, taxes, and the total amount due. These invoices can be delivered
          to users via print, email, or online portals. Moreover, the system often
          includes a user portal where users can view their billing history, make
          payments, and lodge complaints or queries.
        

        
          Modern systems are also equipped with analytical tools to monitor consumption
          patterns, detect anomalies, and forecast future usage. In summary, an Electricity
          Billing System is essential for ensuring accurate, timely, and efficient billing.
        </p>
      </section>
    
    </>);
}
export default Home;