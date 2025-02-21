import React from "react";
import { WeatherIcons } from "./icons";

const DayForecast = ({ day, icon, condition, highTemp, lowTemp, isLast }) => {
  return (
    <React.Fragment>
      <div className="grid grid-cols-[80px_1fr_60px] items-center">
        <span>{day}</span>
        <div className="flex gap-2 items-center">
          <img
            src={WeatherIcons[icon]}
            alt={condition}
            className="w-12"
          />
          <span className="text-[#c4cad3] font-semibold">{condition}</span>
        </div>
        <span className="flex justify-end">
          <span className="text-[#c4cad3] font-semibold w-4 text-center">
            {highTemp}
          </span>
          <span className="ml-1">/</span>
          <span className="w-4 text-center">{lowTemp}</span>
        </span>
      </div>
      {!isLast && <div className="bg-[#35455e] w-full h-[2px]"></div>}
    </React.Fragment>
  );
};

export const WeeklyForecast = ({ forecast }) => {
  return (
    <div className="text-[#9399a2] bg-[#202b3b] rounded-3xl p-8 flex flex-col gap-6 justify-between w-120 min-h-220">
      <h3 className="text-sm font-semibold">7-DAY FORECAST</h3>
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