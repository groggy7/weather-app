import React from "react";
import { WeatherContext } from "../context/WeatherContext";
import { SearchBar } from "../components/SearchBar";
import { CurrentWeather } from "../components/CurrentWeather";
import { TodayForecast } from "../components/TodayForecast";
import { AirConditions } from "../components/AirConditions";
import { WeeklyForecast } from "../components/WeeklyForecast";
import spinner from "../assets/loading.svg";

export default function Home() {
  const { weatherData, loading } = React.useContext(WeatherContext);

  const getDayName = (addDays) => {
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

  const weekForecast = React.useMemo(() => {
    return weatherData?.days.map((day, i) => ({
      day: i === 0 ? "Today" : getDayName(i),
      icon: day.icon,
      condition: day.conditions,
      highTemp: Math.round(Number(day.tempmax)),
      lowTemp: Math.round(Number(day.tempmin)),
    })) ?? [];
  }, [weatherData]);

  if (loading) {
    return (
      <div className="flex justify-center items-center w-screen h-screen">
        <img src={spinner} alt="loading" className="w-12 h-12" />
      </div>
    );
  }

  return (
    <div className="flex gap-6 h-full w-full text-white p-6 flex-wrap">
      <div className="flex-auto flex flex-col gap-6 justify-between">
        <SearchBar />
        <CurrentWeather weatherData={weatherData} />
        <TodayForecast hourlyData={weatherData?.days[0].hours} />
        <AirConditions conditions={weatherData?.days[0]} />
      </div>
      <WeeklyForecast forecast={weekForecast} />
    </div>
  );
}