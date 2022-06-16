import BigText from "./explore-indonesia/BigText";
import BlackBoxes from "./explore-indonesia/BlackBoxes";

const ExploreIndonesia = () => {
  return (
    <section
      className="pt-[233px] h-[1080px] bg-center bg-cover relative"
      style={{ backgroundImage: "url(/img/big-text/explore-indonesia.jpg)" }}
    >
      {/* content */}
      <div className="h-full relative z-10 flex flex-col justify-between">
        {/* scroll bar & big text */}
        <BigText />

        {/* black boxes */}
        <BlackBoxes />
      </div>

      {/* black transparent bg */}
      {/* <div className="absolute inset-0 bg-black opacity-30" /> */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(215.79deg, rgba(0, 0, 0, 0.31) 29.66%, rgba(0, 0, 0, 0.29) 84.2%)",
        }}
      />
    </section>
  );
};

export default ExploreIndonesia;
