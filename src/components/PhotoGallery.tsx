const PhotoGallery = () => {
  return (
    <section className="pt-[177px] pb-[229px] text-center">
      <h2 className="font-bold text-[60px] leading-[90px] text-black-brand mb-[41.83px]">
        Photo Gallery
      </h2>

      <p className="w-[511px] mb-[71px] text-[18px] text-dark-p mx-auto">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
        dapibus mauris in lectus tempus, eget tincidunt.
      </p>

      {/* img grid */}
      <div className="w-3/5 mx-auto grid grid-cols-3 gap-x-[30px]">
        {/* column 1 */}
        <div>
          <img
            src="/img/photo-gallery/country-girl.png"
            alt="Country Girl"
            className="rounded-[10px] mb-[30px]"
          />

          <img
            src="/img/photo-gallery/blue-beach.png"
            alt="Blue Beach"
            className="rounded-[10px]"
          />
        </div>

        {/* column 2 */}
        <div>
          <img
            src="/img/photo-gallery/volcano.png"
            alt="Volcano"
            className="rounded-[10px] mb-[30px]"
          />

          <img
            src="/img/photo-gallery/mountains.png"
            alt="Mountains"
            className="rounded-[10px]"
          />
        </div>

        {/* column 3 */}
        <div>
          <img
            src="/img/photo-gallery/farmer.png"
            alt="Farmer"
            className="rounded-[10px] mb-[30px]"
          />

          <img
            src="/img/photo-gallery/sky-country.png"
            alt="Sky Country"
            className="rounded-[10px]"
          />
        </div>
      </div>
    </section>
  );
};

export default PhotoGallery;
