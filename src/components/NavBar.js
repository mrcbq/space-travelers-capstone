import { Link, NavLink } from 'react-router-dom';
import logo from '../logo.png';
import './NavBar.css';

export default function NavBar() {
  return (
    <div className="top">
      <Link href="/">
        <img
          alt=""
          src={logo}
        />
      </Link>
      <h1 className="title">Space Travelers&apos; Hub</h1>
      <ul className="nav">
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? 'active a' : 'a')}
            to="/"
          >
            Rockets
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? 'active a' : 'a')}
            to="/missions"
          >
            Mission
          </NavLink>
        </li>
        <p>|</p>
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? 'active a' : 'a')}
            to="/MyProfile"
          >
            My Profile
          </NavLink>
        </li>
      </ul>
    </div>
  );
}
