import type { WeatherData } from "../types";
import { getIcon } from "../utils/helpers";

type Props = {
  data: WeatherData;
};

export const CurrentWeather = ({ data }: Props) => {
  const { currentConditions, resolvedAddress, description } = data;

  return (
    <div className="weather-card">
      <div className="card-header">
        <h2>{resolvedAddress}</h2>
        <div className="weather-icon-large">
          {getIcon(currentConditions.icon)}
        </div>
      </div>
      <div className="card-body">
        <p className="temp">{Math.round(currentConditions.temp)}°C</p>
        <p className="desc">{currentConditions.conditions}</p>
        <p className="summary">{description}</p>

        <div className="details">
          <div className="detail-item">
            <span>💧 Humidity</span>
            <span>{currentConditions.humidity}%</span>
          </div>
          <div className="detail-item">
            <span>💨 Wind</span>
            <span>{currentConditions.windspeed} km/h</span>
          </div>
        </div>
      </div>
    </div>
  );
};
