import DestinationSchema from "../../../models/destination.schema";
import Destinations from "./Destinations";
import ExtraInfo from "./ExtraInfo";

interface Props {
  allDestinations: DestinationSchema[];
  destination: DestinationSchema;
  setDestination: React.Dispatch<React.SetStateAction<DestinationSchema>>;
}
const PlanetInfo = ({
  allDestinations,
  destination,
  setDestination,
}: Props) => {
  return (
    <div className="flex flex-col gap-2 items-center xl:items-start">
      <Destinations
        allDestinations={allDestinations}
        destination={destination}
        setDestination={setDestination}
      />
      <h4 className="font-heading text-[100px] ">
        {destination.name.toUpperCase()}
      </h4>
      <p className="w-[95%] md:w-[500px] break-words font-[18px] text-violet ">
        {destination.description}{" "}
      </p>
      <hr className="border-[#383b4b9d] bg-[#383b4b9d] mt-8 border-[1px] " />
      <ExtraInfo destination={destination} />
    </div>
  );
};

export default PlanetInfo;
