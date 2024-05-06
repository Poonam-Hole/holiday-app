const DestinationsTitles = () => {
  return (
    <div className="self-stretch flex flex-row items-center justify-start text-left text-[1.125rem] text-cornflowerblue-300 font-roboto sm:flex-col sm:self-start">
      <div className="flex flex-col items-start justify-start gap-[0.375rem]">
        <b className="self-stretch relative tracking-[0.04em] uppercase">
          Plan your next trip
        </b>
        <b className="self-stretch relative text-[1.875rem] tracking-[0.04em] capitalize text-darkslategray-300 sm:text-[1.375rem]">
          Most Popular Destinations
        </b>
      </div>
      <button className="cursor-pointer [border:none] p-0 bg-white rounded-12xl w-[14.463rem] flex flex-row items-start justify-start gap-[0.625rem] md:hidden">
        <div className="relative text-[1.125rem] tracking-[0.04em] font-medium font-roboto text-cornflowerblue-300 text-right inline-block w-[12.331rem] shrink-0">
          View all destinations
        </div>
        <img
          className="relative w-[1.5rem] h-[1.5rem] overflow-hidden"
          alt=""
          src="/arrowright.svg"
        />
      </button>
    </div>
  );
};

export default DestinationsTitles;
