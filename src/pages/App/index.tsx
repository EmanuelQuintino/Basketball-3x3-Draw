import { Link } from "react-router-dom";
import { Container } from "./style";
import logoReprograma from "../../assets/logo-reprograma-jucas.png";

export function App() {
  return (
    <Container>
      <header>
        <img src="../../assets/basquete3x3.png" alt="" />
      </header>

      <main>
        <article>
          <section>
            <strong className="nameDraw">-</strong>
          </section>

          <section className="drawButtons">
            <button className="drawButton">Sortear</button>
            <button className="clearButton">Limpar</button>
          </section>
        </article>

        <section className="drawTable">
          <table>
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
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
              </tr>

              <tr className="pot2">
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
              </tr>

              <tr className="pot3">
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
              </tr>

              <tr className="pot4">
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
              </tr>
            </tbody>
          </table>
        </section>
      </main>

      <footer>
        <Link to={""}>
          <img src={logoReprograma} />
        </Link>
      </footer>
    </Container>
  );
}
