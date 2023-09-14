import React, { useState } from "react";
import "./App.css";

const socialLinks = [
  { name: "Facebook", icon: "logo-facebook", color: "#1877f2" },
  { name: "WhatsApp", icon: "logo-whatsapp", color: "#25d366" },
  { name: "Twitter", icon: "logo-twitter", color: "#1da1f2" },
  { name: "Reddit", icon: "logo-reddit", color: "#ff5733" },
  { name: "LinkedIn", icon: "logo-linkedin", color: "#0a66c2" },
  { name: "Instagram", icon: "logo-instagram", color: "#c32aa3" },
  { name: "GitHub", icon: "logo-github", color: "#1b1e21" },
  { name: "YouTube", icon: "logo-youtube", color: "#ff0000" },
];

function App() {
  const [menuActive, setMenuActive] = useState(false);

  const toggleMenu = () => {
    setMenuActive(!menuActive);
  };

  return (
    <div className={`menu ${menuActive ? "active" : ""}`}>
      <div className="toggle" onClick={toggleMenu}>
        <ion-icon name="share-social"></ion-icon>
      </div>
      {socialLinks.map((link, index) => (
        <li key={index} style={{ "--i": index, "--clr": link.color }}>
          <a href="#">
            <ion-icon name={link.icon}></ion-icon>
          </a>
        </li>
      ))}
    </div>
  );
}

export default App;
