import React from "react";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { MusicCard } from "~~/components/musicCard";
import { Button } from "~~/components/ui/button";
import musicPop from "./../../public/pop_music.svg";
import musicPop2 from "./../../public/pop_music2.svg";

export default function Mission() {
  return (
    <section>
      <div className="md:flex">
        <div className="flex justify-around md:w-1/2">
          <MusicCard src={musicPop} alt="Pop music record" width={194} height={194} text="Pop Music" number={0.3234} />
          <MusicCard src={musicPop2} alt="Pop music record" width={194} height={194} text="Pop Music" number={0.3234}  />
        </div>
        <div className="md:w-1/2">
          <h5>Empowering Musicians in the Digital Economy</h5>
          <p>
            Our DApp enables artists, producers, and music enthusiasts to collaborate in real-time, create unique music
            tracks, and monetize their work through NFTs{" "}
            <Button>
              Join the Beta <MdOutlineKeyboardArrowRight />
            </Button>
          </p>
        </div>
      </div>
    </section>
  );
}
