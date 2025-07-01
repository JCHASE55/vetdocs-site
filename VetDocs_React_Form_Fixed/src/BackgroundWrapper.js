import React from "react";
import background from "./assets/VetDocsLogo.png";

const wrapperStyle = {
  backgroundImage: `url(${background})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  minHeight: "100vh",
  padding: "2rem",
};

const overlayStyle = {
  backgroundColor: "rgba(255, 255, 255, 0.88)", // Light overlay to keep text readable
  padding: "2rem",
  borderRadius: "10px",
  maxWidth: "1000px",
  margin: "0 auto",
};

export default function BackgroundWrapper({ children }) {
  return (
    <div style={wrapperStyle}>
      <div style={overlayStyle}>{children}</div>
    </div>
  );
}
