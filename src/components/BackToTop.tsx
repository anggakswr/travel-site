import styles from "./BackToTop.module.css";

const BackToTop = () => {
  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      className={`${styles.shadow} fixed z-20 right-[99px] bottom-[84px] w-[104px] h-[104px] rounded-full box-center bg-pink-brand`}
      onClick={scrollTop}
    >
      <img src="/img/back-to-top.png" alt="Back to top" />
    </button>
  );
};

export default BackToTop;
