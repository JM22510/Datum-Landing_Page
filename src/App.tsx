import { Routes, Route } from "react-router-dom";
import LandingPage from "./components/pages/landingpage";
import PrivacyPolicyPage from "./components/pages/privacypolicypage";
import Footer from "./components/footer/footer";
import ScrollToTop from "./components/scroll/scrolltotop";

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
      </Routes>
      <Footer />
    </>
  );
}
