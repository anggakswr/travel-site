import { useEffect, useState } from "react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  const onScrollHandler = () => {
    if (document.documentElement.scrollTop > 0) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", onScrollHandler);

    // return () => {
    //   second
    // }
  }, []);

  const headerOpacity = isScrolled ? "opacity-50" : "opacity-0";

  return (
    <header className="flex justify-between fixed top-0 inset-x-0 z-20 pt-[28px] pl-[28.01px] pr-[141.07px]">
      {/* left nav links */}
      <nav className="relative z-10 w-3/4 flex items-center text-white uppercase font-bold text-[18px]">
        <a href="/">
          <img src="/img/nav-logo.png" alt="Explore Indonesia" />
        </a>

        <div className="ml-[64.03px] flex gap-x-[62.1px]">
          <a href="#destinations">destinations</a>
          <a href="#experiences">experiences</a>
          <a href="#about">about</a>
          <a href="#gallery">gallery</a>
        </div>
      </nav>

      {/* search & hamburger */}
      <nav className="relative z-10 pt-[10px]">
        <button className="mr-[40.02px]">
          <img src="/icon/search.svg" alt="Search" />
        </button>

        <button>
          <img src="/icon/menu.svg" alt="Menu" />
        </button>
      </nav>

      <div
        className={`absolute inset-0 bg-black ${headerOpacity} transition duration-150`}
      />
    </header>
  );
};

export default Header;
