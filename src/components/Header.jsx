import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logoutuser } from '../Redux/slices/userSession';
import Logo from './shared/Logo';
import Navlink from './shared/Navlink';

const Header = () => {
  const auth = useSelector(state => state.auth);
  const dispatch = useDispatch();

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-transparent">
      <div className="container">
        <Logo />
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            {auth.isLoggedIn ? (
              <>
                <Navlink
                  to="/chat"
                  text="Go To Chat"
                  textColor="black"
                  bg="#00fffc"
                />
                <li className="nav-item">
                  <button
                    className="nav-link btn"
                    style={{ backgroundColor: '#51538f', color: 'white' }}
                    onClick={() => dispatch(logoutuser())}
                  >
                    Logout
                  </button>
                </li>
              </>
            ) : (
              <>
                <Navlink
                  to="/login"
                  text="Login"
                  textColor="black"
                  bg="#00fffc"
                />
                <Navlink
                  to="/signup"
                  text="Signup"
                  textColor="white"
                  bg="#51538f"
                />
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
