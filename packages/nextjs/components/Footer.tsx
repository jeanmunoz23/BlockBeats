import React from "react";
import BackToTopButton from "./backToTop";

/**
 * Site footer
 */
export const Footer = () => {
  return (
    <footer className="min-h-0 py-10 px-10 mb-11 lg:mb-0">
      <h5>Dale forma a tu conocimiento</h5>
      <div className="flex justify-between items-center w-full ">
        <ul className="md:flex md:text-[32px]">
          <li className="pr-8 border-r border-white">Fancaster</li>
          <li className="pr-8 md:pl-8 border-r border-white">Instagram</li>
          <li className="pr-8 md:pl-8 border-r border-white">Medium</li>
          <li className="pr-8 md:pl-8 border-r border-white md:border-none">Contacto</li>
        </ul>
        <BackToTopButton />
      </div>
      <div className="py-6">
        <span className="mr-8">Politíca de Privacidad</span>
        <span>Terminos y Condiciones</span>
      </div>
    </footer>
  );
};
