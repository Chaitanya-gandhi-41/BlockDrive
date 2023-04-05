import airbnb from "../assets/airbnb.png";
import binance from "../assets/binance.png";
import coinbase from "../assets/coinbase.png";
import dropbox from "../assets/dropbox.png";

const Partners = () => {
  return (
    <figure className="flex flex-wrap gap-4 py-9 md:justify-between">
      <img
        src={airbnb}
        alt="airbnb"
        className="partners-style"
        data-aos="fade-right"
        data-aos-delay="600"
        data-aos-duration="1000"
      />
      <img
        src={binance}
        alt="binance"
        className="partners-style"
        data-aos="fade-down"
        data-aos-delay="500"
        data-aos-duration="1000"
      />
      <img
        src={coinbase}
        alt="coinbase"
        className="max-w-[40%] sm:w-24 object-contain"
        data-aos="fade-up"
        data-aos-delay="600"
        data-aos-duration="1000"
      />
      <img
        src={dropbox}
        alt="dropbox"
        className="partners-style"
        data-aos="fade-left"
        data-aos-delay="600"
        data-aos-duration="1000"
      />
    </figure>
  );
};

export default Partners;
