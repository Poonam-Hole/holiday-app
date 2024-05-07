import { useContext } from "react";
import { RecommendedHolidaysContext } from "../context/RecommendedHolidaysContext";

const RecommendedCard = ({
  placeName,
  showHolidayDetails = true,
  img,
  d3N,
  prop,
}) => {
  const recommendedHolidaysContext = useContext(RecommendedHolidaysContext);
  const recommendedHolidays = recommendedHolidaysContext.recommendedHolidays;
  return (
    <button className="cursor-pointer [border:none] py-[0rem] px-[1rem] bg-[transparent] flex-1 flex flex-col items-center justify-start box-border min-w-[14.375rem] w-3/12 md:w-6/12 md:mb-[2rem] sm:min-w-[15.625rem] sm:w-full sm:mb-[2rem]">
      <img
        className="self-stretch relative rounded-t-3xs rounded-b-none max-w-full overflow-hidden h-[15.125rem] object-cover"
        alt=""
        src={img}
      />
      {showHolidayDetails && (
        <div className="self-stretch rounded-t-none rounded-b-3xs bg-white flex flex-col items-center justify-center py-[1.25rem] px-[1rem] border-[1px] border-solid border-whitesmoke">
          <div className="self-stretch flex flex-row items-center justify-start">
            <div className="flex flex-col items-start justify-start gap-[0.187rem]">
              <div className="self-stretch relative text-[1.25rem] tracking-[0.02em] font-medium font-roboto text-darkslategray-200 text-left">
                {placeName}
              </div>
              <div className="self-stretch relative text-[1rem] tracking-[0.02em] font-roboto text-darkgray text-left">
                {d3N}
              </div>
            </div>
            <div className="relative text-[2rem] leading-[2.125rem] font-baloo-bhai text-cornflowerblue-200 text-right">
              {prop}
            </div>
          </div>
        </div>
      )}
    </button>
  );
};

export default RecommendedCard;
