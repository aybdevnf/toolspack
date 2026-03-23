import classes from '../styles/Header.module.css';
import { Link } from 'react-router';
function Header({toggleMenu}){
  return(
    <div className={`${classes.header}`}>
      <h1 className={`${classes.logo}`}>AYB</h1>
      <ul className={`${classes.links_list}`}>
        <li><Link to="/" className={`${classes.link}`}>Home</Link></li>
        <li><Link to="/" className={`${classes.link}`}>About</Link></li>
        <li><Link to="/" className={`${classes.link}`}>Contact</Link></li>
      </ul>
      <img
      src='./menu.png'
      className={classes.hum_menu}
      onClick={toggleMenu}
      />
    </div>
  )
}
export default Header;