import { useState } from "react";
import type { WeatherData } from "../types";

const API_KEY = import.meta.env.VITE_API_KEY;
const BASE_URL =
  "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline";

export const useWeather = () => {
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const fetchWeather = async (location: string) => {
    if (!location) return;

    setLoading(true);
    setError(null);

    try {
      const response = await fetch(
        `${BASE_URL}/${location}?unitGroup=metric&key=${API_KEY}&contentType=json`,
      );

      if (!response.ok) {
        if (response.status === 400) throw new Error("Location not found.");
        if (response.status === 401) throw new Error("Invalid API Key.");
        if (response.status === 429)
          throw new Error("Daily request limit reached.");
        throw new Error("Failed to fetch weather data.");
      }

      const data: WeatherData = await response.json();
      setWeather(data);
    } catch (err) {
      setError((err as Error).message);
      setWeather(null);
    } finally {
      setLoading(false);
    }
  };

  return { weather, loading, error, fetchWeather };
};
