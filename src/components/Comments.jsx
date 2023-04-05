import quotes from "../assets/quotes.svg";
import people1 from "../assets/people01.png";
import people2 from "../assets/harsh.png";
import people3 from "../assets/people03.png";

const Comments = () => {
  return (
    <section className="py-6 flex flex-wrap gap-3 lg:flex-nowrap md:justify-between" id="about">
<div
  data-aos="fade-up"
  data-aos-delay="400"
  className="py-2 px-4 hover:bg-sha rounded-md sm:w-72 md:w-56 lg:w-[19rem]"
>
  <figure className="flex gap-2 items-center pb-3">
    <img
      src={people1}
      alt=""
      className="w-full h-50 max-w-full lg:max-w-[400px] object-cover mx-auto"
    />
  </figure>

  <p className="text-white text-[1rem] py-8 ">
    At BlockDrive, we believe in empowering individuals and businesses to securely store and access their data, without relying on centralized entities that may compromise privacy and control.
  </p>
  <figure className="flex gap-2 items-center pb-3">
    <header className="text-center flex flex-col items-center">
      <h1 className="text-[1.2rem] font-bold text-white mb-1">Chaitanya Gandhi</h1>
      <p className="text-[0.9rem] font-bold text-dimWhite mb-0">Founder & Leader</p>
    </header>
  </figure>
 
</div>
<div
  data-aos="fade-up"
  data-aos-delay="400"
  className="py-2 px-4 hover:bg-sha rounded-md sm:w-72 md:w-56 lg:w-[19rem]"
>
  <figure className="flex gap-2 items-center pb-3">
    <img
      src={people2}
      alt=""
      className="max-w-full lg:max-w-[500px] object-cover mx-auto"
    />
  </figure>

  <p className="text-white text-[1rem] py-8 ">
    We're committed to building a decentralized storage platform that is reliable, scalable, and accessible to anyone, anywhere in the world, while prioritizing data privacy, security, and ownership.
  </p>
  <figure className="flex gap-2 items-center pb-3">
    <header className="text-center">
      <h1 className="text-[1.2rem] font-bold text-white mb-1">Harsh Vardhan Rana</h1>
      <p className="text-[0.9rem] font-bold text-dimWhite mb-0">Founder & Leader</p>
    </header>
  </figure>
 
</div>
<div
  data-aos="fade-up"
  data-aos-delay="400"
  className="py-2 px-4 hover:bg-sha rounded-md sm:w-72 md:w-56 lg:w-[19rem]"
>
  <figure className="flex gap-2 items-center pb-3">
    <img
      src={people3}
      alt=""
      className="max-w-full lg:max-w-[500px] object-cover mx-auto"
    />
  </figure>

  <p className="text-white text-[1rem] py-8 ">
    Money is only a tool. It will take you wherever you wish, but it will
    not replace you as the driver.
  </p>
  <figure className="flex gap-2 items-center pb-3">
    <header className="text-center">
      <h1 className="text-[1.2rem] font-bold text-white mb-1">Herman Jensen</h1>
      <p className="text-[0.9rem] font-bold text-dimWhite mb-0">Founder & Leader</p>
    </header>
  </figure>
 
</div>
<div
  data-aos="fade-up"
  data-aos-delay="400"
  className="py-2 px-4 hover:bg-sha rounded-md sm:w-72 md:w-56 lg:w-[19rem]"
>
  <figure className="flex gap-2 items-center pb-3">
    <img
      src={people3}
      alt=""
      className="max-w-full lg:max-w-[500px] object-cover mx-auto"
    />
  </figure>

  <p className="text-white text-[1rem] py-8 ">
    Money is only a tool. It will take you wherever you wish, but it will
    not replace you as the driver.
  </p>
  <figure className="flex gap-2 items-center pb-3">
    <header className="text-center">
      <h1 className="text-[1.2rem] font-bold text-white mb-1">Herman Jensen</h1>
      <p className="text-[0.9rem] font-bold text-dimWhite mb-0">Founder & Leader</p>
    </header>
  </figure>
 
</div>

    </section>
  );
};

export default Comments;
