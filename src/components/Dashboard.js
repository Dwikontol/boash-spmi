import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">MenuBeranda</Link>
          </li>
          <li>
            <Link to="/MenuPenelitian">MenuPenelitian</Link>
          </li>
          <li>
            <Link to="/MenuPKM">MenuPKM</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  )
};

export default Layout;