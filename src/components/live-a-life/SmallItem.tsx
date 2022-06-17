type SmallItemType = {
  obj: {
    title: string;
    desc: string;
    img: string;
  };
};

const SmallItem = ({ obj }: SmallItemType) => {
  const { title, desc, img } = obj;

  return (
    <div className="box-equal flex-col md:flex-row md:gap-x-[42.37px]">
      {/* vid */}
      <button
        className="w-full md:w-[233px] h-[176px] md:h-[151px] md:min-w-[233px] md:min-h-[151px] rounded-[5px] box-center bg-center bg-cover mb-[40px] md:mb-0"
        style={{ backgroundImage: `url(${img})` }}
      >
        <img src="/icon/small-white-play.svg" alt="Small White Play" />
      </button>

      {/* texts */}
      <div className="text-white text-center md:text-left">
        {/* title */}
        <h3 className="text-[22px] md:text-[18px] font-bold mb-[19.09px] md:mb-[15.09px]">
          {title}
        </h3>

        {/* desc */}
        <p className="text-[16px] md:text-[18px] opacity-70 mb-[40px] md:mb-0">
          {desc}
        </p>
      </div>
    </div>
  );
};

export default SmallItem;
