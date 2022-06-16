import styles from "./TheWalkways.module.css";

const TheWalkways = () => {
  return (
    <section
      className="pt-[207px] pb-[97px] flex justify-center bg-cover bg-center relative"
      style={{ backgroundImage: "url(/img/walkways/mountain.jpg)" }}
    >
      {/* content */}
      <div className="z-10 flex items-center">
        {/* img */}
        <div className="mr-[130.86px]">
          <img
            src="/img/walkways/mountain-path.png"
            alt="Mountain Path"
            className="rounded-[10px]"
          />
        </div>

        {/* texts */}
        <div className="text-white w-[479.5px]">
          <h2 className="font-bold text-[42px] leading-[50px]">
            The walkways of Indonesia spellbind
          </h2>

          <p className={`${styles.letterSpacing} text-[18px] my-[32.13px]`}>
            Lorem ipsum dolor sit amet, consectetur adip iscing elit. Fusce
            commodo magna et libero mollis rhoncus.
          </p>

          <a href="#learn-walkways" className="pink-btn py-4 px-[40.91px]">
            Learn More
          </a>
        </div>
      </div>

      <div className={`${styles.blueGradient} absolute inset-0`} />
    </section>
  );
};

export default TheWalkways;
