import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import ResumeForm from "./ResumeForm";
import JunkForm from "./JunkForm";
import RealEstateForm from "./RealEstateForm";
import ConcreteForm from "./ConcreteForm";
import ThankYou from "./ThankYou";
import Terms from "./Terms";
import Privacy from "./Privacy";
import logo from "./assets/VetDocsLogo.png"; // Moved into /assets
import BackgroundWrapper from "./BackgroundWrapper"; // New wrapper

function HomePage() {
  return (
    <div style={{ padding: "2rem", textAlign: "center" }}>
      <img
        src={logo}
        alt="VetDocs Logo"
        style={{ maxWidth: "200px", marginBottom: "1rem" }}
      />
      <h1>Welcome to VetDocs</h1>
      <p>Veteran-Owned Solutions for Every Need</p>

      <div
        style={{
          display: "grid",
          gap: "1rem",
          gridTemplateColumns: "1fr 1fr",
          maxWidth: "500px",
          margin: "2rem auto",
        }}
      >
        <Link to="/resume" className="service-button">Resume Writing</Link>
        <Link to="/junk" className="service-button">Junk Removal</Link>
        <Link to="/real-estate" className="service-button">Real Estate</Link>
        <Link to="/concrete" className="service-button">Concrete / Sidewalk</Link>
      </div>

      <footer style={{ marginTop: "2rem", fontSize: "0.9rem" }}>
        <Link to="/terms" style={{ marginRight: "1rem" }}>Terms & Conditions</Link>
        <Link to="/privacy">Privacy Policy</Link>
      </footer>
    </div>
  );
}

function App() {
  return (
    <BackgroundWrapper>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/resume" element={<ResumeForm />} />
        <Route path="/junk" element={<JunkForm />} />
        <Route path="/real-estate" element={<RealEstateForm />} />
        <Route path="/concrete" element={<ConcreteForm />} />
        <Route path="/thank-you" element={<ThankYou />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/privacy" element={<Privacy />} />
      </Routes>
    </BackgroundWrapper>
  );
}

export default App;
