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
