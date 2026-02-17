import { Link, Outlet, useLocation } from "react-router-dom";
import logoBasquete from "../../assets/basquete3x3.png";
import logoReprograma from "../../assets/logo-reprograma.png";
import { useAthletes } from "../../hooks/useAthletes";
import { generateDrawPDF } from "../../libs/generateDrawPDF";
import { Container } from "./style";

export function App() {
  const location = useLocation();
  const { autoCompleteTableAthletes } = useAthletes();

  return (
    <Container className="scrollBar">
      <header>
        {location.pathname == "/register" ? (
          <div className="toggleButtons">
            <Link to={"/"} title="Início">
              <i className="material-icons">home</i>
            </Link>

            <button onClick={autoCompleteTableAthletes} title="Auto preencher">
              <i className="material-icons">group_add</i>
            </button>
          </div>
        ) : (
          <div className="toggleButtons">
            <Link to={"/register"} title="Adicionar atletas">
              <i className="material-icons">person_add</i>
            </Link>

            <button onClick={generateDrawPDF} title="Baixar sorteio">
              <i className="material-icons">picture_as_pdf</i>
            </button>
          </div>
        )}

        <img src={logoBasquete} alt="Basquete 3x3" />
      </header>

      <main>
        <Outlet />
      </main>

      <footer>
        <Link to={"/"}>
          <img src={logoReprograma} />
        </Link>
      </footer>
    </Container>
  );
}
