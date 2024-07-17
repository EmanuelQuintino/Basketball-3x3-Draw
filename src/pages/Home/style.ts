import styled from "styled-components";

export const Container = styled.article`
  flex: 1;

  section:nth-child(1) {
    width: 100vw;
    background: ${({ theme }) => theme.colors.PRIMARY500};
    text-align: center;
    padding: 1.6rem;

    .nameDraw {
      font-size: 2rem;
      font-weight: 700;
    }
  }

  .drawButtons {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1.6rem;
    padding: 2.4rem;

    button {
      background: ${({ theme }) => theme.colors.PRIMARY500};
      box-shadow: inset 2px 2px 8px 0px ${({ theme }) => theme.colors.LIGHT400}88,
        7px 7px 20px 0px rgba(0, 0, 0, 0.1), 4px 4px 5px 0px rgba(0, 0, 0, 0.1);

      width: 16rem;
      border: none;
      padding: 1.2rem 2.4rem;
      font-weight: 700;
      font-size: 1.2rem;
      text-transform: uppercase;
      border-radius: 0.4rem;
      transition: 100ms;

      &:hover {
        filter: brightness(1.05);
      }
    }
  }

  .tableMobile {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 2rem;
  }

  .tableDesktop {
    display: none;
  }

  .drawTable {
    width: 100vw;
    border-collapse: collapse;

    thead {
      width: 100vw;
      background: ${({ theme }) => theme.colors.PRIMARY500};
      text-align: center;
    }

    tr {
      text-align: center;
    }

    th {
      color: ${({ theme }) => theme.colors.DARK700};
    }

    th,
    td {
      padding: 0.8rem 0.6rem;
      font-weight: 700;
      font-size: 1.2rem;
    }

    .trForSpace {
      height: 0.8rem;
    }

    td {
      border: 1px solid ${({ theme }) => theme.colors.LIGHT400}22;
      width: 20%;
    }

    td:hover {
      background: ${({ theme }) => theme.colors.DARK200}22;
      filter: brightness(2);
    }

    .pot1 {
      background: ${({ theme }) => theme.colors.DARK200};
    }
  }

  @media (min-width: 768px) {
    section:nth-child(1) {
      padding: 1.6rem;

      .nameDraw {
        font-size: 2.4rem;
      }
    }

    .drawButtons {
      gap: 2rem;
      padding: 2rem;

      button {
        width: 26rem;
        padding: 1.2rem 5.6rem;
        font-size: 1.6rem;
      }
    }

    .tableMobile {
      display: none;
    }

    .tableDesktop {
      display: block;
    }

    .drawTable {
      th,
      td {
        font-size: 1.4rem;
      }

      td {
        width: 10%;
      }
    }
  }
`;
