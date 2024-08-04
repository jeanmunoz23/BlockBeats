import React from "react";
import Image from "next/image";
import artist1 from "./../components/assets/artist1.svg";
import artist2 from "./../components/assets/artist2.svg";
import artist3 from "./../components/assets/artist3.svg";
import artist4 from "./../components/assets/artist4.svg";
import artist5 from "./../components/assets/artist5.svg";
import artist6 from "./../components/assets/artist6.svg";

const artist_data = [
  {
    src: artist1,
    name: "Sarah Melody",
  },
  {
    src: artist2,
    name: "Javier Cruz",
  },
  {
    src: artist3,
    name: "MAya Kapoor",
  },
  {
    src: artist4,
    name: "Andre Williams",
  },
  {
    src: artist5,
    name: "Alicia Harmon",
  },
  {
    src: artist6,
    name: "CArlos ROdriguez",
  },
];
export default function PopularArtists() {
  return (
    <div className=" pl-28 mt-20">
      <h5>Popular Artists with tracks</h5>
      <div className="grid grid-cols-3 mt-10">
        {artist_data.map(artist => {
          return (
            <div key={artist.name} className="mb-10">
              <Image src={artist.src} alt={artist.name} width={120} height={120} className="rounded-lg" />
              <p>{artist.name}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
