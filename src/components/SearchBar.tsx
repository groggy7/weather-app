import React from "react";
import { SuggestionContext } from "../context/SuggestionContext";
import { WeatherContext } from "../context/WeatherContext";

export const SearchBar = () => {
  const { setLocation } = React.useContext(WeatherContext);
  const { suggestions, searchSuggestions } = React.useContext(SuggestionContext);

  const [search, setSearch] = React.useState("");
  const [input, setInput] = React.useState("");
  const [selectedIndex, setSelectedIndex] = React.useState(-1);
  const suggestionsRef = React.useRef(null);

  const handleKeyDown = (e) => {
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

  const selectSuggestion = (suggestion) => {
    setLocation(suggestion.name);
    setInput("");
    setSearch("");
    setSelectedIndex(-1);
  };

  React.useEffect(() => {
    searchSuggestions(search);
  }, [search, searchSuggestions]);

  return (
    <form onSubmit={(e) => e.preventDefault()} className="relative">
      <input
        type="text"
        name="location"
        value={input}
        className="bg-[#202B3B] w-full rounded-xl text-[#9197A0] h-12 p-4 outline-2"
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
                  isSelected ? "bg-gray-600 text-white" : "hover:bg-gray-600"
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
  );
};