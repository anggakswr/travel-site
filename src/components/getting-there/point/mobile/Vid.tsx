import useProgressiveImage from "../../../../hooks/useProgressiveImage";

type VidPropType = {
  vid: string;
};

const Vid = ({ vid }: VidPropType) => {
  const isImgLoaded = useProgressiveImage(vid);

  return (
    <>
      {isImgLoaded ? (
        // vid img
        <button
          className="w-full h-[208px] min-h-[208px] bg-center bg-cover rounded-[7.34px] box-center mb-[40px]"
          style={{
            backgroundImage: `url(${vid})`,
          }}
        >
          <img src="/img/getting-there/play.svg" alt="Play" />
        </button>
      ) : (
        // vid img skeleton
        <button className="w-full h-[208px] min-h-[208px] rounded-[7.34px] box-center mb-[40px] bg-gray-300">
          <img src="/img/getting-there/play.svg" alt="Play" />
        </button>
      )}
    </>
  );
};

export default Vid;
