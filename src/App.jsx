import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import Home from "./pages/home/Home";
import Navbar from "./components/layouts/navbar/Navbar";
import Footer from "./components/layouts/footer/Footer";
import AboutUs from "./pages/about-us/AboutUs";
import Services from "./pages/services/Services";
import PrivacyPolicy from "./pages/privacy-policy/PrivacyPolicy";
import TermsAndConditions from "./pages/terms-and-conditions/TermsAndConditions";
import { ThemeProvider } from "./theme/ThemeProvider";
import UnderMaintenance from "./pages/under-maintenance/UnderMaintenance";
import NotFound from "./pages/not-found/NotFound";
import OfflineNotice from "./components/common/OfflineNotice";

export default function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </ThemeProvider>
  );
}

function AppRoutes() {
  const location = useLocation();
  const routesWithoutFooter = ["/projects", "/contact"];
  const shouldShowFooter = !routesWithoutFooter.includes(location.pathname);

  return (
    <>
      <Navbar />
      <OfflineNotice />
      <Routes>
        <Route path="/" index element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/services" element={<Services />} />
        <Route path="/projects" element={<UnderMaintenance />} />
        <Route path="/contact" element={<UnderMaintenance />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      {shouldShowFooter && <Footer />}
    </>
  );
}
