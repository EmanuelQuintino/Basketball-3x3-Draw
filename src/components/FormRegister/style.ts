import styled from "styled-components";

export const Container = styled.form`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  gap: 0.8rem;

  section {
    position: relative;
  }

  section:nth-child(1) {
    grid-column: 1/3;
  }

  section:nth-child(2) {
    grid-column: 1/2;
    grid-row: 2/3;
  }

  section:nth-child(3) {
    grid-column: 2/3;
    grid-row: 2/3;
  }

  label {
    font-size: 1.2rem;
    font-weight: 700;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  input,
  select {
    flex: 1;
    padding: 0.8rem;
    border-radius: 0.8rem;
    margin-left: 0.2rem;
    background: ${({ theme }) => theme.colors.DARK300};
    color: ${({ theme }) => theme.colors.LIGHT700};
    font-size: 1.2rem;
    min-width: 4rem;
  }

  input::placeholder {
    color: ${({ theme }) => theme.colors.LIGHT400}44;
  }

  .buttons {
    display: flex;
    gap: 0.8rem;

    button {
      background: ${({ theme }) => theme.colors.PRIMARY500};
      color: ${({ theme }) => theme.colors.LIGHT400};
      box-shadow: 1px 1px 1px #0004;
      border-radius: 0.8rem;
      font-weight: 700;
      padding: 0.8rem 1.2rem;
      width: 100%;
      transition: 100ms;
      font-size: 1.2rem;

      &:hover {
        cursor: pointer;
        filter: brightness(1.1);
      }
    }
  }

  .inputErrorMessage {
    color: ${({ theme }) => theme.colors.PRIMARY400};
    font-size: 1.2rem;
    display: block;
    position: absolute;
    margin-top: -2rem;
    right: 0.8rem;
  }

  input.inputError:focus {
    outline: 1.75px solid ${({ theme }) => theme.colors.PRIMARY400}BB;
  }

  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: 2fr 12rem 1fr;
    grid-template-rows: 1fr;
    gap: 1.6rem;

    section:nth-child(1) {
      grid-column: 1/2;
      grid-row: 1/1;
    }

    section:nth-child(2) {
      grid-column: 2/3;
      grid-row: 1/1;
    }

    section:nth-child(3) {
      grid-column: 3/4;
      grid-row: 1/1;
    }

    label {
      font-size: 1.6rem;
    }

    input,
    select {
      padding: 0.8rem;
      margin-left: 0.4rem;
      font-size: 1.6rem;
      min-width: 6rem;
    }

    .buttons {
      button {
        padding: 0.8rem 2.4rem;
        font-size: 1.6rem;
      }
    }
  }

  .inputErrorMessage {
    font-size: 1.4rem;
  }
`;
