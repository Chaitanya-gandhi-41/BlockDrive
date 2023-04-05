import discount from "../assets/Discount.svg";
import robot from "../assets/try.png";
import GetStarted from "./GetStarted";

const Header = () => {
  return (
    <header className="sm:flex sm:items-center md:gap-9 lg:justify-between mt-8">
      <section
        data-aos="fade-up"
        data-aos-duration="1000"
        className="lg:w-[60rem]"
      >
        {/* <figure className="flex gap-1 items-center rounded-[10px] bg-dimBlue w-56 pl-2">
          <img src={discount} alt="" className="w-6" />
          <figcaption className="text-[#FFFFFF] text-[9px]">
            20% DISCOUNT FOR 1 MONTH ACCOUNT
          </figcaption>
        </figure> */}
        <section className="flex items-center sm:items-start sm:gap-4 lg:gap-0">
<h1 className="text-white pt-3 text-4xl sm:font-bold pb-2 lg:leading-[4rem] lg:w-[28rem] 
              lg:text-6xl xl:text-7xl">
  The Next <span className="text-secondary"> Generation </span>
  of Storage .
</h1>
          <div>
            <GetStarted />
          </div>
        </section>

        <p className=" text-dimWhite text-[1rem] lg:w-[29rem] pb-6">
          Switch to BlockDrive for secure and private decentralized storage that puts you in control of your data
        </p>
      </section>

      <figure
        data-aos="fade-left"
        data-aos-duration="1000"
        className=" width={100}"  
         background-color=" rgb(0 4 15 / var(--tw-bg-opacity));">
        <img src={robot} alt="robot" className="roundedCircle" />
      </figure>
    </header>
  );
};

export default Header;
