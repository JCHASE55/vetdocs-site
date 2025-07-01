import React from "react";

function JunkForm() {
  return (
    <div style={{ padding: "2rem" }}>
      <h2>Junk Removal Request</h2>
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
          Describe the Items to Be Removed
          <textarea name="message" rows="4" />
        </label>

        <label>
          Upload Photos (Optional)
          <input type="file" name="file" accept=".jpg,.jpeg,.png,.pdf" />
        </label>

        <button type="submit">Submit Request</button>
      </form>
    </div>
  );
}

export default JunkForm;
