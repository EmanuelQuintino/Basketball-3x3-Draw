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

    div {
      width: 100%;
      color: ${({ theme }) => theme.colors.DARK200};
      border-radius: 0.4rem;
      padding: 0.8rem;
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 0.8rem;
      width: 100%;
      background: ${({ theme }) => theme.colors.DARK200}88;

      &:hover {
        /* cursor: grab; */
        filter: brightness(0.9);
      }

      i {
        color: ${({ theme }) => theme.colors.LIGHT400};
        font-size: 1.4rem;
      }

      strong {
        flex: 1;
        font-weight: 400;
        font-size: 1.4rem;
      }
    }

    .topSeed {
      background: ${({ theme }) => theme.colors.DARK200};
    }
  }

  @media (min-width: 768px) {
  }
`;
