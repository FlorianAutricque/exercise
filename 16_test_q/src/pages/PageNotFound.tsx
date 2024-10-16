import { NavLink } from "react-router-dom";

function PageNotFound() {
  return (
    <>
      <h1>404</h1>
      <h3>Page not found</h3>

      <NavLink to="/">Return to home page</NavLink>
    </>
  );
}

export default PageNotFound;
