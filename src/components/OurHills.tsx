const OurHills = () => {
  return (
    <section
      id="about"
      className="pt-[171px] md:pt-[249px] pb-[116px] md:pb-[256px] px-[30px] md:px-0 text-center relative"
    >
      <h2 className="relative z-10 font-bold text-[42px] mb-[36px] md:mb-[32px] md:w-[614px] mx-auto">
        Our hills and valleys are like nothing you’ve seen.
      </h2>

      <p className="relative z-10 mb-[41px] md:mb-[36px] md:w-[470px] mx-auto text-[18px] text-dark-p">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sit amet
        magna commodo, tempus dolor sit amet, laoreet elit. Donec mauris tortor.
      </p>

      <a
        href="#learn-our-hills"
        className="relative z-10 pink-btn text-[18px] py-[23px] md:py-[18.5px] px-[56px] w-full md:w-auto"
      >
        Learn More
      </a>

      {/* desktop bg */}
      <div
        className="hidden md:block absolute inset-0 bg-center bg-cover"
        style={{ backgroundImage: "url(/img/our-hills/swirl.jpg)" }}
      />

      {/* mobile bg */}
      <div
        className="md:hidden absolute inset-0 bg-center bg-cover"
        style={{ backgroundImage: "url(/img/our-hills/swirl-mobile.jpg)" }}
      />
    </section>
  );
};

export default OurHills;
