import { Splide, SplideTrack, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import ImgOrSkeleton from "./slider-mobile/ImgOrSkeleton";
import ArrowsMobile from "./slider/ArrowsMobile";

const slides = [1, 2, 3, 1, 2, 3];

const SliderMobile = () => {
  return (
    <div className="md:hidden w-full px-[30px]">
      <Splide
        hasTrack={false}
        aria-label="My Favorite Images"
        options={{
          // type: "loop",
          perPage: 1,
          perMove: 1,
          // gap: "31px",
        }}
      >
        <SplideTrack>
          {slides.map((slide, index) => (
            <SplideSlide key={"slide-" + index}>
              <ImgOrSkeleton slide={slide} />
            </SplideSlide>
          ))}
        </SplideTrack>

        {/* slider arrows */}
        {/* <Arrows /> */}
        <ArrowsMobile />

        {/* slider pagination */}
        <ul className="splide__pagination" style={{ bottom: "-47px" }} />
      </Splide>
    </div>
  );
};

export default SliderMobile;
