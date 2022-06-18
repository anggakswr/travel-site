import useProgressiveImage from "../../hooks/useProgressiveImage";

const ImgGridDesktop = () => {
  return (
    <div className="w-3/5 mx-auto hidden md:grid grid-cols-3 gap-x-[30px]">
      {/* column 1 */}
      <div>
        {useProgressiveImage("/img/photo-gallery/country-girl.png") ? (
          <img
            src="/img/photo-gallery/country-girl.png"
            alt="Country Girl"
            className="rounded-[10px] mb-[30px]"
          />
        ) : (
          <div className="h-[530px] rounded-[10px] mb-[30px] animate-pulse bg-gray-300" />
        )}

        {useProgressiveImage("/img/photo-gallery/blue-beach.png") ? (
          <img
            src="/img/photo-gallery/blue-beach.png"
            alt="Blue Beach"
            className="rounded-[10px]"
          />
        ) : (
          <div className="h-[210px] rounded-[10px] animate-pulse bg-gray-300" />
        )}
      </div>

      {/* column 2 */}
      <div>
        {useProgressiveImage("/img/photo-gallery/volcano.png") ? (
          <img
            src="/img/photo-gallery/volcano.png"
            alt="Volcano"
            className="rounded-[10px] mb-[30px]"
          />
        ) : (
          <div className="h-[210px] rounded-[10px] mb-[30px] animate-pulse bg-gray-300" />
        )}

        {useProgressiveImage("/img/photo-gallery/mountains.png") ? (
          <img
            src="/img/photo-gallery/mountains.png"
            alt="Mountains"
            className="rounded-[10px]"
          />
        ) : (
          <div className="h-[530px] rounded-[10px] animate-pulse bg-gray-300" />
        )}
      </div>

      {/* column 3 */}
      <div>
        {useProgressiveImage("/img/photo-gallery/farmer.png") ? (
          <img
            src="/img/photo-gallery/farmer.png"
            alt="Farmer"
            className="rounded-[10px] mb-[30px]"
          />
        ) : (
          <div className="h-[370px] rounded-[10px] mb-[30px] animate-pulse bg-gray-300" />
        )}

        {useProgressiveImage("/img/photo-gallery/sky-country.png") ? (
          <img
            src="/img/photo-gallery/sky-country.png"
            alt="Sky Country"
            className="rounded-[10px]"
          />
        ) : (
          <div className="h-[370px] rounded-[10px] animate-pulse bg-gray-300" />
        )}
      </div>
    </div>
  );
};

export default ImgGridDesktop;
