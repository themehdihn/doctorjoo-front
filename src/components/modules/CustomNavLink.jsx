import { NavLink } from "react-router-dom"

import "./CustomNavLink.css"

function CustomNavLink({ children, to }) {
  return (
    <li className="nav-link__item">
      <NavLink
        to={to}
        className={({ isActive }) =>
          isActive
            ? "nav-link nav-link--active"
            : "nav-link nav-link--inactive"
        }
      >
        {children}
      </NavLink>
    </li>
  );
}

export default CustomNavLink