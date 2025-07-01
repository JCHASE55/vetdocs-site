import React from "react";
import background from "./assets/VetDocsLogo.png";

const wrapperStyle = {
  backgroundImage: `url(${background})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  minHeight: "100vh",
  padding: "2rem",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

const overlayStyle = {
  backgroundColor: "rgba(255, 255, 255, 0.6)", // still light but transparent
  padding: "2rem",
  borderRadius: "12px",
  maxWidth: "700px", // 👈 narrower content area
  width: "90%",
  fontSize: "1.15rem", // 👈 increased base font size
  lineHeight: "1.6", // better readability
  boxShadow: "0 0 20px rgba(0,0,0,0.3)",
};

export default function BackgroundWrapper({ children }) {
  return (
    <div style={wrapperStyle}>
      <div style={overlayStyle}>{children}</div>
    </div>
  );
}
