import React from "react";
import { useEffect } from "react";
import Info from "./components/Info";
import About from "./components/About";
import Interests from "./components/Interests";
import Footer from "./components/Footer";
import Toggler from "./components/Toggler";
export default function App() {
  let switchMode;
  const [darkMode, setDarkMode] = React.useState(switchMode);
  console.log(switchMode);
  useEffect(() => {
    switchMode = darkMode;
    const items = JSON.parse(localStorage.getItem("items"));
    if (items) {
      setDarkMode(items);
    }
  }, [toggleDarkMode]);
  function toggleDarkMode() {
    switchMode = !switchMode;
    localStorage.setItem("items", JSON.stringify(switchMode));
    setDarkMode((prevMode) => switchMode);
  }

  return (
    <main className={darkMode ? "dark App" : "App"}>
      <Info />
      <div className="body">
        <About />
        <Interests />
        <Toggler darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      </div>
      <Footer darkMode={darkMode} />
    </main>
  );
}
