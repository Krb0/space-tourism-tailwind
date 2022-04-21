import DestinationSchema from "../../../../models/destination.schema";

interface Props {
  allDestinations: DestinationSchema[];
  destination: DestinationSchema;
  setDestination: React.Dispatch<React.SetStateAction<DestinationSchema>>;
}

const Destinations = ({
  allDestinations,
  destination,
  setDestination,
}: Props) => {
  return (
    <div className="flex gap-8 text-center ">
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
  );
};

export default Destinations;
