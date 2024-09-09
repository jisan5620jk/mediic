/* eslint-disable react/prop-types */
import CountUp from "react-countup";

const CounterCard = ({
  counterNumber,
  counterTitle,
  counterDesc,
  counterSuffex,
}) => {
  return (
    <div className="sm:text-center relative z-10">
      <div className="flex flex-col sm:flex-row gap-7 items-start sm:items-center">
        <div className="relative before:absolute before:-bottom-5 before:left-0 before:w-full before:h-[1px] before:bg-PrimaryColor-0 ">
          <CountUp
            start={-15}
            end={counterNumber}
            suffix={counterSuffex}
            className="font-FiraSans text-[70px] leading-10 text-white font-bold"
          />
        </div>
        <div className="!block text-left">
          <p className="font-FiraSans text-[22px] text-white font-semibold uppercase">
            {counterTitle}
          </p>
          <p className="font-FiraSans text-TextColor-0 pt-2">{counterDesc}</p>
        </div>
      </div>
    </div>
  );
};

export default CounterCard;
