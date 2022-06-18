import { Splide, SplideTrack, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import Arrows from "./slider/Arrows";
import DesktopSkeleton from "./slider/DesktopSkeleton";

const slides = [1, 2, 3, 1, 2, 3];

const Slider = () => {
  return (
    <div className="hidden md:block w-3/4 mx-auto">
      <Splide
        hasTrack={false}
        aria-label="My Favorite Images"
        options={{
          // type: "loop",
          perPage: 3,
          perMove: 1,
          gap: "31px",
        }}
      >
        <SplideTrack>
          {slides.map((slide, index) => (
            <SplideSlide key={"slide-" + index}>
              <DesktopSkeleton slide={slide} />
            </SplideSlide>
          ))}
        </SplideTrack>

        {/* slider arrows */}
        <Arrows />

        {/* slider pagination */}
        <ul className="splide__pagination" style={{ bottom: "-47px" }} />
      </Splide>
    </div>
  );
};

export default Slider;
