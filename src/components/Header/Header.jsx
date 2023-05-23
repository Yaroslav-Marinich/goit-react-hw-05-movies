import { NavLink } from 'react-router-dom';
import './styles.css';

const Header = () => {
  return (
    <header className="header">
      <nav className="headerNav">
        <NavLink className="headerNavLink" to="/">
          Home
        </NavLink>
        <NavLink className="headerNavLink" to="/movies">
          Movies
        </NavLink>
      </nav>
    </header>
  );
};

export default Header;
