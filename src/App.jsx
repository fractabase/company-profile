import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Navbar from "./components/layouts/navbar/Navbar";
import Footer from "./components/layouts/footer/Footer";
import AboutUs from "./pages/about-us/AboutUs";
import Services from "./pages/services/Services";
import PrivacyPolicy from "./pages/privacy-policy/PrivacyPolicy";
import { ThemeProvider } from "./theme/ThemeProvider";

export default function App() {
  return (
    <>
      <ThemeProvider>
        <BrowserRouter>
          <Navbar />

          <Routes>
            <Route path="/" index element={<Home />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/services" element={<Services />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          </Routes>

          <Footer />
        </BrowserRouter>
      </ThemeProvider>
    </>
  );
}
