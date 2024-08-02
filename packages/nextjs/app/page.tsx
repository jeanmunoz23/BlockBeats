"use client";

import Hero from "./sections/hero";
import type { NextPage } from "next";
//import { useAccount } from "wagmi";
//import { Address } from "~~/components/scaffold-eth";

const Home: NextPage = () => {
  //const { address: connectedAddress } = useAccount();

  return (
    <>
      <div className="flex flex-col flex-grow"> 
          <Hero />
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
