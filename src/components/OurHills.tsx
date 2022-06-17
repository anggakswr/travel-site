const OurHills = () => {
  return (
    <section
      className="pt-[249px] pb-[256px] bg-center bg-cover text-center"
      style={{ backgroundImage: "url(/img/our-hills/swirl.jpg)" }}
    >
      <h2 className="font-bold text-[42px] mb-[32px] w-[614px] mx-auto">
        Our hills and valleys are like nothing you’ve seen.
      </h2>

      <p className="mb-[36px] w-[470px] mx-auto text-[18px] text-dark-p">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sit amet
        magna commodo, tempus dolor sit amet, laoreet elit. Donec mauris tortor.
      </p>

      <a
        href="#learn-our-hills"
        className="pink-btn text-[18px] py-[18.5px] px-[56px]"
      >
        Learn More
      </a>
    </section>
  );
};

export default OurHills;
