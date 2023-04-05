import instagram from "../assets/instagram.svg";
import facebook from "../assets/facebook.svg";
import twitter from "../assets/twitter.svg";
import linkedin from "../assets/linkedin.svg";

const FooterLink = () => {
  return (
    <section className="py-8">
      <div className="border-t-2 border-footerline"></div>
      <section className="flex flex-col sm:flex-row sm:justify-between">
        <header className="text-dimWhite py-2 sm:flex sm:items-center sm:gap-2 ">
          <h1>Copyright</h1>
          <p className="text-[11px]">2023 BlockDrive All Rights Reserved.</p>
        </header>
        <figure className="flex gap-3 sm:items-center">
          <img
            src={instagram}
            alt="instagram"
            className="max-w-full w-5 h-5 object-contain"
          />
          <img
            src={facebook}
            alt="facebook"
            className="max-w-full w-5 h-5 object-contain"
          />
          <img
            src={twitter}
            alt="twitter"
            className="max-w-full w-5 h-5 object-contain"
          />
          <img
            src={linkedin}
            alt="linkedin"
            className="max-w-full w-5 h-5 object-contain"
          />
        </figure>
      </section>
    </section>
  );
};

export default FooterLink;
