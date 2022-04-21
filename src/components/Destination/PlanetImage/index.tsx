import { useEffect, useState } from "react";
import DestinationSchema from "../../../models/destination.schema";
import { getDestinationImage } from "./utils/getDestinationImage";

const PlanetImage = ({ destination }: { destination: DestinationSchema }) => {
  const [Image, setImage] = useState<any>(getDestinationImage("Moon"));
  useEffect(() => {
    setImage(getDestinationImage(destination.name));
  }, [destination]);
  return (
    <img
      src={Image}
      alt="planet"
      className="mt-10 max-h-[284px] max-w-[284px] xl:max-h-full xl:max-w-full "
    />
  );
};

export default PlanetImage;
