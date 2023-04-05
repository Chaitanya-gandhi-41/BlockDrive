import { useRef } from "react";
import {Link} from 'react-scroll';
import logo from "../assets/logo.svg";
import menu from "../assets/menu.svg";
import close from "../assets/close.svg";
import GetStartedBtn from "./GetStartedBtn";
import comments from "./Comments";


const Navbar = () => {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("translate-x-[100%]");
  };

  return (
    <nav className="flex items-center justify-between py-5 overflow-hidden">
      <h1 className="text-white pt-3 text-4xl sm:font-bold pb-2 lg:leading-[4rem] lg:w-[20rem]">BlockDrive</h1>
      {/* <img
        src={logo}
        alt={logo}
        className="max-w-full w-28 hover:cursor-pointer"
      /> */}

      <section
        ref={navRef}
        className="text-dimWhite translate-x-[100%] sm:translate-x-[0] transition-all sm:transition-none sm:text-xs lg:text-[1rem] sm:relative fixed top-0 left-0 sm:h-0 h-full w-full flex sm:flex-row flex-col items-center justify-center sm:justify-end gap-3 bg-primary z-50"
      >  <button>
        <Link to="head" className="anchor-tag" spy={true} smooth={true} offset={50} duration={500} >
          Home
        </Link></button>
        <button>
        <Link to="about" className="anchor-tag" spy={true} smooth={true} offset={-200} duration={2000} >
         About Us
        </Link></button>
        <Link to="/" className="anchor-tag" spy={true} smooth={true} offset={50} duration={500} >
         Features
        </Link>
        <Link to="/" className="anchor-tag" spy={true} smooth={true} offset={50} duration={500} >
         Solution
        </Link>
      
        <a className="anchor-tag" href="#">
         <GetStartedBtn />
        </a>
        <button
          onClick={showNavbar}
          className="opacity-1 sm:opacity-0 sm:hidden pointer absolute top-[1.5rem] right-[2rem]"
        >
          <img src={close} alt="close" />
        </button>
      </section>

      <button onClick={showNavbar} className="opacity-1 sm:opacity-0 sm:hidden">
        <img src={menu} alt="menu" />
      </button>
    </nav>
  );
};

export default Navbar;
