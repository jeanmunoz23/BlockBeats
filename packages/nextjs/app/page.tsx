"use client";

import Hero from "./sections/hero";
import HowWorks from "./sections/howWorks";
import Mission from "./sections/mission";
import type { NextPage } from "next";
import Marquee from "~~/components/marquee";
import WhyChoose from "./sections/whyChoose";

//import { useAccount } from "wagmi";
//import { Address } from "~~/components/scaffold-eth";

const Home: NextPage = () => {
  //const { address: connectedAddress } = useAccount();

  return (
    <>
      <div className="flex md:flex-col flex-grow">
        <Hero />
        <Marquee />
        <HowWorks />
        <Mission />
        <WhyChoose />
        {/* 
          <p>
            Address:
            <Address address={connectedAddress} />
          </p>
          */}
      </div>
    </>
  );
};

export default Home;
