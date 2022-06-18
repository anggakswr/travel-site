import useProgressiveImage from "../../../hooks/useProgressiveImage";

type DesktopSkeletonPropType = {
  slide: number;
};

const DesktopSkeleton = ({ slide }: DesktopSkeletonPropType) => {
  const imgSrc = `/img/explore-our-secrets/slide-${slide}.png`;
  const isImgLoaded = useProgressiveImage(imgSrc);

  return (
    <>
      {isImgLoaded ? (
        // img
        <img src={imgSrc} alt={"Slide " + slide} />
      ) : (
        // skeleton
        <div className="animate-pulse bg-gray-300 w-[405px] h-[257px] rounded-[10px]" />
      )}
    </>
  );
};

export default DesktopSkeleton;
