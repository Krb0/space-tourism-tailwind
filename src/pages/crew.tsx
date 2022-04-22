import { useState } from "react";
import data from "../data.json";
import CrewSchema from "../models/crew.schema";
import CrewImage from "../components/Crew/CrewImage";
import CrewInfo from "../components/Crew/CrewInfo";
import CrewList from "../components/Crew/CrewList";
const Crew = () => {
  const [activeCrew, setActiveCrew] = useState<CrewSchema>(data.crew[0]);

  const crewHandler = (crewMate: CrewSchema) => {
    setActiveCrew(crewMate);
  };

  return (
    <div className="flex flex-col text-white px-[4rem] xl:px-[18rem] flex-1 ">
      <h3 className="font-condensed tracking-[4.7px] font-[300] text-[19px] xl:text-[29px] mt-16 xl:mt-12 ">
        <span className="text-[#4E5058] font-[700] pr-8 font-condensed">
          02
        </span>
        MEET YOUR CREW
      </h3>
      <div className="flex gap-12 xl:gap-40 mt-2 xl:mt-14 flex-col-reverse xl:flex-row text-center xl:text-left items-center flex-1">
        <div className="flex flex-col gap-2 flex-1 items-center xl:items-start ">
          <CrewInfo activeCrew={activeCrew} />
          <CrewList
            data={data.crew}
            activeCrew={activeCrew}
            crewHandler={crewHandler}
          />
        </div>
        <CrewImage crewmate={activeCrew} />
      </div>
    </div>
  );
};

export default Crew;
