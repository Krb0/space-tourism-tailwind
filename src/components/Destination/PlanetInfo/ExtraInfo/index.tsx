import DestinationSchema from "../../../../models/destination.schema";

const ExtraInfo = ({ destination }: { destination: DestinationSchema }) => {
  return (
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
  );
};

export default ExtraInfo;
