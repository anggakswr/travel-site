import { ItemType } from "../Point";
import Vid from "./mobile/Vid";

type MobilePropType = {
  desc: string;
  items?: ItemType[];
};

const Mobile = ({ desc, items }: MobilePropType) => {
  return (
    <div className="md:hidden">
      <p className="text-[16px] text-[#15143966]">
        {desc && desc.length > 21 ? desc.substring(0, 21) + ",,,," : desc}
      </p>

      <button className="text-pink-brand">Show more</button>

      {items?.map((item, index) => (
        <div key={"mobile-item-" + index} className="mt-[32px] mx-[30px]">
          <Vid vid={item.vid} />

          <p className="text-[16px] text-[#15143966]">
            {item.desc && item.desc.length > 21
              ? item.desc.substring(0, 21) + ",,,,"
              : item.desc}
          </p>

          <button className="text-pink-brand">Show more</button>
        </div>
      ))}
    </div>
  );
};

export default Mobile;
