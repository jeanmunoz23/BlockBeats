import React from "react";
import AudioInput from "../../components/audioInput";
import AsideMenuLinks from "~~/components/asideNav";
import PopularArtists from "~~/components/popularArtists";
import QueueTrack from "~~/components/queueTrack";
import SelectVocie from "~~/components/selectVocie";
import { InputSerach } from "~~/components/ui/inputSerach";

export default function Dashboard() {
  return (
    <div className="md:flex mt-[120px]">
      <nav className="md:min-w-[350px] pr-20 pl-10">
        <button className="bg-white text-black rounded-md w-full p-2 text-center mb-10">USER</button>
        <ul>
          <AsideMenuLinks />
        </ul>
      </nav>
      <div className="md:w-[100%]">
        <InputSerach />
        <SelectVocie />
        <div className="flex">
          <AudioInput />
          <div>
            <PopularArtists />
            <QueueTrack />
          </div>
        </div>
      </div>
    </div>
  );
}
