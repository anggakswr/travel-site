import ByTheNumbers from "./explore-our-secrets/ByTheNumbers";

const ExploreOurSecrets = () => {
  return (
    <section
      className="h-[2207px] bg-cover bg-center flex flex-col justify-between"
      style={{
        backgroundImage: "url(/img/explore-our-secrets/big-rice-field.jpg)",
      }}
    >
      {/* slider */}
      <div>
        <h2 className="text-center pt-[127px] pb-[44.83px] font-bold text-[50px]">
          Explore Our Secrets
        </h2>

        <span>slider here</span>
      </div>

      {/* dark blue section */}
      <ByTheNumbers />
    </section>
  );
};

export default ExploreOurSecrets;
