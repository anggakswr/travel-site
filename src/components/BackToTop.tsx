import styles from "./BackToTop.module.css";

const BackToTop = () => {
  return (
    <>
      <a
        href="#home"
        className={`${styles.shadow} hidden md:flex items-center justify-center fixed z-20 right-[99px] bottom-[84px] w-[104px] h-[104px] rounded-full bg-pink-brand`}
      >
        <img src="/img/back-to-top.png" alt="Back to top" />
      </a>

      <a
        href="#home"
        className={`${styles.shadow} flex md:hidden items-center justify-center fixed z-20 left-[50%] translate-x-[-50%] bottom-[84px] w-[104px] h-[104px] rounded-full bg-pink-brand`}
      >
        <img src="/img/back-to-top.png" alt="Back to top" />
      </a>
    </>
  );
};

export default BackToTop;
