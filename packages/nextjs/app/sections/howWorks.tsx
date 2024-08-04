import React from "react";
import Image from "next/image";
import chain from "./../../public/chain.svg";

export default function HowWorks() {
  return (
    <section>
      <div className="md:flex justtify-between">
        <div className="md:w-1/2">
          <h2>Experimenta el futuro de la música en la cadena de bloques.</h2>
          <p>
            Únete a EthicalMusic y descubre cómo la tecnología blockchain está revolucionando la creación musical.
            ¡Sé parte del cambio y experimenta una nueva era en la música digital!
          </p>
        </div>
        <div className="md:w-1/2 flex justify-center">
          <Image src={chain} width={523} height={358} alt="Chains" />
        </div>
      </div>
    </section>
  );
}
