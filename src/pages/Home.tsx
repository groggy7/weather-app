import React from "react";
import Sidebar from "../components/Sidebar";
import { SuggestionContext } from "../context/SuggestionContext";
import { Location } from "../context/types";

import conditionsFeel from "../assets/conditions_feel.svg";
import conditionsWind from "../assets/conditions_wind.svg";
import conditionsRain from "../assets/conditions_rain.svg";
import conditionsUV from "../assets/conditions_uv.svg";
import spinner from "../assets/loading.svg";
import clearDay from "../assets/weather-icons/clear-day.svg";
import clearNight from "../assets/weather-icons/clear-night.svg";
import cloudy from "../assets/weather-icons/cloudy.svg";
import fog from "../assets/weather-icons/fog.svg";
import rain from "../assets/weather-icons/rain.svg";
import wind from "../assets/weather-icons/wind.svg";
import snow from "../assets/weather-icons/snow.svg";
import partlyCloudyDay from "../assets/weather-icons/partly-cloudy-day.svg";
import partlyCloudyNight from "../assets/weather-icons/partly-cloudy-night.svg";

const weatherIcons = {
  "clear-day": clearDay,
  "clear-night": clearNight,
  "partly-cloudy-day": partlyCloudyDay,
  "partly-cloudy-night": partlyCloudyNight,
  "cloudy": cloudy,
  "fog": fog,
  "wind": wind,
  "rain": rain,
  "snow": snow,
} as const;

import { WeatherContext } from "../context/WeatherContext";

export default function Home() {
  const { weatherData, loading, setLocation } =
    React.useContext(WeatherContext);
  const { suggestions, searchSuggestions } =
    React.useContext(SuggestionContext);

  const [search, setSearch] = React.useState("");
  const [input, setInput] = React.useState("");
  const [selectedIndex, setSelectedIndex] = React.useState(-1);
  const suggestionsRef = React.useRef(null);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (!suggestions.length) return;

    if (e.key === "ArrowDown") {
      e.preventDefault();
      setSelectedIndex((prevIndex) =>
        prevIndex < suggestions.length - 1 ? prevIndex + 1 : 0
      );
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setSelectedIndex((prevIndex) =>
        prevIndex > 0 ? prevIndex - 1 : suggestions.length - 1
      );
    } else if (e.key === "Enter" && selectedIndex >= 0) {
      e.preventDefault();
      selectSuggestion(suggestions[selectedIndex]);
    } else if (e.key === "Escape") {
      setSearch("");
      setSelectedIndex(-1);
    }
  };

  const selectSuggestion = (suggestion: Location) => {
    setLocation(suggestion.name);
    setInput("");
    setSearch("");
    setSelectedIndex(-1);
  };

  React.useEffect(() => {
    searchSuggestions(search);
  }, [search]);

  const getDayName = (addDays: number) => {
    const days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    const today = new Date();
    const futureDate = new Date(today);
    futureDate.setDate(today.getDate() + addDays);
    return days[futureDate.getDay()];
  };

  const weekForecast =
    weatherData?.days.map((day, i) => ({
      day: i === 0 ? "Today" : getDayName(i),
      icon: day.icon,
      condition: day.conditions,
      highTemp: Math.round(Number(day.tempmax)),
      lowTemp: Math.round(Number(day.tempmin)),
    })) ?? [];

  return loading ? (
    <div className="flex justify-center items-center w-screen h-screen">
      <img src={spinner} alt="loading" className="w-12 h-12" />
    </div>
  ) : (
    <div className="flex gap-6 h-full w-full text-white p-6">
      <Sidebar />
      <div className="flex-auto flex flex-col gap-6 justify-between">
        <form onSubmit={(e) => e.preventDefault()} className="relative">
          <input
            type="text"
            name="location"
            value={input}
            className="bg-[#202B3B] w-full rounded-xl text-[#9197A0] h-12 p-4"
            placeholder="Search for a city"
            onChange={(e) => {
              setInput(e.target.value);
              setSearch(e.target.value);
            }}
            onKeyDown={handleKeyDown}
            aria-autocomplete="list"
            aria-controls="suggestions-list"
            aria-expanded={suggestions.length > 0}
            aria-activedescendant={
              selectedIndex >= 0 ? `suggestion-${selectedIndex}` : undefined
            }
          />
          {suggestions.length === 0 ? null : (
            <div
              ref={suggestionsRef}
              id="suggestions-list"
              role="listbox"
              className="absolute top-14 p-2 bg-gray-400 rounded-xl w-full"
            >
              {suggestions.map((suggestion, index) => {
                const isSelected = index === selectedIndex;
                return (
                  <div
                    id={`suggestion-${index}`}
                    key={suggestion.id}
                    role="option"
                    aria-selected={isSelected}
                    className={`p-2 cursor-pointer ${
                      isSelected
                        ? "bg-gray-600 text-white"
                        : "hover:bg-gray-600"
                    }`}
                    onClick={() => selectSuggestion(suggestion)}
                  >
                    {suggestion.name}
                  </div>
                );
              })}
            </div>
          )}
        </form>
        <div className="flex justify-between p-8 h-64">
          <div className="flex flex-col justify-between">
            <div>
              <p className="text-5xl text-[#dde0e4] font-semibold">
                {(weatherData?.address?.charAt(0)?.toUpperCase() ?? "") +
                  (weatherData?.address?.slice(1) ?? "")}
              </p>
              <p className="text-[#9399a2]">
                {weatherData?.days[0].description}
              </p>
            </div>
            <div className="text-6xl text-[#f0f1f1] font-semibold">
              {Math.round(Number(weatherData?.days[0].temp))}°C
            </div>
          </div>
          <img
            src={
              weatherIcons[
                weatherData?.days[0].icon as keyof typeof weatherIcons
              ]
            }
            alt={weatherData?.days[0].icon}
            className="w-60"
          />
        </div>
        <div className="bg-[#202B3B] rounded-3xl p-8">
          <h2 className="text-[#9399a2] font-semibold text-sm mb-4">
            TODAY'S FORECAST
          </h2>
          <div className="bg-[#202B3B] flex gap-4 justify-between px-6">
            <div className="flex flex-col justify-between items-center gap-2">
              <span className="text-[#9399a2] font-semibold">6:00 AM</span>
              <img
                src={
                  weatherIcons[
                    weatherData?.days[0].hours[6]
                      .icon as keyof typeof weatherIcons
                  ]
                }
                alt={weatherData?.days[0].icon}
              />
              <span className="text-2xl">
                {Math.round(Number(weatherData?.days[0].hours[6].temp))}°C
              </span>
            </div>
            <div className="w-[2px] bg-[#35455e] self-stretch"></div>
            <div className="flex flex-col justify-between items-center">
              <span className="text-[#9399a2] font-semibold">9:00 AM</span>
              <img
                src={
                  weatherIcons[
                    weatherData?.days[0].hours[9]
                      .icon as keyof typeof weatherIcons
                  ]
                }
                alt={weatherData?.days[0].icon}
              />
              <span className="text-2xl">
                {Math.round(Number(weatherData?.days[0].hours[9].temp))}°C
              </span>
            </div>
            <div className="w-[2px] bg-[#35455e] self-stretch"></div>
            <div className="flex flex-col justify-between items-center">
              <span className="text-[#9399a2] font-semibold">12:00 PM</span>
              <img
                src={
                  weatherIcons[
                    weatherData?.days[0].hours[12]
                      .icon as keyof typeof weatherIcons
                  ]
                }
                alt={weatherData?.days[0].icon}
              />
              <span className="text-2xl">
                {Math.round(Number(weatherData?.days[0].hours[12].temp))}°C
              </span>
            </div>
            <div className="w-[2px] bg-[#35455e] self-stretch"></div>
            <div className="flex flex-col justify-between items-center">
              <span className="text-[#9399a2] font-semibold">3:00 PM</span>
              <img
                src={
                  weatherIcons[
                    weatherData?.days[0].hours[15]
                      .icon as keyof typeof weatherIcons
                  ]
                }
                alt={weatherData?.days[0].icon}
              />
              <span className="text-2xl">
                {Math.round(Number(weatherData?.days[0].hours[15].temp))}°C
              </span>
            </div>
            <div className="w-[2px] bg-[#35455e] self-stretch"></div>
            <div className="flex flex-col justify-between items-center">
              <span className="text-[#9399a2] font-semibold">6:00 PM</span>
              <img
                src={
                  weatherIcons[
                    weatherData?.days[0].hours[18]
                      .icon as keyof typeof weatherIcons
                  ]
                }
                alt={weatherData?.days[0].icon}
              />
              <span className="text-2xl">
                {Math.round(Number(weatherData?.days[0].hours[18].temp))}°C
              </span>
            </div>
            <div className="w-[2px] bg-[#35455e] self-stretch"></div>
            <div className="flex flex-col justify-between items-center">
              <span className="text-[#9399a2] font-semibold">9:00 PM</span>
              <img
                src={
                  weatherIcons[
                    weatherData?.days[0].hours[21]
                      .icon as keyof typeof weatherIcons
                  ]
                }
                alt={weatherData?.days[0].icon}
              />
              <span className="text-2xl">
                {Math.round(Number(weatherData?.days[0].hours[21].temp))}°C
              </span>
            </div>
          </div>
        </div>
        <div className="bg-[#202B3B] rounded-3xl p-8">
          <h2 className="text-[#9399a2] font-semibold text-sm mb-4">
            AIR CONDITIONS
          </h2>
          <div className="grid grid-cols-2 grid-rows-2 gap-8">
            <div className="px-8 relative">
              <img
                src={conditionsFeel}
                alt="sun icon"
                className="absolute left-0 top-0"
              />
              <h3 className="text-[#9399a2] text-xl">Real Feel</h3>
              <span className="text-[#c4cad3] font-semibold text-3xl">
                {Math.round(Number(weatherData?.days[0].feelslike))}°C
              </span>
            </div>
            <div className="px-8 relative">
              <img
                src={conditionsWind}
                alt="sun icon"
                className="absolute left-0 top-0"
              />
              <h3 className="text-[#9399a2] text-xl">Wind</h3>
              <span className="text-[#c4cad3] font-semibold text-3xl">
                {weatherData?.days[0].windspeed} km/h
              </span>
            </div>
            <div className="px-8 relative">
              <img
                src={conditionsRain}
                alt="sun icon"
                className="absolute left-0 top-0"
              />
              <h3 className="text-[#9399a2] text-xl">Humidity</h3>
              <span className="text-[#c4cad3] font-semibold text-3xl">
                {weatherData?.days[0].humidity} %
              </span>
            </div>
            <div className="px-8 relative">
              <img
                src={conditionsUV}
                alt="sun icon"
                className="absolute left-0 top-0"
              />
              <h3 className="text-[#9399a2] text-xl">UV Index</h3>
              <span className="text-[#c4cad3] font-semibold text-3xl">
                {weatherData?.days[0].uvindex}
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="text-[#9399a2] bg-[#202b3b] rounded-3xl p-8 flex flex-col gap-6 justify-between w-120 min-h-220">
        <h3 className="text-sm">7 DAY FORECAST</h3>
        {weekForecast.map((day, index) => (
          <React.Fragment key={index}>
            <div className="grid grid-cols-[80px_1fr_60px] items-center">
              <span>{day.day}</span>
              <div className="flex gap-2 items-center">
                <img
                  src={weatherIcons[day.icon as keyof typeof weatherIcons]}
                  alt={day.condition}
                  className="w-12"
                />
                <span className="text-[#c4cad3] font-semibold">
                  {day.condition}
                </span>
              </div>
              <span className="flex justify-end">
                <span className="text-[#c4cad3] font-semibold w-4 text-center">
                  {day.highTemp}
                </span>
                <span className="ml-1">/</span>
                <span className="w-4 text-center">{day.lowTemp}</span>
              </span>
            </div>
            {index < 6 && <div className="bg-[#35455e] w-full h-[2px]"></div>}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}
