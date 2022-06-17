const ImgGridMobile = () => {
  return (
    <div className="grid grid-cols-2 gap-x-[13px]">
      {/* column 1 */}
      <div>
        <img
          src="/img/photo-gallery/country-girl.png"
          alt="Country Girl"
          className="rounded-[10px] mb-[12px] md:mb-[30px]"
        />

        <img
          src="/img/photo-gallery/blue-beach.png"
          alt="Blue Beach"
          className="rounded-[10px] mb-[12px] md:mb-0"
        />

        <img
          src="/img/photo-gallery/farmer.png"
          alt="Farmer"
          className="rounded-[10px] h-[153px]"
        />
      </div>

      {/* column 2 */}
      <div>
        <img
          src="/img/photo-gallery/volcano.png"
          alt="Volcano"
          className="rounded-[10px] mb-[12px] md:mb-[30px]"
        />

        <img
          src="/img/photo-gallery/mountains.png"
          alt="Mountains"
          className="rounded-[10px] mb-[12px] md:mb-0"
        />

        <img
          src="/img/photo-gallery/sky-country.png"
          alt="Sky Country"
          className="rounded-[10px]"
        />
      </div>
    </div>
  );
};

export default ImgGridMobile;
