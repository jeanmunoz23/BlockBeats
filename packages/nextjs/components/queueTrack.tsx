import React from "react";
import { QueueCard } from "./ui/queueCard";
import { IoIosHeartEmpty } from "react-icons/io";

const track_data = [
  {
    title: "Eternal Echoes",
    author: "Sarah Melody",
    icon: <IoIosHeartEmpty fill="red" size={24} />,
  },
  {
    title: "Midnight Reverie",
    author: "Javier Cruz",
    icon: <IoIosHeartEmpty size={24} />,
  },
  {
    title: "Harmonic Horizon",
    author: "Maya Kapoo",
    icon: <IoIosHeartEmpty size={24} />,
  },
  {
    title: "Urban Pulse",
    author: "Andre Williams",
    icon: <IoIosHeartEmpty size={24} />,
  },
  {
    title: "Soulful Serenade",
    author: "Andre Williams",
    icon: <IoIosHeartEmpty size={24} />,
  },
];
export default function QueueTrack() {
  return (
    <div className="pl-28">
      <h5>
        Next in <span className="text-bold">BlockBeats</span>
      </h5>
      <div className="max-h-[390px] overflow-hidden">
        {track_data.map(track => {
          return (
            <div key={track.title}>
              <QueueCard title={track.title} author={track.author} icon={track.icon} />
            </div>
          );
        })}
      </div>
    </div>
  );
}
