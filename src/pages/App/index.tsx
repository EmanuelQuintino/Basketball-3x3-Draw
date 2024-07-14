import { Link, Outlet, useLocation } from "react-router-dom";
import { Container } from "./style";
import logoBasquete from "../../assets/basquete3x3.png";
import logoReprograma from "../../assets/logo-reprograma-jucas.png";

export function App() {
  const location = useLocation();
  console.log(location.pathname);

  return (
    <Container>
      <header>
        {location.pathname == "/register" ? (
          <Link to={"/"} className="addAthleteButton">
            <i className="material-icons">home</i>
          </Link>
        ) : (
          <Link to={"/register"} className="addAthleteButton">
            <i className="material-icons">person_add</i>
          </Link>
        )}

        <img src={logoBasquete} alt="" />
      </header>

      <main>
        <Outlet />
      </main>

      <footer>
        <Link to={""}>
          <span>&copy;</span> <img src={logoReprograma} />
        </Link>
      </footer>
    </Container>
  );
}
