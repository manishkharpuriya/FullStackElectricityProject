import React from "react";
import Header from "./Header";
import Body from "./Body";
import Footer from "./Footer";
import './App.css';


const App=()=>{
  return(<>
   
    <div id="Header">
       <Header/>
    </div>

  
    <div className="bo">
     <div id="body">
       <Body/>
     </div>
    </div>
  <div id="foot">
    <Footer/>
  </div>

  </>)
}
export default App;

