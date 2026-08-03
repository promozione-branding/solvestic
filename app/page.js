import Image from "next/image";
import Home from "./components/Home";
import Header from "./components/Header";
import Hero from "./components/Hero";
import WhyJoins from "./components/WhyJoins";
import Understand from "./components/Understand";
import Countdown from "./components/Countdown";
import Footer from "./components/Footer";

export default function Page() {
  return (
    <>
    <Header/>
    <Hero/>
    <WhyJoins/>
    <Understand/>
    <Countdown/>
    <Footer/>
        {/* <Home/> */}
    </>
  );
}
