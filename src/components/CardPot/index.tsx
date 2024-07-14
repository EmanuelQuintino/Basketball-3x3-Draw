import { athleteDataTypes } from "../../@types/athlete";
import { CardAthlete } from "../CardAthlete";
import { Container } from "./style";

type TypeProps = {
  name: string;
  athletes: athleteDataTypes[];
};

export function CardPot({ name, athletes }: TypeProps) {
  return (
    <Container>
      <h3>{name}</h3>
      <div className="athletes">
        {athletes.map((athlete) => {
          return <CardAthlete name={athlete.name} key={athlete.id} />;
        })}
      </div>
    </Container>
  );
}
