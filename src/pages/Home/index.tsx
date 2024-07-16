import { Container } from "./style";
import { athleteDataTypes } from "../../@types/athlete";
import { KEY_ATHLETES_STORAGE } from "../../configs/keyAthletesStorage";
import { useEffect, useState } from "react";

export function Home() {
  const [arrayAthletes, setArrayAthletes] = useState<athleteDataTypes[]>([]);
  const [drawnAthletes, setDrawnAthletes] = useState<athleteDataTypes[]>([]);
  const [drawnAthlete, setDrawnAthlete] = useState<athleteDataTypes | null>(null);

  function drawAthlete() {
    if (drawnAthletes.length >= arrayAthletes.length) {
      alert("Todos os atletas já foram sorteados.");
      return;
    }

    const pots = arrayAthletes.reduce((acc, athlete) => {
      if (!acc[athlete.pot]) {
        acc[athlete.pot] = [];
      }
      acc[athlete.pot].push(athlete);
      return acc;
    }, {} as Record<number, athleteDataTypes[]>);

    console.log(pots);
  }

  const clearDrawnAthletes = () => {
    if (window.confirm("Deseja limpar sorteio?")) {
      localStorage.removeItem("@basketball-draw:drawn");
      setDrawnAthletes([]);
      setDrawnAthlete(null);
    }
  };

  useEffect(() => {
    const athletesFromStorage = JSON.parse(
      localStorage.getItem(KEY_ATHLETES_STORAGE) || "[]"
    );
    const drawnFromStorage = JSON.parse(
      localStorage.getItem("@basketball-draw:drawn") || "[]"
    );

    setArrayAthletes(athletesFromStorage);
    setDrawnAthletes(drawnFromStorage);
    setDrawnAthlete(drawnFromStorage[drawnFromStorage.length - 1] || null);
  }, []);

  return (
    <Container>
      <section>
        <strong className="nameDraw">{drawnAthlete ? drawnAthlete.name : "-"}</strong>
      </section>

      <section className="drawButtons">
        <button className="drawButton" onClick={drawAthlete}>
          Sortear
        </button>

        <button className="clearButton" onClick={clearDrawnAthletes}>
          Limpar
        </button>
      </section>

      <section>
        <table className="drawTable">
          <thead>
            <tr>
              <th>TIME 1</th>
              <th>TIME 2</th>
              <th>TIME 3</th>
              <th>TIME 4</th>
              <th>TIME 5</th>
              <th>TIME 6</th>
            </tr>
          </thead>

          <tbody>
            <tr className="trForSpace">
              <td>{"⠀"}</td>
            </tr>

            {[1, 2, 3, 4].map((pot) => (
              <tr key={pot} className={`pot${pot}`}>
                {[1, 2, 3, 4, 5, 6].map((value, index) => (
                  <td key={value}>{index}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </Container>
  );
}
