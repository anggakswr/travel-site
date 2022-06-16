import Text from "./black-boxes/Text";
import styles from "./BlackBoxes.module.css";

const BlackBoxes = () => {
  return (
    <section className="box-equal">
      {/* vertical texts */}
      <div className="w-[277.14px]">
        <div className="flex justify-between font-bold text-white -rotate-90 w-[131px]">
          <span>Fb</span>
          <span>In</span>
          <span>Tw</span>
        </div>
      </div>

      {/* black boxes */}
      <div className="flex items-end w-full">
        {/* big black box */}
        <div className="w-full text-white pl-[71.04px] pr-[128.07px] pt-[41px] pb-[49px] flex justify-between relative">
          <Text num="01" />
          <Text num="02" />
          <Text num="03" />

          <div className="absolute inset-0 bg-black opacity-60" />
        </div>

        {/* vid */}
        <div
          className="text-white w-[417.22px] h-[254px] bg-cover bg-center box-center"
          style={{ backgroundImage: "url(/img/big-text/banner-vid.jpg)" }}
        >
          <button
            className={`${styles.playBtn} w-[78px] h-[78px] bg-white rounded-full box-center`}
          >
            <img src="/icon/play.svg" alt="Play" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default BlackBoxes;
