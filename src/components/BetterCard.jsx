
import pay from "../assets/dcst.png";
import GetStartedBtn from "./GetStartedBtn";

const BetterCard = () => {
  return (
    <figure className="py-8 sm:flex sm:items-center sm:gap-3 md:justify-between">
      <header
        data-aos="fade-right"
        data-aos-duration="1000"
        className="pb-6 md:w-96 lg:w-[30rem]"
        style={{fontSize: "2rem", marginRight: "2rem"}}
      >
        <h1 className="text-white text-6xl lg:text-7xl pb-3">
          Switch to BlockDrive in a few easy Steps.
        </h1>
        <p className="text-dimWhite lg:text-[0.9rem] pb-3">
         Move to the cloud seamlessly with easy migration to decentralized storage and never worry again aboutyour data.
        </p>
        <GetStartedBtn />
      </header>

      <div data-aos="fade-up" data-aos-duration="1000">
        <img
          src={pay}
          alt="pay"
          className="max-w-full object-cover sm:w-96 lg:w-[34rem]"
          style={{marginRight: "-2rem"}}
        />
      </div>
    </figure>
  );
};

export default BetterCard;
