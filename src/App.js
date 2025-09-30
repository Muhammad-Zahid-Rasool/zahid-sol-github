import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./pages/About";

import Contact from "./pages/Contact";
import Work from "./pages/Work";
import HomeFour from "./pages/HomeFour";
import HomeFive from "./pages/HomeFive";
import Service from "./pages/Service";

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import ScrollToTop from "react-scroll-to-top";

function App() {
  useEffect(() => {
    AOS.init({
      offset: 0,
      easing: "ease",
      once: true,
    });
    AOS.refresh();
  }, []);
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<HomeFour />} />
        <Route exact path="/ai" element={<HomeFive />} />
        <Route exact path="/service" element={<Service />} />
        <Route exact path="/work" element={<Work />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/contact" element={<Contact />} />
      </Routes>
      <ScrollToTop smooth color="#50af9b" />
    </BrowserRouter>
  );
}

export default App;
