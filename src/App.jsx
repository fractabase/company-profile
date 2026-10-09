import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import Home from "./pages/home/Home";
import Navbar from "./components/layouts/navbar/Navbar";
import Footer from "./components/layouts/footer/Footer";
import AboutUs from "./pages/about-us/AboutUs";
import Services from "./pages/services/Services";
import Projects from "./pages/projects/Projects";
import PrivacyPolicy from "./pages/privacy-policy/PrivacyPolicy";
import TermsAndConditions from "./pages/terms-and-conditions/TermsAndConditions";
import { ThemeProvider } from "./theme/ThemeProvider";
import UnderMaintenance from "./pages/under-maintenance/UnderMaintenance";
import NotFound from "./pages/not-found/NotFound";
import ServerError from "./pages/server-error/ServerError";
import OfflineNotice from "./components/common/OfflineNotice";
import ErrorBoundary from "./components/common/ErrorBoundary";

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
  const routesWithoutFooter = ["/contact", "/500"];
  const shouldShowFooter = !routesWithoutFooter.includes(location.pathname);

  return (
    <>
      <Navbar />
      <OfflineNotice />
      <ErrorBoundary>
        <Routes>
          <Route path="/" index element={<Home />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/services" element={<Services />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<UnderMaintenance />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
          <Route path="/500" element={<ServerError />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </ErrorBoundary>
      {shouldShowFooter && <Footer />}
    </>
  );
}
