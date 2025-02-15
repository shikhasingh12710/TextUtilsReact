import './App.css';
// import About from './components/About';
import Navbar from  './components/Navbar';
import TextForm from  './components/TextForm';
import React, {useState} from 'react';
import Alert from './components/Alert';

// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
// } from "react-router-dom";


function App() {
  const[mode, setMode] = useState('light');//whether dark mode is enabled or not
  const [alert, setAlert] = useState(null);

  const showAlert=(message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(()=>{
      setAlert(null);
    },1500);
  }

  const removeBodyClasses= ()=>{
    document.body.classList.remove('bg-light')
    document.body.classList.remove('bg-dark')
    document.body.classList.remove('bg-warning')
    document.body.classList.remove('bg-success')
    document.body.classList.remove('bg-danger')
  }
  const toggleMode=(cls)=>{
    removeBodyClasses();
    document.body.classList.add('bg-'+cls);
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor='#042743';
      showAlert("Dark mode has been enabled","success");
      document.title='TextUtils-Dark Mode';

      // setInterval(()=>{
      //   document.title='TextUtils is Amazing Mode';
      // },2000);

      // setInterval(()=>{
      //   document.title='Install now';
      // },1500);
    }
    else{
      setMode('light');
      document.body.style.backgroundColor='white';
      showAlert("Light mode has been enabled","success");
      document.title='TextUtils-Light Mode';
    }
  }
  return (
    <>
    {/* <Navbar title="TextUtils" aboutText="About us" /> */}
    {/* <Router> */}
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
      <Alert alert={alert}/>
      {/* <Navbar /> */}
      <div className="container my-3">
        {/* <Switch> */}
          {/* <Route exact path="/about">
          <About />
          </Route>
          <Route exact path="/"> */}
          <TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={mode}/>
          {/* </Route> */}
        {/* </Switch> */}
        {/* <About/> */}
        </div>
    {/* </Router> */}
  </>
  );
}

export default App;
