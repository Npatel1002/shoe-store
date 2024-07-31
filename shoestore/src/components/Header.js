import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from 'react-use-cart';

const Header = () => {
const { totalItems } = useCart();
    return (
    <header className="header-section">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <Link className="navbar-brand" to="/">Shoe Store</Link>
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/profile">Profile</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/cart">
                  Cart 
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};
export default Header;
