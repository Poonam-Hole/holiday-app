import { memo } from "react";
import { TextField, InputAdornment, Icon, IconButton } from "@mui/material";

const SubscriptionContainer = memo(() => {
  return (
    <div className="self-stretch flex flex-col items-start justify-start text-center text-[1.125rem] text-cornflowerblue-300 font-roboto">
      <div className="self-stretch flex flex-col items-start justify-start">
        <div className="self-stretch relative bg-aliceblue h-[33.063rem] overflow-hidden">
          <img
            className="absolute w-full top-[0rem] right-[0rem] left-[0rem] max-w-full overflow-hidden h-[33.125rem] object-cover"
            alt=""
            src="/newsletter-section-background@2x.png"
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
              src="/logo1.svg"
            />
            <div className="self-stretch relative leading-[1.688rem]">
              Fickle Flight is your one-stop travel portal. We offer hassle free
              flight and hotel bookings. We also have all your flight needs in
              you online shop.
            </div>
            <img
              className="relative w-[8.125rem] h-[1.875rem]"
              alt=""
              src="/social-icons1.svg"
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
  );
});

export default SubscriptionContainer;
