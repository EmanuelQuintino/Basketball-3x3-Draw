import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;

  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;

  header {
    text-align: center;
    padding: 2rem 0 0.8rem;

    img {
      width: 32rem;
    }
  }

  main {
    flex: 1;

    section:nth-child(1) {
      width: 100vw;
      background: ${({ theme }) => theme.colors.PRIMARY500};
      text-align: center;
      padding: 2rem;

      .nameDraw {
        font-size: 2.4rem;
        font-weight: 700;
      }
    }

    .drawButtons {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 2.4rem;
      padding: 2rem;

      button {
        background: ${({ theme }) => theme.colors.PRIMARY500};
        box-shadow: inset 2px 2px 8px 0px ${({ theme }) => theme.colors.LIGHT400}88,
          7px 7px 20px 0px rgba(0, 0, 0, 0.1), 4px 4px 5px 0px rgba(0, 0, 0, 0.1);

        width: 28rem;
        border: none;
        padding: 1.2rem 7.6rem;
        font-weight: 700;
        font-size: 2rem;
        text-transform: uppercase;
        border-radius: 0.4rem;

        &:hover {
          filter: brightness(0.95);
        }
      }
    }

    .drawTable {
      width: 100vw;
      border-collapse: collapse;

      thead {
        width: 100vw;
        background: ${({ theme }) => theme.colors.PRIMARY500};
        text-align: center;
        padding: 2rem;
      }

      tr {
        text-align: center;
      }

      th {
        color: ${({ theme }) => theme.colors.DARK700}CC;
      }

      th,
      td {
        padding: 0.8rem;
        font-weight: 700;
        border: 1px solid ${({ theme }) => theme.colors.LIGHT400}22;
      }

      td:hover {
        background: ${({ theme }) => theme.colors.DARK200}22;
        filter: brightness(2);
      }

      tbody {
        margin-top: 0.8rem;
      }

      .pot1 {
        background: ${({ theme }) => theme.colors.DARK200};
      }
    }
  }

  footer {
    padding: 2.4rem;

    a {
      display: flex;
      align-items: center;
      justify-content: center;
    }

    span {
      font-size: 2rem;
      font-weight: 700;
    }

    img {
      width: 16rem;
      filter: brightness(0) invert(0.9) grayscale(100%);
    }
  }
`;
