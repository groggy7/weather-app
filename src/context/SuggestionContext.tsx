import React from "react";
import { Location } from "./types";

interface SuggestionContextType {
  suggestions: Location[];
  searchSuggestions: (loc: string) => void;
}

export const SuggestionContext = React.createContext<SuggestionContextType>({
  suggestions: [] as Location[],
  searchSuggestions: (loc: string) => {},
});

type PropsType = {
  children: React.ReactNode;
};

export default function SuggestionProvider({ children }: PropsType) {
  const [suggestions, setSuggestions] = React.useState<Location[]>([]);

  async function searchSuggestions(loc: string) {
    if (loc.length <= 2) {
      setSuggestions([]);
    } else {
      const key = import.meta.env.VITE_SEARCH_KEY;
      const URL = import.meta.env.VITE_SEARCH_URL;
      const res = await fetch(`${URL}?key=${key}&q=${loc}`);
      const data = await res.json();
      setSuggestions(data);
    }
  }

  return (
    <SuggestionContext.Provider value={{ suggestions, searchSuggestions }}>
      {children}
    </SuggestionContext.Provider>
  );
}
