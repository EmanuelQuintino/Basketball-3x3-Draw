import styled from "styled-components";

export const Container = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.6rem;

  section {
    position: relative;
  }

  label {
    font-size: 1.6rem;
    font-weight: 700;
  }

  input,
  select {
    padding: 0.8rem;
    border-radius: 0.8rem;
    margin-left: 0.4rem;
    background: ${({ theme }) => theme.colors.DARK200};
    color: ${({ theme }) => theme.colors.LIGHT700};
  }

  input::placeholder {
    color: ${({ theme }) => theme.colors.LIGHT700}88;
  }

  button {
    background: ${({ theme }) => theme.colors.PRIMARY500};
    color: ${({ theme }) => theme.colors.LIGHT400};
    box-shadow: 1px 1px 1px #0004;
    border-radius: 0.8rem;
    font-weight: 700;
    padding: 0.8rem 2.4rem;

    &:hover {
      cursor: pointer;
      filter: brightness(1.05);
    }
  }

  @media (min-width: 768px) {
    button {
      font-size: 1.6rem;
    }
  }
`;
