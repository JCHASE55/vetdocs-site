import React from "react";

function RealEstateForm() {
  return (
    <div style={{ padding: "2rem" }}>
      <h2>Real Estate Services Inquiry</h2>
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
          What services are you interested in?
          <textarea name="message" rows="4" />
        </label>

        <label>
          Upload Any Documents (Optional)
          <input type="file" name="file" accept=".pdf,.doc,.docx" />
        </label>

        <button type="submit">Submit Request</button>
      </form>
    </div>
  );
}

export default RealEstateForm;
