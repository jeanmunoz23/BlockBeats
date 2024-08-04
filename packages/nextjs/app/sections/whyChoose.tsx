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
        <h5 className="font-bold">¿Por qué Elegir Nuestra Plataforma?</h5>
        <h5>
          Diseñada para cada persona <br /> music ecosystem
        </h5>
      </div>
      <div className="grid md:grid-cols-2 gap-20 px-20">
        <WhyChooseCard title="Proceso de Creación Colaborativa">
          <p className="subP">
            Músico 1: Crea una pista musical en tu software de producción y guárdala en un formato específico. Conéctate
            a la plataforma y sube la pista a tu perfil, haciéndola pública para que otros puedan escucharla y
            colaborar.
          </p>
          <p className="subP">
            Propuesta de Colaboración Músico 2: Escucha las pistas disponibles en la plataforma y selecciona una que te
            guste. Solicita colaborar con la pista elegida y crea una nueva pista complementaria en tu software. Sube tu
            pista a la plataforma.
          </p>
          <div className="flex flex-wrap justify-around mt-10">
            <Image src={popMusic} alt="Pop music record" width={130} height={130} />
            <Image src={realTime} alt="Colaboración en tiempo real" width={130} height={130} />
            <Image src={popMusic2} alt="Pop music record" width={130} height={130} />
          </div>
        </WhyChooseCard>
        <WhyChooseCard title="Descubre Voces Únicas, Empodera a los Artistas">
          <p className="subP">Beneficios para los Oyentes</p>
          <p className="subP">
            Acceso a Música Exclusiva: Los oyentes pueden descubrir y disfrutar de pistas únicas que no están
            disponibles en otras plataformas.
          </p>
          <p className="subP">
            Participación Comunitaria: Los usuarios pueden ser parte de una comunidad activa, votar en proyectos y
            participar en el proceso creativo.
          </p>
          <p className="subP">
            Inversiones Musicales: Los fanáticos de la música pueden comprar NFTs de pistas y beneficiarse de futuras
            ventas y regalías.
          </p>
          <div className="flex flex-wrap justify-evenly mt-10">
            <Image src={trackExplore} alt="Pop music record" width={130} height={130} />
            <Image src={reputationSystem} alt="Real time colaboration" width={130} height={130} />
          </div>
        </WhyChooseCard>
        <div className="smart-contract max-w-[1500px] m-auto p-10 rounded-lg">
          <h3 className="text-[28px] leading-1">Seguridad y Transparencia:</h3>
          <p>Aprovecha el poder de los contratos inteligentes para transacciones seguras y transparentes.</p>
          <div className="md:flex mt-20">
            <Image src={scroll} alt="Scroll" width={46} height={46} />
          </div>
        </div>
      </div>
    </section>
  );
}
