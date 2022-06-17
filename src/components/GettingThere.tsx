import Point from "./getting-there/Point";

const GettingThere = () => {
  return (
    <section
      className="pt-[29px] md:pt-[119px] pb-[73px] md:pb-[117px] text-center md:text-left"
      style={{ backgroundColor: "#DCE8F2" }}
    >
      <div className="md:w-3/5 md:mx-auto">
        <h2 className="font-bold text-[40px] md:text-[60px] leading-[46px] md:leading-[90px] mb-[45px] md:mb-[44.31px]">
          Getting there
        </h2>

        <div className="relative">
          {/* gray bar behind point number */}
          <div className="hidden md:block absolute h-full bg-[#15143966] w-[2.93px] ml-[27.88px]" />

          <Point
            number={1}
            title="Bookings your flights"
            desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
              dapibus mauris in lectus tempus, eget tincidunt lacus varius. Sed
              euismod orci dictum faucibus malesuada. Praesent sed eros
              tincidunt, viverra neque auctor, lobortis enim."
          />

          <Point
            number={2}
            title="Choosing your hotel"
            desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Phasellus dapibus mauris in lectus tempus, eget tincidunt lacus
                varius. Sed euismod orci dictum faucibus malesuada. Praesent sed
                eros tincidunt, viverra neque auctor, lobortis enim."
            items={[
              {
                title: "Travelling there",
                desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus dapibus mauris in lectus tempus, eget tincidunt.",
                vid: "/img/getting-there/motorcycle.png",
              },
            ]}
          />
        </div>

        <Point
          number={3}
          title="Planning your experiences"
          desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
              dapibus mauris in lectus tempus, eget tincidunt lacus varius."
          link="#learn-planning"
        />
      </div>
    </section>
  );
};

export default GettingThere;
