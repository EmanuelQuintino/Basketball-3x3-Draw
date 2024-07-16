import { Container } from "./style";
import { athleteDataTypes } from "../../@types/athlete";
import { SubmitHandler, useForm } from "react-hook-form";
import { v4 as uuidv4 } from "uuid";

type FormProps = {
  addAthlete: (athlete: athleteDataTypes) => void;
};

type Input = {
  id: string;
  name: string;
  pot: string;
};

type AthletePot = 1 | 2 | 3 | 4;

export function FormRegister({ addAthlete }: FormProps) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Input>();

  const onSubmit: SubmitHandler<Input> = (data) => {
    let pot: AthletePot;
    switch (data.pot) {
      case "1":
        pot = 1;
        break;
      case "2":
        pot = 2;
        break;
      case "3":
        pot = 3;
        break;
      case "4":
        pot = 4;
        break;
      default:
        return;
    }

    if (!pot) return;

    const athlete = {
      id: uuidv4(),
      name: data.name,
      pot: pot,
    };

    addAthlete(athlete);
    reset();
  };

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
