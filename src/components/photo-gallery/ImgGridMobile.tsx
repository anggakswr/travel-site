import useProgressiveImage from "../../hooks/useProgressiveImage";

const ImgGridMobile = () => {
  return (
    <div className="grid md:hidden grid-cols-2 gap-x-[13px]">
      {/* column 1 */}
      <div>
        {useProgressiveImage("/img/photo-gallery/country-girl.png") ? (
          <img
            src="/img/photo-gallery/country-girl.png"
            alt="Country Girl"
            className="rounded-[10px] mb-[12px] md:mb-[30px]"
          />
        ) : (
          <div className="h-[217px] rounded-[10px] mb-[12px] md:mb-[30px] animate-pulse bg-gray-300" />
        )}

        {useProgressiveImage("/img/photo-gallery/blue-beach.png") ? (
          <img
            src="/img/photo-gallery/blue-beach.png"
            alt="Blue Beach"
            className="rounded-[10px] mb-[12px] md:mb-0"
          />
        ) : (
          <div className="h-[86px] rounded-[10px] mb-[12px] md:mb-0 animate-pulse bg-gray-300" />
        )}

        {useProgressiveImage("/img/photo-gallery/farmer.png") ? (
          <img
            src="/img/photo-gallery/farmer.png"
            alt="Farmer"
            className="rounded-[10px]"
          />
        ) : (
          <div className="h-[153px] rounded-[10px] animate-pulse bg-gray-300" />
        )}
      </div>

      {/* column 2 */}
      <div>
        {useProgressiveImage("/img/photo-gallery/volcano.png") ? (
          <img
            src="/img/photo-gallery/volcano.png"
            alt="Volcano"
            className="rounded-[10px] mb-[12px] md:mb-[30px]"
          />
        ) : (
          <div className="h-[86px] rounded-[10px] mb-[12px] md:mb-[30px] animate-pulse bg-gray-300" />
        )}

        {useProgressiveImage("/img/photo-gallery/mountains.png") ? (
          <img
            src="/img/photo-gallery/mountains.png"
            alt="Mountains"
            className="rounded-[10px] mb-[12px] md:mb-0"
          />
        ) : (
          <div className="h-[217px] rounded-[10px] mb-[12px] md:mb-0 animate-pulse bg-gray-300" />
        )}

        {useProgressiveImage("/img/photo-gallery/sky-country.png") ? (
          <img
            src="/img/photo-gallery/sky-country.png"
            alt="Sky Country"
            className="rounded-[10px]"
          />
        ) : (
          <div className="h-[153px] rounded-[10px] animate-pulse bg-gray-300" />
        )}
      </div>
    </div>
  );
};

export default ImgGridMobile;
