import { NavLink } from 'react-router-dom';
import './Header.css';

const navItems = [
  { name: 'About', path: '/about' },
  { name: 'Portfolio', path: '/portfolio' },
  { name: 'Contact', path: '/contact' },
  { name: 'Resume', path: '/resume' },
];

function Navigation({ currentPage, handlePageChange }) {
  return (
    <ul className="nav nav-tabs">
      {navItems.map((item) => (
        <li className="nav-item" key={item.name}>
          <NavLink
            to={item.path}
            className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
          >
            {item.name}
          </NavLink>
        </li>
      ))}
    </ul>
  );
}

function Header() {
  return (
    <header className="header-container">
      <h1 className="header-title">SHANWC1972</h1>
      <Navigation />
    </header>
  );
}

export default Header;
