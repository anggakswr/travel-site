import Point from "./getting-there/Point";

const GettingThere = () => {
  return (
    <section
      className="pt-[119px] pb-[117px]"
      style={{ backgroundColor: "#DCE8F2" }}
    >
      <div className="w-3/5 mx-auto">
        <h2 className="font-bold text-[60px] leading-[90px] mb-[44.31px]">
          Getting there
        </h2>

        <div className="relative">
          {/* gray bar behind point number */}
          <div className="absolute h-full bg-[#15143966] w-[2.93px] ml-[27.88px]" />

          <Point number="1" title="Bookings your flights">
            <p className="text-[23.47px] text-[#15143966]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
              dapibus mauris in lectus tempus, eget tincidunt lacus varius. Sed
              euismod orci dictum faucibus malesuada. Praesent sed eros
              tincidunt, viverra neque auctor, lobortis enim.
            </p>
          </Point>

          <Point number="2" title="Choosing your hotel">
            <>
              <p className="text-[23.47px] text-[#15143966] mb-[93.9px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Phasellus dapibus mauris in lectus tempus, eget tincidunt lacus
                varius. Sed euismod orci dictum faucibus malesuada. Praesent sed
                eros tincidunt, viverra neque auctor, lobortis enim.
              </p>

              <div className="box-equal gap-x-[45.48px]">
                <img
                  src="/img/getting-there/motorcycle.png"
                  alt="Motorcycle"
                  className="rounded-[7.34px]"
                />

                {/* texts */}
                <div>
                  {/* title */}
                  <p className="font-bold text-[26.41px] mb-[12.19px]">
                    Travelling there
                  </p>

                  {/* desc */}
                  <p className="text-[23.47px] text-[#15143966]">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Phasellus dapibus mauris in lectus tempus, eget tincidunt.
                  </p>
                </div>
              </div>
            </>
          </Point>
        </div>

        <Point number="3" title="Planning your experiences">
          <>
            <p className="text-[23.47px] text-[#15143966] mb-[16.95px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
              dapibus mauris in lectus tempus, eget tincidunt lacus varius.
            </p>

            <a
              href="#learn-planning"
              className="pink-btn text-[18px] py-[18.5px] px-[56px]"
            >
              Learn More
            </a>
          </>
        </Point>
      </div>
    </section>
  );
};

export default GettingThere;
