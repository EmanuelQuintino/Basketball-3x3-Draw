import { Link } from "react-router-dom";
import { Container } from "./style";
import logoBasquete from "../../assets/basquete3x3.png";
import logoReprograma from "../../assets/logo-reprograma-jucas.png";
import { athleteDataTypes } from "../../@types/athlete";
import { useEffect, useState } from "react";

const athletesStorage: athleteDataTypes[] = [
  { id: 1, name: "A1", pot: 1 },
  { id: 2, name: "A2", pot: 1 },
  { id: 3, name: "A3", pot: 1 },
  { id: 4, name: "A4", pot: 1 },
  { id: 5, name: "A5", pot: 1 },
  { id: 6, name: "A6", pot: 1 },
  { id: 7, name: "B1", pot: 2 },
  { id: 8, name: "B2", pot: 2 },
  { id: 9, name: "B3", pot: 2 },
  { id: 10, name: "B4", pot: 2 },
  { id: 11, name: "B5", pot: 2 },
  { id: 12, name: "B6", pot: 2 },
  { id: 13, name: "C1", pot: 3 },
  { id: 14, name: "C2", pot: 3 },
  { id: 15, name: "C3", pot: 3 },
  { id: 16, name: "C4", pot: 3 },
  { id: 17, name: "C5", pot: 3 },
  { id: 18, name: "C6", pot: 3 },
  { id: 19, name: "D1", pot: 4 },
  { id: 20, name: "D2", pot: 4 },
  { id: 21, name: "D3", pot: 4 },
  { id: 22, name: "D4", pot: 4 },
  { id: 23, name: "D5", pot: 4 },
  { id: 24, name: "D6", pot: 4 },
];

localStorage.setItem("@basketball-draw:athletes", JSON.stringify(athletesStorage));

export function App() {
  const [arrayAthletes, setArrayAthletes] = useState([] as athleteDataTypes[]);
  const [drawAthletes, setDrawAthletes] = useState([] as athleteDataTypes[]);
  const [drawnAthlete, setDrawnAthlete] = useState<athleteDataTypes | null>(null);

  function drawAthlete() {
    if (drawAthletes.length == arrayAthletes.length) {
      alert("Todos os atletas já foram sorteados.");
      return;
    }

    const pot = Math.ceil((drawAthletes.length + 1) / 6);
    const potAthletes = arrayAthletes.filter((athlete) => athlete.pot == pot);

    const flag = true;
    while (flag) {
      const numDraw = Math.ceil(Math.random() * potAthletes.length);
      const athleteDrawn = potAthletes[numDraw - 1];

      if (!drawAthletes.some((athlete) => athlete.id == athleteDrawn.id)) {
        setDrawAthletes((prevState) => [...prevState, athleteDrawn]);

        localStorage.setItem(
          "@basketball-draw:drawn",
          JSON.stringify([...drawAthletes, athleteDrawn])
        );

        setDrawnAthlete(athleteDrawn);
        break;
      }
    }
  }

  function clearDrawnAthletes() {
    const resp = confirm("Deseja limpar sorteio?");
    if (resp) {
      localStorage.removeItem("@basketball-draw:drawn");
      setDrawAthletes([]);
      setDrawnAthlete(null);
    }
  }

  useEffect(() => {
    const athletesFromStorage = JSON.parse(
      localStorage.getItem("@basketball-draw:athletes") || "[]"
    );

    const drawnFromStorage = JSON.parse(
      localStorage.getItem("@basketball-draw:drawn") || "[]"
    );

    setArrayAthletes(athletesFromStorage);
    setDrawAthletes(drawnFromStorage);
    setDrawnAthlete(drawnFromStorage[drawnFromStorage.length - 1]);
  }, []);

  return (
    <Container>
      <header>
        <img src={logoBasquete} alt="" />
      </header>

      <main>
        <article>
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
                <tr className="pot1">
                  <td>{drawAthletes[0] ? drawAthletes[0].name : "-"}</td>
                  <td>{drawAthletes[1] ? drawAthletes[1].name : "-"}</td>
                  <td>{drawAthletes[2] ? drawAthletes[2].name : "-"}</td>
                  <td>{drawAthletes[3] ? drawAthletes[3].name : "-"}</td>
                  <td>{drawAthletes[4] ? drawAthletes[4].name : "-"}</td>
                  <td>{drawAthletes[5] ? drawAthletes[5].name : "-"}</td>
                </tr>

                <tr className="pot2">
                  <td>{drawAthletes[6] ? drawAthletes[6].name : "-"}</td>
                  <td>{drawAthletes[7] ? drawAthletes[7].name : "-"}</td>
                  <td>{drawAthletes[8] ? drawAthletes[8].name : "-"}</td>
                  <td>{drawAthletes[9] ? drawAthletes[9].name : "-"}</td>
                  <td>{drawAthletes[10] ? drawAthletes[10].name : "-"}</td>
                  <td>{drawAthletes[11] ? drawAthletes[11].name : "-"}</td>
                </tr>

                <tr className="pot3">
                  <td>{drawAthletes[12] ? drawAthletes[12].name : "-"}</td>
                  <td>{drawAthletes[13] ? drawAthletes[13].name : "-"}</td>
                  <td>{drawAthletes[14] ? drawAthletes[14].name : "-"}</td>
                  <td>{drawAthletes[15] ? drawAthletes[15].name : "-"}</td>
                  <td>{drawAthletes[16] ? drawAthletes[16].name : "-"}</td>
                  <td>{drawAthletes[17] ? drawAthletes[17].name : "-"}</td>
                </tr>

                <tr className="pot4">
                  <td>{drawAthletes[18] ? drawAthletes[18].name : "-"}</td>
                  <td>{drawAthletes[19] ? drawAthletes[19].name : "-"}</td>
                  <td>{drawAthletes[20] ? drawAthletes[20].name : "-"}</td>
                  <td>{drawAthletes[21] ? drawAthletes[21].name : "-"}</td>
                  <td>{drawAthletes[22] ? drawAthletes[22].name : "-"}</td>
                  <td>{drawAthletes[23] ? drawAthletes[23].name : "-"}</td>
                </tr>
              </tbody>
            </table>
          </section>
        </article>
      </main>

      <footer>
        <Link to={""}>
          <span>&copy;</span> <img src={logoReprograma} />
        </Link>
      </footer>
    </Container>
  );
}
