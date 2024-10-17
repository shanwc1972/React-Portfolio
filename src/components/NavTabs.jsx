import { NavLink } from 'react-router-dom';

const navItems = [
  { name: 'About', path: '/about' },
  { name: 'Portfolio', path: '/portfolio' },
  { name: 'Contact', path: '/contact' },
  { name: 'Resume', path: '/resume' },
];

function NavTabs({ currentPage, handlePageChange }) {
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

export default NavTabs;
