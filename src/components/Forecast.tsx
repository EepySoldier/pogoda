import type { DayForecast } from "../types";
import { getIcon, formatDate } from "../utils/helpers";

type Props = {
  days: DayForecast[];
};

export const Forecast = ({ days }: Props) => {
  const next5Days = days.slice(1, 6);

  return (
    <div className="forecast-list">
      <h3>5-Day Forecast</h3>
      <div className="forecast-grid">
        {next5Days.map((day) => (
          <div key={day.datetime} className="forecast-item">
            <p className="date">{formatDate(day.datetime)}</p>
            <div className="icon">{getIcon(day.icon)}</div>
            <div className="forecast-temp">
              <span className="max">{Math.round(day.tempmax)}°</span>
              <span className="min">{Math.round(day.tempmin)}°</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
