import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import ResultCardsContainer from "../components/ResultCardsContainer";
import FooterSection from "../components/FooterSection";

const HotelsPage = () => {
  const navigate = useNavigate();

  const onFickleflightLogoContainerClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onWebScreenClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onExploreTextClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onSearchTextClick = useCallback(() => {
    navigate("/results-page");
  }, [navigate]);

  return (
    <div className="relative bg-white w-full overflow-hidden flex flex-col items-start justify-start text-left text-[2.625rem] text-white font-baloo-bhai">
      <header className="self-stretch bg-white h-[4.813rem] flex flex-row items-center justify-center py-[1.375rem] px-[5rem] box-border sticky w-full top-[0] [background:white] text-left text-[0.875rem] text-darkslategray-200 font-roboto lg:pl-[2.5rem] lg:pr-[2.5rem] lg:box-border md:pl-[1.5rem] md:pr-[1.5rem] md:box-border">
        <div className="flex flex-row items-center justify-between">
          <div
            className="relative w-[10.875rem] h-[2.063rem] overflow-hidden cursor-pointer"
            onClick={onFickleflightLogoContainerClick}
          >
            <div className="absolute h-[96.97%] w-[99.83%] top-[1.59%] right-[0.17%] bottom-[1.44%] left-[0%]">
              <img
                className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full cursor-pointer"
                alt=""
                src="/webscreen.svg"
                onClick={onWebScreenClick}
              />
            </div>
          </div>
          <div className="flex flex-row items-center justify-end gap-[2.25rem] sm:flex">
            <div className="flex flex-row items-center justify-end gap-[1.875rem] md:hidden">
              <div
                className="relative cursor-pointer"
                onClick={onExploreTextClick}
              >
                Explore
              </div>
              <div
                className="relative cursor-pointer"
                onClick={onSearchTextClick}
              >
                Search
              </div>
              <button className="cursor-pointer [border:none] p-0 bg-[transparent] relative text-[0.875rem] font-roboto text-cornflowerblue-200 text-left inline-block">
                Hotels
              </button>
              <button className="cursor-pointer [border:none] p-0 bg-[transparent] relative text-[0.875rem] font-roboto text-darkslategray-200 text-left inline-block">
                Offers
              </button>
            </div>
            <div className="flex flex-row items-center justify-center gap-[0.75rem]">
              <img
                className="relative w-[1.5rem] h-[1.5rem] overflow-hidden hidden md:flex"
                alt=""
                src="/notification.svg"
              />
              <img
                className="relative w-[1.5rem] h-[1.5rem] overflow-hidden"
                alt=""
                src="/notification1.svg"
              />
              <img
                className="rounded-19xl w-[2.25rem] h-[2.25rem] object-cover"
                alt=""
                src="/top_avatar@2x.png"
              />
            </div>
          </div>
        </div>
      </header>
      <div className="self-stretch flex flex-col items-start justify-start">
        <div className="self-stretch relative [background:linear-gradient(100.3deg,_#0b5ba8,_#299bd8)] h-[12.063rem] lg:py-[1.313rem] lg:pr-[2.5rem] lg:pl-[2.563rem] lg:box-border md:py-[1.313rem] md:px-[1.5rem] md:box-border">
          <img
            className="absolute h-[calc(100%_-_0.4px)] w-full top-[0.025rem] right-[0rem] bottom-[0rem] left-[0rem] max-w-full overflow-hidden max-h-full object-cover"
            alt=""
            src="/banner-background@2x.png"
          />
          <div className="absolute top-[3.125rem] left-[0rem] w-[90rem] flex flex-col items-start justify-start py-[0rem] px-[5rem] box-border gap-[0.5rem] lg:pl-[2.5rem] lg:pr-[2.5rem] lg:box-border md:pl-[1.5rem] md:pr-[1.5rem] md:box-border">
            <div className="relative tracking-[0.02em] leading-[3rem] inline-block w-[80rem] sm:text-[2rem]">
              Stays in Los Angeles
            </div>
            <div className="flex flex-row items-start justify-start gap-[0.5rem] text-center text-[1rem] font-roboto">
              <div className="rounded-8xl bg-white flex flex-row items-center justify-center py-[0.687rem] px-[1.312rem] text-cornflowerblue-200 border-[1px] border-solid border-white">
                <div className="relative tracking-[0.04em] capitalize font-medium sm:text-[0.875rem]">
                  Recommended
                </div>
              </div>
              <div className="rounded-8xl flex flex-row items-center justify-center py-[0.687rem] px-[1.312rem] border-[1px] border-solid border-white">
                <div className="relative tracking-[0.04em] capitalize font-medium sm:text-[0.875rem]">
                  Price
                </div>
              </div>
              <div className="rounded-8xl flex flex-row items-center justify-center py-[0.687rem] px-[1.312rem] border-[1px] border-solid border-white">
                <div className="relative tracking-[0.04em] capitalize font-medium sm:text-[0.875rem]">
                  Rating
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="self-stretch flex flex-col items-start justify-start py-[3.125rem] px-[5rem] gap-[1.25rem] text-[1.125rem] text-darkslategray-300 font-roboto lg:p-[2.5rem] lg:box-border md:py-[1.875rem] md:px-[1.5rem] md:box-border">
        <div className="self-stretch flex flex-row items-start justify-start">
          <div className="flex-1 relative tracking-[0.04em] uppercase font-medium">
            200+ results
          </div>
          <div className="relative w-[5.375rem] h-[1.5rem] text-[1rem]">
            <img
              className="absolute top-[0rem] left-[3.875rem] w-[1.5rem] h-[1.5rem] overflow-hidden"
              alt=""
              src="/filters.svg"
            />
            <div className="absolute top-[0.156rem] left-[0rem] tracking-[0.04em]">
              Filters
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-row items-start justify-start gap-[1.437rem]">
          <ResultCardsContainer />
          <iframe
            className="[border:none] self-stretch flex-1 relative md:hidden"
            src={`https://www.openstreetmap.org/export/embed.html?bbox=-118.56033325195314%2C33.837912419023645%2C-117.98355102539064%2C34.25948651450623&amp;layer=mapnik`}
          />
        </div>
      </div>
      <FooterSection
        subscribeSectionBackgroun="/newsletter-section-background@2x.png"
        logo="/logo.svg"
        socialIcons="/social-icons.svg"
      />
    </div>
  );
};

export default HotelsPage;
