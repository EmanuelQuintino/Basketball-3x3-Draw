import { Container } from "./style";

type TypeProps = {
  name: string;
};

export function CardAthlete({ name }: TypeProps) {
  return (
    <Container>
      <i className="material-icons">drag_indicator</i>
      <strong>{name}</strong>

      <button>
        <i className="material-icons">close</i>
      </button>
    </Container>
  );
}
