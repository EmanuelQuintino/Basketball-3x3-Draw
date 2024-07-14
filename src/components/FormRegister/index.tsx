import { Container } from "./style";
import { athleteDataTypes } from "../../@types/athlete";
import { SubmitHandler, useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";

export function FormRegister() {
  const [listAthletes, setListAthletes] = useState([] as athleteDataTypes[]);

  type Input = athleteDataTypes;

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Input>();

  const onSubmit: SubmitHandler<Input> = (data) => {
    const athlete = {
      ...data,
      id: uuidv4(),
    };

    if (listAthletes.length < 24) {
      localStorage.setItem(
        "@basketball-draw:athletes",
        JSON.stringify([...listAthletes, athlete])
      );

      setListAthletes((prevState) => [...prevState, athlete]);

      reset();
    } else {
      alert("A lista de atletas está completada!");
    }
  };

  useEffect(() => {
    const athletesFromStorage = JSON.parse(
      localStorage.getItem("@basketball-draw:athletes") || "[]"
    );

    setListAthletes(athletesFromStorage);
  }, []);

  console.log(listAthletes);

  return (
    <Container onSubmit={handleSubmit(onSubmit)}>
      <section>
        <label htmlFor="name">
          Nome:
          <input
            type="text"
            id="name"
            placeholder="Digite o nome do atleta"
            {...register("name", {
              required: "Campo obrigatório!",
            })}
          />
        </label>

        <span className="inputError">{errors.name?.message}</span>
      </section>

      <section>
        <label htmlFor="pot">
          Pote:
          <select
            id="pot"
            {...register("pot", {
              required: "Campo obrigatório!",
            })}
          >
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
          </select>
        </label>

        <span className="inputError">{errors.pot?.message}</span>
      </section>

      <section>
        <button type="submit">Registrar</button>
      </section>
    </Container>
  );
}
