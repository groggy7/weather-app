import React from "react";
import { WeatherIcons } from "./icons";

const HourlyItem = ({ hour, temp, icon }) => {
  return (
    <div className="flex flex-col justify-between items-center gap-2">
      <span className="text-[#9399a2] font-semibold">{hour}</span>
      <img
        src={WeatherIcons[icon]}
        alt={icon}
      />
      <span className="text-2xl">{Math.round(Number(temp))}°C</span>
    </div>
  );
};

const Divider = () => <div className="w-[2px] bg-[#35455e] self-stretch"></div>;

export const TodayForecast = ({ hourlyData }) => {
  const timeSlots = [
    { time: "6:00 AM", index: 6 },
    { time: "9:00 AM", index: 9 },
    { time: "12:00 PM", index: 12 },
    { time: "3:00 PM", index: 15 },
    { time: "6:00 PM", index: 18 },
    { time: "9:00 PM", index: 21 },
  ];

  return (
    <div className="bg-[#202B3B] rounded-3xl p-8">
      <h2 className="text-[#9399a2] font-semibold text-sm mb-4">
        TODAY'S FORECAST
      </h2>
      <div className="bg-[#202B3B] flex gap-4 justify-between px-6">
        {timeSlots.map((slot, index) => (
          <React.Fragment key={slot.time}>
            <HourlyItem 
              hour={slot.time} 
              temp={hourlyData?.[slot.index].temp} 
              icon={hourlyData?.[slot.index].icon} 
            />
            {index < timeSlots.length - 1 && <Divider />}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};