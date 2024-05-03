import { memo } from "react";
import ResultsCard from "./ResultsCard";
import ResultsCardWithoutVideoPlayBtn from "Results Card";

const ResultCardsContainer = memo(() => {
  return (
    <div className="w-[35.119rem] flex flex-col items-start justify-start gap-[0.75rem] text-left text-[1rem] text-gray-100 font-roboto md:w-[100%!important] sm:gap-[1.25rem]">
      <ResultsCard
        resultsImage="/results-image@2x.png"
        kingBedStandard="1 king bed standard"
        holidayInnExpre="Holiday Inn Expre..."
        video="/video.svg"
        price="$S 286"
        ratings="4.7"
        reviews="(1,136 reviews)"
      />
      <ResultsCardWithoutVideoPlayBtn
        resultsImage="/results-image@2x.png"
        freehandLosAngeles="Freehand Los Angeles"
        bedInQuad="Bed in Quad"
        reviews="(1,941 reviews)"
        prop="4.2"
        vector="/vector1.svg"
        s198="$S 198"
      />
      <ResultsCardWithoutVideoPlayBtn
        resultsImage="/results-image@2x.png"
        freehandLosAngeles="The Westin Bonavent..."
        bedInQuad="1 King, City view"
        reviews="(1,002 reviews)"
        prop="4.1"
        vector="/vector2.svg"
        s198="$S 289"
      />
      <ResultsCard
        resultsImage="/results-image@2x.png"
        kingBedStandard="Deluxe King"
        holidayInnExpre="The Ritz-Carlton, L..."
        video="/feature-video.svg"
        price="$S 286"
        ratings="4.7"
        reviews="(1,136 reviews)"
      />
      <iframe
        className="[border:none] self-stretch relative h-[37.5rem] hidden md:flex md:max-w-[62.5rem]"
        src={`https://www.openstreetmap.org/export/embed.html?bbox=-118.56033325195314%2C33.837912419023645%2C-117.98355102539064%2C34.25948651450623&amp;layer=mapnik`}
      />
    </div>
  );
});

export default ResultCardsContainer;
