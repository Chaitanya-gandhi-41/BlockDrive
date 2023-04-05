import GetStartedBtn from "./GetStartedBtn";

const TryService = () => {
  return (
    <section className="py-10 my-10 bg-sha px-3 rounded-[10px] sm:flex sm:justify-between sm:px-10 sm:items-center ">
      <div
        data-aos="fade-right"
        data-aos-duration="1000"
        data-aos-delay="600"
        className="sm:w-80 lg:w-[28rem]"
      >
        <h1 className="text-2xl lg:text-3xl text-white">
          Let's try our service now!
        </h1>
        {/* <p className="text-dimWhite text-[0.8rem] lg:text-[1rem] py-3">
          Everything you need to accept card payments and grow your business
          anywhere on the planet.
        </p> */}
      </div>
      <div
        data-aos="fade-left"
        data-aos-duration="1000"
        data-aos-delay="600"
        className="pb-3"
      >
        <GetStartedBtn />
      </div>
    </section>
  );
};

export default TryService;
