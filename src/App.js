import Header from "./components/Header";
import Footer from "./components/Footer";

import Loader from "./pages/loader/loader";
import { useState } from "react";
import { Routes, Route, useLocation, Navigate } from "react-router-dom";

import Landing from "./pages/landing/Landing";
import Portfolio from "./pages/portfolio/Portfolio";
import Resume from "./pages/resume/Resume";
import Contact from "./pages/contact/Contact";
import PageNotFound from "./pages/404/PageNotFound";

function App() {
  const personalDetails = {
    name: "Eric Au",
    location: "Hong Kong",
    email: "benauzoe@gmail.com",
    availability: "Available",
    brand:
      "My distinctive fusion of technical acumen, innovative thought processes, and a background in psychology empowers me to address every project with a profound comprehension of the user's vantage point. This approach consistently yields highly efficient and user-centric digital solutions with a strong impact.",
  };

  const location = useLocation();

  const [showLoader, setShowLoader] = useState(true);

  return (
    <>
      {(
        <>
          <Header />
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Landing name={personalDetails.name} tagline={personalDetails.tagline} />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/resume" element={<Resume brand={personalDetails.brand} />} />

            <Route
              path="/contact"
              element={
                <Contact
                  name={personalDetails.name}
                  location={personalDetails.location}
                  email={personalDetails.email}
                />
              }
            />
            <Route path="/page-not-found" element={<PageNotFound />} />
            <Route path="*" element={<Navigate to="/page-not-found" />} />
          </Routes>
          <Footer />
        </>
      )}
    </>
  );
}

export default App;
