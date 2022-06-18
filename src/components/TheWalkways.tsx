import useProgressiveImage from "../hooks/useProgressiveImage";
import styles from "./TheWalkways.module.css";

const TheWalkways = () => {
  const imgSrc = "/img/walkways/mountain-path.png";
  const isImgLoaded = useProgressiveImage(imgSrc);

  return (
    <section
      id="destinations"
      className="pt-[40px] md:pt-[207px] md:pb-[97px] flex justify-center bg-cover bg-center relative"
      style={{ backgroundImage: "url(/img/walkways/mountain.jpg)" }}
    >
      {/* content */}
      <div className="z-10 flex flex-col md:flex-row items-center mx-[30px] md:mx-0">
        {isImgLoaded ? (
          // img
          <div className="md:mr-[130.86px] mb-[33.79px] md:mb-0">
            <img src={imgSrc} alt="Mountain Path" className="rounded-[10px]" />
          </div>
        ) : (
          // img skeleton
          <div className="md:mr-[130.86px] mb-[33.79px] md:mb-0 w-full h-[232px] md:w-[630.34px] md:h-[460px] animate-pulse bg-gray-300 rounded-[10px]" />
        )}

        {/* texts */}
        <div className="text-white md:w-[479.5px]">
          <h2 className="font-bold text-[40px] md:text-[42px] leading-[46px] md:leading-[50px]">
            The walkways of Indonesia spellbind
          </h2>

          <p className="text-[16px] md:text-[18px] my-[32.13px]">
            Lorem ipsum dolor sit amet, consectetur adip iscing elit. Fusce
            commodo magna et libero mollis rhoncus.
          </p>

          <a
            href="#learn-walkways"
            className="pink-btn text-[18px] py-[22.5px] md:py-4 px-[108px] md:px-[40.91px]"
          >
            Learn More
          </a>
        </div>
      </div>

      <div className={`${styles.blueGradient} absolute inset-0`} />
    </section>
  );
};

export default TheWalkways;
