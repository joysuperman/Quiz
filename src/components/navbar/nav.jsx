import logo from '../../assets/logo-bg.png';
import classes from "../../styles/Navbar.module.css";
import Account  from "./module/account";

export default function Nav() {
  return (
    <nav className={classes.nav}>
      <ul>
        <li>
        <a href="index.html" className={classes.brand}>
            <img src={logo} alt="Learn with Sumit Logo" />
            <h3>Joy Superman</h3>
          </a>
        </li>
      </ul>

      {/* Account */}
      <Account/>
    </nav>
  )
}
