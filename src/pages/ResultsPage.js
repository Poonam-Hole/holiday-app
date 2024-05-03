import { useState, useCallback } from "react";
import {
  Autocomplete,
  TextField,
  Icon,
  Checkbox,
  FormControlLabel,
} from "@mui/material";
import { LocalizationProvider, DatePicker } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { useNavigate } from "react-router-dom";
import SubscriptionContainer from "../components/SubscriptionContainer";

const ResultsPage = () => {
  const [dateFieldDateTimePickerValue, setDateFieldDateTimePickerValue] =
    useState(null);
  const navigate = useNavigate();

  const onFickleflightLogoClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onExploreTextClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onHotelsTextClick = useCallback(() => {
    navigate("/hotels-page");
  }, [navigate]);

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <div className="relative bg-white w-full overflow-hidden flex flex-col items-start justify-start text-left text-[3.813rem] text-white font-baloo-bhai">
        <header className="self-stretch bg-white h-[4.813rem] flex flex-row items-center justify-center py-[1.375rem] px-[5rem] box-border sticky w-full top-[0] [background:white] text-left text-[0.875rem] text-darkslategray-200 font-roboto lg:pl-[2.5rem] lg:pr-[2.5rem] lg:box-border md:pl-[1.5rem] md:pr-[1.5rem] md:box-border">
          <div className="flex flex-row items-center justify-between">
            <button
              className="cursor-pointer [border:none] p-0 bg-[transparent] relative w-[10.875rem] h-[2.063rem] overflow-hidden"
              onClick={onFickleflightLogoClick}
            >
              <img
                className="absolute h-[96.97%] w-[99.83%] top-[1.59%] right-[0.17%] bottom-[1.44%] left-[0%] max-w-full overflow-hidden max-h-full"
                alt=""
                src="/symbols.svg"
              />
            </button>
            <div className="flex flex-row items-center justify-end gap-[2.25rem] sm:flex">
              <div className="flex flex-row items-center justify-end gap-[1.875rem] md:hidden">
                <div
                  className="relative cursor-pointer"
                  onClick={onExploreTextClick}
                >
                  Explore
                </div>
                <button className="cursor-pointer [border:none] p-0 bg-[transparent] relative text-[0.875rem] font-roboto text-cornflowerblue-200 text-left inline-block">
                  Search
                </button>
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
        <div className="self-stretch [background:linear-gradient(100.3deg,_#114f8b,_#2a9ad7)] flex flex-col items-start justify-start">
          <div className="self-stretch relative h-[22.625rem] sm:h-[30rem]">
            <div className="absolute h-full w-full top-[0rem] right-[0rem] bottom-[0rem] left-[0rem] [background:linear-gradient(78.78deg,_#114f8b_5.2%,_#2a9ad7)]" />
            <img
              className="absolute h-full w-full top-[0.025rem] right-[0rem] bottom-[-0.025rem] left-[0rem] max-w-full overflow-hidden max-h-full object-cover"
              alt=""
              src="/banner-background@2x.png"
            />
            <div className="absolute w-full top-[calc(50%_-_96.5px)] right-[0rem] left-[0rem] flex flex-col items-center justify-center py-[0rem] px-[5rem] box-border gap-[1.25rem] md:pl-[1.875rem] md:pr-[1.875rem] md:box-border md:w-full md:top-[calc(44%_-_6.031rem_-_0px)] sm:w-full sm:top-[calc(32%_-_6.031rem_-_0px)]">
              <div className="self-stretch flex flex-col items-center justify-start">
                <div className="self-stretch relative leading-[4.188rem] md:text-[2.625rem] md:leading-[3rem] sm:text-[1.938rem] sm:leading-[2.5rem]">
                  Where are you off too?
                </div>
              </div>
              <div className="self-stretch rounded-3xs bg-white flex flex-row items-start justify-start p-[1.25rem] md:flex-col">
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
                        "Shanghai (PVG)Sanya (SYX)",
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
                        value={dateFieldDateTimePickerValue}
                        onChange={(newValue) => {
                          setDateFieldDateTimePickerValue(newValue);
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
                  <button className="cursor-pointer [border:none] p-0 bg-orange-200 rounded w-[10.25rem] h-[3.5rem] overflow-hidden flex flex-col items-center justify-center [transition:0.3s] hover:bg-darkorange md:mr-[auto] sm:w-[100%!important]">
                    <div className="relative text-[0.938rem] tracking-[0.46px] leading-[1.625rem] uppercase font-medium font-roboto text-white text-center inline-block w-[9.188rem]">
                      Search flights
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-row items-start justify-center py-[3.125rem] px-[5rem] text-[1.375rem] text-dimgray-200 font-roboto lg:p-[2.5rem] lg:box-border md:py-[1.25rem] md:px-[1.5rem] md:box-border">
          <div className="relative w-[21.906rem] h-[41.688rem] lg:hidden">
            <div className="absolute top-[0rem] left-[0rem] w-[19.469rem] h-[2.938rem] text-[1.25rem]">
              <div className="absolute top-[0rem] left-[0rem] tracking-[0.26px] inline-block w-[13.713rem]">
                10 out of 177 Results
              </div>
              <img
                className="absolute top-[2.906rem] left-[0rem] max-h-full w-[19.469rem]"
                alt=""
                src="/vector-2.svg"
              />
            </div>
            <div className="absolute top-[14.463rem] left-[0rem] w-[13.813rem] h-[6.625rem]">
              <b className="absolute top-[0rem] left-[0rem] tracking-[0.26px] inline-block w-[11.813rem]">
                Booking Options
              </b>
              <FormControlLabel
                className="absolute top-[3.125rem] left-[0rem]"
                label="Book on Fickleflight"
                labelPlacement="end"
                control={<Checkbox size="medium" />}
              />
              <FormControlLabel
                className="absolute top-[5.375rem] left-[0rem]"
                label="Official Airline Websites"
                labelPlacement="end"
                control={<Checkbox size="medium" />}
              />
            </div>
            <div className="absolute top-[23.538rem] left-[0rem] w-[19.425rem] h-[6.625rem]">
              <b className="absolute top-[0rem] left-[0rem] tracking-[0.26px] inline-block w-[12.375rem]">
                Flight Experience
              </b>
              <FormControlLabel
                className="absolute top-[3.125rem] left-[0rem]"
                label="No overnight flights"
                labelPlacement="end"
                control={<Checkbox color="primary" size="medium" />}
              />
              <FormControlLabel
                className="absolute top-[5.375rem] left-[0rem]"
                label="No long stop-overs"
                labelPlacement="end"
                control={<Checkbox color="primary" size="medium" />}
              />
            </div>
            <div className="absolute top-[35.063rem] left-[0rem] w-[11.313rem] h-[6.625rem]">
              <b className="absolute top-[0rem] left-[0rem] tracking-[0.26px] inline-block w-[5.488rem]">
                Airlines
              </b>
              <FormControlLabel
                className="absolute top-[3.125rem] left-[0rem]"
                label="Singapore Airlines"
                labelPlacement="end"
                control={<Checkbox color="primary" size="medium" />}
              />
              <FormControlLabel
                className="absolute top-[5.375rem] left-[0rem]"
                label="Qatar Airways"
                labelPlacement="end"
                control={<Checkbox color="primary" size="medium" />}
              />
            </div>
            <div className="absolute top-[5.388rem] left-[0rem] w-[18.538rem] h-[6.625rem]">
              <b className="absolute top-[0rem] left-[0rem] tracking-[0.26px] inline-block w-[4.081rem]">
                Stops
              </b>
              <FormControlLabel
                className="absolute top-[3.125rem] left-[0rem]"
                label="1 Stop"
                labelPlacement="end"
                control={<Checkbox size="medium" />}
              />
              <FormControlLabel
                className="absolute top-[5.375rem] left-[0rem]"
                label="2 Stops"
                labelPlacement="end"
                control={<Checkbox size="medium" />}
              />
            </div>
            <img
              className="absolute top-[32.581rem] left-[0rem] max-h-full w-[21.906rem]"
              alt=""
              src="/seperator.svg"
            />
          </div>
          <div className="flex flex-col items-start justify-start gap-[0.562rem] text-[1rem]">
            <div className="self-stretch rounded-md bg-white flex flex-row items-center justify-center py-[0rem] px-[1.562rem] gap-[3.125rem] sm:flex-col sm:py-[1.25rem] sm:px-[0rem] sm:box-border">
              <div className="w-1/5 flex flex-row items-center justify-start gap-[0.437rem] md:flex-col sm:flex-row sm:w-[100%!important] sm:ml-[2.5rem]">
                <img
                  className="relative w-[2.175rem] h-[2.875rem] sm:[transform:scale(0.8)]"
                  alt=""
                  src="/turkish.svg"
                />
                <div className="relative tracking-[0.26px]">
                  Turkish Airlines
                </div>
              </div>
              <div className="flex flex-row items-center justify-between w-[64%] text-[1.313rem] text-cornflowerblue-200 md:flex-row sm:w-[90%] sm:flex-row sm:p-[0rem] sm:box-border sm:!mr-[0px] mq428small:w-[90%]">
                <div className="relative w-[5.813rem] h-[3.25rem] mq428small:w-[5rem]">
                  <div className="absolute w-full top-[0%] left-[0%] tracking-[0.32px] font-medium inline-block mq428small:text-[1rem]">
                    11:35 PM
                  </div>
                  <div className="absolute w-[79.46%] top-[63.46%] left-[0%] text-[1rem] tracking-[0.26px] text-dimgray-100 inline-block mq428small:text-[1rem]">
                    SIN
                  </div>
                </div>
                <div className="relative w-[7.563rem] h-[3.438rem] text-center text-[1rem] text-gray-100 sm:[transform:scale(0.9)]">
                  <img
                    className="absolute h-[27.45%] w-[88.51%] top-[0%] right-[5.51%] bottom-[72.55%] left-[5.98%] max-w-full overflow-hidden max-h-full"
                    alt=""
                    src="/flighticon.svg"
                  />
                  <div className="absolute top-[65.45%] left-[0%] tracking-[0.21px] mq428small:text-[0.813rem]">
                    33H 10M, 1-stop
                  </div>
                </div>
                <div className="relative w-[5.688rem] h-[3.25rem] text-right mq428small:w-[5rem]">
                  <div className="absolute w-full top-[0%] left-[0%] tracking-[0.32px] font-medium inline-block mq428small:text-[1rem]">
                    4:45 PM
                  </div>
                  <div className="absolute w-[81.21%] top-[63.46%] left-[17.65%] text-[1rem] tracking-[0.26px] text-dimgray-100 inline-block mq428small:text-[1rem]">
                    LAX
                  </div>
                </div>
              </div>
              <div className="w-[8rem] flex flex-row items-center justify-center text-center text-[1.5rem] text-orange-100">
                <img
                  className="relative max-w-full overflow-hidden h-[6.25rem] sm:hidden"
                  alt=""
                  src="/vector-1.svg"
                />
                <b className="flex-1 relative tracking-[0.34px]">S$ 723</b>
              </div>
            </div>
            <div className="self-stretch rounded-md bg-white flex flex-row items-center justify-center py-[0rem] px-[1.562rem] gap-[3.125rem] text-center sm:flex-col sm:py-[1.25rem] sm:px-[0rem] sm:box-border">
              <div className="w-1/5 flex flex-row items-center justify-start gap-[0.437rem] md:flex-col sm:flex-row sm:w-[100%!important] sm:ml-[2.5rem]">
                <img
                  className="relative w-[2.175rem] h-[2.875rem] sm:[transform:scale(0.8)]"
                  alt=""
                  src="/sia.svg"
                />
                <div className="relative tracking-[0.26px] inline-block w-[8.75rem] shrink-0">
                  Singapore Airlines
                </div>
              </div>
              <div className="flex flex-row items-center justify-between w-[64%] text-left text-[1.313rem] text-cornflowerblue-200 md:flex-row sm:w-[90%] sm:flex-row sm:p-[0rem] sm:box-border sm:!mr-[0px]">
                <div className="relative w-[5.813rem] h-[3.25rem] mq428small:w-[5rem]">
                  <div className="absolute w-full top-[0%] left-[0%] tracking-[0.32px] font-medium inline-block mq428small:text-[1rem]">
                    8:45 PM
                  </div>
                  <div className="absolute w-[79.46%] top-[63.46%] left-[0%] text-[1rem] tracking-[0.26px] text-dimgray-100 inline-block">
                    SIN
                  </div>
                </div>
                <div className="relative w-[8.063rem] h-[3.438rem] text-center text-[1rem] text-gray-100 sm:[transform:scale(0.9)]">
                  <img
                    className="absolute h-[27.45%] w-[83.02%] top-[0%] right-[8.27%] bottom-[72.55%] left-[8.71%] max-w-full overflow-hidden max-h-full"
                    alt=""
                    src="/flighticon1.svg"
                  />
                  <div className="absolute top-[65.45%] left-[0%] tracking-[0.21px] mq428small:text-[0.813rem]">
                    15H 10M, 2-stops
                  </div>
                </div>
                <div className="relative w-[5.688rem] h-[3.25rem] text-right mq428small:w-[5rem]">
                  <div className="absolute w-full top-[0%] left-[0%] tracking-[0.32px] font-medium inline-block mq428small:text-[1rem]">
                    7:55 PM
                  </div>
                  <div className="absolute w-[81.21%] top-[63.46%] left-[17.65%] text-[1rem] tracking-[0.26px] text-dimgray-100 inline-block">
                    LAX
                  </div>
                </div>
              </div>
              <div className="w-[8rem] flex flex-row items-center justify-center text-[1.5rem] text-orange-100">
                <img
                  className="relative max-w-full overflow-hidden h-[6.25rem] sm:hidden"
                  alt=""
                  src="/vector-1.svg"
                />
                <b className="flex-1 relative tracking-[0.34px]">S$ 900</b>
              </div>
            </div>
            <div className="self-stretch rounded-md bg-white flex flex-row items-center justify-center py-[0rem] px-[1.562rem] gap-[3.125rem] sm:flex-col sm:py-[1.25rem] sm:px-[0rem] sm:box-border">
              <div className="w-1/5 flex flex-row items-center justify-start gap-[0.437rem] md:flex-col sm:flex-row sm:w-[100%!important] sm:ml-[2.5rem]">
                <img
                  className="relative w-[2.175rem] h-[2.875rem] [transform:scale(0.8)]"
                  alt=""
                  src="/japan.svg"
                />
                <div className="relative tracking-[0.26px]">Japan Airlines</div>
              </div>
              <div className="flex flex-row items-center justify-between w-[64%] text-[1.313rem] text-cornflowerblue-200 md:flex-row sm:w-[90%] sm:flex-row sm:p-[0rem] sm:box-border sm:!mr-[0px] mq428small:w-[90%]">
                <div className="relative w-[5.813rem] h-[3.25rem] mq428small:w-[5rem]">
                  <div className="absolute w-full top-[0%] left-[0%] tracking-[0.32px] font-medium inline-block mq428small:text-[1rem]">
                    8:20 PM
                  </div>
                  <div className="absolute w-[79.46%] top-[63.46%] left-[0%] text-[1rem] tracking-[0.26px] text-dimgray-100 inline-block">
                    SIN
                  </div>
                </div>
                <div className="relative w-[7.563rem] h-[3.438rem] text-center text-[1rem] text-gray-100 sm:[transform:scale(0.9)]">
                  <img
                    className="absolute h-[27.45%] w-[88.51%] top-[0%] right-[6.34%] bottom-[72.55%] left-[5.15%] max-w-full overflow-hidden max-h-full"
                    alt=""
                    src="/flighticon1.svg"
                  />
                  <div className="absolute top-[65.45%] left-[0%] tracking-[0.21px] mq428small:text-[0.813rem]">
                    17H 30M, 1-stop
                  </div>
                </div>
                <div className="relative w-[5.688rem] h-[3.25rem] text-right mq428small:w-[5rem]">
                  <div className="absolute w-full top-[0%] left-[0%] tracking-[0.32px] font-medium inline-block mq428small:text-[1rem]">
                    9:50 PM
                  </div>
                  <div className="absolute w-[81.21%] top-[63.46%] left-[17.65%] text-[1rem] tracking-[0.26px] text-dimgray-100 inline-block">
                    LAX
                  </div>
                </div>
              </div>
              <div className="w-[8rem] flex flex-row items-center justify-center text-center text-[1.5rem] text-orange-100">
                <img
                  className="relative max-w-full overflow-hidden h-[6.25rem] sm:hidden"
                  alt=""
                  src="/vector-1.svg"
                />
                <b className="flex-1 relative tracking-[0.34px]">S$ 859</b>
              </div>
            </div>
            <div className="self-stretch rounded-md bg-white flex flex-row items-center justify-center py-[0rem] px-[1.562rem] gap-[3.125rem] sm:flex-col sm:py-[1.25rem] sm:px-[0rem] sm:box-border">
              <div className="w-1/5 flex flex-row items-center justify-start gap-[0.437rem] md:flex-col sm:flex-row sm:w-[100%!important] sm:ml-[2.5rem]">
                <img
                  className="relative w-[2.175rem] h-[2.875rem] [transform:scale(0.8)]"
                  alt=""
                  src="/ana.svg"
                />
                <div className="relative tracking-[0.26px]">ANA</div>
              </div>
              <div className="flex flex-row items-center justify-between w-[64%] text-[1.313rem] text-cornflowerblue-200 md:flex-row sm:w-[90%] sm:flex-row sm:p-[0rem] sm:box-border sm:!mr-[0px] mq428small:w-[90%]">
                <div className="relative w-[5.813rem] h-[3.25rem] mq428small:w-[5rem]">
                  <div className="absolute w-full top-[0%] left-[0%] tracking-[0.32px] font-medium inline-block mq428small:text-[1rem]">
                    6:35 PM
                  </div>
                  <div className="absolute w-[79.46%] top-[63.46%] left-[0%] text-[1rem] tracking-[0.26px] text-dimgray-100 inline-block">
                    SIN
                  </div>
                </div>
                <div className="relative w-[7.563rem] h-[3.438rem] text-center text-[1rem] text-gray-100 sm:[transform:scale(0.9)]">
                  <img
                    className="absolute h-[27.45%] w-[88.51%] top-[0%] right-[5.51%] bottom-[72.55%] left-[5.98%] max-w-full overflow-hidden max-h-full"
                    alt=""
                    src="/flighticon1.svg"
                  />
                  <div className="absolute top-[65.45%] left-[0%] tracking-[0.21px] mq428small:text-[0.813rem]">
                    19H 15M, 1-stop
                  </div>
                </div>
                <div className="relative w-[5.688rem] h-[3.25rem] text-right mq428small:w-[5rem]">
                  <div className="absolute w-full top-[0%] left-[0%] tracking-[0.32px] font-medium inline-block mq428small:text-[1rem]">
                    9:50 PM
                  </div>
                  <div className="absolute w-[81.21%] top-[63.46%] left-[17.65%] text-[1rem] tracking-[0.26px] text-dimgray-100 inline-block">
                    LAX
                  </div>
                </div>
              </div>
              <div className="w-[8rem] flex flex-row items-center justify-center text-center text-[1.5rem] text-orange-100">
                <img
                  className="relative max-w-full overflow-hidden h-[6.25rem] sm:hidden"
                  alt=""
                  src="/vector-1.svg"
                />
                <b className="flex-1 relative tracking-[0.34px]">S$ 936</b>
              </div>
            </div>
            <div className="self-stretch rounded-md bg-white flex flex-row items-center justify-center py-[0rem] px-[1.562rem] gap-[3.125rem] text-center sm:flex-col sm:py-[1.25rem] sm:px-[0rem] sm:box-border">
              <div className="w-1/5 flex flex-row items-center justify-start gap-[0.437rem] md:flex-col sm:flex-row sm:w-[100%!important] sm:ml-[2.5rem]">
                <img
                  className="relative w-[2.175rem] h-[2.875rem]"
                  alt=""
                  src="/americanairlines.svg"
                />
                <div className="relative tracking-[0.26px]">
                  American Airlines
                </div>
              </div>
              <div className="flex flex-row items-center justify-between w-[64%] text-left text-[1.313rem] text-cornflowerblue-200 md:flex-row sm:w-[90%] sm:flex-row sm:p-[0rem] sm:box-border sm:!mr-[0px] mq428small:w-[90%]">
                <div className="relative w-[5.813rem] h-[3.25rem] mq428small:w-[5rem]">
                  <div className="absolute w-full top-[0%] left-[0%] tracking-[0.32px] font-medium inline-block mq428small:text-[1rem]">
                    8:20 PM
                  </div>
                  <div className="absolute w-[79.46%] top-[63.46%] left-[0%] text-[1rem] tracking-[0.26px] text-dimgray-100 inline-block">
                    SIN
                  </div>
                </div>
                <div className="relative w-[7.563rem] h-[3.438rem] text-center text-[1rem] text-gray-100 sm:[transform:scale(0.9)]">
                  <img
                    className="absolute h-[27.45%] w-[88.51%] top-[0%] right-[5.51%] bottom-[72.55%] left-[5.98%] max-w-full overflow-hidden max-h-full"
                    alt=""
                    src="/flighticon1.svg"
                  />
                  <div className="absolute top-[65.45%] left-[0%] tracking-[0.21px] mq428small:text-[0.813rem]">
                    17H 30M, 1-stop
                  </div>
                </div>
                <div className="relative w-[5.688rem] h-[3.25rem] text-right mq428small:w-[5rem]">
                  <div className="absolute w-full top-[0%] left-[0%] tracking-[0.32px] font-medium inline-block mq428small:text-[1rem]">
                    9:50 AM
                  </div>
                  <div className="absolute w-[81.21%] top-[63.46%] left-[17.65%] text-[1rem] tracking-[0.26px] text-dimgray-100 inline-block">
                    LAX
                  </div>
                </div>
              </div>
              <div className="w-[8rem] flex flex-row items-center justify-center text-[1.5rem] text-orange-100">
                <img
                  className="relative max-w-full overflow-hidden h-[6.25rem] sm:hidden"
                  alt=""
                  src="/vector-1.svg"
                />
                <b className="flex-1 relative tracking-[0.34px]">S$ 939</b>
              </div>
            </div>
            <div className="self-stretch rounded-md bg-white flex flex-row items-center justify-center py-[0rem] px-[1.562rem] gap-[3.125rem] sm:flex-col sm:py-[1.25rem] sm:px-[0rem] sm:box-border">
              <div className="w-1/5 flex flex-row items-center justify-start gap-[0.437rem] md:flex-col sm:flex-row sm:w-[100%!important] sm:ml-[2.5rem]">
                <img
                  className="relative w-[2.175rem] h-[2.875rem] sm:[transform:scale(0.8)]"
                  alt=""
                  src="/turkish.svg"
                />
                <div className="relative tracking-[0.26px]">
                  Turkish Airlines
                </div>
              </div>
              <div className="flex flex-row items-center justify-between w-[64%] text-[1.313rem] text-cornflowerblue-200 md:flex-row sm:w-[90%] sm:flex-row sm:p-[0rem] sm:box-border sm:!mr-[0px] mq428small:w-[90%]">
                <div className="relative w-[5.813rem] h-[3.25rem] mq428small:w-[5rem]">
                  <div className="absolute w-full top-[0%] left-[0%] tracking-[0.32px] font-medium inline-block mq428small:text-[1rem]">
                    11:35 PM
                  </div>
                  <div className="absolute w-[79.46%] top-[63.46%] left-[0%] text-[1rem] tracking-[0.26px] text-dimgray-100 inline-block">
                    SIN
                  </div>
                </div>
                <div className="relative w-[8.063rem] h-[3.438rem] text-center text-[1rem] text-gray-100 sm:[transform:scale(0.9)]">
                  <img
                    className="absolute h-[27.45%] w-[83.02%] top-[0%] right-[8.27%] bottom-[72.55%] left-[8.71%] max-w-full overflow-hidden max-h-full"
                    alt=""
                    src="/flighticon1.svg"
                  />
                  <div className="absolute top-[65.45%] left-[0%] tracking-[0.21px] mq428small:text-[0.813rem]">
                    33H 10M, 2-stops
                  </div>
                </div>
                <div className="relative w-[5.688rem] h-[3.25rem] text-right mq428small:w-[5rem]">
                  <div className="absolute w-full top-[0%] left-[0%] tracking-[0.32px] font-medium inline-block mq428small:text-[1rem]">
                    4:45 PM
                  </div>
                  <div className="absolute w-[81.21%] top-[63.46%] left-[17.65%] text-[1rem] tracking-[0.26px] text-dimgray-100 inline-block">
                    LAX
                  </div>
                </div>
              </div>
              <div className="w-[8rem] flex flex-row items-center justify-center text-center text-[1.5rem] text-orange-100">
                <img
                  className="relative max-w-full overflow-hidden h-[6.25rem] sm:hidden"
                  alt=""
                  src="/vector-1.svg"
                />
                <b className="flex-1 relative tracking-[0.34px]">S$ 673</b>
              </div>
            </div>
            <div className="self-stretch rounded-md bg-white flex flex-row items-center justify-center py-[0rem] px-[1.562rem] gap-[3.125rem] sm:flex-col sm:py-[1.25rem] sm:px-[0rem] sm:box-border">
              <div className="w-1/5 flex flex-row items-center justify-start gap-[0.437rem] md:flex-col sm:flex-row sm:w-[100%!important] sm:ml-[2.5rem]">
                <img
                  className="relative w-[2.175rem] h-[2.875rem] [transform:scale(0.8)]"
                  alt=""
                  src="/japan1.svg"
                />
                <div className="relative tracking-[0.26px]">Japan Airlines</div>
              </div>
              <div className="flex flex-row items-center justify-between w-[64%] text-[1.313rem] text-cornflowerblue-200 md:flex-row sm:w-[90%] sm:flex-row sm:p-[0rem] sm:box-border sm:!mr-[0px] mq428small:w-[90%]">
                <div className="relative w-[5.813rem] h-[3.25rem] mq428small:w-[5rem]">
                  <div className="absolute w-full top-[0%] left-[0%] tracking-[0.32px] font-medium inline-block mq428small:text-[1rem]">
                    10:25 PM
                  </div>
                  <div className="absolute w-[79.46%] top-[63.46%] left-[0%] text-[1rem] tracking-[0.26px] text-dimgray-100 inline-block">
                    SIN
                  </div>
                </div>
                <div className="relative w-[7.563rem] h-[3.438rem] text-center text-[1rem] text-gray-100 sm:[transform:scale(0.9)]">
                  <img
                    className="absolute h-[27.45%] w-[88.51%] top-[0%] right-[5.51%] bottom-[72.55%] left-[5.98%] max-w-full overflow-hidden max-h-full"
                    alt=""
                    src="/flighticon1.svg"
                  />
                  <div className="absolute top-[65.45%] left-[0%] tracking-[0.21px] mq428small:text-[0.813rem]">
                    26H 45M, 1-stop
                  </div>
                </div>
                <div className="relative w-[5.688rem] h-[3.25rem] text-right mq428small:w-[5rem]">
                  <div className="absolute w-full top-[0%] left-[0%] tracking-[0.32px] font-medium inline-block mq428small:text-[1rem]">
                    9:10 AM
                  </div>
                  <div className="absolute w-[81.21%] top-[63.46%] left-[17.65%] text-[1rem] tracking-[0.26px] text-dimgray-100 inline-block">
                    LAX
                  </div>
                </div>
              </div>
              <div className="w-[8rem] flex flex-row items-center justify-center text-center text-[1.5rem] text-orange-100">
                <img
                  className="relative max-w-full overflow-hidden h-[6.25rem] sm:hidden"
                  alt=""
                  src="/vector-1.svg"
                />
                <b className="flex-1 relative tracking-[0.34px]">S$ 859</b>
              </div>
            </div>
            <div className="self-stretch rounded-md bg-white flex flex-row items-center justify-center py-[0rem] px-[1.562rem] gap-[3.125rem] text-center sm:flex-col sm:py-[1.25rem] sm:px-[0rem] sm:box-border">
              <div className="w-1/5 flex flex-row items-center justify-start gap-[0.437rem] md:flex-col sm:flex-row sm:w-[100%!important] sm:ml-[2.5rem]">
                <img
                  className="relative w-[2.175rem] h-[2.875rem]"
                  alt=""
                  src="/americanairlines1.svg"
                />
                <div className="relative tracking-[0.26px]">
                  American Airlines
                </div>
              </div>
              <div className="flex flex-row items-center justify-between w-[64%] text-left text-[1.313rem] text-cornflowerblue-200 md:flex-row sm:w-[90%] sm:flex-row sm:p-[0rem] sm:box-border sm:!mr-[0px] mq428small:w-[90%]">
                <div className="relative w-[5.813rem] h-[3.25rem] mq428small:w-[5rem]">
                  <div className="absolute w-full top-[0%] left-[0%] tracking-[0.32px] font-medium inline-block mq428small:text-[1rem]">
                    10:25 PM
                  </div>
                  <div className="absolute w-[79.46%] top-[63.46%] left-[0%] text-[1rem] tracking-[0.26px] text-dimgray-100 inline-block">
                    SIN
                  </div>
                </div>
                <div className="relative w-[7.563rem] h-[3.438rem] text-center text-[1rem] text-gray-100 sm:[transform:scale(0.9)]">
                  <img
                    className="absolute h-[27.45%] w-[88.51%] top-[0%] right-[5.51%] bottom-[72.55%] left-[5.98%] max-w-full overflow-hidden max-h-full"
                    alt=""
                    src="/flighticon1.svg"
                  />
                  <div className="absolute top-[65.45%] left-[0%] tracking-[0.21px] mq428small:text-[0.813rem]">
                    26H 45M, 1-stop
                  </div>
                </div>
                <div className="relative w-[5.688rem] h-[3.25rem] text-right mq428small:w-[5rem]">
                  <div className="absolute w-full top-[0%] left-[0%] tracking-[0.32px] font-medium inline-block mq428small:text-[1rem]">
                    9:10 AM
                  </div>
                  <div className="absolute w-[81.21%] top-[63.46%] left-[17.65%] text-[1rem] tracking-[0.26px] text-dimgray-100 inline-block">
                    LAX
                  </div>
                </div>
              </div>
              <div className="w-[8rem] flex flex-row items-center justify-center text-[1.5rem] text-orange-100">
                <img
                  className="relative max-w-full overflow-hidden h-[6.25rem] sm:hidden"
                  alt=""
                  src="/vector-1.svg"
                />
                <b className="flex-1 relative tracking-[0.34px]">S$ 859</b>
              </div>
            </div>
            <button className="cursor-pointer [border:none] p-0 bg-[transparent] relative w-[13.75rem] h-[4.5rem]">
              <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-md bg-cornflowerblue-200" />
              <div className="absolute top-[calc(50%_-_10.5px)] left-[calc(50%_-_81.5px)] text-[1.125rem] tracking-[0.04em] font-medium font-roboto text-white text-center">
                Show more results
              </div>
            </button>
          </div>
        </div>
        <SubscriptionContainer />
      </div>
    </LocalizationProvider>
  );
};

export default ResultsPage;
