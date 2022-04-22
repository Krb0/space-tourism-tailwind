import { useState } from "react";
import CrewSchema from "../../../models/crew.schema";
const CrewList = ({
  activeCrew,
  crewHandler,
  data,
}: {
  activeCrew: CrewSchema;
  data: CrewSchema[];
  crewHandler: (crewMate: CrewSchema) => void;
}) => {
  const [allCrew] = useState<CrewSchema[]>(data);
  return (
    <div className="flex gap-3 mt-6">
      {allCrew.map((crewMate) => (
        <button
          key={crewMate.role}
          onClick={() => crewHandler(crewMate)}
          className={`${
            crewMate === activeCrew ? "bg-white" : "bg-[#363841]"
          } rounded-full w-[15px] h-[15px] `}
        />
      ))}
    </div>
  );
};

export default CrewList;
