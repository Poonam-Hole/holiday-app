import { useState } from "react";
import PopularDestinationCard from "./PopularDestinationCard";
import { PopularDestinationsContext } from "../../context/PopularDestinationsContext";

const PopularDestinationsContainer = () => {
  const [popularDestinations, setPopularDestinations] = useState([
    {
      destImg: "/greeceimage@2x.png",
      place: "Greece",
      price: "$1079",
    },
    {
      destImg: "/parisimage@2x.png",
      place: "Paris",
      price: "$699",
    },
    {
      destImg: "/norwayimage@2x.png",
      place: "Norway",
      price: "$895",
    },
    {
      destImg: "/tuscanyimage@2x.png",
      place: "Tuscany",
      price: "$1245",
    },
  ]);
  return (
    <PopularDestinationsContext.Provider
      value={{ popularDestinations, setPopularDestinations }}
    >
      <div className="self-stretch flex flex-col items-start justify-start gap-[1.5rem] text-left text-[1.125rem] text-cornflowerblue-300 font-roboto">
        <div className="self-stretch flex flex-row items-center justify-start sm:flex-col sm:self-start">
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
        <div className="self-stretch flex flex-row items-start justify-start ml-[-1rem] mr-[-1rem] md:ml-[-1rem] md:mr-[-1rem] md:flex-wrap md:mt-[-1rem] md:mb-[-1rem]">
        {popularDestinations.map((item, index) => ( <button className="cursor-pointer [border:none] py-[0rem] px-[1rem] bg-[transparent] w-3/12 flex flex-col items-center justify-center box-border md:p-[1rem] md:box-border md:w-6/12 sm:w-full">
           
              <PopularDestinationCard
                key={index}
                destImg={item.destImg}
                place={item.place}
                price={item.price}
              />
           
          </button> ))}
        </div>
        <div className="rounded-12xl bg-white w-[14.463rem] hidden flex-row items-start justify-start gap-[0.625rem] text-right md:flex md:mt-[1rem]">
          <div className="relative tracking-[0.04em] font-medium inline-block w-[12.331rem] shrink-0 md:w-auto">
            View all destinations
          </div>
          <img
            className="relative w-[1.5rem] h-[1.5rem] overflow-hidden"
            alt=""
            src="/arrowright1.svg"
          />
        </div>
      </div>
    </PopularDestinationsContext.Provider>
  );
};

export default PopularDestinationsContainer;
