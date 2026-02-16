import { createContext } from "react";
import { athleteDataTypes } from "../@types/athlete";

export type AthletesContextProps = {
  listAthletes: athleteDataTypes[];
  setListAthletes: React.Dispatch<React.SetStateAction<athleteDataTypes[]>>;
  addAthlete: (athlete: athleteDataTypes) => void;
  deleteAthlete: (id: string) => void;
  clearAthletes: () => void;
  autoCompleteTableAthletes: () => void;
};

export const AthletesContext = createContext<AthletesContextProps | null>(null);
