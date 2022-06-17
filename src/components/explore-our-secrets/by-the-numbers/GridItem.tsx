type GridItemPropType = {
  title: string;
  desc: string;
};

const GridItem = ({ title, desc }: GridItemPropType) => {
  return (
    <div className="text-white">
      {/* title */}
      <h3 className="text-pink-brand text-[42.14px] font-bold">{title}</h3>

      {/* desc */}
      <p className="text-[18px] text-soft-white">{desc}</p>
    </div>
  );
};

export default GridItem;
