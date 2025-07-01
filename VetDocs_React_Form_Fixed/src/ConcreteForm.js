import React, { useEffect } from "react";

function ConcreteForm() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://www.google.com/recaptcha/api.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <div style={{ padding: "2rem" }}>
      <h2>Concrete / Sidewalk Work Request</h2>
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
          Job Description or Details
          <textarea name="message" rows="4" />
        </label>

        <label>
          Upload Site Photos or Documents (Optional)
          <input type="file" name="file" accept=".jpg,.jpeg,.png,.pdf" />
        </label>

        {/* Honeypot field for bots */}
        <input type="text" name="_gotcha" style={{ display: "none" }} />

        {/* Google reCAPTCHA */}
        <div
          className="g-recaptcha"
          data-sitekey="6LcwOXQrAAAAADlVAhUetPlQLjRzPILeFecOc0BS"
        ></div>

        <button type="submit">Submit Request</button>
      </form>
    </div>
  );
}

export default ConcreteForm;
