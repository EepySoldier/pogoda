export const getIcon = (iconName: string): string => {
  switch (iconName) {
    case "snow":
      return "❄️";
    case "rain":
      return "💧";
    case "fog":
      return "🌫️";
    case "wind":
      return "💨";
    case "cloudy":
      return "☁️";
    case "partly-cloudy-day":
      return "⛅";
    case "partly-cloudy-night":
      return "☁️";
    case "clear-day":
      return "☀️";
    case "clear-night":
      return "🌙";
    default:
      return "🌤️";
  }
};

export const formatDate = (dateString: string): string => {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", { weekday: "short", day: "numeric" });
};
