import ImgGridDesktop from "./photo-gallery/ImgGridDesktop";
import ImgGridMobile from "./photo-gallery/ImgGridMobile";

const PhotoGallery = () => {
  return (
    <section className="pt-[32px] md:pt-[177px] pb-[40px] md:pb-[229px] px-[30px] md:px-0 text-center">
      <h2 className="font-bold text-[40px] md:text-[60px] leading-[46px] md:leading-[90px] text-black-brand mb-[20px] md:mb-[41.83px]">
        Photo Gallery
      </h2>

      <p className="md:w-[511px] mb-[30px] md:mb-[71px] text-[16px] md:text-[18px] text-dark-p mx-auto">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
        dapibus mauris in lectus tempus, eget tincidunt.
      </p>

      {/* img grid (desktop) */}
      <ImgGridDesktop />

      {/* img grid (mobile) */}
      <ImgGridMobile />
    </section>
  );
};

export default PhotoGallery;
