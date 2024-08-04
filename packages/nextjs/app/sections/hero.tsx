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
          Redifinir la música. <br /> Ethical Music
        </h1>
        <p className="md:max-w-[670px] mb-16">
          Cualquiera, en cualquier lugar, puede contribuir a tu música. Compartí tus ritmos, melodías o letras. Nuestra
          plataforma rompe barreras y nivela el terreno de juego.{" "}
        </p>
        <div className="flex items-center">
          <div>
            <span className="mr-10 text-[13px]">Powered by</span>
            <Image src={scrollLogo} width={74} height={20} alt="Scroll logo" />
          </div>
          <Button>
            <span className="mr-2">Empezar</span> <MdOutlineKeyboardArrowRight size={24} />{" "}
          </Button>
        </div>
      </div>
    </section>
  );
}
