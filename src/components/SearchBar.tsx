import React, { useState } from "react";

type Props = {
  onSearch: (city: string) => void;
};

export const SearchBar = ({ onSearch }: Props) => {
  const [city, setCity] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (city.trim()) {
      onSearch(city);
      setCity("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="search-bar">
      <input
        type="text"
        placeholder="Enter city (e.g., London, UK)..."
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <button type="submit">Search</button>
    </form>
  );
};
