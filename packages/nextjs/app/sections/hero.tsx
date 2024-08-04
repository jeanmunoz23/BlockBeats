import React from "react";
import Image from "next/image";
import scrollLogo from "./../../public/scroll_logo.svg";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Button } from "~~/components/ui/button";

export default function Hero() {
  return (
    <section id="hero" className="flex flex-col justify-center min-h-screen">
      <div>
        <h1>
          Revolutionize Music <br /> Creation with Blockchain
        </h1>
        <p className="md:max-w-[670px] mb-16">
          Music NFTs will continue to revolutionize the way that artists and fans create community together as we enter
          the upcoming year — undoubtedly changing the trajectory of countless budding music careers.{" "}
        </p>
        <div className="flex items-center">
          <div>
            <span className="mr-10 text-[13px]">Powered by</span>
            <Image src={scrollLogo} width={74} height={20} alt="Scroll logo" />
          </div>
          <Button>
            <span className="mr-2">Get started</span> <MdOutlineKeyboardArrowRight size={24} />{" "}
          </Button>
        </div>
      </div>
    </section>
  );
}
