import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import ThankYou from "./ThankYou";
import JunkForm from "./JunkForm";
import RealEstateForm from "./RealEstateForm";
import ConcreteForm from "./ConcreteForm";
import Terms from "./Terms";
import Privacy from "./Privacy";

function HomePage() {
  return (
    <div style={{ padding: "2rem", textAlign: "center" }}>
      <img
        src="/vetdocs-logo.png"
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

function ResumeForm() {
  return (
    <div style={{ padding: "2rem", fontFamily: "Arial, sans-serif" }}>
      <h2>Resume Writing Request</h2>
      <form
        action="https://formspree.io/f/mnnvwgnz"
        method="POST"
        encType="multipart/form-data"
      >
        <input
          type="hidden"
          name="_redirect"
          value="https://www.vetdocs4u.com/thank-you"
        />

        <label>
          Full Name
          <input type="text" name="name" required />
        </label>

        <label>
          Email Address
          <input type="email" name="email" required />
        </label>

        <label>
          Service Type
          <select name="service">
            <option value="resume">Resume Only</option>
            <option value="resume_cover">Resume + Cover Letter</option>
            <option value="full">Full Package</option>
          </select>
        </label>

        <label>
          Message / Special Instructions
          <textarea name="message" rows="4" />
        </label>

        <label>
          Upload Resume (PDF or Word)
          <input
            type="file"
            name="file"
            accept=".pdf,.doc,.docx"
          />
        </label>

        <button type="submit">Submit Request</button>
      </form>
    </div>
  );
}

function App() {
  return (
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
  );
}

export default App;
