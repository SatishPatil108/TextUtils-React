import "./App.css";
// import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import React, { useState } from "react";
import Alert from "./components/Alert";


// import {
//   // BrowserRouter,
//   Routes,
//   Route,
//   // Link
// } from "react-router-dom";



function App() {
  const [mode, setMode] = useState('light');//whethere darkMode is enable or not

  // const [colmode, setColor] = useState(null);

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


  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode has been enabled", "success");
      document.title = "TextUtils - Dark Mode";

      // setInterval(() => {
      //   document.title = "TextUtils is Amazing Mode";
      // }, 2000);

      // setInterval(() => {
      //   document.title = "TextUtils Install Now";
      // }, 1500);
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");
      document.title = "TextUtils - Light Mode";
    }
  }

  // const colorMode = () => {
  //   if (colmode === onclick){
  //     setColor('green');
  //     document.body.style.backgroundColor = '#198754';
  //     showAlert("Green mode has been enabled", "success");
  //     document.title = "TextUtils - Green Mode";
  //   }
  //   else {
  //     setColor('red');
  //     document.body.style.backgroundColor = '#dc3545';
  //     showAlert("Red mode has been enabled", "success");
  //     document.title = "TextUtils - Red Mode";
  //   }
  // }

  return (
    <>
      {/* <Navbar title ="TextUtils" aboutText = "About TextUtils" /> */}
      {/* <Navbar /> */}

      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />

      <div className="container my-3">
        {/* <Routes> */}
          {/* /users  --> Components 1
          /users/home  --> Components 2 */}
          {/* <Route exact path="/about" element={<About />} /> */}
          {/* < Route exact path="/" */}
          {/* element= */}
          {<TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={mode} />}
           {/* /> */}
        {/* </Routes> */}
      
      </div>

    </>
  );
}

export default App;
