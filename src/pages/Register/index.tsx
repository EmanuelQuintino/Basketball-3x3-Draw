import { Container } from "./style";
import { athleteDataTypes } from "../../@types/athlete";
import { useEffect, useState } from "react";
import { FormRegister } from "../../components/FormRegister";
import { CardPot } from "../../components/CardPot";

const athletesStorage: athleteDataTypes[] = [
  { id: "1", name: "A1", pot: 1 },
  { id: "2", name: "A2", pot: 1 },
  { id: "3", name: "A3", pot: 1 },
  { id: "4", name: "A4", pot: 1 },
  { id: "5", name: "A5", pot: 1 },
  { id: "6", name: "A6", pot: 1 },
  { id: "7", name: "B1", pot: 2 },
  { id: "8", name: "B2", pot: 2 },
  { id: "9", name: "B3", pot: 2 },
  { id: "10", name: "B4", pot: 2 },
  { id: "11", name: "B5", pot: 2 },
  { id: "12", name: "B6", pot: 2 },
  { id: "13", name: "C1", pot: 3 },
  { id: "14", name: "C2", pot: 3 },
  { id: "15", name: "C3", pot: 3 },
  { id: "16", name: "C4", pot: 3 },
  { id: "17", name: "C5", pot: 3 },
  { id: "18", name: "C6", pot: 3 },
  { id: "19", name: "D1", pot: 4 },
  { id: "20", name: "D2", pot: 4 },
  { id: "21", name: "D3", pot: 4 },
  { id: "22", name: "D4", pot: 4 },
  { id: "23", name: "D5", pot: 4 },
  { id: "24", name: "D6", pot: 4 },
];

export function Register() {
  const [listAthletes, setListAthletes] = useState([] as athleteDataTypes[]);

  const port1 = athletesStorage.filter((athlete) => athlete.pot == 1);
  const port2 = athletesStorage.filter((athlete) => athlete.pot == 2);
  const port3 = athletesStorage.filter((athlete) => athlete.pot == 3);
  const port4 = athletesStorage.filter((athlete) => athlete.pot == 4);

  useEffect(() => {
    const athletesFromStorage = JSON.parse(
      localStorage.getItem("@basketball-draw:athletes") || "[]"
    );

    setListAthletes(athletesFromStorage);
  }, []);

  console.log(listAthletes);

  return (
    <Container>
      <FormRegister />

      <div className="pots">
        <CardPot name="POTE 1" athletes={port1} />
        <CardPot name="POTE 2" athletes={port2} />
        <CardPot name="POTE 3" athletes={port3} />
        <CardPot name="POTE 4" athletes={port4} />
      </div>
    </Container>
  );
}
