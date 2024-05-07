import { useState } from "react";
import RecommendedCard from "./RecommendedCard";
import { RecommendedHolidaysContext } from "../context/RecommendedHolidaysContext";

const RecommendedCardsContainer = () => {
  const [recommendedHolidays, setRecommendedHolidays] = useState([
    {
      placeName: "Bali",
      showHolidayDetails: true,
      img: "/unsplash5mv818tzxeo@2x.png",
      d3N: "4D3N",
      prop: "$899",
    },
    {
      placeName: "Swiss",
      showHolidayDetails: true,
      img: "/switzerlandimage@2x.png",
      d3N: "6D5N",
      prop: "$900",
    },
    {
      placeName: "Boracay",
      showHolidayDetails: true,
      img: "/boracayimage@2x.png",
      d3N: "5D4N",
      prop: "$699",
    },
    {
      placeName: "Palawan",
      showHolidayDetails: true,
      img: "/palawanimage@2x.png",
      d3N: "4D3N",
      prop: "$789",
    },
  ]);
  return (
    <RecommendedHolidaysContext.Provider
      value={{ recommendedHolidays, setRecommendedHolidays }}
    >
      <div className="self-stretch flex flex-row items-start justify-start ml-[-1rem] mr-[-1rem] md:ml-[-1rem] md:mr-[-1rem] md:flex-wrap">
        {recommendedHolidays.map((item, index) => (
          <RecommendedCard
            key={index}
            placeName={item.placeName}
            showHolidayDetails={item.showHolidayDetails}
            img={item.img}
            d3N={item.d3N}
            prop={item.prop}
          />
        ))}
      </div>
    </RecommendedHolidaysContext.Provider>
  );
};

export default RecommendedCardsContainer;
