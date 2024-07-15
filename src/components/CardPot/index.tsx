import { Container } from "./style";
import { Draggable } from "react-beautiful-dnd";
import { athleteDataTypes } from "../../@types/athlete";
import { CardAthlete } from "../CardAthlete";

type TypeProps = {
  name: string;
  athletes: athleteDataTypes[];
  topSeed?: boolean;
  indexStart?: number;
};

export function CardPot({ name, athletes, topSeed = false, indexStart = 0 }: TypeProps) {
  return (
    <Container>
      <h3>{name}</h3>
      <div className="athletes">
        {athletes.map((athlete, index) => {
          return (
            <Draggable
              key={athlete.id}
              draggableId={athlete.id}
              index={indexStart + index}
            >
              {(provided) => (
                <div
                  {...provided.draggableProps}
                  {...provided.dragHandleProps}
                  ref={provided.innerRef}
                >
                  <CardAthlete name={athlete.name} topSeed={topSeed} />
                </div>
              )}
            </Draggable>
          );
        })}
      </div>
    </Container>
  );
}
