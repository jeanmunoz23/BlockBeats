import React, { FC } from "react";
import Image from "next/image";

interface MusicCardProps {
  src: string;
  width: number;
  height: number;
  alt: string;
  text: string;
  number: number;
}

export const MusicCard: FC<MusicCardProps> = ({
  src = "",
  width = 194,
  height = 194,
  alt = "",
  text = "",
  number = "",
}) => (
  <div className="music_card relative">
    <Image src={src} width={width} height={height} alt={alt} />
    <p>{text}</p>
    <p>{number}</p>
  </div>
);
