const RightPanel = () => {
  return (
    <button className="rounded-full font-heading w-[274px] h-[274px] bg-white flex items-center justify-center cursor-pointer select-none text-[25px] mt-28  relative group">
      <div className="absolute h-[274px] w-[274px] rounded-full bg-[rgba(255,255,255,0.1)] group-hover:h-[374px] group-hover:w-[374px] transition-all "></div>
      <span className="flex items-center justify-center w-full h-full bg-white rounded-full z-[1] ">
        EXPLORE
      </span>
    </button>
  );
};

export default RightPanel;
