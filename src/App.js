import "./App.css";
// import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import React,{ useState } from "react";
import Alert from "./components/Alert";

function App() {
  const [mode, setMode] = useState('light'); // Whether mode is dark or light
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(() =>{
      setAlert(null);
    }, 1500);
  }
  const toggleMode =()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor ='#042743';
      showAlert("Dark mode has been enabled", "success");
      document.title = 'TextUtils - Dark Mode';

      //To show something like install this browser your device have viruses
      // setInterval(()=>{
      //   document.title = 'Install TextUtils Now';
      // }, 2500);
      // setInterval(()=>{
      //   document.title = 'TextUtils is amazing...';
      // }, 1500);
    }
    else{
      setMode('light');
      document.body.style.backgroundColor ='white';
      showAlert("Light mode has been enabled", "success");
      document.title = 'TextUtils - Light Mode';
    }
  }
  return (
    <>
      {/* <Navbar/>
      <Navbar titles="TextUtils" aboutText="About TextUtils" /> */}
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className="container my-3">
        <TextForm showAlert={showAlert} heading="Enter the text for analyze below" mode={mode}/>
        {/* <About></About> */}
      </div>
    </>
  );
}

export default App;
