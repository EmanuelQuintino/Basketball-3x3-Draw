import styled from "styled-components";

export const Container = styled.div`
  h3 {
    background: ${({ theme }) => theme.colors.PRIMARY500};
    color: ${({ theme }) => theme.colors.DARK700}CC;
    text-align: center;
    padding: 0.8rem;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .athletes {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 0.8rem;
    margin-top: 0.8rem;
  }

  @media (min-width: 768px) {
  }
`;
