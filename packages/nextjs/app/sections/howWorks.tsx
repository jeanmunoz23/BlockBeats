import React from "react";
import Image from "next/image";
import chain from './../../public/chain.svg';
export default function HowWorks() {
  return (
    <section>
      <div className="md:flex">
        <div className="md:w-1/2">
          <h2>How do Music NFTs work?</h2>
          <p>
            NFTs are unique assets stored and tradable on a blockchain. They are, immutable, scarce and publicly
            verifiable. In the music world, artistes get to sell limited digital content to their fans who pay via
            crypto. You can now produce any music content that cannot be counterfeited.
          </p>
        </div>
        <div className="md:w-1/2">
        <Image src={chain} width={523} height={358} alt="Chains"/>
        </div>
      </div>
    </section>
  );
}
