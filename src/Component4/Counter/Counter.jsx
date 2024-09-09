import CounterCard from "./CounterCard";

const counterData = [
  {
    id: 1,
    counterNumber: 22,
    counterTitle: "Years Experience",
    counterDesc: "Profesionaly optimize Design team feature main issue don.",
    counterSuffex: "+",
  },
  {
    id: 2,
    counterNumber: 86,
    counterTitle: "Client Satisfaction",
    counterDesc: "Profesionaly optimize Design team feature main issue don.",
    counterSuffex: "%",
  },
  {
    id: 3,
    counterNumber: 25,
    counterTitle: "Awards Wining",
    counterDesc: "Profesionaly optimize Design team feature main issue don.",
    counterSuffex: "+",
  },
];

const Counter = () => {
  return (
    <section className="pt-28 bg-HeadingColor-0">
      <div className="Container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-7 lg:gap-0 lg:grid-cols-3 items-center justify-center">
          {counterData.map(
            ({
              id,
              counterNumber,
              counterTitle,
              counterDesc,
              counterSuffex,
            }) => {
              return (
                <div key={id}>
                  <CounterCard
                    counterNumber={counterNumber}
                    counterTitle={counterTitle}
                    counterDesc={counterDesc}
                    counterSuffex={counterSuffex}
                  />
                </div>
              );
            }
          )}
        </div>
      </div>
    </section>
  );
};

export default Counter;
