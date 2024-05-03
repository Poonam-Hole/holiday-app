import { memo, useState, useCallback } from "react";
import MatterhornPopup from "./MatterhornPopup";
import PortalPopup from "./PortalPopup";

const ResultsCard = memo(
  ({
    resultsImage,
    kingBedStandard,
    holidayInnExpre,
    video,
    price,
    ratings,
    reviews,
  }) => {
    const [isMatterhornPopupOpen, setMatterhornPopupOpen] = useState(false);

    const openMatterhornPopup = useCallback(() => {
      setMatterhornPopupOpen(true);
    }, []);

    const closeMatterhornPopup = useCallback(() => {
      setMatterhornPopupOpen(false);
    }, []);

    return (
      <>
        <div className="self-stretch rounded-3xs bg-cornflowerblue-400 flex flex-row items-start justify-start gap-[1rem] text-left text-[1rem] text-gray-100 font-roboto sm:flex-col">
          <img
            className="relative rounded-tl-3xs rounded-tr-none rounded-br-none rounded-bl-3xs w-[16.25rem] h-[13.75rem] object-cover sm:w-[100%!important] sm:!rounded-[10px]"
            alt=""
            src={resultsImage}
          />
          <div className="flex flex-col items-start justify-start py-[0.937rem] pr-[0.75rem] pl-[0rem] gap-[1.937rem] sm:w-full sm:p-[0.938rem] sm:box-border">
            <div className="self-stretch flex flex-row items-start justify-start">
              <div className="flex flex-col items-start justify-start gap-[0.375rem]">
                <div className="relative tracking-[0.02em] inline-block w-[9.181rem]">
                  {kingBedStandard}
                </div>
                <b className="relative text-[1.375rem] tracking-[0.04em] capitalize inline-block text-darkslategray-300 w-[14.556rem]">
                  {holidayInnExpre}
                </b>
                <div className="relative w-[10.869rem] h-[1.188rem] text-cornflowerblue-200">
                  <div className="absolute top-[0rem] left-[3.498rem] tracking-[0.04em] inline-block w-[7.369rem]">
                    {reviews}
                  </div>
                  <div className="absolute top-[0rem] left-[0rem] w-[2.875rem] h-[1.188rem] text-darkslategray-300">
                    <div className="absolute top-[0rem] left-[1.374rem] tracking-[0.04em] font-medium inline-block w-[1.5rem]">
                      {ratings}
                    </div>
                    <img
                      className="absolute h-[84.21%] w-[34.78%] top-[0%] right-[65.22%] bottom-[15.79%] left-[0%] max-w-full overflow-hidden max-h-full"
                      alt=""
                      src="/vector.svg"
                    />
                  </div>
                </div>
              </div>
              <img
                className="relative w-[1.5rem] h-[1.5rem] overflow-hidden cursor-pointer"
                alt=""
                src={video}
                onClick={openMatterhornPopup}
              />
            </div>
            <div className="relative w-[10.281rem] h-[5.225rem] text-[1.375rem] text-darkslategray-300">
              <div className="absolute top-[0rem] left-[0rem] w-[7rem] h-[1.625rem]">
                <b className="absolute top-[0rem] left-[0rem] tracking-[0.02em] capitalize">
                  {price}
                </b>
                <div className="absolute top-[0.5rem] left-[4.563rem] text-[0.875rem] tracking-[0.02em]">
                  /night
                </div>
              </div>
              <button className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[2.349rem] left-[0.031rem] w-[10.25rem] h-[2.875rem]">
                <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-md bg-cornflowerblue-200" />
                <div className="absolute top-[calc(50%_-_10.5px)] left-[calc(50%_-_54.5px)] text-[1.125rem] tracking-[0.04em] font-medium font-roboto text-white text-center">
                  View Details
                </div>
              </button>
            </div>
          </div>
        </div>
        {isMatterhornPopupOpen && (
          <PortalPopup
            overlayColor="rgba(0, 0, 0, 0.3)"
            placement="Centered"
            onOutsideClick={closeMatterhornPopup}
          >
            <MatterhornPopup onClose={closeMatterhornPopup} />
          </PortalPopup>
        )}
      </>
    );
  }
);

export default ResultsCard;
