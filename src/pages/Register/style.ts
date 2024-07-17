import styled from "styled-components";

export const Container = styled.div`
  padding: 0 1.2rem;

  .pots {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 0.8rem;
    margin-top: 1.2rem;
  }

  @media (min-width: 768px) {
    padding: 0 2.4rem;

    .pots {
      grid-template-columns: repeat(4, 1fr);
      margin-top: 2rem;
    }
  }
`;
