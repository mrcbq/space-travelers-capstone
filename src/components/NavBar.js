import { Link } from 'react-router-dom';
import logo from '../logo.png';
import './NavBar.css';

const NavBar = () => (
  <div className="top">
    <h1 className="title">
      <img alt="" src={logo} width="30" height="30" className="d-inline-block align-top" />
      Space Travelers&apos; Hub
    </h1>
    <nav className="nav">
      <Link className="a" to="/">Rockets</Link>
      <hr />
      <Link className="a" to="/Mission">Mission</Link>
      <hr />
      <Link className="a" to="/MyProfile">My Profile</Link>
    </nav>
  </div>
);

export default NavBar;
