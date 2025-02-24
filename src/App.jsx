import { createContext, useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/Home/index.jsx"
import AboutPage from "./pages/About/index.jsx"
import AOS from "aos"
import "aos/dist/aos.css"
export const menuContext = createContext();


const App = () => {
  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
      once: true
    })

    AOS.refresh();
  }, [])
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <menuContext.Provider value={{ menuOpen, setMenuOpen }}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/home' element={<HomePage />} />
          <Route path='/about' element={<AboutPage />} />
        </Routes>
      </BrowserRouter>
    </menuContext.Provider>
  );
};

export default App;