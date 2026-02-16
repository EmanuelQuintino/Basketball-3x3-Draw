import { Link, Outlet, useLocation } from "react-router-dom";
import logoBasquete from "../../assets/basquete3x3.png";
import logoReprograma from "../../assets/logo-reprograma-jucas.png";
import { generateDrawPDF } from "../../configs/generateDrawPDF";
import { useAthletes } from "../../hooks/useAthletes";
import { Container } from "./style";

export function App() {
  const location = useLocation();
  const { autoCompleteTableAthletes } = useAthletes();

  return (
    <Container className="scrollBar">
      <header>
        {location.pathname == "/register" ? (
          <div className="toggleButtons">
            <button onClick={autoCompleteTableAthletes} title="Auto preencher">
              <i className="material-icons">group_add</i>
            </button>

            <Link to={"/"} title="Início">
              <i className="material-icons">home</i>
            </Link>
          </div>
        ) : (
          <div className="toggleButtons">
            <button onClick={generateDrawPDF} title="Baixar sorteio">
              <i className="material-icons">picture_as_pdf</i>
            </button>

            <Link to={"/register"} title="Adicionar atletas">
              <i className="material-icons">person_add</i>
            </Link>
          </div>
        )}

        <img src={logoBasquete} alt="Basquete 3x3" />
      </header>

      <main>
        <Outlet />
      </main>

      <footer>
        <Link to={"https://emanuelquintino.github.io/Page-WDC/"} target="_blank">
          <span>&copy;</span> <img src={logoReprograma} />
        </Link>
      </footer>
    </Container>
  );
}
