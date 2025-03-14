import Disclaimer from "../components/Disclaimer";
import HeroSection from "../components/HeroSection";
import About from "../components/About";
import SocialIcons from "../components/SocialIcons";
import Footer from "../layouts/Footer";
import GoToTop from "../utils/GoToTop";

const Home = () => {
  return (
    <>
      <div className="h-screen">
        <main>
          <HeroSection />
        </main>
      </div>
      {/* <About /> */}
      {/* <Disclaimer /> */}
      {/* <SocialIcons /> */}
      {/* <Footer /> */}
      <GoToTop />
    </>
  );
};

export default Home;
