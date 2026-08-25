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

export default function Page() {
  return (
    <>
      <Header />

      <Hero3 />
      <Marquee />
      <Hero2 />
      <FormSection />
      <LogoMarquee/>
      <SkinConcerns/>
      <InstagramPosts />
      {/* <Hero/> */}
      {/* <WhyJoins/> */}
      {/* <Countdown/> */}
      {/* <Understand/> */}
      <Features />
      <StayConnected />
      <Footer />
      {/* <Home/> */}
    </>
  );
}
