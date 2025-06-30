import React from 'react';

function App() {
  return (
    <div style={{ padding: '2rem', fontFamily: 'Arial, sans-serif' }}>
      <h1 style={{ textAlign: 'center' }}>VetDocs Intake Form</h1>
      <form action="https://formspree.io/f/xqabndjj" method="POST" encType="multipart/form-data">
  <input type="email" name="email" required />
  <textarea name="message" required></textarea>
  <button type="submit">Send</button>
</form>
        encType="multipart/form-data"
      >
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
          <input type="file" name="file" accept=".pdf,.doc,.docx" />
        </label>
        <button type="submit">Submit Request</button>
      </form>
    </div>
  );
}

export default App;
