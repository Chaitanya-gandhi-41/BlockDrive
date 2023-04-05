import GetStartedBtn from "./GetStartedBtn";
import star from "../assets/Star.svg";
import shield from "../assets/Shield.svg";
import send from "../assets/Send.svg";
import styles, { layout } from "../style";

const HandleMoney = () => {
  return (
    <section className="py-8 flex flex-wrap items-center gap-8">
      <div
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-delay="300"
        className="flex-1"
      >
        <h1 className="text-white font-normal text-3xl lg:text-5xl">
          Store with Trust, Share with Confidence - Decentralized Cloud
        </h1>
        <p className="text-dimWhite text-lg py-4">
          You can trust that your data is safe and share it confidently without worrying about third-party interference.
        </p>
        <GetStartedBtn />
      </div>

      <div
        data-aos="fade-down"
        data-aos-delay="300"
        data-aos-duration="1000"
        className="flex-1 pt-7 md:w-96 lg:w-auto flex flex-col gap-4"
      >
        <figure className="flex gap-3 hover:bg-sha py-2 pl-2 rounded-md">
          <img src={star} alt="Star" />
          <header>
            <h1 className="text-white pb-1 text-lg lg:text-2xl">
              Security
            </h1>
            <p className="text-dimWhite text-base">
              Decentralized storage space provides enhanced security as data is distributed across multiple nodes, reducing the risk of a single point of failure.
            </p>
          </header>
        </figure>

        <div className="flex gap-3 hover:bg-sha py-2 pl-2 rounded-md">
          <img src={shield} alt="Shield" />
          <header>
            <h1 className="text-white pb-1 text-lg lg:text-2xl">
              Privacy
            </h1>
            <p className="text-dimWhite text-base">
              Decentralized storage space ensures privacy as data is encrypted and stored in a way that only the owner can access it.
            </p>
          </header>
        </div>

        <figure className="flex gap-3 hover:bg-sha py-2 pl-2 rounded-md">
          <img src={send} alt="Send" />
          <header>
            <h1 className="text-white pb-1 text-lg lg:text-2xl">
              Control
            </h1>
            <p className="text-dimWhite text-base">
              Decentralized storage space offers users complete control over their data without the need for third-party intermediaries.
            </p>
          </header>
        </figure>
      </div>
    </section>
  );
};

export default HandleMoney;
