import React from "react";
import Image from "next/image";
import plusBtn from "./../public/plusBtn.svg";
import { Button } from "./ui/button";

export default function SelectVocie() {
  return (
    <div className="flex items-center py-20">
      <Image src={plusBtn} alt="Add button" />
      <div className="pl-10">
        <h2>Select a voice</h2>
        <div className="flex flex-wrap items-center md:self-end mt-10">
          <Button variant="active" size="medium">
            Music
          </Button>
          <Button size="medium">Podcasts</Button>
          <Button size="medium">Jazz</Button>
          <Button size="medium">Electronic</Button>
          <Button size="medium">Rock Classic</Button>
          <Button size="medium">Hip Hop</Button>
        </div>
      </div>
    </div>
  );
}
