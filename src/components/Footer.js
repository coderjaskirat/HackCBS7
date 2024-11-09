import React from 'react';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; eTafaly</p>
        <nav>
          <a href="#">About</a>
          <a href="#">Locations</a>
          <a href="#">Privacy Policy</a>
        </nav>
        <div className="social-links">
          <a href="#">Facebook</a>
          <a href="#">Twitter</a>
          <a href="#">Instagram</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
