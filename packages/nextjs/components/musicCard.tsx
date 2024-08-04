import React, { FC } from "react";
import Image from "next/image";
import scrollIcon from "./../public/scroll_icon.svg";
import { Button } from "./ui/button";
import { CiPlay1 } from "react-icons/ci";

interface MusicCardProps {
  title: string;
  scroll: number;
  token: number;
  srcImg: any;
}
export const MusicCard: FC<MusicCardProps> = ({ title = " ", scroll = 0.3234, token = 16, srcImg }) => (
  <div className="music_card relative md:max-w-[400px]">
    <div className="pb-4">
      <Image src={srcImg} width={360} height={290} alt={title} />
      <h6 className="pt-4">{title}</h6>
    </div>
    <div className="flex items-center justify-between pb-6 max-w-[310px]">
      <div className="flex ">
        <Image src={scrollIcon} width={22.5} height={22} alt="Scroll logo" />
        <span className="ml-2">{scroll}</span>
      </div>
      <span>{token} tokens</span>
    </div>
    <div className="flex justify-between items-center pb-4 max-w-[330px]">
      <Button>
        <span className="mr-2">Play now</span> <CiPlay1 />
      </Button>
      <Button variant="secondary">BUY NFT</Button>
    </div>
  </div>
);
