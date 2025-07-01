import React, { useEffect } from "react";

function JunkForm() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://www.google.com/recaptcha/api.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <div style={{ padding: "2rem" }}>
      <h2>Junk Removal Request</h2>
      <form
        action="https://formspree.io/f/YOUR_JUNK_FORM_ID"
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
          Description of Junk to Remove
          <textarea name="message" rows="4" />
        </label>

        <label>
          Upload Photos (Optional)
          <input type="file" name="file" accept=".jpg,.jpeg,.png,.pdf" />
        </label>

        <input type="text" name="_gotcha" style={{ display: "none" }} />

        <div
          className="g-recaptcha"
          data-sitekey="6LcwOXQrAAAAADlVAhUetPlQLjRzPILeFecOc0BS"
        ></div>

        <button type="submit">Submit Request</button>
      </form>
    </div>
  );
}

export default JunkForm;
