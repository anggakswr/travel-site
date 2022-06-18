import useProgressiveImage from "../hooks/useProgressiveImage";
import SmallItem from "./live-a-life/SmallItem";

const LifeALife = () => {
  const imgSrc = "/img/live-a-life/becak.png";
  const isImgLoaded = useProgressiveImage(imgSrc);

  return (
    <section
      className="pt-[83px] md:pt-[141.6px] pb-[32px] md:pb-[255px] px-[30px] md:px-0 bg-center bg-cover relative"
      style={{ backgroundImage: "url(/img/live-a-life/palm-trees.jpg)" }}
    >
      {/* content */}
      <div className="relative z-10 md:w-[1056px] mx-auto text-center">
        {/* title */}
        <h2 className="text-white text-[40px] md:text-[42px] font-bold leading-[46px] md:leading-[50px] mb-[67.2px]">
          Live a life like you wouldn’t imagine, experience a life you wouldn’t
          expect.
        </h2>

        {isImgLoaded ? (
          // vid img
          <div
            className="md:w-[1056px] h-[192px] md:h-[594px] rounded-[10px] box-center mb-[40px] md:mb-[125px] bg-center bg-cover"
            style={{ backgroundImage: `url(${imgSrc})` }}
          >
            <button
              className="w-[67px] md:w-[96px] h-[67px] md:h-[96px] rounded-full box-center"
              style={{ backgroundColor: "#E93A7D" }}
            >
              <img src="/icon/white-play.svg" alt="White Play" />
            </button>
          </div>
        ) : (
          // vid img skeleton
          <div className="md:w-[1056px] h-[192px] md:h-[594px] rounded-[10px] box-center mb-[40px] md:mb-[125px] bg-gray-300">
            <button
              className="w-[67px] md:w-[96px] h-[67px] md:h-[96px] rounded-full box-center"
              style={{ backgroundColor: "#E93A7D" }}
            >
              <img src="/icon/white-play.svg" alt="White Play" />
            </button>
          </div>
        )}
      </div>

      {/* 2 small items */}
      <div className="relative z-10 grid md:grid-cols-2 gap-x-[75px] md:w-3/4 mx-auto">
        <SmallItem
          obj={{
            title: "In The Country",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus dapibus mauris in lectus tempus.",
            img: "/img/live-a-life/small-palm.png",
          }}
        />

        <SmallItem
          obj={{
            title: "In The City",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus dapibus mauris in.",
            img: "/img/live-a-life/small-city.png",
          }}
        />
      </div>

      {/* bg */}
      <div className="absolute inset-0 bg-black-brand opacity-70" />
    </section>
  );
};

export default LifeALife;
