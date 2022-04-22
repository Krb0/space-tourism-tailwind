import { useEffect, useState } from "react";
import CrewSchema from "../../../models/crew.schema";
import { getCrewImage } from "./utils/getCrewImage";

const CrewImage = ({ crewmate }: { crewmate: CrewSchema }) => {
  const [Image, setImage] = useState<any>(getCrewImage("Commander"));
  useEffect(() => {
    setImage(getCrewImage(crewmate.role));
  }, [crewmate]);
  return (
    <img
      src={Image}
      alt="crew"
      className="max-w-screen 2xl:max-w-[750px] xl:max-w-[400px] self-center xl:self-end "
    />
  );
};

export default CrewImage;
