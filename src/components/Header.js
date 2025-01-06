import React, { useEffect, useState } from "react";
import classNames from "classnames";
import { FaRegLaugh } from "react-icons/fa";

export const Header = ({ logo, avatar, username }) => {
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
      <img className="header_logo" src={logo} alt="Netflix logo" />
      <div className="header_avatar-container">
        <img
          className="header_avatar"
          src={avatar}
          alt="Netflix avatar"
          onClick={toggleMenu}
        />

        {menuOpen && (
          <div className="header_menu">
            <div className="header_username_text">
              <FaRegLaugh
                className="icon header_username_text"
                color="purple"
              />
              <p className="header_username">{username}</p>
            </div>
            <a href="/signout" className="header_signout">
              Sign out of Netflix
            </a>
          </div>
        )}
      </div>
    </div>
  );
};
