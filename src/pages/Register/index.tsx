import { Container } from "./style";
import { athleteDataTypes } from "../../@types/athlete";
import { useEffect, useState } from "react";
import { FormRegister } from "../../components/FormRegister";
import { CardPot } from "../../components/CardPot";
import { DragDropContext, Droppable, DropResult } from "react-beautiful-dnd";
import { KEY_ATHLETES_STORAGE } from "../../configs/keyAthletesStorage";

// import { athletesStorage } from "../../configs/athletesStorage";
// localStorage.setItem(KEY_ATHLETES_STORAGE, JSON.stringify(athletesStorage));

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
    const { source, destination, type } = result;
    console.log(result);

    if (!result.destination) return;

    if (
      source.droppableId == destination?.droppableId &&
      source.index == destination.index
    ) {
      return;
    }

    if (type == "group" && destination) {
      console.log(destination?.index);

      const reorderListAthletes = [...listAthletes];
      const [removedAthlete] = reorderListAthletes.splice(source.index, 1);

      let pot;
      switch (destination.droppableId) {
        case "pot1":
          pot = 1;
          break;
        case "pot2":
          pot = 2;
          break;
        case "pot3":
          pot = 3;
          break;
        case "pot4":
          pot = 4;
          break;
      }

      if (pot == 1 || pot == 2 || pot == 3 || pot == 4) removedAthlete.pot = pot;

      if (
        source.index > destination.index ||
        source.droppableId == destination.droppableId
      ) {
        reorderListAthletes.splice(destination.index, 0, removedAthlete);
      } else {
        reorderListAthletes.splice(destination.index - 1, 0, removedAthlete);
      }

      setListAthletes(reorderListAthletes);
      localStorage.setItem(KEY_ATHLETES_STORAGE, JSON.stringify(reorderListAthletes));
      console.log(removedAthlete);
    }
  }

  function handleDeleteAthlete(id: string) {
    const filteredAthletes = listAthletes.filter((athlete) => athlete.id != id);
    setListAthletes(filteredAthletes);
    localStorage.setItem(KEY_ATHLETES_STORAGE, JSON.stringify(filteredAthletes));
  }

  useEffect(() => {
    const athletesFromStorage = JSON.parse(
      localStorage.getItem(KEY_ATHLETES_STORAGE) || "[]"
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
                <CardPot
                  name="POTE 1"
                  athletes={pot1}
                  topSeed
                  deleteAthlete={handleDeleteAthlete}
                />
                {provided.placeholder}
              </div>
            )}
          </Droppable>
          <Droppable droppableId="pot2" type="group">
            {(provided) => (
              <div ref={provided.innerRef} {...provided.droppableProps}>
                <CardPot
                  name="POTE 2"
                  athletes={pot2}
                  indexStart={indexStartPot2}
                  deleteAthlete={handleDeleteAthlete}
                />
                {provided.placeholder}
              </div>
            )}
          </Droppable>
          <Droppable droppableId="pot3" type="group">
            {(provided) => (
              <div ref={provided.innerRef} {...provided.droppableProps}>
                <CardPot
                  name="POTE 3"
                  athletes={pot3}
                  indexStart={indexStartPot3}
                  deleteAthlete={handleDeleteAthlete}
                />
                {provided.placeholder}
              </div>
            )}
          </Droppable>
          <Droppable droppableId="pot4" type="group">
            {(provided) => (
              <div ref={provided.innerRef} {...provided.droppableProps}>
                <CardPot
                  name="POTE 4"
                  athletes={pot4}
                  indexStart={indexStartPot4}
                  deleteAthlete={handleDeleteAthlete}
                />
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </div>
      </DragDropContext>
    </Container>
  );
}
