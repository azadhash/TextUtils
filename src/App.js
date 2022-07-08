
import { useState } from 'react';
import './App.css';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";

function App() {

  const [mode, setMode] = useState('light');//whether dark mode is enabled or not
  const [alert, setAlert] = useState(null)

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#191967';
      showAlert(" Dark Mode enabled", "Success");
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert(" Light Mode enabled", "Success");
    }
  }
  return (
    <>
      <Router>
        <Navbar title="Textutils" abouttext="About Textutils" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />

        <div className="container my-3">
          < Routes>
            <Route exact path="about" element={<About mode={mode} />} />
            <Route exact path="/" element={<TextForm heading="Enter The Text To Analyze Below" mode={mode} showAlert={showAlert} />} />
          </ Routes>
        </div>
      </Router>
    </>

  );
}

export default App;
