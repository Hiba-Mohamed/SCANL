import { Routes, Route } from "react-router-dom";
import Homepage from "./pages/homePage";
import About from "./pages/about";
import Contact from "./pages/contact";
import ArabicHomePage from "./pages/arabicHomePage";
import ArabicAbout from "./pages/arabicAbout";
import ArabicContact from "./pages/arabicContact";
function App() {
  return (
    <div className="font-Lato">
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/homePage" element={<Homepage />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/arabicHomePage" element={<ArabicHomePage />} />
        <Route path="/arabicAbout" element={<ArabicAbout />} />
        <Route path="/arabicContact" element={<ArabicContact />} />
      </Routes>
    </div>
  );
}

export default App;
