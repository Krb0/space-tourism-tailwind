import { Link } from "react-router-dom";

const RightPanel = () => {
  return (
    <Link to="destination">
      <button className="rounded-full font-heading w-[200px] xl:w-[274px] h-[200px] xl:h-[274px] bg-white flex items-center justify-center cursor-pointer select-none text-[25px] mt-28  relative group">
        <div className="absolute xl:h-[274px] xl:w-[274px] h-[200px] w-[200px] rounded-full bg-[rgba(255,255,255,0.1)] xl:group-hover:h-[374px] xl:group-hover:w-[374px] group-hover:h-[260px] group-hover:w-[260px] transition-all " />
        <span className="flex items-center justify-center w-full h-full bg-white rounded-full z-[1] ">
          EXPLORE
        </span>
      </button>
    </Link>
  );
};

export default RightPanel;
