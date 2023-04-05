import arrow from "../assets/arrow-up.svg";

const GetStarted = () => {
  return (
    <section className="rounded-full h-20 w-20 border-secondary border-2 text-[10px] flex flex-col justify-center items-center text-white">
      <div className="flex flex-row">
        <p className="font-poppins leading-[20.4px] text-secondary">Get</p>
        <img src={arrow} alt="arrowUp" className="w-4 object-contain" />
      </div>
      <div>
        <p className="font-poppins leading-[20.4px] text-secondary">Started</p>
      </div>
    </section>
  );
};

export default GetStarted;
