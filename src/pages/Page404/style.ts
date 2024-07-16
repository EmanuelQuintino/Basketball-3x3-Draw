import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  place-content: center;
  height: 100vh;

  strong {
    font-size: 2.4rem;
    color: ${({ theme }) => theme.colors.DARK200};
  }

  img {
    margin-top: 2.4rem;
    width: 32rem;
    box-shadow: 1px 1px 2px 1px #0002;
  }

  button {
    background: ${({ theme }) => theme.colors.PRIMARY500};
    color: ${({ theme }) => theme.colors.LIGHT400};
    box-shadow: 1px 1px 1px #0004;
    border-radius: 3.2rem;
    font-size: 1.2rem;
    font-weight: 700;
    padding: 1rem;
    margin: 1.6rem auto 0;
    transition: 100ms;

    &:hover {
      cursor: pointer;
      filter: brightness(1.1);
    }
  }

  @media (min-width: 768px) {
    strong {
      font-size: 4.2rem;
      color: ${({ theme }) => theme.colors.DARK200};
    }

    img {
      margin-top: 4.8rem;
      width: 56rem;
    }

    button {
      font-size: 1.6rem;
      padding: 1.6rem 2.4rem;
      margin: 2.4rem auto 0;
    }
  }
`;
