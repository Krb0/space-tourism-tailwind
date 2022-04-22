import CrewSchema from "../../../models/crew.schema";

const CrewInfo = ({ activeCrew }: { activeCrew: CrewSchema }) => {
  return (
    <div className="h-[280px] flex flex-col items-center xl:items-start">
      <h5 className="text-[32px] text-[rgba(151,151,151,0.85)] font-heading font-[300]">
        {activeCrew.role.toUpperCase()}
      </h5>
      <h4 className="text-[56px] font-heading ">
        {activeCrew.name.toUpperCase()}
      </h4>
      <p className="text-violet w-[400px] ">
        Douglas Gerald Hurley is an American engineer, former Marine Corps pilot
        and former NASA astronaut. He launched into space for the third time as
        commander of Crew Dragon Demo-2.
      </p>
    </div>
  );
};

export default CrewInfo;
