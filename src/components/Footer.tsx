const Footer = () => {
  return (
    <footer className="relative z-30 md:z-0 md:h-[136px] box-between flex-col md:flex-row md:pl-[70px] md:pr-[153px] bg-black-brand text-white font-bold text-[18px] pt-[146.68px] md:pt-0 pb-[84.68px] md:pb-0">
      <div className="box-equal flex-col md:flex-row gap-y-[36px] mb-[36px] md:mb-0">
        <img
          src="/img/footer-logo.png"
          alt="Footer Logo"
          className="md:mr-[124px]"
        />

        {/* links */}
        <div className="flex gap-x-[35px] gap-y-[36px] flex-col md:flex-row items-center">
          <a href="#about" className="text-[22.94px] md:text-[18px] font-bold">
            About
          </a>

          <a
            href="#pricing"
            className="text-[22.94px] md:text-[18px] font-bold"
          >
            Pricing
          </a>

          <a
            href="#company"
            className="text-[22.94px] md:text-[18px] font-bold"
          >
            Company
          </a>

          <a href="#blog" className="text-[22.94px] md:text-[18px] font-bold">
            Blog
          </a>
        </div>
      </div>

      {/* social media links & copyright text */}
      <div className="box-equal flex-col md:flex-row gap-y-[36px]">
        <div className="flex gap-x-[48.41px] md:gap-x-[22px]">
          <a href="#facebook">
            <img src="/img/footer/facebook.svg" alt="Facebook" />
          </a>

          <a href="#linkedin">
            <img src="/img/footer/linkedin.svg" alt="LinkedIn" />
          </a>

          <a href="#google">
            <img src="/img/footer/google.svg" alt="Google" />
          </a>
        </div>

        <p className="md:ml-[50px] text-[23.24px] md:text-[18px] font-bold">
          Copyright © 2019
        </p>
      </div>
    </footer>
  );
};

export default Footer;
