import useProgressiveImage from "../../../hooks/useProgressiveImage";

type ImgOrSkeletonPropType = {
  slide: number;
};

const ImgOrSkeleton = ({ slide }: ImgOrSkeletonPropType) => {
  const imgSrc = `/img/explore-our-secrets/slide-${slide}.png`;
  const isImgLoaded = useProgressiveImage(imgSrc);
  // const isImgLoaded = false;

  return (
    <>
      {isImgLoaded ? (
        // img
        <img src={imgSrc} alt={"Slide " + slide} />
      ) : (
        // skeleton
        <div className="animate-pulse bg-gray-300 w-[300px] h-[200px] rounded-[10px] mx-auto" />
      )}
    </>
  );
};

export default ImgOrSkeleton;
