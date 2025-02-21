import React from "react";
import { WeatherIcons } from "./icons";

export const CurrentWeather = ({ weatherData }) => {
  const formattedAddress = 
    (weatherData?.address?.charAt(0)?.toUpperCase() ?? "") +
    (weatherData?.address?.slice(1) ?? "");
  
  const icon = weatherData?.days[0].icon;
  const temperature = Math.round(Number(weatherData?.days[0].temp));
  const description = weatherData?.days[0].description;

  return (
    <div className="flex flex-col sm:flex-row justify-between p-3 md:p-8 h-auto sm:h-64">
      <div className="flex flex-col justify-between mb-4 sm:mb-0">
        <div>
          <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-[#dde0e4] font-semibold truncate">
            {formattedAddress}
          </p>
          <p className="text-base md:text-lg text-[#9399a2]">{description}</p>
        </div>
        <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#f0f1f1] font-semibold mt-4 sm:mt-0">
          {temperature}°C
        </div>
      </div>
      <img
        src={WeatherIcons[icon]}
        alt={icon}
        className="w-28 sm:w-32 md:w-48 lg:w-60 self-center"
      />
    </div>
  );
};