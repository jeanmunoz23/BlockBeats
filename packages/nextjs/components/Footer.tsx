import React from "react";
import BackToTopButton from "./backToTop";

/**
 * Site footer
 */
export const Footer = () => {
  return (
    <footer className="min-h-0 py-10 px-10 mb-11 lg:mb-0">
      <h5>Shape the NFT Music</h5>
      <div className="flex justify-between items-center w-full z-10 ">
        <ul className="flex text-[32px]">
          <li className="pr-8 border-r border-white">Facebook</li>
          <li className="pr-8 pl-8 border-r border-white">Twitter</li>
          <li className="pr-8 pl-8 border-r border-white">Medium</li>
          <li className="pl-8">Contact</li>
        </ul>
        <BackToTopButton />
      </div>
      <div className="py-6">
        <span className="mr-8">Privacy Policy</span>
        <span>Terms and Conditions</span>
      </div>
    </footer>
  );
};
