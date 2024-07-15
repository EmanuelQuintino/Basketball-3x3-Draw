import { Container } from "./style";
import { athleteDataTypes } from "../../@types/athlete";
import { useEffect, useState } from "react";
import { FormRegister } from "../../components/FormRegister";
import { CardPot } from "../../components/CardPot";
import { DragDropContext, Droppable, DropResult } from "react-beautiful-dnd";

export function Register() {
  const [listAthletes, setListAthletes] = useState([] as athleteDataTypes[]);

  const pot1 = listAthletes.filter((athlete) => athlete.pot === 1);
  const pot2 = listAthletes.filter((athlete) => athlete.pot === 2);
  const pot3 = listAthletes.filter((athlete) => athlete.pot === 3);
  const pot4 = listAthletes.filter((athlete) => athlete.pot === 4);

  const indexStartPot2 = pot1.length;
  const indexStartPot3 = pot1.length + pot2.length;
  const indexStartPot4 = pot1.length + pot2.length + pot3.length;

  function handleDragEnd(result: DropResult) {
    if (!result.destination) return;

    // const { source, destination } = result;

    // setListAthletes(updatedAthletes);

    // localStorage.setItem("@basketball-draw:athletes", JSON.stringify(updatedAthletes));
  }

  useEffect(() => {
    const athletesFromStorage = JSON.parse(
      localStorage.getItem("@basketball-draw:athletes") || "[]"
    );
    setListAthletes(athletesFromStorage);
  }, []);

  return (
    <Container>
      <FormRegister />

      <DragDropContext onDragEnd={handleDragEnd}>
        <div className="pots">
          <Droppable droppableId="pot1" type="group">
            {(provided) => (
              <div ref={provided.innerRef} {...provided.droppableProps}>
                <CardPot name="POTE 1" athletes={pot1} topSeed />
                {provided.placeholder}
              </div>
            )}
          </Droppable>
          <Droppable droppableId="pot2" type="group">
            {(provided) => (
              <div ref={provided.innerRef} {...provided.droppableProps}>
                <CardPot name="POTE 2" athletes={pot2} indexStart={indexStartPot2} />
                {provided.placeholder}
              </div>
            )}
          </Droppable>
          <Droppable droppableId="pot3" type="group">
            {(provided) => (
              <div ref={provided.innerRef} {...provided.droppableProps}>
                <CardPot name="POTE 3" athletes={pot3} indexStart={indexStartPot3} />
                {provided.placeholder}
              </div>
            )}
          </Droppable>
          <Droppable droppableId="pot4" type="group">
            {(provided) => (
              <div ref={provided.innerRef} {...provided.droppableProps}>
                <CardPot name="POTE 4" athletes={pot4} indexStart={indexStartPot4} />
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </div>
      </DragDropContext>
    </Container>
  );
}
