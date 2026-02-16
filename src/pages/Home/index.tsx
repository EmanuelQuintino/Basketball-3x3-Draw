import { useEffect, useState } from "react";
import { athleteDataTypes } from "../../@types/athlete";
import {
  KEY_ATHLETES_STORAGE,
  KEY_DRAWN_ATHLETES_STORAGE,
} from "../../configs/keyAthletesStorage";
import { Container } from "./style";

export function Home() {
  const [arrayAthletes, setArrayAthletes] = useState<athleteDataTypes[]>([]);
  const [drawnAthletes, setDrawnAthletes] = useState<athleteDataTypes[]>([]);
  const [drawnAthlete, setDrawnAthlete] = useState<athleteDataTypes | null>(null);

  const arrayToShow: athleteDataTypes[] = [];

  for (let i = 0; i < 4; i++) {
    const list = drawnAthletes.filter((value) => value.pot === i + 1);
    for (let j = 0; j < 6; j++) {
      arrayToShow.push(
        list[j]
          ? list[j]
          : { id: `${i}-${j}`, name: "-", pot: (i + 1) as athleteDataTypes["pot"] },
      );
    }
  }

  function drawAthlete() {
    if (!arrayAthletes || arrayAthletes.length === 0) {
      alert("Não há atletas cadastrados. Adicione (+) para realizar o sorteio.");
      return;
    }

    const filteredAthletes = arrayAthletes.filter((athlete) => {
      return !drawnAthletes.find((drawn) => drawn.id == athlete.id);
    });

    if (filteredAthletes.length == 0) {
      alert("Todos os atletas já foram sorteados!");
      return;
    }

    const minPot = Math.min(...[...new Set(filteredAthletes.map((value) => value.pot))]);

    const athletesToDraw = filteredAthletes.filter((value) => value.pot == minPot);

    const athleteDrawn = athletesToDraw.sort(() => Math.random() - 0.5)[0];

    localStorage.setItem(
      KEY_DRAWN_ATHLETES_STORAGE,
      JSON.stringify([...drawnAthletes, athleteDrawn]),
    );

    setDrawnAthletes((prevValue) => [...prevValue, athleteDrawn]);
    setDrawnAthlete(athleteDrawn);
  }

  const clearDrawnAthletes = () => {
    if (window.confirm("Deseja limpar sorteio?")) {
      localStorage.removeItem(KEY_DRAWN_ATHLETES_STORAGE);
      setDrawnAthletes([]);
      setDrawnAthlete(null);
    }
  };

  useEffect(() => {
    const athletesFromStorage: athleteDataTypes[] = JSON.parse(
      localStorage.getItem(KEY_ATHLETES_STORAGE) || "[]",
    );

    const drawnFromStorage: athleteDataTypes[] = JSON.parse(
      localStorage.getItem(KEY_DRAWN_ATHLETES_STORAGE) || "[]",
    );

    athletesFromStorage.sort((a, b) => a.pot - b.pot);
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

      <section className="tableMobile">
        <table className="drawTable">
          <thead>
            <tr>
              <th>TIME 1</th>
              <th>TIME 2</th>
              <th>TIME 3</th>
            </tr>
          </thead>

          <tbody>
            <tr className="trForSpace"></tr>

            {[1, 2, 3, 4].map((pot) => (
              <tr key={pot} className={`pot${pot}`}>
                {[1, 2, 3].map((value) => (
                  <td key={`${pot}-${value}`}>
                    {arrayToShow[(pot - 1) * 6 + (value - 1)].name}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>

        <table className="drawTable">
          <thead>
            <tr>
              <th>TIME 4</th>
              <th>TIME 5</th>
              <th>TIME 6</th>
            </tr>
          </thead>

          <tbody>
            <tr className="trForSpace"></tr>

            {[1, 2, 3, 4].map((pot) => (
              <tr key={pot} className={`pot${pot}`}>
                {[4, 5, 6].map((value) => (
                  <td key={`${pot}-${value}`}>
                    {arrayToShow[(pot - 1) * 6 + (value - 1)].name}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      <section className="tableDesktop">
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
            <tr className="trForSpace"></tr>

            {[1, 2, 3, 4].map((pot) => (
              <tr key={pot} className={`pot${pot}`}>
                {[1, 2, 3, 4, 5, 6].map((value) => (
                  <td key={`${pot}-${value}`}>
                    {arrayToShow[(pot - 1) * 6 + (value - 1)].name}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </Container>
  );
}
