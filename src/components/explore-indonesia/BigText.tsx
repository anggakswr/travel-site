const BigText = () => {
  return (
    <section className="box-equal mb-[204px]">
      {/* scroll bar */}
      <div className="w-[277.14px] pl-[71.04px]">
        {/* white bar */}
        <div className="w-[2px] h-[296px] bg-white mb-[20px]">
          {/* pink bar */}
          <div className="-ml-[1px] w-[4px] h-[100px] bg-pink-brand" />
        </div>

        {/* num */}
        <span className="-ml-1 text-white font-bold -rotate-90 inline-block">
          01
        </span>
      </div>

      {/* big text */}
      <div className="text-white">
        {/* big text */}
        <h1 className="font-black text-[120px] leading-[130px] text-roboto mb-[21px]">
          EXPLORE INDONESIA
        </h1>

        {/* btn */}
        <a href="#start-travelling" className="pink-btn py-[26px] px-[64.07px]">
          Start travelling
        </a>
      </div>
    </section>
  );
};

export default BigText;
