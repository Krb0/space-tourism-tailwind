import DestinationSchema from "../../../models/destination.schema";

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
    <div className="flex flex-col gap-2">
      <div className="flex gap-8 text-center">
        {allDestinations.map((info) => (
          <span
            className={`cursor-pointer font-condensed tracking-[2.7px] text-[20px] pl-[2px] pb-2 ${
              info.name === destination.name
                ? "text-white border-b-2"
                : "text-violet border-b-2 border-transparent"
            }  font-[200] `}
            onClick={() => setDestination(info)}
          >
            {info.name.toUpperCase()}
          </span>
        ))}
      </div>
      <h4 className="font-heading text-[100px] ">
        {destination.name.toUpperCase()}
      </h4>
      <p className="w-[400px] break-words font-[18px] text-violet ">
        {destination.description}{" "}
      </p>
      <hr className="border-[#383b4b9d] bg-[#383b4b9d] mt-8 border-[1px] " />
      <div className="flex gap-20">
        <div className="flex flex-col gap-2 mt-7">
          <span className="text-[14px] text-violet tracking-[2.4px] font-[300] ">
            AVG. DISTANCE
          </span>
          <span className="font-heading text-[28px] ">
            {destination.distance.toUpperCase()}{" "}
          </span>
        </div>
        <div className="flex flex-col gap-2 mt-7">
          <span className="text-[14px] text-violet tracking-[2.4px] font-[300] ">
            EST. TRAVEL TIME
          </span>
          <span className="font-heading text-[28px] ">
            {destination.travel.toUpperCase()}{" "}
          </span>
        </div>
      </div>
    </div>
  );
};

export default PlanetInfo;
