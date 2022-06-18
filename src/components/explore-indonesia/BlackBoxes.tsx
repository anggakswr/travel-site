import useProgressiveImage from "../../hooks/useProgressiveImage";
import Text from "./black-boxes/Text";
import styles from "./BlackBoxes.module.css";

const BlackBoxes = () => {
  const imgSrc = "/img/big-text/banner-vid.jpg";
  const isImgLoaded = useProgressiveImage(imgSrc);

  return (
    <section className="box-equal">
      {/* vertical texts */}
      <div className="hidden md:block w-[277.14px]">
        <div className="flex justify-between font-bold text-white -rotate-90 w-[131px]">
          <span>Fb</span>
          <span>In</span>
          <span>Tw</span>
        </div>
      </div>

      {/* black boxes */}
      {/* <div className="flex items-end w-full"> */}
      <div className="grid md:grid-cols-4 items-end w-full mb-[40px] md:mb-0">
        {/* big black box */}
        {/* <div className="w-full text-white px-[71.04px] pt-[41px] pb-[49px] grid grid-cols-3 relative"> */}
        <div className="mx-[30px] md:mx-0 md:col-span-3 text-white px-[32px] md:px-[71.04px] pt-[35px] md:pt-[41px] pb-[31px] md:pb-[49px] grid md:grid-cols-3 gap-y-[32px] relative">
          <Text num="01" />
          <Text num="02" />
          <Text num="03" />

          <div className="absolute inset-0 bg-black opacity-60" />
        </div>

        {isImgLoaded ? (
          // vid img
          <div
            // className="text-white w-[417.22px] h-[254px] bg-cover bg-center box-center"
            className="mx-[30px] md:mx-0 text-white h-[254px] bg-cover bg-center box-center"
            style={{ backgroundImage: `url(${imgSrc})` }}
          >
            <button
              className={`${styles.playBtn} w-[78px] h-[78px] bg-white rounded-full box-center`}
            >
              <img src="/icon/play.svg" alt="Play" />
            </button>
          </div>
        ) : (
          // vid img skeleton
          <div
            // className="text-white w-[417.22px] h-[254px] bg-cover bg-center box-center"
            className="mx-[30px] md:mx-0 h-[254px] box-center bg-gray-300"
          >
            <button
              className={`${styles.playBtn} w-[78px] h-[78px] bg-white rounded-full box-center`}
            >
              <img src="/icon/play.svg" alt="Play" />
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default BlackBoxes;
