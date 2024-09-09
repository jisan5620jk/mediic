/* eslint-disable react/prop-types */
import CountUp from "react-countup";

const CounterCard = ({
  counterShape,
  counterNumber,
  counterDesc,
  counterSuffex,
}) => {
  return (
    <div className="flex items-center gap-5 sm:gap-10 relative">
      <img
        src={counterShape}
        className="absolute top-1/2 -translate-y-1/2 right-0 hidden xl:block"
      />
      <div>
        <CountUp
          start={-11}
          end={counterNumber}
          suffix={counterSuffex}
          className="font-FiraSans text-3xl sm:text-4xl md:text-[60px] text-white font-semibold"
        />
      </div>
      <p className="flex-1 font-FiraSans text-[15px] text-TextColor-0 uppercase xl:mr-10">
        {counterDesc}
      </p>
    </div>
  );
};

export default CounterCard;
