import { useEffect, useState } from "react";
import Desktop from "./header/Desktop";
import Mobile from "./header/Mobile";

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
  }, []);

  const headerOpacity = isScrolled ? "opacity-50" : "opacity-0";

  return (
    <>
      <Mobile headerOpacity={headerOpacity} />
      <Desktop headerOpacity={headerOpacity} />
    </>
  );
};

export default Header;
