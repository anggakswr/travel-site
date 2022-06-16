type SmallItemType = {
  obj: {
    title: String;
    desc: String;
    img: String;
  };
};

const SmallItem = ({ obj }: SmallItemType) => {
  const { title, desc, img } = obj;

  return (
    <div className="box-equal gap-x-[42.37px]">
      {/* vid */}
      <button
        className="w-[233px] h-[151px] min-w-[233px] min-h-[151px] rounded-[5px] box-center"
        style={{ backgroundImage: `url(${img})` }}
      >
        <img src="/icon/small-white-play.svg" alt="Small White Play" />
      </button>

      {/* texts */}
      <div className="text-white">
        {/* title */}
        <p className="text-[18px] font-bold mb-[15.09px]">{title}</p>

        {/* desc */}
        <p className="text-[18px] opacity-70">{desc}</p>
      </div>
    </div>
  );
};

export default SmallItem;
