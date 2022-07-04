import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import React, { useState } from "react";
import Alert from "./components/Alert";


import {
  Routes,
  Route,
} from "react-router-dom";



function App() {
  const [mode] = useState('light');//whethere darkMode is enable or not

 
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })

    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }

  const removeBodyClasses=()=>{
      document.body.classList.remove('bg-dark')
      document.body.classList.remove('bg-light')
      document.body.classList.remove('bg-warning')
      document.body.classList.remove('bg-primary')
      document.body.classList.remove('bg-danger')
      document.body.classList.remove('bg-success')
  }

  const toggleMode = (cls) => {
    removeBodyClasses();
    document.body.classList.add('bg-'+cls);
  }
      
    
  
  return (
    <>
      {/* <Navbar title ="TextUtils" aboutText = "About TextUtils" /> */}
      {/* <Navbar /> */}

      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />

      <div className="container my-3">
        <Routes>
          {/* /users  --> Components 1
          /users/home  --> Components 2 */}
          <Route exact path="/about" element={<About mode={mode} />} />
          < Route exact path="/"
           element= 
          {<TextForm showAlert={showAlert} heading="TextUtils - Word Counter, Character Counter , Remove Extra Spaces" mode={mode} />}
           /> 
        </Routes>
       </div> 

    </>
  );
}

export default App;
