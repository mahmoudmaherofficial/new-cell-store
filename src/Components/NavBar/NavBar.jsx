import { Container } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import './NavBar.css';
import { navLinks } from './navLinks';
import logo from '../../assets/logo.png';
import { useState } from 'react';

export default function NavBar() {
  const [isOpened, setIsOpened] = useState(false);

  const handleMenuChange = (e) => {
    e.target.checked ? setIsOpened(true) : setIsOpened(false);
  };

  return (
    <>
      <div
        id="menu-shade"
        style={{ opacity: isOpened ? '1' : '0', visibility: isOpened ? 'visible' : 'hidden' }}
      ></div>
      <nav id="nav-bar">
        <Container className="d-flex justify-content-between align-items-center py-3">
          <div id="logo">
            <Link to="/">
              <img className="img-fluid" src={logo} alt="Logo" />
            </Link>
          </div>
          <ul
            id="nav-links"
            className="list-unstyled d-flex align-items-center m-0 d-none d-md-flex"
          >
            {navLinks.map((link, index) => (
              <li key={index}>
                <NavLink
                  className="link rounded mx-1"
                  to={link.name === 'Home' ? '/' : '/' + link.name.toLowerCase()}
                >
                  {link.name}
                </NavLink>
              </li>
            ))}
          </ul>
          <label htmlFor="check" className="d-md-none">
            <input type="checkbox" id="check" onChange={(e) => handleMenuChange(e)} />
            <span></span>
            <span></span>
            <span></span>
          </label>
        </Container>
        <Container id="menu" style={{ height: isOpened ? '178px' : '0' }}>
          <ul className="list-unstyled text-center gap-2 pb-2 flex-column m-0">
            {navLinks.map((link, index) => (
              <li key={index}>
                <NavLink
                  className="link rounded w-100 d-block"
                  to={link.name === 'Home' ? '/' : '/' + link.name.toLowerCase()}
                >
                  {link.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </Container>
      </nav>
    </>
  );
}
