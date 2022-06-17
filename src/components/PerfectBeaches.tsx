import styles from "./PerfectBeaches.module.css";

const PerfectBeaches = () => {
  return (
    <section
      className="pt-[95px] pb-[305px] flex justify-center bg-cover bg-center relative"
      style={{ backgroundImage: "url(/img/perfect-beaches/beach.jpg)" }}
    >
      {/* content */}
      <div className="z-10 flex items-center">
        {/* texts */}
        <div className="text-white w-[479.5px] ml-[42.95px] mr-[124.87px]">
          <h2 className="font-bold text-[42px] leading-[50px]">
            Perfect beaches exude relaxation and fun
          </h2>

          <p className={`${styles.letterSpacing} text-[18px] my-[32.13px]`}>
            Lorem ipsum dolor sit amet, consectetur adip iscing elit. Fusce
            commodo magna et libero mollis rhoncus.
          </p>

          <a
            href="#learn-walkways"
            className="pink-btn text-[18px] py-4 px-[40.91px]"
          >
            Learn More
          </a>
        </div>

        {/* img */}
        <div>
          <img
            src="/img/perfect-beaches/beauty-beach.png"
            alt="Beauty Beach"
            className="rounded-[10px]"
          />
        </div>
      </div>

      <div className={`${styles.blueGradient} absolute inset-0`} />
    </section>
  );
};

export default PerfectBeaches;
