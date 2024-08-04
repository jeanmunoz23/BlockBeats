import React from "react";
import Image from "next/image";
import Link from "next/link";
import musicTrack from "./../public/musicTrack.svg";
import scroll from "./../public/scroll.svg";
import { CiSettings } from "react-icons/ci";
import { FiLock } from "react-icons/fi";
import { FiMinus } from "react-icons/fi";
import { GoPlus } from "react-icons/go";

export default function AudioInput() {
  return (
    <div className="md:w-[60%] mt-20">
      <h6>Input</h6>
      <div className="flex mt-4">
        <Link href="" className="text-white border-white border-b-2 mr-6 pb-4">
          AUDIO INPUT
        </Link>
        <Link href="" className="flex items-center text-stone-400 mr-6 pb-2">
          <span className="mr-2">SONG INPUT</span> <FiLock />
        </Link>
        <Link href="" className="flex items-center text-stone-400 mr-6 pb-2">
          <span className="mr-2">TECH-TO-SPEECH </span>
          <FiLock />
        </Link>
      </div>
      <Image src={musicTrack} alt="Music Track" className="mt-10" />
      <button className="w-full flex items-center justify-center border-2 border-stone-600 rounded-lg mt-6 p-4">
        <GoPlus />
        <span className="mr-2">ADD FILE</span>
      </button>
      <div className="flex justify-between items-center mt-10">
        <div>
          <h6>Pitch Shift (Semitones)</h6>
          <p className="text-stone-500">Adjust the pitch of your input audio.</p>
        </div>
        <div className="flex items-center text-[24px]">
          <FiMinus /> <span className="ml-2 mr-2">0</span> <GoPlus />
        </div>
      </div>
      <div className="flex justify-between items-center mt-10">
        <div className="flex items-center">
          <CiSettings size={24} /> <span className="ml-2">SETTINGS</span>
        </div>
        <div className="flex items-center">
          <button className="p-2 rounded-lg opacity-60 bg-stone-400 mr-4">SAVE PRESET</button>
          <GoPlus size={35} />
        </div>
      </div>
      <div className="flex justify-between items-center mt-10">
        <button className="border-2 border-stone-600 rounded-lg mt-6 py-4 px-8">RESET</button>
        <button className="bg-white text-black rounded-lg mt-6 py-4 px-8">RESET</button>
      </div>
      <div className="mt-10">
        <h6>Output</h6>
      </div>
      <div className="flex justify center items-center mt-20">
        <span className="mr-4 text-stone-300">Your Contract</span>{" "}
        <Image src={scroll} alt="Scroll Logo" width={46} height={46} />
      </div>
    </div>
  );
}
