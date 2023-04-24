import { useState } from 'react';
import './App.css';
import About from './Components/About';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import Alert from './Components/Alert';

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');
  const [btnChange, setBtnchange] = useState('btn btn-primary mx-3 my-1');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      setBtnchange('btn btn-primary mx-3 btn-color-change');
      showAlert("Dark Mode has been enabled", "success");
      document.body.style.backgroundColor = 'rgb(0 49 76)';
      // document.title = "TextUtils - Dark Mode"
      // document.body.style.backgroundColor = '#fff';
    }
    else {
      setMode('light');
      setBtnchange('btn btn-primary mx-3');
      showAlert("Light Mode has been enabled", "success");
      document.body.style.backgroundColor = 'white';
      // document.title = "TextUtils - Light Mode"
    }
  }

  return (
    <>
      <Router>
      {/* <Navbar title = "Props Title" aboutText = "Props About Us"></Navbar> */}
      {/* <Navbar title = "Props Title" aboutText = "Props About Us"></Navbar> */}
        <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}></Navbar>
        <Alert alert={alert}></Alert>
        <div className="container my-3">
          <Routes>
            <Route exact path="/about" element = {<About mode = {mode} btnChange = {btnChange}></About>}>
            </Route>
            <Route exact path="/home" element = {<TextForm showAlert={showAlert} heading="TextUtils - Word Counter, Character Counter, Remove extra spaces" mode={mode} btnChange={btnChange}></TextForm>}>   
            </Route>
            <Route exact path="/" element = {<TextForm showAlert={showAlert} heading= "TextUtils - Word Counter, Character Counter, Remove extra spaces" mode={mode} btnChange={btnChange}></TextForm>}>   
            </Route>

          </Routes>
        </div>
      </Router>
    </>
  );
}

// Lecture 4
// let name = "Krishna"
// function App(){
//   return (
//     <>
//       <nav>
//         <li>Home</li>
//         <li>About</li>
//         <li>Contact</li>
//         <li>Name : {name}</li>
//       </nav>
//     </>
//   );
// }

// Lecture 3
// function App() {
//   return (
//     <>
//       <className className="blank">Hello World</className>
//     </>
//   );
// }

// Default
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
