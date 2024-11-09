import React from 'react';

function Header() {
  return (
    <header className="header">
      <div className="container">
        <div className="logo">eTafaly</div>
        <nav className="nav">
          <a href="#">About</a>
          <a href="#">Locations</a>
          <a href="#">How it Works</a>
          <a href="#">Download App</a>
        </nav>
      </div>
    </header>
  );
}

export default Header;
