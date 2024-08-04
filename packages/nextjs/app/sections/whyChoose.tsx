import React from "react";
import Image from "next/image";
import popMusic2 from "./../../public/pop_music2.svg";
import popMusic from "./../../public/pop_music.svg";
import realTime from "./../../public/realTime.svg";
import reputationSystem from "./../../public/reputationSystem.svg";
import scroll from "./../../public/scroll.svg";
import trackExplore from "./../../public/trackExplorer.svg";
import { WhyChooseCard } from "~~/components/whyChooseCard";

export default function WhyChoose() {
  return (
    <section>
      <div className="text-center">
        <h5 className="font-bold">Why Choose Our Platform?</h5>
        <h5>
          Designed for everyone in the <br /> music ecosystem
        </h5>
      </div>
      <div className="grid md:grid-cols-2 gap-20 px-20">
        <WhyChooseCard title="Collaborative Creation Proce">
          <p className="subP">
            Musician 1: You create a music track in your production software and save it in a specific format. Connect
            to the platform and upload the track to your profile, making it public so that others can listen to it and
            collaborate.
          </p>
          <p className="subP">
            Collaboration Proposal Musician 2: Listen to the tracks available on the platform and select one you
            like.Request to collaborate with the chosen track and create a new companion track in your software.Upload
            your track to the platform.
          </p>
          <div className="flex flex-wrap justify-around mt-10">
            <Image src={popMusic} alt="Pop music record" width={130} height={130} />
            <Image src={realTime} alt="Real time colaboration" width={130} height={130} />
            <Image src={popMusic2} alt="Pop music record" width={130} height={130} />
          </div>
        </WhyChooseCard>
        <WhyChooseCard title="Discover Unique Voices, Empower Artists">
          <p className="subP">Benefits for Listeners </p>
          <p className="subP">
            Access to Exclusive Music: Listeners can discover and enjoy unique tracks not available on other platforms.
          </p>
          <p className="subP">
            Community Participation: Users can be part of an active community, vote on projects and participate in the
            creative process.
          </p>
          <p className="subP">
            Music Investments: Music fans can purchase NFTs of tracks and benefit from future sales and royalties.
          </p>
          <div className="flex flex-wrap justify-evenly mt-10">
            <Image src={trackExplore} alt="Pop music record" width={130} height={130} />
            <Image src={reputationSystem} alt="Real time colaboration" width={130} height={130} />
          </div>
        </WhyChooseCard>
        <div className="smart-contract max-w-[420px] m-auto p-10 rounded-lg">
          <h3 className="text-[28px] leading-1">Smart Contract Integration</h3>
          <p>Leverage the power of smart contracts for secure and transparent transactions.</p>
          <div className="md:flex mt-20">
            <Image src={scroll} alt="Scroll" width={46} height={46} />
          </div>
        </div>
      </div>
    </section>
  );
}
