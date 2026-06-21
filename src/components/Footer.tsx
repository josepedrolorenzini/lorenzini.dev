import { motion } from "motion/react";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <p>
          Bio page for Jose Pedro Lorenzini. Prepared as a professional
          narrative for public profile, portfolio, recognition, and future
          career documentation.
        </p>
        <p>Made with Love by Jose Pedro Lorenzini, 2026.</p>
      </div>
      <div className="social-links">
        <a
          href="https://github.com/josepedrolorenzini"
          target="_blank"
          rel="noopener"
        >
          GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/jose-pedro-lorenzini-/"
          rel="noopener"
          target="_blank"
        >
          LinkedIn
        </a>
        <a href="mailto:josephlorenzini81@gmail.com">
          josephlorenzini81@gmail.com
        </a>
      </div>
    </footer>
  );
}
