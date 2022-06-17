import Item from "./point/Item";
import Mobile from "./point/Mobile";

export type ItemType = {
  title: string;
  desc: string;
  vid: string;
};

type PointPropType = {
  number: number;
  title: string;
  desc: string;
  items?: ItemType[];
  link?: string;
};

const Point = ({ number, title, desc, items, link }: PointPropType) => {
  return (
    <div className="relative z-10 mb-[32px] md:mb-0">
      <div className="flex flex-col md:flex-row gap-x-[44.02px] items-center justify-center md:justify-start mb-[5px] md:mb-[26.41px]">
        <p className="w-[56px] md:w-[58.69px] h-[56px] md:h-[58.69px] rounded-full bg-pink-brand box-center font-medium text-[26.41px] text-white mb-[26px] md:mb-0">
          {number}
        </p>

        {/* title */}
        <div>
          <h3 className="font-bold text-[26.41px]">{title}</h3>
        </div>
      </div>

      {/* mobile only */}
      {items && <Mobile desc={desc} items={items} />}

      <div className="hidden md:block ml-[102.71px] pb-[79.23px]">
        <p className="text-[23.47px] text-[#15143966]">{desc}</p>

        {/* items */}
        {items?.map((item, index) => (
          <Item item={item} key={"item-" + index} />
        ))}

        {/* link */}
        {link && (
          <a
            href={link}
            className="mt-[16.95px] pink-btn text-[18px] py-[18.5px] px-[56px]"
          >
            Learn More
          </a>
        )}
      </div>
    </div>
  );
};

export default Point;
