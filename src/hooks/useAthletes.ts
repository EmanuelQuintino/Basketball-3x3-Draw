import { useContext } from "react";
import { AthletesContext } from "../contexts/athletes-context";

export function useAthletes() {
  const context = useContext(AthletesContext);

  if (!context) {
    throw new Error("useAthletes must be used within AthletesProvider");
  }

  return context;
}
