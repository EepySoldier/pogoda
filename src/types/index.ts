export type DayForecast = {
  datetime: string;
  temp: number;
  tempmax: number;
  tempmin: number;
  conditions: string;
  icon: string;
};

export type CurrentConditions = {
  datetime: string;
  temp: number;
  humidity: number;
  windspeed: number;
  conditions: string;
  icon: string;
};

export type WeatherData = {
  resolvedAddress: string;
  description: string;
  currentConditions: CurrentConditions;
  days: DayForecast[];
};
