"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import iconTools from "./../public/iconTools.svg";
import { BsCurrencyDollar } from "react-icons/bs";
import { IoMicOutline } from "react-icons/io5";
import { MdHistory } from "react-icons/md";
import { MdKeyboardArrowDown } from "react-icons/md";
import { RiVoiceprintLine } from "react-icons/ri";

type AsideMenuLink = {
  label: string;
  href: string;
  icon?: React.ReactNode;
};
export const menuLinks: AsideMenuLink[] = [
  {
    label: "Convert",
    href: "",
    icon: <IoMicOutline size={20} />,
  },
  {
    label: "Voices",
    href: "",
    icon: <RiVoiceprintLine size={20} />,
  },
  {
    label: "History",
    href: "",
    icon: <MdHistory size={20} />,
  },
  {
    label: "Earn",
    href: "",
    icon: <BsCurrencyDollar size={20} />,
  },
];

const AsideMenuLinks = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const transClass = isOpen ? "flex" : "hidden";
  const toggle = () => {
    setIsOpen(old => !old);
  };
  return (
    <>
      {menuLinks.map(({ label, href, icon }) => {
        return (
          <>
            <li key={href}>
              <Link href={href} passHref className="flex items-center mb-4">
                {icon}
                <span className="ml-4">{label}</span>
              </Link>
            </li>
          </>
        );
      })}
      <li>
        <Link href="" onClick={toggle} className="flex items-center justify-between">
          <div className="flex items-center">
            <Image src={iconTools} width={20} height={20} alt="Icon tool" />
            <span className="ml-4">Tools</span>
          </div>
          <MdKeyboardArrowDown />
        </Link>
        <li className={` flex flex-col py-4 rounded-md ${transClass}`}>
          <Link className="hover:bg-zinc-300 hover:text-zinc-500 px-4 py-1" href="">
            Vocal remover
          </Link>
          <Link className="hover:bg-zinc-300 hover:text-zinc-500 px-4 py-1" href="">
            AI mastering
          </Link>
          <Link className="hover:bg-zinc-300 hover:text-zinc-500 px-4 py-1" href="">
            Stem splitter
          </Link>
        </li>
      </li>
      <li className="flex flex-col py-4">
        <Link className="hover:bg-zinc-300 hover:text-zinc-500 px-4 py-1" href="">
          Plans & Pricing
        </Link>
        <Link className="hover:bg-zinc-300 hover:text-zinc-500 px-4 py-1" href="">
          API
        </Link>
        <Link className="hover:bg-zinc-300 hover:text-zinc-500 px-4 py-1" href="">
          Affiliate
        </Link>
        <Link className="hover:bg-zinc-300 hover:text-zinc-500 px-4 py-1" href="">
          Learn
        </Link>
      </li>
    </>
  );
};
export default AsideMenuLinks;
