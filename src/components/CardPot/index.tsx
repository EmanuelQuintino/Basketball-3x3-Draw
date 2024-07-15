import { Container } from "./style";
import { Draggable } from "react-beautiful-dnd";
import { athleteDataTypes } from "../../@types/athlete";

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
              {(provided) => {
                return (
                  <div
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    className={topSeed ? "topSeed" : ""}
                  >
                    <i className="material-icons">drag_indicator</i>

                    <strong>{athlete.name}</strong>

                    <button>
                      <i className="material-icons">close</i>
                    </button>
                  </div>
                );
              }}
            </Draggable>
          );
        })}
      </div>
    </Container>
  );
}
