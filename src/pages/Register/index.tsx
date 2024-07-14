import { Container } from "./style";
import { athleteDataTypes } from "../../@types/athlete";
import { useEffect, useState } from "react";
import { FormRegister } from "../../components/FormRegister";

export function Register() {
  const [listAthletes, setListAthletes] = useState([] as athleteDataTypes[]);

  useEffect(() => {
    const athletesFromStorage = JSON.parse(
      localStorage.getItem("@basketball-draw:athletes") || "[]"
    );

    setListAthletes(athletesFromStorage);
  }, []);

  console.log(listAthletes);

  return (
    <Container>
      <h2>Registar Atleta</h2>

      <FormRegister />
    </Container>
  );
}
