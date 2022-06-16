const Footer = () => {
  return (
    <footer className="h-[136px] box-between pl-[70px] pr-[153px] bg-black-brand text-white font-bold text-[18px]">
      <div className="box-equal">
        <img
          src="/img/footer-logo.png"
          alt="Footer Logo"
          className="mr-[124px]"
        />

        {/* links */}
        <div className="flex gap-x-[35px]">
          <a href="#about">About</a>

          <a href="#pricing">Pricing</a>

          <a href="#company">Company</a>

          <a href="#blog">Blog</a>
        </div>
      </div>

      {/* social media links & copyright text */}
      <div className="box-equal">
        <div className="flex gap-x-[22px]">
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

        <p className="ml-[50px]">Copyright © 2019</p>
      </div>
    </footer>
  );
};

export default Footer;
