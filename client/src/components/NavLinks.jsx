import { useAppContext } from "../context/appContext";
import links from "../utils/links";
import { NavLink } from "react-router-dom";

const NavLinks = ({ toggleSidebar }) => {
  const { user: { role } } = useAppContext();
  return (
    <div className="nav-links">
      {links.map((link) => {
        const { text, path, id } = link;

        return (
          <NavLink
            to={path}
            key={id}
            onClick={toggleSidebar}
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            {text}
          </NavLink>
        );
      })}
      {role === "admin" && <NavLink
        to="all-users"
        key={links.length}
        onClick={toggleSidebar}
        className={({ isActive }) =>
          isActive ? "nav-link active" : "nav-link"
        }>
        all users
      </NavLink>}
    </div>
  );
};

export default NavLinks;
