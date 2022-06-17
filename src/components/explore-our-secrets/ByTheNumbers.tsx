import GridItem from "./by-the-numbers/GridItem";

const ByTheNumbers = () => {
  return (
    <div className="relative pt-[72px] md:pt-[201px] pb-[69.1px] md:pb-[225.1px] px-[30px]">
      {/* content */}
      <div className="relative z-10 text-center md:w-3/4 md:mx-auto">
        <h2 className="font-bold text-white text-[40px] md:text-[60px] mb-[57px] md:mb-[36.83px]">
          By The Numbers
        </h2>

        <p className="md:w-[484px] md:mx-auto text-center text-[16px] md:text-[18px] text-soft-white mb-[39px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce commodo
          magna et libero.Lorem ipsum dolor sit amet, consectetur adipiscing
          elit.
        </p>

        <div className="grid md:grid-cols-3 gap-y-[43.88px] md:gap-y-0">
          <GridItem
            title="100+"
            desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce commodo magna et libero."
          />

          <GridItem
            title="43,000+"
            desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce commodo."
          />

          <GridItem
            title="30+"
            desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce commodo magna et libero."
          />
        </div>
      </div>

      {/* transparent bg color */}
      <div className="absolute bg-dark-blue-brand inset-0 opacity-90" />
    </div>
  );
};

export default ByTheNumbers;
