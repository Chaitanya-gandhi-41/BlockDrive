import logo from "../assets/logo.svg";

const Footer = () => {
  return (
    <section className="pt-8 flex flex-wrap md:justify-between">
      <figure
        className="pb-3 sm:w-64"
        data-aos="fade-right"
        data-aos-delay="600"
        data-aos-duration="1000"
      >
        {/* <img
          src={logo}
          alt="logo"
          className="max-w-[40%] lg:max-w-[60%] object-contain"
        /> */}
              <h1 className="text-white pt-3 text-4xl sm:font-bold pb-2 lg:leading-[4rem] lg:w-[20rem]">BlockDrive</h1>
        <p className="text-dimWhite text-[1rem] pt-3">
         Take back control of your data with decentralized storage - Secure, Private, and Reliable.
        </p>
      </figure>
      <section className="sm:flex sm:gap-5 lg:gap-8">
        <ul data-aos="fade-down" data-aos-delay="600" data-aos-duration="1000">
          <li className="text-white list-none py-3 sm:py-0 sm:pb-2 text-[1.5rem]">
            Useful Links
          </li>
          <li className="text-dimWhite text-[1rem] list-none ">Content</li>
          <li className="text-dimWhite list-none text-[1rem] ">How it Works</li>
          <li className="text-dimWhite list-none text-[1rem] ">Create</li>
          <li className="text-dimWhite list-none text-[1rem] ">Explore</li>
          <li className="text-dimWhite list-none text-[1rem] ">
            Terms & Services
          </li>
        </ul>

        <ul data-aos="fade-up" data-aos-delay="600" data-aos-duration="1000">
          <li className="text-white list-none py-3 sm:py-0 sm:pb-2 text-[1.5rem]">
            Community
          </li>
          <li className="text-dimWhite list-none text-[1rem] ">Help Center</li>
          <li className="text-dimWhite list-none text-[1rem] ">Partners</li>
          <li className="text-dimWhite list-none text-[1rem] ">Suggestions</li>
          <li className="text-dimWhite list-none text-[1rem] ">Blog</li>
          <li className="text-dimWhite list-none text-[1rem] ">Newsletters</li>
        </ul>

        <ul data-aos="fade-left" data-aos-delay="600" data-aos-duration="1000">
          <li className="text-white list-none py-3 sm:py-0 sm:pb-2 text-[1.5rem]">
            Partner
          </li>
          <li className="text-dimWhite list-none text-[1rem] ">Our Partner</li>
          <li className="text-dimWhite list-none text-[1rem] ">
            Become a Partner
          </li>
        </ul>
      </section>
    </section>
  );
};

export default Footer;
