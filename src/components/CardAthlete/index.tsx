import { Container } from "./style";

type TypeProps = {
  name: string;
  topSeed?: boolean;
};

export function CardAthlete({ name, topSeed = false }: TypeProps) {
  return (
    <Container topSeed={topSeed}>
      <i className="material-icons">drag_indicator</i>
      <strong>{name}</strong>

      <button>
        <i className="material-icons">close</i>
      </button>
    </Container>
  );
}
