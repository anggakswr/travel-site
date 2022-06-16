import React from "react";

type PointPropType = {
  number: String;
  title: String;
  children: React.ReactNode;
};

const Point = ({ number, title, children }: PointPropType) => {
  return (
    <div className="relative z-10">
      <div className="flex gap-x-[44.02px] items-center mb-[26.41px]">
        <p className="w-[58.69px] h-[58.69px] rounded-full bg-pink-brand box-center font-medium text-[26.41px] text-white">
          {number}
        </p>

        {/* title */}
        <div>
          <h3 className="font-bold text-[26.41px]">{title}</h3>
        </div>
      </div>

      <div className="ml-[102.71px] pb-[79.23px]">{children}</div>
    </div>
  );
};

export default Point;
