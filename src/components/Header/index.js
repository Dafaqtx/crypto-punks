import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="logoWrapper">
        <img src="/img/header/logo.png" alt="Crypto Punks" className="logo" />
      </div>
      <div className="searchBar">
        <div className="searchIconContainer">
          <img src="/img/header/search.png" alt="search" />
        </div>
        <input
          type="search"
          className="searchInput"
          placeholder="Collection, item or user..."
        />
      </div>
      <div className="headerItems">
        <p className="headerItem">Drops</p>
        <p className="headerItem">Marketplace</p>
        <p className="headerItem">Create</p>
      </div>

      <div className="headerActions">
        <button className="themeSwitcher" type="button">
          <img src="/img/header/theme-switcher.png" alt="Theme switcher" />
        </button>
      </div>
      <button className="login" type="button">
        Get in
      </button>
    </div>
  );
};

export default Header;
