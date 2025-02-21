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
    <div className="flex justify-between p-8 h-64">
      <div className="flex flex-col justify-between">
        <div>
          <p className="text-5xl text-[#dde0e4] font-semibold">
            {formattedAddress}
          </p>
          <p className="text-[#9399a2]">{description}</p>
        </div>
        <div className="text-6xl text-[#f0f1f1] font-semibold">
          {temperature}°C
        </div>
      </div>
      <img
        src={WeatherIcons[icon]}
        alt={icon}
        className="w-60"
      />
    </div>
  );
};