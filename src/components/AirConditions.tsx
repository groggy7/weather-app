import React from "react";
import conditionsFeel from "../assets/conditions_feel.svg";
import conditionsWind from "../assets/conditions_wind.svg";
import conditionsRain from "../assets/conditions_rain.svg";
import conditionsUV from "../assets/conditions_uv.svg";

const ConditionItem = ({ icon, title, value, unit }) => {
  return (
    <div className="px-8 relative">
      <img src={icon} alt={`${title} icon`} className="absolute left-0 top-0" />
      <h3 className="text-[#9399a2] text-xl">{title}</h3>
      <span className="text-[#c4cad3] font-semibold text-3xl">
        {value} {unit}
      </span>
    </div>
  );
};

export const AirConditions = ({ conditions }) => {
  const conditionItems = [
    {
      icon: conditionsFeel,
      title: "Real Feel",
      value: Math.round(Number(conditions?.feelslike)),
      unit: "°C",
    },
    {
      icon: conditionsWind,
      title: "Wind",
      value: conditions?.windspeed,
      unit: "km/h",
    },
    {
      icon: conditionsRain,
      title: "Humidity",
      value: conditions?.humidity,
      unit: "%",
    },
    {
      icon: conditionsUV,
      title: "UV Index",
      value: conditions?.uvindex,
      unit: "",
    },
  ];

  return (
    <div className="bg-[#202B3B] rounded-3xl p-8">
      <h2 className="text-[#9399a2] font-semibold text-sm mb-4">
        AIR CONDITIONS
      </h2>
      <div className="grid grid-cols-2 grid-rows-2 gap-8">
        {conditionItems.map((item) => (
          <ConditionItem
            key={item.title}
            icon={item.icon}
            title={item.title}
            value={item.value}
            unit={item.unit}
          />
        ))}
      </div>
    </div>
  );
};