import React from "react";
import Image from "next/image";
import popMusic2 from "./../../public/pop_music2.svg";
import popMusic from "./../../public/pop_music.svg";
import realTime from "./../../public/realTime.svg";
import reputationSystem from "./../../public/reputationSystem.svg";
import trackExplore from "./../../public/trackExplorer.svg";
import scroll from "./../../public/scroll.svg";
import { WhyChooseCard } from "~~/components/whyChoose";

export default function WhyChoose() {
  return (
    <section>
      <div className="text-center">
        <h5 className="font-bold">Why Choose Our Platform?</h5>
        <h5>
          Designed for everyone in the <br /> music ecosystem
        </h5>
      </div>
      <div className="grid md:grid-cols-2 gap-2">
        <WhyChooseCard
          title="Collaborative Creation Proce"
          description="Musician 1: You create a music track in your production software and save it in a specific format. Connect to the platform and upload the track to your profile, making it public so that others can listen to it and collaborate.
Collaboration Proposal Musician 2: Listen to the tracks available on the platform and select one you like.Request to collaborate with the chosen track and create a new companion track in your software.Upload your track to the platform."
        >
          <div className="md:flex justify-between">
            <Image src={popMusic} alt="Pop music record" width={130} height={130} />
            <Image src={realTime} alt="Real time colaboration" width={130} height={130} />
            <Image src={popMusic2} alt="Pop music record" width={130} height={130} />
          </div>
        </WhyChooseCard>
        <WhyChooseCard
          title="Discover Unique Voices, Empower Artists"
          description="Benefits for Listeners Access to Exclusive Music: Listeners can discover and enjoy unique tracks not available on other platforms.Community Participation: Users can be part of an active community, vote on projects and participate in the creative process.Music Investments: Music fans can purchase NFTs of tracks and benefit from future sales and royalties."
        >
          <div className="md:flex justify-center">
            <Image src={trackExplore} alt="Pop music record" width={130} height={130} />
            <Image src={reputationSystem} alt="Real time colaboration" width={130} height={130} />
          </div>
        </WhyChooseCard>
        <WhyChooseCard
          title="Smart Contract Integration"
          description="Leverage the power of smart contracts for secure and transparent transactions."
        >
          <div className="md:flex">
            <Image src={scroll} alt="Scroll" width={46} height={46} />
           </div>
        </WhyChooseCard>
      </div>
    </section>
  );
}
