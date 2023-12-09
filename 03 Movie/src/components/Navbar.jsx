import { NavLink } from "react-router-dom";

import Searchbar from "./Searchbar";

function Navbar() {
  return (
    <div>
      <ul>
        <li>
          <NavLink to="/">Movie App</NavLink>
        </li>
        <li>
          <NavLink to="/watchlist">Watchlist</NavLink>
        </li>

        <li>
          <NavLink to="/searched-movies">search</NavLink>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
