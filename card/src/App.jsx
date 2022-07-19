import React from "react";
import Info from './components/Info';
import About from './components/About';
import Interests from './components/Interests';
import Footer from './components/Footer';
import Toggler from "./components/Toggler";
export default function App() {
  const [darkMode, setDarkMode] = React.useState(true)
    
  function toggleDarkMode() {
      setDarkMode(prevMode => !prevMode)
  }
  
  return (
    <main className={darkMode ? "dark App" : "App"}>
        <Info />
        <div className="body">
            <About />
            <Interests />
            <Toggler 
            darkMode={darkMode} 
            toggleDarkMode={toggleDarkMode}
            />
        </div>
        <Footer  darkMode={darkMode} />
    </main>
  );
}
