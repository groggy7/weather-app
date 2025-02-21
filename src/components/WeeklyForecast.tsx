import React from "react";
import { WeatherIcons } from "./icons";

const DayForecast = ({ day, icon, condition, highTemp, lowTemp, isLast }) => {
  const textRef = React.useRef<HTMLSpanElement>(null);
  const containerRef = React.useRef<HTMLDivElement>(null);
  const [isTextTruncated, setIsTextTruncated] = React.useState(false);

  React.useEffect(() => {
    const checkTruncation = () => {
      if (textRef.current && containerRef.current) {
        setIsTextTruncated(
          textRef.current.scrollWidth > containerRef.current.clientWidth
        );
      }
    };

    checkTruncation();
    window.addEventListener('resize', checkTruncation);
    return () => window.removeEventListener('resize', checkTruncation);
  }, [condition]);

  return (
    <React.Fragment>
      <div className="grid grid-cols-[90px_1fr_70px] md:grid-cols-[100px_1fr_80px] items-center p-2 rounded-xl transition-all duration-300 hover:bg-[#35455e] group">
        <span className="text-sm md:text-base truncate pr-2">{day}</span>
        <div className="flex gap-2 items-center min-w-0">
          <img
            src={WeatherIcons[icon]}
            alt={condition}
            className="w-8 md:w-10 shrink-0"
          />
          <div className="relative group/tooltip min-w-0">
            <div className="overflow-hidden" ref={containerRef}>
              <span 
                ref={textRef}
                className="text-[#c4cad3] font-semibold text-sm md:text-base truncate opacity-60 group-hover:opacity-100 transition-opacity block"
              >
                {condition}
              </span>
            </div>
            {isTextTruncated && (
              <span className="invisible group-hover/tooltip:visible absolute left-1/2 -translate-x-1/2 -top-10 bg-[#1B2433] text-white px-3 py-1.5 rounded-lg text-xs whitespace-nowrap z-20 shadow-lg">
                {condition}
                <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-[#1B2433] rotate-45"></span>
              </span>
            )}
          </div>
        </div>
        <span className="flex justify-end text-sm md:text-base">
          <span className="text-[#c4cad3] font-semibold opacity-60 group-hover:opacity-100 transition-opacity">
            {highTemp}
          </span>
          <span className="mx-1">/</span>
          <span>{lowTemp}</span>
        </span>
      </div>
      {!isLast && <div className="bg-[#35455e] w-full h-[2px] my-2 opacity-40"></div>}
    </React.Fragment>
  );
};

export const WeeklyForecast = ({ forecast }) => {
  return (
    <div className="text-[#9399a2] bg-[#202b3b] rounded-3xl p-3 md:p-8 flex flex-col gap-3 md:gap-4 min-w-[400px]">
      <h3 className="text-sm md:text-base font-semibold">7-DAY FORECAST</h3>
      {forecast.map((day, index) => (
        <DayForecast
          key={day.day}
          day={day.day}
          icon={day.icon}
          condition={day.condition}
          highTemp={day.highTemp}
          lowTemp={day.lowTemp}
          isLast={index === forecast.length - 1}
        />
      ))}
    </div>
  );
};