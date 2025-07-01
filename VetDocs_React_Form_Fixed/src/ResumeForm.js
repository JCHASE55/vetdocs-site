import React, { useEffect } from "react";

function ResumeForm() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://www.google.com/recaptcha/api.js";
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script); // Clean up on unmount
    };
  }, []);

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

        <div style={{ marginTop: "1rem", marginBottom: "1rem" }}>
          <div
            className="g-recaptcha"
            data-sitekey="6LcwOXQrAAAAADlVAhUetPlQLjRzPILeFecOc0BS"
          ></div>
        </div>

        <button type="submit">Submit Request</button>
      </form>
    </div>
  );
}

export default ResumeForm;
