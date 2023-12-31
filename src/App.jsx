import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeContext } from "./Context/Context";
import { useState } from "react";
import Home from "./pages/Home";

function App() {
  const [theme, setTheme] = useState(false);
  return (
    <section id="appSection" className={theme ? "dark" : null}>
      <ThemeContext.Provider value={{ theme, setTheme }}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </BrowserRouter>
      </ThemeContext.Provider>
    </section>
  );
}

export default App;
