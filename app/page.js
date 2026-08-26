import Image from "next/image";
import Home from "./components/Home";
import Header from "./components/Header";
import Hero from "./components/Hero";
import WhyJoins from "./components/WhyJoins";
import Understand from "./components/Understand";
import Countdown from "./components/Countdown";
import Footer from "./components/Footer";
import Features from "./components/Features";
import StayConnected from "./components/StayConnected";
import FormSection from "./components/FormSection";
import Hero2 from "./components/Hero2";
import Marquee from "./components/Marquee";
import InstagramPosts from "./components/InstagramPosts";
import Hero3 from "./components/Hero3";
import LogoMarquee from "./components/LogoMarquee";
import SkinConcerns from "./components/SkinConcerns";
import Certifications from "./components/Certifications";
import LaunchTopBar from "./components/LaunchTopBar";
import Marquee2 from "./components/Marquee2";

export default function Page() {
  return (
    <>
      {/* <LaunchTopBar /> */}
      <Marquee />
      <Header />

      <Hero3 />
      {/* <Marquee2 /> */}
      <div className="h-5 bg-white"></div>

      <Hero2 />
      <FormSection />
      <LogoMarquee />
      <SkinConcerns />
      <Certifications />
      {/* <Hero/> */}
      {/* <WhyJoins/> */}
      {/* <Countdown/> */}
      {/* <Understand/> */}
      <Features />
      <InstagramPosts />
      {/* <StayConnected /> */}
      <Footer />
      {/* <Home/> */}
    </>
  );
}
