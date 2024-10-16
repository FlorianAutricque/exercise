import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/completed">Completed</NavLink>
        </li>
        <li>
          <NavLink to="/not-completed">Not completed</NavLink>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
