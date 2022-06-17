import ByTheNumbers from "./explore-our-secrets/ByTheNumbers";

const ExploreOurSecrets = () => {
  return (
    <section
      className="bg-cover bg-center"
      style={{
        backgroundImage: "url(/img/explore-our-secrets/big-rice-field.jpg)",
      }}
    >
      {/* slider */}
      <div className="mb-[695.52px] md:mb-[886px]">
        <h2 className="text-center font-bold pt-[25px] md:pt-[127px] px-[30px] md:px-0 pb-[23px] md:pb-[44.83px] text-[40px] md:text-[50px] leading-[46px]">
          Explore Our Secrets
        </h2>

        <div>slider here</div>
      </div>

      {/* dark blue section */}
      <ByTheNumbers />
    </section>
  );
};

export default ExploreOurSecrets;
