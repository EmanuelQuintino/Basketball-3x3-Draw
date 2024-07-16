import styled from "styled-components";

export const Container = styled.div`
  padding: 0 2.4rem;

  .pots {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 0.8rem;
    margin-top: 2rem;
  }

  @media (max-width: 768px) {
    .pots {
      grid-template-columns: repeat(2, 1fr);
    }
  }
`;
