import { useState, useCallback } from "react";
import {
  Radio,
  FormControlLabel,
  Autocomplete,
  TextField,
  Icon,
  InputAdornment,
  IconButton,
} from "@mui/material";
import { LocalizationProvider, DatePicker } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import MatterhornPopup from "../MatterhornPopup";
import PortalPopup from "../PortalPopup";
import { useNavigate } from "react-router-dom";
import PopularDestinationsContainer from "../PopularDestinations/PopularDestinationsContainer";
import RecommendedCardsContainer from "../RecommendedHoliday/RecommendedCardsContainer";

const Homepage = () => {
  const [
    selectOutlinedDateTimePickerValue,
    setSelectOutlinedDateTimePickerValue,
  ] = useState(null);
  const [isMatterhornPopupOpen, setMatterhornPopupOpen] = useState(false);
  const [isMatterhornPopup1Open, setMatterhornPopup1Open] = useState(false);
  const navigate = useNavigate();

  const onSearchTextClick = useCallback(() => {
    navigate("/results-page");
  }, [navigate]);

  const onHotelsTextClick = useCallback(() => {
    navigate("/hotels-page");
  }, [navigate]);

  const onSearchFlightsButtonClick = useCallback(() => {
    navigate("/results-page");
  }, [navigate]);

  const onHotelClick = useCallback(() => {
    navigate("/hotels-page");
  }, [navigate]);

  const onViewAllStaysButtonClick = useCallback(() => {
    navigate("/hotels-page");
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
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <>
        <div className="relative bg-white w-full overflow-hidden flex flex-col items-center justify-start gap-[4.312rem] text-center text-[1.125rem] text-white font-roboto hover:[background:linear-gradient(#fff,_#fff),_#87550a] sm:w-full sm:hover:bg-orange-200">
          <div className="self-stretch flex flex-col items-center justify-start text-[3.813rem] font-baloo-bhai">
            <header className="self-stretch bg-white h-[4.813rem] flex flex-row items-center justify-center py-[1.375rem] px-[5rem] box-border sticky w-full top-[0] [background:white] text-left text-[0.875rem] text-darkslategray-200 font-roboto lg:pl-[2.5rem] lg:pr-[2.5rem] lg:box-border md:pl-[1.5rem] md:pr-[1.5rem] md:box-border">
              <div className="flex flex-row items-center justify-between">
                <button className="cursor-pointer [border:none] p-0 bg-[transparent] relative w-[10.875rem] h-[2.063rem] overflow-hidden">
                  <img
                    className="absolute h-[96.97%] w-[99.83%] top-[1.59%] right-[0.17%] bottom-[1.44%] left-[0%] max-w-full overflow-hidden max-h-full"
                    alt=""
                    src="/symbols.svg"
                  />
                </button>
                <div className="flex flex-row items-center justify-end gap-[2.25rem] sm:flex">
                  <div className="flex flex-row items-center justify-end gap-[1.875rem] md:hidden">
                    <button className="cursor-pointer [border:none] p-0 bg-[transparent] relative text-[0.875rem] font-roboto text-cornflowerblue-200 text-left inline-block">
                      Explore
                    </button>
                    <div
                      className="relative cursor-pointer"
                      onClick={onSearchTextClick}
                    >
                      Search
                    </div>
                    <div
                      className="relative cursor-pointer"
                      onClick={onHotelsTextClick}
                    >
                      Hotels
                    </div>
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
            <div className="self-stretch relative h-[40rem]">
              <div className="absolute w-full top-[0rem] right-[0rem] left-[0rem] [background:linear-gradient(78.78deg,_#114f8b_5.2%,_#2a9ad7)] h-[39.994rem]" />
              <img
                className="absolute w-full top-[0.025rem] right-[0rem] left-[0rem] max-w-full overflow-hidden h-[40rem] object-cover"
                alt=""
                src="/banner--background@2x.png"
              />
              <div className="absolute top-[0rem] left-[0rem] w-full h-[40rem] flex flex-col items-center justify-center py-[0rem] px-[8.75rem] box-border gap-[2.687rem] md:pl-[1.875rem] md:pr-[1.875rem] md:box-border">
                <div className="self-stretch flex flex-col items-center justify-start gap-[0.312rem]">
                  <div className="self-stretch relative leading-[4.188rem] sm:text-[2.625rem] sm:leading-[3rem]">{`Let’s explore & travel the world`}</div>
                  <div className="self-stretch relative text-[1.5rem] leading-[2rem] font-roboto">
                    Find the best destinations and the most popular stays!
                  </div>
                </div>
                <div className="self-stretch rounded-3xs bg-white flex flex-col items-start justify-start p-[1.25rem] gap-[0.25rem] text-left text-[1.25rem] text-darkslategray-300 font-roboto md:flex-col sm:mt-[1.25rem]">
                  <div className="self-stretch overflow-hidden flex flex-row items-center justify-start p-[0.312rem] gap-[0.312rem] sm:flex-col sm:items-start">
                    <b className="flex-1 relative tracking-[0.04em] uppercase sm:w-full sm:pb-[0.625rem] sm:mb-[0.375rem] sm:[border-bottom:1px] sm:[border-bottom-style:solid] sm:border-b-whitesmoke sm:flex-[unset] sm:self-stretch">
                      Search flights
                    </b>
                    <div className="flex flex-row items-center justify-start sm:w-full">
                      <div className="relative w-[13.531rem] h-[2.375rem] sm:w-[100%!important]">
                        <FormControlLabel
                          className="absolute top-[0rem] left-[0rem]"
                          label="Return"
                          labelPlacement="end"
                          control={<Radio size="medium" />}
                        />
                        <FormControlLabel
                          className="absolute top-[0rem] left-[6.625rem]"
                          label="One-way"
                          labelPlacement="end"
                          control={
                            <Radio color="primary" checked size="medium" />
                          }
                        />
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch flex flex-row items-start justify-start md:flex-col">
                    <div className="flex flex-row items-start justify-start md:w-full sm:flex-col">
                      <div className="flex-1 flex flex-col items-center justify-center p-[0.312rem] sm:w-full sm:flex-[unset] sm:self-stretch">
                        <Autocomplete
                          className="self-stretch"
                          size="medium"
                          disablePortal
                          options={[
                            "Singapore (SIN)",
                            "Sydney (SYD)",
                            "Siem Reap (REP)",
                            "Shanghai (PVG)",
                            "Sanya (SYX)",
                          ]}
                          renderInput={(params) => (
                            <TextField
                              {...params}
                              color="primary"
                              label="Departure"
                              variant="outlined"
                              placeholder=""
                              helperText=""
                            />
                          )}
                          defaultValue="Singapore -  Changi (SIN)"
                        />
                      </div>
                      <div className="flex-1 flex flex-col items-center justify-center p-[0.312rem] sm:w-full sm:flex-[unset] sm:self-stretch">
                        <Autocomplete
                          className="self-stretch"
                          size="medium"
                          sx={{ width: "100%" }}
                          disablePortal
                          options={[
                            "Clark (CRK)",
                            "Launceston (LST)",
                            "Kalibo (KLO)",
                            "Colombo CMB",
                            "Melbourne (AVV)",
                            "Los Angeles (LA)",
                          ]}
                          renderInput={(params) => (
                            <TextField
                              {...params}
                              color="primary"
                              label="Arrival"
                              variant="outlined"
                              placeholder=""
                              helperText=""
                            />
                          )}
                          defaultValue="Los Angeles (LA)"
                        />
                      </div>
                      <div className="flex-1 flex flex-col items-center justify-center p-[0.312rem] sm:w-full sm:flex-[unset] sm:self-stretch">
                        <div className="self-stretch">
                          <DatePicker
                            label="Date"
                            value={selectOutlinedDateTimePickerValue}
                            onChange={(newValue) => {
                              setSelectOutlinedDateTimePickerValue(newValue);
                            }}
                            sx={{}}
                            slotProps={{
                              textField: {
                                variant: "outlined",
                                size: "medium",
                                fullWidth: true,
                                required: false,
                                autoFocus: false,
                                error: false,
                                color: "primary",
                                placeholder: "Date",
                              },
                              openPickerIcon: {
                                component: () => <></>,
                              },
                            }}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col items-center justify-center p-[0.312rem] md:w-full md:text-left">
                      <button
                        className="cursor-pointer [border:none] p-0 bg-orange-200 rounded w-[10.25rem] h-[3.5rem] overflow-hidden flex flex-col items-center justify-center [transition:0.3s] hover:bg-darkorange md:mr-[auto] sm:w-[100%!important]"
                        onClick={onSearchFlightsButtonClick}
                      >
                        <div className="relative text-[0.938rem] tracking-[0.46px] leading-[1.625rem] uppercase font-medium font-roboto text-white text-center inline-block w-[9.188rem]">
                          Search flights
                        </div>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full flex flex-col items-center justify-start py-[0rem] px-[5rem] box-border gap-[5rem] max-w-[80rem] text-left text-darkslategray-300 md:pl-[1.875rem] md:pr-[1.875rem] md:box-border">
            <div className="self-stretch flex flex-col items-start justify-start gap-[1.25rem] md:block">
              <b className="relative tracking-[0.04em] uppercase inline-block w-[79.256rem]">
                Upcoming Flight
              </b>
              <div className="self-stretch flex flex-row items-start justify-start gap-[2.25rem] text-[1.5rem] text-cornflowerblue-300 md:flex-col">
                <div className="rounded-lg flex flex-col items-start justify-start p-[1.25rem] gap-[1.312rem] border-[1px] border-solid border-whitesmoke lg:w-[32.5rem] md:w-full md:block md:mb-[1.875rem]">
                  <div className="self-stretch flex flex-row items-center justify-between">
                    <div className="relative w-[4.5rem] h-[2.875rem]">
                      <b className="absolute top-[0rem] left-[0rem] tracking-[0.04em] capitalize inline-block w-[2.794rem]">
                        SIN
                      </b>
                      <div className="absolute top-[1.875rem] left-[0rem] text-[0.875rem] tracking-[0.02em] capitalize text-gray-100 inline-block w-[4.5rem]">
                        Singapore
                      </div>
                    </div>
                    <div className="relative w-[7.338rem] h-[2.756rem] text-[0.875rem] text-gray-100">
                      <b className="absolute top-[1.756rem] left-[1.481rem] tracking-[0.02em] capitalize inline-block w-[4.106rem]">
                        15H 55M
                      </b>
                      <img
                        className="absolute top-[0rem] left-[0rem] w-[7.338rem] h-[1.5rem]"
                        alt=""
                        src="/flight-icons.svg"
                      />
                    </div>
                    <div className="relative w-[5.456rem] h-[2.875rem] text-right">
                      <b className="absolute top-[0rem] left-[2.25rem] tracking-[0.04em] capitalize inline-block w-[3.206rem]">
                        LAX
                      </b>
                      <div className="absolute top-[1.875rem] left-[0rem] text-[0.875rem] tracking-[0.02em] capitalize text-gray-100 inline-block w-[5.456rem]">
                        Los Angeles
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch relative box-border h-[0.063rem] border-t-[1px] border-solid border-whitesmoke md:w-full" />
                  <div className="self-stretch flex flex-row items-center justify-between text-[0.875rem] text-gray-100">
                    <div className="relative tracking-[0.02em] capitalize inline-block w-[12.744rem] shrink-0">
                      Departs on: 1 May, 08:00 AM
                    </div>
                    <div className="relative tracking-[0.02em] text-right inline-block w-[5.45rem] shrink-0">
                      <b>4 days</b>
                      <span> to go</span>
                    </div>
                  </div>
                </div>
                <div className="relative box-border w-[0.063rem] h-[9.125rem] border-r-[1px] border-solid border-whitesmoke md:hidden" />
                <div className="flex flex-col items-start justify-start gap-[1.25rem] text-[1.125rem] text-lightgray md:w-full">
                  <div className="self-stretch relative tracking-[0.04em] uppercase">
                    Prepare for your trip
                  </div>
                  <div className="self-stretch flex flex-row items-start justify-between sm:flex-row sm:text-center sm:flex-wrap sm:justify-between sm:ml-[-1.75rem] sm:mr-[-1.75rem]">
                    <button
                      className="cursor-pointer [border:none] p-0 bg-[transparent] flex flex-col items-center justify-center gap-[0.5rem] sm:pb-[1.25rem] sm:box-border sm:w-[33.33%] sm:text-center"
                      onClick={onHotelClick}
                    >
                      <img
                        className="relative w-[4.088rem] h-[4.088rem]"
                        alt=""
                        src="/hotel-icon.svg"
                      />
                      <div className="relative text-[0.938rem] tracking-[0.04em] font-roboto text-gray-100 text-left">
                        Hotel
                      </div>
                    </button>
                    <button className="cursor-pointer [border:none] p-0 bg-[transparent] flex flex-col items-center justify-center gap-[0.5rem] sm:pb-[1.25rem] sm:box-border sm:w-[33.33%] sm:text-center">
                      <div className="relative w-[4.088rem] h-[4.088rem]">
                        <div className="absolute top-[0rem] left-[0rem] rounded-2xl bg-sandybrown w-[4.088rem] h-[4.088rem]" />
                        <img
                          className="absolute h-[47.86%] w-[48.32%] top-[26.03%] right-[25.88%] bottom-[26.11%] left-[25.8%] max-w-full overflow-hidden max-h-full"
                          alt=""
                          src="/ticket.svg"
                        />
                      </div>
                      <div className="relative text-[0.938rem] tracking-[0.04em] font-roboto text-gray-100 text-center">
                        Attractions
                      </div>
                    </button>
                    <button className="cursor-pointer [border:none] p-0 bg-[transparent] flex flex-col items-center justify-center gap-[0.5rem] sm:pb-[1.25rem] sm:box-border sm:w-[33.33%] sm:text-center">
                      <img
                        className="relative w-[4.088rem] h-[4.088rem]"
                        alt=""
                        src="/eats-icon.svg"
                      />
                      <div className="relative text-[0.938rem] tracking-[0.04em] font-roboto text-gray-100 text-center">
                        Eats
                      </div>
                    </button>
                    <button className="cursor-pointer [border:none] p-0 bg-[transparent] flex flex-col items-center justify-center gap-[0.5rem] sm:pb-[1.25rem] sm:box-border sm:w-[33.33%] sm:text-center">
                      <div className="relative w-[4.088rem] h-[4.088rem]">
                        <div className="absolute top-[0rem] left-[0rem] rounded-2xl bg-gold w-[4.088rem] h-[4.088rem]" />
                        <img
                          className="absolute h-[48.47%] w-[41.13%] top-[26.5%] right-[29.46%] bottom-[25.03%] left-[29.41%] max-w-full overflow-hidden max-h-full"
                          alt=""
                          src="/train.svg"
                        />
                      </div>
                      <div className="relative text-[0.938rem] tracking-[0.04em] font-roboto text-gray-100 text-center">
                        Commute
                      </div>
                    </button>
                    <button className="cursor-pointer [border:none] p-0 bg-[transparent] flex flex-col items-center justify-center gap-[0.5rem] sm:pb-[1.25rem] sm:box-border sm:w-[33.33%] sm:text-center">
                      <div className="relative w-[4.375rem] h-[4.088rem]">
                        <div className="absolute top-[0rem] left-[0rem] rounded-2xl bg-cornflowerblue-100 w-[4.375rem] h-[4.088rem]" />
                        <img
                          className="absolute h-[40.21%] w-[40.57%] top-[29.63%] right-[29.69%] bottom-[30.16%] left-[29.74%] max-w-full overflow-hidden max-h-full"
                          alt=""
                          src="/taxi.svg"
                        />
                      </div>
                      <div className="relative text-[0.938rem] tracking-[0.04em] font-roboto text-gray-100 text-center inline-block w-[2.006rem]">
                        Taxi
                      </div>
                    </button>
                    <button className="cursor-pointer [border:none] p-0 bg-[transparent] flex flex-col items-center justify-center gap-[0.5rem] sm:pb-[1.25rem] sm:box-border sm:w-[33.33%] sm:text-center">
                      <div className="relative w-[4.088rem] h-[4.088rem]">
                        <div className="absolute top-[0rem] left-[0rem] rounded-2xl bg-yellowgreen w-[4.088rem] h-[4.088rem]" />
                        <img
                          className="absolute h-[35.63%] w-[39.91%] top-[32.19%] right-[30.06%] bottom-[32.18%] left-[30.03%] max-w-full overflow-hidden max-h-full"
                          alt=""
                          src="/movie.svg"
                        />
                      </div>
                      <div className="relative text-[0.938rem] tracking-[0.04em] font-roboto text-gray-100 text-center">
                        Movies
                      </div>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <PopularDestinationsContainer />
            <div className="self-stretch flex flex-col items-start justify-center gap-[1.5rem] text-[1.875rem]">
              <div className="self-stretch flex flex-row items-center justify-start">
                <b className="flex-1 relative tracking-[0.04em] capitalize sm:text-[1.375rem]">
                  Recommended Holidays
                </b>
                <button className="cursor-pointer [border:none] p-0 bg-white rounded-12xl w-[12.494rem] flex flex-row items-start justify-start gap-[0.625rem] md:hidden">
                  <div className="relative text-[1.125rem] tracking-[0.04em] font-medium font-roboto text-cornflowerblue-300 text-right inline-block w-[10.369rem] shrink-0">
                    View all holidays
                  </div>
                  <img
                    className="relative w-[1.5rem] h-[1.5rem] overflow-hidden"
                    alt=""
                    src="/arrowright2.svg"
                  />
                </button>
              </div>
              <RecommendedCardsContainer />
              <div className="rounded-12xl bg-white w-[12.494rem] hidden flex-row items-start justify-start gap-[0.625rem] text-right text-[1.125rem] text-cornflowerblue-300 md:flex md:[mrgin-top:16px]">
                <div className="relative tracking-[0.04em] font-medium inline-block w-[10.369rem] shrink-0 md:w-auto">
                  View all holidays
                </div>
                <img
                  className="relative w-[1.5rem] h-[1.5rem] overflow-hidden"
                  alt=""
                  src="/arrowright3.svg"
                />
              </div>
            </div>
            <form className="m-0 self-stretch flex flex-col items-start justify-start gap-[1.25rem]">
              <div className="self-stretch flex flex-row items-center justify-center">
                <div className="flex-1 relative h-[2.188rem]">
                  <b className="absolute top-[0rem] left-[0rem] text-[1.875rem] tracking-[0.04em] capitalize inline-block font-roboto text-darkslategray-300 text-left w-[69.081rem] sm:text-[1.375rem]">
                    Popular Stays
                  </b>
                </div>
                <button
                  className="cursor-pointer [border:none] p-0 bg-white rounded-12xl flex flex-row items-start justify-start gap-[0.625rem] md:hidden"
                  onClick={onViewAllStaysButtonClick}
                >
                  <div className="relative text-[1.125rem] tracking-[0.04em] font-medium font-roboto text-cornflowerblue-300 text-right inline-block w-[8.794rem] shrink-0">
                    View all stays
                  </div>
                  <img
                    className="relative w-[1.5rem] h-[1.5rem] overflow-hidden"
                    alt=""
                    src="/arrowright2.svg"
                  />
                </button>
              </div>
              <div className="self-stretch flex flex-row items-center justify-start ml-[-0.75rem] mr-[-0.75rem] lg:pr-[2.5rem] lg:box-border lg:ml-[-0.75rem] lg:mr-[-3.125rem] md:mr-[-3.125rem] md:ml-[-0.75rem] sm:flex-col sm:pr-[0rem] sm:box-border sm:mr-[-0.75rem] sm:ml-[-0.75rem]">
                <div className="self-stretch flex-1 flex flex-row items-start justify-center py-[0rem] px-[0.75rem] box-border w-3/12 md:w-[33.33%] sm:w-full sm:flex-[unset] sm:self-stretch">
                  <div className="self-stretch rounded-3xs bg-white box-border flex flex-col items-start justify-start py-[0.937rem] px-[0.812rem] gap-[1.437rem] w-3/12 border-[1px] border-solid border-whitesmoke hover:bg-gainsboro hover:cursor-pointer lg:w-[25%!important] md:w-full sm:w-[100%!important] sm:mb-[1.25rem]">
                    <img
                      className="self-stretch relative rounded-3xs max-w-full overflow-hidden h-[12.5rem] object-cover"
                      alt=""
                      src="/matterhorn-suites-image@2x.png"
                    />
                    <div className="self-stretch flex flex-row items-start justify-start gap-[0.687rem]">
                      <div className="flex flex-col items-start justify-start gap-[0.375rem]">
                        <div className="self-stretch relative text-[1rem] tracking-[0.02em] font-roboto text-gray-100 text-left">
                          Entire bungalow
                        </div>
                        <b className="self-stretch relative text-[1.375rem] tracking-[0.04em] capitalize font-roboto text-darkslategray-300 text-left sm:text-[1.25rem]">
                          Matterhorn Suites
                        </b>
                        <div className="self-stretch relative text-[1.125rem] tracking-[0.04em] font-roboto text-darkslategray-300 text-left">
                          $575/night
                        </div>
                      </div>
                      <img
                        className="relative w-[1.563rem] h-[1.563rem] overflow-hidden cursor-pointer"
                        alt=""
                        src="/video.svg"
                        onClick={openMatterhornPopup}
                      />
                    </div>
                    <div className="self-stretch relative h-[1.188rem]">
                      <div className="absolute top-[0rem] left-[3.352rem] text-[1rem] tracking-[0.04em] font-roboto text-cornflowerblue-200 text-left inline-block w-[13.525rem]">
                        (60 reviews)
                      </div>
                      <div className="absolute top-[0rem] left-[0rem] w-[2.769rem] h-[1.188rem]">
                        <div className="absolute top-[0rem] left-[1.271rem] text-[1rem] tracking-[0.04em] font-medium font-roboto text-darkslategray-300 text-left">
                          4.9
                        </div>
                        <img
                          className="absolute h-[90.53%] w-[37.47%] top-[0%] right-[62.53%] bottom-[9.47%] left-[0%] max-w-full overflow-hidden max-h-full"
                          alt=""
                          src="/vector.svg"
                        />
                      </div>
                    </div>
                    <div className="self-stretch rounded box-border h-[2.875rem] overflow-hidden flex flex-col items-center justify-center border-[1px] border-solid border-lavender sm:w-[100%!important]">
                      <div className="relative text-[0.938rem] tracking-[0.46px] leading-[1.625rem] uppercase font-medium font-roboto text-cornflowerblue-200 text-left">
                        More details
                      </div>
                    </div>
                  </div>
                </div>
                <div className="self-stretch flex-1 flex flex-row items-start justify-center py-[0rem] px-[0.75rem] box-border w-3/12 md:w-[33.33%] sm:w-full sm:flex-[unset] sm:self-stretch">
                  <div className="self-stretch rounded-3xs bg-white flex flex-col items-start justify-start py-[0.937rem] px-[0.812rem] box-border gap-[1.437rem] w-3/12 hover:bg-gainsboro hover:cursor-pointer lg:w-[25%!important] md:w-full sm:w-[100%!important] sm:mb-[1.25rem]">
                    <img
                      className="self-stretch relative rounded-3xs max-w-full overflow-hidden h-[12.5rem] object-cover"
                      alt=""
                      src="/discovery-shores-image@2x.png"
                    />
                    <div className="self-stretch flex flex-row items-start justify-start">
                      <div className="flex flex-col items-start justify-start gap-[0.375rem]">
                        <div className="self-stretch relative text-[1rem] tracking-[0.02em] font-roboto text-gray-100 text-left">
                          2-Story beachfront suite
                        </div>
                        <b className="self-stretch relative text-[1.375rem] tracking-[0.04em] capitalize font-roboto text-darkslategray-300 text-left sm:text-[1.25rem]">
                          Discovery Shores
                        </b>
                        <div className="self-stretch relative text-[1.125rem] tracking-[0.04em] font-roboto text-darkslategray-300 text-left">
                          $360/night
                        </div>
                      </div>
                    </div>
                    <div className="self-stretch relative h-[1.188rem]">
                      <div className="absolute top-[0rem] left-[3.352rem] text-[1rem] tracking-[0.04em] font-roboto text-cornflowerblue-200 text-left inline-block w-[13.525rem]">
                        (116 reviews)
                      </div>
                      <div className="absolute top-[0rem] left-[0rem] w-[2.769rem] h-[1.188rem]">
                        <div className="absolute top-[0rem] left-[1.271rem] text-[1rem] tracking-[0.04em] font-medium font-roboto text-darkslategray-300 text-left">
                          4.8
                        </div>
                        <img
                          className="absolute h-[90.53%] w-[37.47%] top-[0%] right-[62.53%] bottom-[9.47%] left-[0%] max-w-full overflow-hidden max-h-full"
                          alt=""
                          src="/vector1.svg"
                        />
                      </div>
                    </div>
                    <div className="self-stretch rounded box-border h-[2.875rem] overflow-hidden flex flex-col items-center justify-center border-[1px] border-solid border-lavender sm:w-[100%!important]">
                      <div className="relative text-[0.938rem] tracking-[0.46px] leading-[1.625rem] uppercase font-medium font-roboto text-cornflowerblue-200 text-left">
                        More details
                      </div>
                    </div>
                  </div>
                </div>
                <div className="self-stretch flex-1 flex flex-row items-start justify-center py-[0rem] px-[0.75rem] box-border w-3/12 md:w-[33.33%] sm:w-full sm:flex-[unset] sm:self-stretch">
                  <div className="self-stretch rounded-3xs bg-white flex flex-col items-start justify-start py-[0.937rem] px-[0.812rem] box-border gap-[1.437rem] w-3/12 hover:bg-gainsboro hover:cursor-pointer lg:w-[25%!important] md:w-full sm:flex sm:w-[100%!important]">
                    <img
                      className="self-stretch relative rounded-3xs max-w-full overflow-hidden h-[12.5rem] object-cover"
                      alt=""
                      src="/arctic-hut-image@2x.png"
                    />
                    <div className="self-stretch flex flex-row items-start justify-start">
                      <div className="flex flex-col items-start justify-start gap-[0.375rem]">
                        <div className="self-stretch relative text-[1rem] tracking-[0.02em] font-roboto text-gray-100 text-left">
                          Single deluxe hut
                        </div>
                        <b className="self-stretch relative text-[1.375rem] tracking-[0.04em] capitalize font-roboto text-darkslategray-300 text-left">{`Arctic Hut `}</b>
                        <div className="self-stretch relative text-[1.125rem] tracking-[0.04em] font-roboto text-darkslategray-300 text-left">
                          $420/night
                        </div>
                      </div>
                    </div>
                    <div className="self-stretch relative h-[1.188rem]">
                      <div className="absolute top-[0rem] left-[3.358rem] text-[1rem] tracking-[0.04em] font-roboto text-cornflowerblue-200 text-left inline-block w-[13.519rem]">
                        (78 reviews)
                      </div>
                      <div className="absolute top-[0rem] left-[0rem] w-[2.775rem] h-[1.188rem]">
                        <div className="absolute top-[0rem] left-[1.274rem] text-[1rem] tracking-[0.04em] font-medium font-roboto text-darkslategray-300 text-left">
                          4.7
                        </div>
                        <img
                          className="absolute h-[90.53%] w-[37.61%] top-[0%] right-[62.39%] bottom-[9.47%] left-[0%] max-w-full overflow-hidden max-h-full"
                          alt=""
                          src="/vector2.svg"
                        />
                      </div>
                    </div>
                    <div className="self-stretch rounded box-border h-[2.875rem] overflow-hidden flex flex-col items-center justify-center border-[1px] border-solid border-lavender sm:w-[100%!important]">
                      <div className="relative text-[0.938rem] tracking-[0.46px] leading-[1.625rem] uppercase font-medium font-roboto text-cornflowerblue-200 text-left">
                        More details
                      </div>
                    </div>
                  </div>
                </div>
                <div className="self-stretch flex-1 flex flex-row items-start justify-center py-[0rem] px-[0.75rem] box-border w-3/12 md:hidden md:w-[33.33%] sm:flex-[unset] sm:self-stretch">
                  <div className="self-stretch rounded-3xs bg-white box-border flex flex-col items-start justify-start py-[0.937rem] px-[0.812rem] gap-[1.437rem] w-3/12 border-[1px] border-solid border-whitesmoke hover:bg-gainsboro hover:cursor-pointer lg:w-[25%!important] md:w-[33.33%!important] sm:flex sm:w-[100%!important]">
                    <img
                      className="self-stretch relative rounded-3xs max-w-full overflow-hidden h-[12.5rem] object-cover"
                      alt=""
                      src="/lake-louise-image@2x.png"
                    />
                    <div className="self-stretch flex flex-row items-start justify-start gap-[0.687rem]">
                      <div className="flex flex-col items-start justify-start gap-[0.375rem]">
                        <div className="self-stretch relative text-[1rem] tracking-[0.02em] font-roboto text-gray-100 text-left">
                          Deluxe King Room
                        </div>
                        <b className="self-stretch relative text-[1.375rem] tracking-[0.04em] capitalize font-roboto text-darkslategray-300 text-left">
                          Lake Louise Inn
                        </b>
                        <div className="self-stretch relative text-[1.125rem] tracking-[0.04em] font-roboto text-darkslategray-300 text-left">
                          $244/night
                        </div>
                      </div>
                      <img
                        className="relative w-[1.563rem] h-[1.563rem] overflow-hidden cursor-pointer"
                        alt=""
                        src="/video1.svg"
                        onClick={openMatterhornPopup1}
                      />
                    </div>
                    <div className="self-stretch relative h-[1.188rem]">
                      <div className="absolute top-[0rem] left-[3.352rem] text-[1rem] tracking-[0.04em] font-roboto text-cornflowerblue-200 text-left inline-block w-[13.525rem]">
                        (63 reviews)
                      </div>
                      <div className="absolute top-[0rem] left-[0rem] w-[2.769rem] h-[1.188rem]">
                        <div className="absolute top-[0rem] left-[1.271rem] text-[1rem] tracking-[0.04em] font-medium font-roboto text-darkslategray-300 text-left">
                          4.6
                        </div>
                        <img
                          className="absolute h-[90.53%] w-[37.47%] top-[0%] right-[62.53%] bottom-[9.47%] left-[0%] max-w-full overflow-hidden max-h-full"
                          alt=""
                          src="/vector3.svg"
                        />
                      </div>
                    </div>
                    <div className="self-stretch rounded box-border h-[2.875rem] overflow-hidden flex flex-col items-center justify-center border-[1px] border-solid border-lavender sm:w-[100%!important]">
                      <div className="relative text-[0.938rem] tracking-[0.46px] leading-[1.625rem] uppercase font-medium font-roboto text-cornflowerblue-200 text-left">
                        More details
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="rounded-12xl bg-white hidden flex-row items-start justify-start gap-[0.625rem] md:flex md:mt-[1rem]">
                <div className="relative text-[1.125rem] tracking-[0.04em] font-medium font-roboto text-cornflowerblue-300 text-right inline-block w-[8.794rem] shrink-0 md:w-auto">
                  View all stays
                </div>
                <img
                  className="relative w-[1.5rem] h-[1.5rem] overflow-hidden"
                  alt=""
                  src="/arrowright4.svg"
                />
              </div>
            </form>
          </div>
          <div className="self-stretch flex flex-col items-start justify-start text-cornflowerblue-300">
            <div className="self-stretch relative bg-aliceblue h-[33.063rem] overflow-hidden">
              <img
                className="absolute w-full top-[0rem] right-[0rem] left-[0rem] max-w-full overflow-hidden h-[33.125rem] object-cover"
                alt=""
                src="/subscribe-section-background@2x.png"
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
                  src="/logo.svg"
                />
                <div className="self-stretch relative leading-[1.688rem]">
                  Fickle Flight is your one-stop travel portal. We offer hassle
                  free flight and hotel bookings. We also have all your flight
                  needs in you online shop.
                </div>
                <img
                  className="relative w-[8.125rem] h-[1.875rem]"
                  alt=""
                  src="/social-icons.svg"
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
    </LocalizationProvider>
  );
};

export default Homepage;
