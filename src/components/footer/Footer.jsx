import React from "react";
import "./footer.css";

export default function Footer() {
  return (
    <div className="footer" id="footer">
        <h2 className="experience-title" id="footer-title">Contato</h2>
        <a href="https://www.linkedin.com/in/julia-miranda-sousa/" className="socials-button">
          <button className="socials-button">
            LinkedIn
          </button>
        </a>
        <a href="https://github.com/juliamsousa">
          <button className="socials-button">GitHub</button>
        </a>
    </div>
  );
}
