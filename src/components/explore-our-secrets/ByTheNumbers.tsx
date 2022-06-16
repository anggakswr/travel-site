import GridItem from "./by-the-numbers/GridItem";

const ByTheNumbers = () => {
  return (
    <div className="h-[794px] relative pt-[201px] pb-[225.1px]">
      {/* content */}
      <div className="relative z-10 text-center w-3/4 mx-auto">
        <h2 className=" text-white text-[60px] font-bold mb-[36.83px]">
          By The Numbers
        </h2>

        <p className="w-[484px] mx-auto text-center text-[18px] text-soft-white mb-[39px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce commodo
          magna et libero.Lorem ipsum dolor sit amet, consectetur adipiscing
          elit.
        </p>

        <div className="grid grid-cols-3">
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
