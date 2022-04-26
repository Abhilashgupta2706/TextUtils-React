import './App.css';
import React, { useState } from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';


function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 2000)
  }

  const blackColorCode = '#042743';

  const toggleMode = () => {
    if (mode === 'dark') {
      setMode('light')
      document.body.style.backgroundColor = 'white'
      showAlert('Light mode enabled', 'success')
    }
    else {
      setMode('dark')
      document.body.style.backgroundColor = blackColorCode
      showAlert('Dark mode enabled', 'success')
    }
  }


  return (
    <>

      <Router>
        <Navbar title='TextUtils' mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container my-2">

          <Routes>
            <Route
              exact
              path="/TextUtils-React"
              element={
                <TextForm heading='Enter the text to analyze' mode={mode} blackColorCode={blackColorCode} />
              }
            />
            <Route
              exact
              path="/TextUtils-React/about"
              element={
                <About mode={mode} blackColorCode={blackColorCode} />
              }
            />
          </Routes>

        </div>
      </Router>

    </>
  );
}

export default App;
