import React from "react";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className="flex justify-between fixed top-0 inset-x-0 z-20 h-[124.75px] pl-[28.01px] pr-[141.07px]">
      {/* left nav links */}
      <nav className="w-3/4 flex items-center text-white uppercase font-bold text-[18px]">
        <a href="/">
          <img src="/img/nav-logo.png" alt="Explore Indonesia" />
        </a>

        <div className={`${styles.link} ml-[64.03px] flex gap-x-[62.1px]`}>
          <a href="#destinations">destinations</a>
          <a href="#experiences">experiences</a>
          <a href="#about">about</a>
          <a href="#gallery">gallery</a>
        </div>
      </nav>

      {/* search & hamburger */}
      <nav className="pt-[38px]">
        <button className="mr-[40.02px]">
          <img src="/icon/search.svg" alt="Search" />
        </button>

        <button>
          <img src="/icon/menu.svg" alt="Menu" />
        </button>
      </nav>
    </header>
  );
};

export default Header;
