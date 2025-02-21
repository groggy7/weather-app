import React from "react";
import { WeatherIcons } from "./icons";

const DayForecast = ({ day, icon, condition, highTemp, lowTemp, isLast }) => {
  return (
    <React.Fragment>
      <div className="grid grid-cols-[70px_1fr_60px] md:grid-cols-[80px_1fr_60px] items-center">
        <span className="text-base md:text-lg">{day}</span>
        <div className="flex gap-2 items-center min-w-0">
          <img
            src={WeatherIcons[icon]}
            alt={condition}
            className="w-10 md:w-12 shrink-0"
          />
          <span className="text-[#c4cad3] font-semibold text-base md:text-lg truncate">
            {condition}
          </span>
        </div>
        <span className="flex justify-end text-base md:text-lg">
          <span className="text-[#c4cad3] font-semibold">
            {highTemp}
          </span>
          <span className="mx-1">/</span>
          <span>{lowTemp}</span>
        </span>
      </div>
      {!isLast && <div className="bg-[#35455e] w-full h-[2px] my-2"></div>}
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