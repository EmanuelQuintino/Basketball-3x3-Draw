import { useNavigate } from "react-router-dom";
import { Container } from "./style";

export function Page404() {
  const navigate = useNavigate();
  return (
    <Container>
      <strong>Erro 404: Página não encontrada!</strong>
      <button onClick={() => navigate("/")}>Voltar</button>
    </Container>
  );
}
