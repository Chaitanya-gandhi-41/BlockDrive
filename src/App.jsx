import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Stats from "./components/Stats";
import Handle from "./components/Handle";
import ControlBilling from "./components/ControlBilling";
import BetterCard from "./components/BetterCard";
import Review from "./components/Review";
import Comments from "./components/Comments";
import Partners from "./components/Partners";
import TryService from "./components/TryService";
import Footer from "./components/Footer";
import FooterLink from "./components/FooterLink";
import './index.css';

const App = () => {
  return (
    <main className="bg-primary h-full px-6 md:px-[4rem] font-poppins overflow-x-hidden">
      <Navbar />
      <Header />
      <Stats />
      <Handle />
      <ControlBilling />
      <BetterCard />
      <Review />
      <Comments />
      {/* <Partners /> */}
      <TryService />
      <Footer />
      <FooterLink />
    </main>
  );
};

export default App;
