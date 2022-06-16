import SmallItem from "./live-a-life/SmallItem";

const LifeALife = () => {
  return (
    <section
      className="pt-[141.6px] pb-[255px] bg-center bg-cover relative"
      style={{ backgroundImage: "url(/img/live-a-life/palm-trees.jpg)" }}
    >
      {/* content */}
      <div className="relative z-10 w-[1056px] mx-auto text-center">
        {/* title */}
        <h2 className="text-white text-[42px] font-bold leading-[50px] mb-[67.2px]">
          Live a life like you wouldn’t imagine, experience a life you wouldn’t
          expect.
        </h2>

        {/* big img */}
        <div
          className="w-[1056px] h-[594px] rounded-[10px] box-center bg-center bg-cover mb-[125px]"
          style={{ backgroundImage: "url(/img/live-a-life/becak.png)" }}
        >
          <button
            className="w-[96px] h-[96px] rounded-full box-center"
            style={{ backgroundColor: "#E93A7D" }}
          >
            <img src="/icon/white-play.svg" alt="White Play" />
          </button>
        </div>
      </div>

      {/* 2 small items */}
      <div className="relative z-10 grid grid-cols-2 w-3/4 mx-auto">
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
