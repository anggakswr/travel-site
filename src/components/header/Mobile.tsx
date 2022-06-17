type MobilePropType = {
  headerOpacity: String;
};

const Mobile = ({ headerOpacity }: MobilePropType) => {
  return (
    <header className="flex md:hidden justify-between fixed top-0 inset-x-0 z-20 pt-[48px] pl-[24px] pr-[30.95px]">
      {/* left nav links */}
      <a href="/" className="relative z-10">
        <img src="/img/nav-logo-mobile.png" alt="Explore Indonesia" />
      </a>

      {/* search & hamburger */}
      <nav className="relative z-10 pt-[8px]">
        <button className="mr-[29.02px]">
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

export default Mobile;
