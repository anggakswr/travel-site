import React from "react";

const BigText = () => {
  return (
    <div className="box-equal mb-[204px]">
      {/* scroll bar */}
      <div className="w-[277.14px] pl-[71.04px]">
        {/* white bar */}
        <div className="w-[2px] h-[296px] bg-white mb-[20px]">
          {/* pink bar */}
          <div className="-ml-[1px] w-[4px] h-[100px] bg-pink-brand" />
        </div>

        {/* num */}
        <span className="-ml-1 text-white text-dm-sans font-bold -rotate-90 inline-block">
          01
        </span>
      </div>

      {/* big text */}
      <div className="text-white">
        <h1 className="font-black text-[120px] leading-[130px] text-roboto mb-[21px]">
          EXPLORE INDONESIA
        </h1>

        <a
          href="#start-travelling"
          className="inline-block bg-pink-brand rounded-full py-[26px] px-[64.07px] text-dm-sans text-[20px] font-bold"
        >
          Start travelling
        </a>
      </div>
    </div>
  );
};

export default BigText;
