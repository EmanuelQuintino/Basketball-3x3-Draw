import { Container } from "./style";
import { athleteDataTypes } from "../../@types/athlete";
import { useEffect, useState } from "react";
import { FormRegister } from "../../components/FormRegister";
import { CardPot } from "../../components/CardPot";
import { DragDropContext, Droppable, DropResult } from "react-beautiful-dnd";
import { athletesStorage } from "../../configs/athletesStorage";

export function Register() {
  const [listAthletes, setListAthletes] = useState([] as athleteDataTypes[]);

  const pot1 = athletesStorage.filter((athlete) => athlete.pot == 1);
  const pot2 = athletesStorage.filter((athlete) => athlete.pot == 2);
  const pot3 = athletesStorage.filter((athlete) => athlete.pot == 3);
  const pot4 = athletesStorage.filter((athlete) => athlete.pot == 4);

  const indexStartPot2 = pot1.length;
  const indexStartPot3 = pot1.length + pot2.length;
  const indexStartPot4 = pot1.length + pot2.length + pot3.length;

  function onDragEnd(result: DropResult) {
    // if (!result.destination) return;

    console.log("onDragEnd");
    console.log(result);

    // const updatedAthletes = setListAthletes(result);
    // localStorage.setItem("@basketball-draw:athletes", JSON.stringify(updatedAthletes));
  }

  useEffect(() => {
    const athletesFromStorage = JSON.parse(
      localStorage.getItem("@basketball-draw:athletes") || "[]"
    );

    setListAthletes(athletesFromStorage);
  }, []);

  console.log(listAthletes);

  return (
    <Container>
      <FormRegister />

      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="pots">
          {(provided) => (
            <div className="pots" ref={provided.innerRef} {...provided.droppableProps}>
              <CardPot name="POTE 1" athletes={pot1} topSeed />
              <CardPot name="POTE 2" athletes={pot2} indexStart={indexStartPot2} />
              <CardPot name="POTE 3" athletes={pot3} indexStart={indexStartPot3} />
              <CardPot name="POTE 4" athletes={pot4} indexStart={indexStartPot4} />
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </Container>
  );
}
