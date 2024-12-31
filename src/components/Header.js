import React, { useEffect, useState } from "react";
import classNames from "classnames";
import { FaRegLaugh } from "react-icons/fa";

function Header({ logo, avatar, username }) {
  const [floating, setFloating] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    function handleScroll() {
      if (window.scrollY > 100) {
        setFloating(true);
      } else {
        setFloating(false);
      }
    }
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={classNames("header", { "header--float": floating })}>
      <img className="header__logo" src={logo} alt="Netflix logo" />
      <div className="header__avatar-container">
        <img
          className="header__avatar"
          src={avatar}
          alt="Netflix avatar"
          onClick={toggleMenu}
        />

        {menuOpen && (
          <div className="header__menu">
            <div className="header__username__text">
              <FaRegLaugh
                className="icon header__username__text"
                color="purple"
              />
              <p className="header__username">{username}</p>
            </div>
            <a href="/signout" className="header__signout">
              Sign out of Netflix
            </a>
          </div>
        )}
      </div>
    </div>
  );
}

export default Header;
