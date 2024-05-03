import { useState, useCallback } from "react";
import { TextField, InputAdornment, Icon, IconButton } from "@mui/material";
import MatterhornPopup from "../MatterhornPopup";
import PortalPopup from "../PortalPopup";
import { useNavigate } from "react-router-dom";
import ResultsBox from "./ResultsBox";

const HotelsPage = () => {
  const [isMatterhornPopupOpen, setMatterhornPopupOpen] = useState(false);
  const [isMatterhornPopup1Open, setMatterhornPopup1Open] = useState(false);
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

  const openMatterhornPopup = useCallback(() => {
    setMatterhornPopupOpen(true);
  }, []);

  const closeMatterhornPopup = useCallback(() => {
    setMatterhornPopupOpen(false);
  }, []);

  const openMatterhornPopup1 = useCallback(() => {
    setMatterhornPopup1Open(true);
  }, []);

  const closeMatterhornPopup1 = useCallback(() => {
    setMatterhornPopup1Open(false);
  }, []);

  return (
    <>
      <div className="relative bg-white w-full overflow-hidden flex flex-col items-start justify-start text-left text-[1.125rem] text-white font-roboto">
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
        <div className="self-stretch flex flex-col items-start justify-start text-[2.625rem] font-baloo-bhai">
          <div className="self-stretch relative [background:linear-gradient(100.3deg,_#0b5ba8,_#299bd8)] h-[12.063rem] lg:py-[1.313rem] lg:pr-[2.5rem] lg:pl-[2.563rem] lg:box-border md:py-[1.313rem] md:px-[1.5rem] md:box-border">
            <img
              className="absolute h-[calc(100%_-_0.4px)] w-full top-[0.025rem] right-[0rem] bottom-[0rem] left-[0rem] max-w-full overflow-hidden max-h-full object-cover"
              alt=""
              src="/banner-background1@2x.png"
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
        <div className="self-stretch flex flex-col items-start justify-start py-[3.125rem] px-[5rem] gap-[1.25rem] text-darkslategray-300 lg:p-[2.5rem] lg:box-border md:py-[1.875rem] md:px-[1.5rem] md:box-border">
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
          <div className="self-stretch flex flex-row items-start justify-start gap-[1.437rem] text-[1rem] text-gray-100">
            <div className="w-[35.119rem] flex flex-col items-start justify-start gap-[0.75rem] md:w-[100%!important] sm:gap-[1.25rem]">
              <div className="self-stretch rounded-3xs bg-cornflowerblue-400 flex flex-row items-start justify-start gap-[1rem] sm:flex-col">
                <img
                  className="relative rounded-tl-3xs rounded-tr-none rounded-br-none rounded-bl-3xs w-[16.25rem] h-[13.75rem] object-cover sm:w-[100%!important] sm:!rounded-[10px]"
                  alt=""
                  src="/results-image@2x.png"
                />
                <div className="flex flex-col items-start justify-start py-[0.937rem] pr-[0.75rem] pl-[0rem] gap-[1.937rem] sm:w-full sm:p-[0.938rem] sm:box-border">
                  <div className="self-stretch flex flex-row items-start justify-start">
                    <div className="flex flex-col items-start justify-start gap-[0.375rem]">
                      <div className="relative tracking-[0.02em] inline-block w-[9.181rem]">
                        1 king bed standard
                      </div>
                      <b className="relative text-[1.375rem] tracking-[0.04em] capitalize inline-block text-darkslategray-300 w-[14.556rem]">
                        Holiday Inn Expre...
                      </b>
                      <div className="relative w-[10.869rem] h-[1.188rem] text-cornflowerblue-200">
                        <div className="absolute top-[0rem] left-[3.498rem] tracking-[0.04em] inline-block w-[7.369rem]">
                          (1,136 reviews)
                        </div>
                        <div className="absolute top-[0rem] left-[0rem] w-[2.875rem] h-[1.188rem] text-darkslategray-300">
                          <div className="absolute top-[0rem] left-[1.374rem] tracking-[0.04em] font-medium inline-block w-[1.5rem]">
                            4.7
                          </div>
                          <img
                            className="absolute h-[84.21%] w-[34.78%] top-[0%] right-[65.22%] bottom-[15.79%] left-[0%] max-w-full overflow-hidden max-h-full"
                            alt=""
                            src="/vector4.svg"
                          />
                        </div>
                      </div>
                    </div>
                    <img
                      className="relative w-[1.5rem] h-[1.5rem] overflow-hidden cursor-pointer"
                      alt=""
                      src="/video2.svg"
                      onClick={openMatterhornPopup}
                    />
                  </div>
                  <div className="relative w-[10.281rem] h-[5.225rem] text-[1.375rem] text-darkslategray-300">
                    <div className="absolute top-[0rem] left-[0rem] w-[7rem] h-[1.625rem]">
                      <b className="absolute top-[0rem] left-[0rem] tracking-[0.02em] capitalize">
                        $S 286
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
              <ResultsBox
                hotelImageUrl="/results-image1@2x.png"
                hotelName="Freehand Los Angeles"
                roomType="Bed in Quad"
                reviewCount="(1,941 reviews)"
                rating="4.2"
                price="/vector5.svg"
                discountPrice="$S 198"
              />
              <ResultsBox
                hotelImageUrl="/results-image2@2x.png"
                hotelName="The Westin Bonavent..."
                roomType="1 King, City view"
                reviewCount="(1,002 reviews)"
                rating="4.1"
                price="/vector6.svg"
                discountPrice="$S 289"
              />
              <div className="self-stretch rounded-3xs bg-cornflowerblue-400 flex flex-row items-start justify-start gap-[1rem] sm:flex-col">
                <img
                  className="relative rounded-tl-3xs rounded-tr-none rounded-br-none rounded-bl-3xs w-[16.25rem] h-[13.75rem] object-cover sm:w-[100%!important] sm:!rounded-[10px]"
                  alt=""
                  src="/results-image3@2x.png"
                />
                <div className="flex flex-col items-start justify-start py-[0.937rem] pr-[0.75rem] pl-[0rem] gap-[1.937rem] sm:w-full sm:p-[0.938rem] sm:box-border">
                  <div className="self-stretch flex flex-row items-start justify-start">
                    <div className="flex flex-col items-start justify-start gap-[0.375rem]">
                      <div className="relative tracking-[0.02em] inline-block w-[9.181rem]">
                        Deluxe King
                      </div>
                      <b className="relative text-[1.375rem] tracking-[0.04em] capitalize inline-block text-darkslategray-300 w-[14.556rem]">
                        The Ritz-Carlton, L...
                      </b>
                      <div className="relative w-[10.869rem] h-[1.188rem] text-cornflowerblue-200">
                        <div className="absolute top-[0rem] left-[3.498rem] tracking-[0.04em] inline-block w-[7.369rem]">
                          (1,136 reviews)
                        </div>
                        <div className="absolute top-[0rem] left-[0rem] w-[2.875rem] h-[1.188rem] text-darkslategray-300">
                          <div className="absolute top-[0rem] left-[1.374rem] tracking-[0.04em] font-medium inline-block w-[1.5rem]">
                            4.7
                          </div>
                          <img
                            className="absolute h-[84.21%] w-[34.78%] top-[0%] right-[65.22%] bottom-[15.79%] left-[0%] max-w-full overflow-hidden max-h-full"
                            alt=""
                            src="/vector7.svg"
                          />
                        </div>
                      </div>
                    </div>
                    <img
                      className="relative w-[1.5rem] h-[1.5rem] overflow-hidden cursor-pointer"
                      alt=""
                      src="/feature-video.svg"
                      onClick={openMatterhornPopup1}
                    />
                  </div>
                  <div className="relative w-[10.281rem] h-[5.225rem] text-[1.375rem] text-darkslategray-300">
                    <div className="absolute top-[0rem] left-[0rem] w-[7rem] h-[1.625rem]">
                      <b className="absolute top-[0rem] left-[0rem] tracking-[0.02em] capitalize">
                        $S 286
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
              <iframe
                className="[border:none] self-stretch relative h-[37.5rem] hidden md:flex md:max-w-[62.5rem]"
                src={`https://www.openstreetmap.org/export/embed.html?bbox=-118.56033325195314%2C33.837912419023645%2C-117.98355102539064%2C34.25948651450623&amp;layer=mapnik`}
              />
            </div>
            <iframe
              className="[border:none] self-stretch flex-1 relative md:hidden"
              src={`https://www.openstreetmap.org/export/embed.html?bbox=-118.56033325195314%2C33.837912419023645%2C-117.98355102539064%2C34.25948651450623&amp;layer=mapnik`}
            />
          </div>
        </div>
        <div className="self-stretch flex flex-col items-start justify-start text-center text-cornflowerblue-300">
          <div className="self-stretch relative bg-aliceblue h-[33.063rem] overflow-hidden">
            <img
              className="absolute w-full top-[0rem] right-[0rem] left-[0rem] max-w-full overflow-hidden h-[33.125rem] object-cover"
              alt=""
              src="/newsletter-section-background1@2x.png"
            />
            <div className="[position:relative!important] top-[3.25rem] left-[auto!important] w-[34.313rem] flex flex-col items-center justify-start p-[1.25rem] box-border gap-[1.875rem] ml-[auto] mr-[auto] md:py-[1.5rem] md:px-[0rem] md:box-border sm:pl-[1.5rem] sm:pr-[1.5rem] sm:box-border sm:ml-[auto] sm:mr-[auto] sm:[position:relative!important] sm:left-[auto!important] sm:w-full">
              <div className="self-stretch flex flex-col items-center justify-start gap-[0.437rem]">
                <b className="self-stretch relative tracking-[0.04em] uppercase">
                  subscribe to our newsletter
                </b>
                <b className="self-stretch relative text-[1.875rem] text-darkslategray-100">
                  Get weekly updates
                </b>
              </div>
              <div className="self-stretch shadow-[0px_0px_24px_rgba(0,_0,_0,_0.03)] rounded-xl bg-white flex flex-col items-start justify-start py-[1.75rem] px-[1.875rem] gap-[1.062rem] text-left text-slategray border-[1px] border-solid border-whitesmoke">
                <div className="self-stretch flex flex-col items-start justify-start">
                  <div className="self-stretch relative leading-[2.125rem]">
                    Fill in your details to join the party!
                  </div>
                </div>
                <div className="self-stretch flex flex-col items-start justify-start gap-[0.625rem]">
                  <div className="self-stretch flex flex-col items-start justify-start">
                    <TextField
                      className="[border:none] bg-[transparent] self-stretch font-roboto text-[1rem] text-gray-200"
                      color="primary"
                      label="Your name"
                      size="medium"
                      variant="outlined"
                      type="text"
                      sx={{ "& .MuiInputBase-root": { height: "56px" } }}
                    />
                  </div>
                  <div className="self-stretch flex flex-col items-start justify-start">
                    <TextField
                      className="[border:none] bg-[transparent] self-stretch font-roboto text-[1rem] text-gray-200"
                      color="primary"
                      label="Email address"
                      size="medium"
                      variant="outlined"
                      type="text"
                      sx={{ "& .MuiInputBase-root": { height: "56px" } }}
                    />
                  </div>
                </div>
                <button className="cursor-pointer [border:none] p-0 bg-orange-200 rounded w-[10.25rem] h-[3.5rem] overflow-hidden flex flex-col items-center justify-center hover:bg-darkorange sm:w-full sm:hover:bg-orange-200">
                  <div className="overflow-hidden flex flex-col items-start justify-start py-[0.5rem] px-[1.375rem]">
                    <div className="relative text-[0.938rem] tracking-[0.46px] leading-[1.625rem] uppercase font-medium font-roboto text-white text-left">
                      submit
                    </div>
                  </div>
                </button>
              </div>
            </div>
          </div>
          <footer className="self-stretch [background:linear-gradient(91.74deg,_#0b5ba8_25.38%,_#299bd8)] flex flex-row items-start justify-start py-[2.062rem] px-[5.25rem] gap-[2.75rem] text-left text-[1.125rem] text-white font-roboto lg:p-[2.5rem] lg:box-border md:flex-col md:pt-[2.5rem] md:px-[1.5rem] md:pb-[1.875rem] md:box-border sm:py-[1.875rem] sm:px-[1.5rem] sm:box-border">
            <div className="flex-1 flex flex-col items-start justify-start gap-[0.875rem] !mb-[40px] md:flex-[unset] md:self-stretch">
              <img
                className="relative w-[10.875rem] h-[2.063rem] overflow-hidden"
                alt=""
                src="/logo2.svg"
              />
              <div className="self-stretch relative leading-[1.688rem]">
                Fickle Flight is your one-stop travel portal. We offer hassle
                free flight and hotel bookings. We also have all your flight
                needs in you online shop.
              </div>
              <img
                className="relative w-[8.125rem] h-[1.875rem]"
                alt=""
                src="/social-icons2.svg"
              />
            </div>
            <div className="relative box-border w-[0.063rem] h-[9.869rem] border-r-[1px] border-solid border-gray-300 md:hidden" />
            <div className="flex-1 flex flex-row items-start justify-between text-[1rem] md:flex-[unset] md:self-stretch sm:flex-col">
              <div className="relative w-[12.331rem] h-[9.988rem] sm:!mb-[40px]">
                <div className="absolute top-[2.985rem] left-[0rem] inline-block w-[8.481rem]">
                  About Us
                </div>
                <div className="absolute top-[0rem] left-[0rem] text-[1.25rem] leading-[1.688rem] font-medium inline-block w-[10.919rem]">
                  Company
                </div>
                <div className="absolute top-[4.923rem] left-[0rem] inline-block w-[5.269rem]">
                  News
                </div>
                <div className="absolute top-[6.86rem] left-[0rem] inline-block w-[7.194rem]">
                  Careers
                </div>
                <div className="absolute top-[8.798rem] left-[0rem] inline-block w-[12.331rem]">
                  How we work
                </div>
              </div>
              <div className="relative w-[12.331rem] h-[9.988rem] sm:!mb-[40px]">
                <div className="absolute top-[2.985rem] left-[0rem] inline-block w-[6.85rem]">
                  Account
                </div>
                <div className="absolute top-[0rem] left-[0rem] text-[1.25rem] leading-[1.688rem] font-medium inline-block w-[8.225rem]">
                  Support
                </div>
                <div className="absolute top-[4.923rem] left-[0rem] inline-block w-[12.331rem]">
                  Support Center
                </div>
                <div className="absolute top-[6.86rem] left-[0rem] inline-block w-[3.313rem]">
                  FAQ
                </div>
                <div className="absolute top-[8.798rem] left-[0rem] inline-block w-[10.275rem]">
                  Accessibility
                </div>
              </div>
              <div className="relative w-[12.331rem] h-[9.988rem]">
                <div className="absolute top-[2.985rem] left-[0rem] inline-block w-[10.806rem]">
                  Covid Advisory
                </div>
                <div className="absolute top-[0rem] left-[0rem] text-[1.25rem] leading-[1.688rem] font-medium inline-block w-[4.794rem]">
                  More
                </div>
                <div className="absolute top-[4.923rem] left-[0rem] inline-block w-[8.463rem]">
                  Airline Fees
                </div>
                <div className="absolute top-[6.86rem] left-[0rem] inline-block w-[3.163rem]">
                  Tips
                </div>
                <div className="absolute top-[8.798rem] left-[0rem] inline-block w-[12.331rem]">
                  Quarantine Rules
                </div>
              </div>
            </div>
          </footer>
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
      {isMatterhornPopup1Open && (
        <PortalPopup
          overlayColor="rgba(0, 0, 0, 0.3)"
          placement="Centered"
          onOutsideClick={closeMatterhornPopup1}
        >
          <MatterhornPopup onClose={closeMatterhornPopup1} />
        </PortalPopup>
      )}
    </>
  );
};

export default HotelsPage;
