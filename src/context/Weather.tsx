import React from "react";
import { WeatherData } from "./types";

type WeatherContextType = {
  weatherData: WeatherData | null;
  location: string;
  loading: boolean;
};

export const WeatherContext = React.createContext<WeatherContextType>({
  weatherData: null,
  location: "bursa",
  loading: false,
});

export default function WeatherProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [weatherData, setWeatherData] = React.useState(null);
  const [location, setLocation] = React.useState("bursa");
  const [loading, setLoading] = React.useState(false);

  const baseURL = import.meta.env.VITE_API_URL;
  const apiKey = import.meta.env.VITE_API_KEY;

  React.useEffect(() => {
    async function fetchWeatherData() {
      setLoading(true);
      const today = new Date();
      const sevenDaysLater = new Date(today);
      sevenDaysLater.setDate(today.getDate() + 6);

      const formatDate = (date: Date) => {
        return date.toISOString().split("T")[0];
      };

      try {
        const res = await fetch(
          `${baseURL}/${location}/${formatDate(today)}/${formatDate(
            sevenDaysLater
          )}?unitGroup=metric&include=hours&key=${apiKey}&contentType=json`
        );
        const data = await res.json();
        console.log(data);
        setLoading(false);
        setWeatherData(data);
      } catch (error) {
        console.error(error);
      }
    }
    fetchWeatherData();
  }, [location]);

  return (
    <WeatherContext.Provider
      value={{
        weatherData,
        location,
        loading,
      }}
    >
      {children}
    </WeatherContext.Provider>
  );
}
