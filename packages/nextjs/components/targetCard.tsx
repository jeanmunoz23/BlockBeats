import React, { FC } from "react";
import Image from "next/image";
import chainImg from "./../public/chain.svg";

interface TargetCardProps {
  text: string;
  counter_text: string
}
export const TargetCard: FC<TargetCardProps> = ({ text = "", counter_text="" }) => (
  <div className="target_card relative">
    <div className="flex">
    <h4>{counter_text}</h4>
    <Image src={chainImg} width={114} height={104} alt="futurist chain" />
    </div>
    <p>{text}</p>
  </div>
);
