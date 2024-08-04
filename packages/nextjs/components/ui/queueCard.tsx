import React, { FC } from "react";
import Image from "next/image";
import deleteImg from "./../assets/delete.svg";
import queueTrackImg from "./../assets/queueTrack.svg";

interface QueueTrackProps {
  title: string;
  author: string;
  icon: any;
}
export const QueueCard: FC<QueueTrackProps> = ({ title = "", author = "", icon }) => {
  return (
    <div className="flex justify-between items-center p-4">
      <div className="flex items-center">
        {icon}
        <Image src={queueTrackImg} alt=" Random track" className="ml-4" />
        <div className="pl-4">
          <h6 className="text-[20px] text-bold">{title}</h6>
          <p className="mt-0 mb-0 text-[16px]">{author}</p>
        </div>
      </div>
      <div className="flex items-center">
        <span className="mr-10">04:32 </span>
        <Image src={deleteImg} alt="Delete cross" />
      </div>
    </div>
  );
};
