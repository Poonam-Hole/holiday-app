import { useContext } from "react";
import { PopularDestinationsContext } from "../context/PopularDestinationsContext";

const PopularDestinationCard = ({ destImg, place, price }) => {
  const popularDestinationsContext = useContext(PopularDestinationsContext);
  const popularDestinations = popularDestinationsContext.popularDestinations;
  return (
    <div className="self-stretch relative rounded-3xs h-[11.375rem] overflow-hidden text-left text-[1.25rem] text-white font-roboto">
      <img
        className="absolute h-full w-full top-[0rem] right-[0rem] bottom-[0rem] left-[0rem] max-w-full overflow-hidden max-h-full object-cover"
        alt=""
        src={destImg}
      />
      <div className="absolute w-[calc(100%_-_0.6px)] top-[0rem] right-[0.019rem] left-[0.018rem] flex flex-row items-start justify-start py-[0.5rem] px-[0.75rem] box-border">
        <b className="flex-1 relative tracking-[0.02em]">{place}</b>
        <div className="relative w-[5.681rem] h-[3.688rem] text-right text-[2.375rem] font-baloo-bhai">
          <div className="absolute top-[1.313rem] left-[0rem] leading-[2.375rem] inline-block w-[5.681rem]">
            {price}
          </div>
          <div className="absolute top-[0rem] left-[2.399rem] text-[1rem] tracking-[0.04em] uppercase font-roboto inline-block w-[3.281rem]">
            from
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopularDestinationCard;
