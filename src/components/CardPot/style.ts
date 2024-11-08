import styled from "styled-components";

export const Container = styled.div`
  background: ${({ theme }) => theme.colors.DARK300}44;
  padding: 0.5rem;
  min-height: 23rem;

  h3 {
    background: ${({ theme }) => theme.colors.PRIMARY500};
    color: ${({ theme }) => theme.colors.DARK700};
    text-align: center;
    padding: 0.5rem;
    font-size: 1.2rem;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .athletes {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 0.4rem;
    margin-top: 0.5rem;

    div {
      width: 100%;
      color: ${({ theme }) => theme.colors.DARK200};
      border-radius: 0.5rem;
      padding: 0.5rem;
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 0.5rem;
      width: 100%;
      background: ${({ theme }) => theme.colors.DARK300};

      &:hover {
        filter: brightness(1.1);
      }

      i {
        color: ${({ theme }) => theme.colors.LIGHT400};
        font-size: 1.4rem;
      }

      strong {
        flex: 1;
        font-weight: 400;
        font-size: 1.2rem;
      }
    }

    .topSeed {
      background: ${({ theme }) => theme.colors.DARK200};
    }
  }

  @media (min-width: 768px) {
    padding: 0.6rem;
    min-height: 26rem;

    h3 {
      padding: 0.6rem;
      font-size: 1.4rem;
    }

    .athletes {
      gap: 0.6rem;
      margin-top: 0.6rem;

      div {
        padding: 0.6rem;
        gap: 0.8rem;

        strong {
          font-size: 1.4rem;
        }
      }
    }
  }
`;
