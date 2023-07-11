import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextFrom from './components/TextFrom';
//import About from './components/About';
import { useState } from 'react';
import Alert from './components/Alert';

function App() {
 const [mode,setMode] =useState('light');

 const [alert,setAlert] =useState(null);

 const showAlert =(message, type)=>{
  setAlert({
    message:message,
    type:type
  })
  setTimeout(()=>{
    setAlert(null);
  },1500);

}


 const toggleMode=()=>{
  if(mode==='light'){
    setMode('dark');
    document.body.style.backgroundColor='#042743';
    showAlert("Dark mode has beeen enable","success");
   

    // title animating or sliding
     setInterval(()=>{
      document.title='TextUtils is Amazing Mode';
     },2000);
     setInterval(()=>{
      document.title='Dark Mode';
     },1500);

  }
  else{
    setMode('light');
    document.body.style.backgroundColor='white';
    showAlert("Light mode has beeen enable","success");
  }
 }

  return (
    <>
  <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} 
  home="Home" about="About"/>
  <Alert alert={alert} />

    <div className="container">
      <TextFrom showAlert={showAlert} heading ="Enter The Text Analyzer" mode={mode} />
     
      {/*<About/>*/}
    </div>

  

    </>
  );
}

export default App;
