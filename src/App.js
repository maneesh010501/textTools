import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import About from './components/About';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');
  const [modeText, setModeText] = useState('Enable Dark Mode');
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = 'black';
      showAlert("Dark Mode has been enabled", "success");
      document.title = 'TextTools - Dark Mode';
      setTimeout(() => {
        document.title = 'TextTools - Word counter | Character counter | Convert to Uppercase | Convert to Lowercase';
      }, 2500);
      // setInterval(() => {
      //   document.title = 'TextTools is Amazing'
      // }, 1500);
      // setInterval(() => {
      //   document.title = 'Install TextTools now'
      // }, 2500);
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light Mode has been enabled", "success");
      document.title = 'TextTools - Light Mode';
      setTimeout(() => {
        document.title = 'TextTools - Word counter | Character counter | Convert to Uppercase | Convert to Lowercase';
      }, 2500);
    }
  }
  const toggleModeText = () => {
    if (modeText === 'Enable Dark Mode') {
      setModeText('Enable Light Mode');
    }
    else {
      setModeText('Enable Dark Mode');
    }
  }

  return (
    <>
      <Router>

        <Navbar title="TextTools" aboutText="About" mode={mode} toggleMode={toggleMode} modeText={modeText} toggleModeText={toggleModeText} />
        <Alert alert={alert} />

        <div className="container my-3">
          <Routes>
            <Route exact path="/" element={<TextForm heading="Enter the text to analyze" mode={mode} showAlert={showAlert} />} />
            <Route exact path="/about" element={<About mode={mode} showAlert={showAlert} />} />
          </Routes>
        </div>

      </Router>
    </>
  );
}

export default App;
{/* <Navbar title="TextTools" aboutText="About" mode={mode} toggleMode={toggleMode} modeText={modeText} toggleModeText={toggleModeText} />

<Alert alert={alert} />

<div className="container my-3">
  <Routes>

    <Route path="/about">
      <About />
    </Route>
    <Route path="/">
      <TextForm heading="Enter the text to analyze" mode={mode} showAlert={showAlert} />
    </Route>

  </Routes>
  <About />
</div> */}