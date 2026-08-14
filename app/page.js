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

export default function Page() {
  return (
    <>
    <Header/>
    <Hero2/>
    <FormSection/>
    {/* <Hero/> */}
    {/* <WhyJoins/> */}
    {/* <Countdown/> */}
    {/* <Understand/> */}
    <Features/>
    <StayConnected/>
    <Footer/>
        {/* <Home/> */}
    </>
  );
}
