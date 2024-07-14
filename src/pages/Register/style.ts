import styled from "styled-components";

export const Container = styled.div`
  h2 {
    font-size: 2.4rem;
    text-align: center;
    margin: 2.4rem 0;
  }

  table {
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
`;
