import React from "react";
import { Routes, Route } from "react-router-dom";
import ThankYou from "./ThankYou"; // if it's inside /src

function App() {
  return (
    <div style={{ padding: "2rem", fontFamily: "Arial, sans-serif" }}>
      <img
        src="/vetdocs-logo.png"
        alt="VetDocs Logo"
        style={{
          display: "block",
          margin: "0 auto",
          maxWidth: "200px",
          paddingBottom: "1rem",
        }}
      />
      <h1 style={{ textAlign: "center" }}>VetDocs Intake Form</h1>

      <Routes>
        <Route
          path="/"
          element={
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
          }
        />
        <Route path="/thank-you" element={<ThankYou />} />
      </Routes>
    </div>
  );
}

export default App;
