import { useState } from "react";
import Info from "../data.json";
import DestinationSchema from "../models/destination.schema";
import PlanetInfo from "../components/Destination/PlanetInfo";
import PlanetImage from "../components/Destination/PlanetImage";

const Destination = () => {
  const [allDestinations] = useState<DestinationSchema[]>(Info.destinations);
  const [destination, setDestination] = useState<DestinationSchema>(
    Info.destinations[0]
  );

  return (
    <div className="flex flex-col text-white px-[4rem] xl:px-[18rem] ">
      <h3 className="font-condensed tracking-[4.7px] font-[300] text-[19px] xl:text-[29px] mt-16 xl:mt-12 ">
        <span className="text-[#4E5058] font-[700] pr-8 font-condensed">
          01
        </span>
        PICK YOUR DESTINATION
      </h3>
      <div className="flex gap-12 xl:gap-40 justify-center mt-2 xl:mt-14 flex-col xl:flex-row items-center text-center xl:text-left">
        <PlanetImage destination={destination} />
        <PlanetInfo
          allDestinations={allDestinations}
          destination={destination}
          setDestination={setDestination}
        />
      </div>
    </div>
  );
};

export default Destination;
