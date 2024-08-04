import React from "react";
import AsideMenuLinks from "~~/components/asideNav";
import SelectVocie from "~~/components/selectVocie";
import { InputSerach } from "~~/components/ui/inputSerach";

export default function Dashboard() {
  return (
    <div className="md:flex mt-[120px]">
      <nav className="md:max-w-[250px] pr-20">
        <button className="bg-white text-black rounded-md w-full p-2 text-center mb-10">USER</button>
        <ul>
          <AsideMenuLinks />
        </ul>
      </nav>
      <div className="md:w-[80%]">
        <InputSerach />
        <SelectVocie />
      </div>
    </div>
  );
}
