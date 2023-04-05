import bill from "../assets/better.png";
import apple from "../assets/apple.svg";
import google from "../assets/google.svg";
import styles from "../style";

const ControlBilling = () => {
  return (
    <figure className="py-10 sm:flex  sm:items-center md:70rem ">
<header
  data-aos="fade-left"
  data-aos-duration="1000"
  className={`pb-4 sm:w-72 md:w-80 lg: ml:80 sm:flex-row sm:order-1 flex-center ${styles.header}`}
  style={{ maxWidth: "600rem", marginRight: "2rem" }}
>
        <h1 className="text-white text-5xl lg:text-6xl  pb-500">
          Easily access your data from anywhere.
        </h1>
        <p className="text-dimWhite text-lg pb-3">
          Your data is always at your fingertips, ready to be accessed from any device and any place
        </p>
        <section className="flex gap-2">
          <figure>
            <img src={apple} alt="apple" className="max-w-full object-cover" />
          </figure>
          <figure>
            <img
              src={google}
              alt="google"
              className="max-w-full object-cover"
            />
          </figure>
        </section>
      </header>
      <figure
        data-aos="fade-right"
        data-aos-duration="1000"
        className="sm:w-96 lg:w-[38rem] -mb-338 sm:mb-0"
        style={{ marginRight: "-2rem" }}
      >
        <img src={bill} alt="bill" className="max-w-full object-cover" />
      </figure>
    </figure>
  );
};

export default ControlBilling;
