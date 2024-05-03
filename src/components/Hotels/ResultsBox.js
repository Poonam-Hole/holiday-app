const ResultsBox = ({
  hotelImageUrl,
  hotelName,
  roomType,
  reviewCount,
  rating,
  price,
  discountPrice,
}) => {
  return (
    <div className="self-stretch rounded-3xs bg-cornflowerblue-400 flex flex-row items-start justify-start gap-[1rem] text-left text-[1rem] text-darkslategray-300 font-roboto sm:flex-col">
      <img
        className="relative rounded-tl-3xs rounded-tr-none rounded-br-none rounded-bl-3xs w-[16.25rem] h-[13.75rem] object-cover sm:w-[100%!important] sm:!rounded-[10px]"
        alt=""
        src={hotelImageUrl}
      />
      <div className="flex flex-col items-start justify-start py-[0.937rem] pr-[0.75rem] pl-[0rem] gap-[1.937rem] sm:p-[0.938rem] sm:box-border">
        <div className="self-stretch flex flex-row items-start justify-start">
          <div className="flex-1 relative h-[4.75rem]">
            <b className="absolute top-[1.563rem] left-[0rem] text-[1.375rem] tracking-[0.04em] capitalize inline-block w-[17.119rem]">
              {hotelName}
            </b>
            <div className="absolute top-[0rem] left-[0rem] tracking-[0.02em] text-gray-100 inline-block w-[10.8rem]">
              {roomType}
            </div>
            <div className="absolute top-[3.563rem] left-[0rem] w-[12.675rem] h-[1.188rem] text-cornflowerblue-200">
              <div className="absolute top-[0rem] left-[4.004rem] tracking-[0.04em] inline-block w-[8.669rem]">
                {reviewCount}
              </div>
              <div className="absolute top-[0rem] left-[0rem] w-[3.381rem] h-[1.188rem] text-darkslategray-300">
                <div className="absolute top-[0rem] left-[1.616rem] tracking-[0.04em] font-medium inline-block w-[1.763rem]">
                  {rating}
                </div>
                <img
                  className="absolute h-[84.21%] w-[34.75%] top-[0%] right-[65.25%] bottom-[15.79%] left-[0%] max-w-full overflow-hidden max-h-full"
                  alt=""
                  src={price}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="relative w-[10.281rem] h-[5.225rem] text-[1.375rem]">
          <div className="absolute top-[0rem] left-[0rem] w-[7rem] h-[1.625rem]">
            <b className="absolute top-[0rem] left-[0rem] tracking-[0.02em] capitalize">
              {discountPrice}
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
  );
};

export default ResultsBox;
