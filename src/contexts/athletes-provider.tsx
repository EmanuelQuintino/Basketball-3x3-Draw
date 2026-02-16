import { ReactNode, useState } from "react";
import { athleteDataTypes } from "../@types/athlete";
import { athletesStorage } from "../configs/athletesStorage";
import { KEY_ATHLETES_STORAGE } from "../configs/keyAthletesStorage";
import { AthletesContext } from "./athletes-context";

export function AthletesProvider({ children }: { children: ReactNode }) {
  const [listAthletes, setListAthletes] = useState<athleteDataTypes[]>(() => {
    const storage = localStorage.getItem(KEY_ATHLETES_STORAGE);
    return storage ? JSON.parse(storage) : [];
  });

  function addAthlete(athlete: athleteDataTypes) {
    const newList = [...listAthletes, athlete];
    newList.sort((a, b) => a.pot - b.pot);
    setListAthletes(newList);
    localStorage.setItem(KEY_ATHLETES_STORAGE, JSON.stringify(newList));
  }

  function deleteAthlete(id: string) {
    const filteredAthletes = listAthletes.filter((athlete) => athlete.id != id);
    setListAthletes(filteredAthletes);
    localStorage.setItem(KEY_ATHLETES_STORAGE, JSON.stringify(filteredAthletes));
  }

  const clearAthletes = () => {
    if (window.confirm("Deseja limpar todos os nomes cadastrados?")) {
      localStorage.removeItem(KEY_ATHLETES_STORAGE);
      setListAthletes([]);
    }
  };

  function autoCompleteTableAthletes() {
    const resp = confirm(
      "Deseja preencher automaticamente todas as tabelas? Esta ação substituirá os dados atuais.",
    );

    if (resp) {
      setListAthletes(athletesStorage);
      localStorage.setItem(KEY_ATHLETES_STORAGE, JSON.stringify(athletesStorage));
    }
  }

  return (
    <AthletesContext.Provider
      value={{
        listAthletes,
        setListAthletes,
        addAthlete,
        deleteAthlete,
        clearAthletes,
        autoCompleteTableAthletes,
      }}
    >
      {children}
    </AthletesContext.Provider>
  );
}
