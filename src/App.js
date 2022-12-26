import React from "react"
import Navbar from "./components/navbar";
import Main from "./components/main";
import './App.css';

function App() {

  const [darkMode, setDarkMode] = React.useState(true)
    
    function toggleDarkMode() {
        setDarkMode(prevMode => !prevMode)
    }

  return (
    
    <div className="container">
          <Navbar 
              darkMode={darkMode} 
              toggleDarkMode={toggleDarkMode}
          />
          <Main darkMode={darkMode} />
      </div>
  
  );
}

export default App;
