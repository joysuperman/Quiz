import logo from '../../assets/logo-bg.png';
import classes from "../../styles/Navbar.module.css";
import Account  from "./module/account";
import { Link } from 'react-router-dom';

export default function Nav() {
  return (
    <nav className={classes.nav}>
      <ul>
        <li>
        <Link to="/" className={classes.brand}>
            <img src={logo} alt="Learn with Sumit Logo" />
            <h3>Joy Superman</h3>
          </Link>
        </li>
      </ul>

      {/* Account */}
      <Account/>
    </nav>
  )
}
