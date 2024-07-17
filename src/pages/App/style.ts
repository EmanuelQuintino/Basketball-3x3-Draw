import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;

  header {
    text-align: center;
    padding: 2.4rem 0 1.2rem;
    width: 100%;

    .addAthleteButton {
      position: absolute;
      top: 2.4rem;
      right: 2.4rem;
      border-radius: 8px;
      padding: 0.4rem;

      i {
        font-size: 2rem;
        color: ${({ theme }) => theme.colors.DARK200};
        transition: 200ms;

        &:hover {
          color: ${({ theme }) => theme.colors.LIGHT400};
        }
      }
    }

    img {
      width: 22rem;
    }
  }

  main {
    flex: 1;
    width: 100%;
  }

  footer {
    padding: 2.4rem;
    width: 100%;

    a {
      display: flex;
      align-items: center;
      justify-content: center;
    }

    span {
      font-size: 1.6rem;
      font-weight: 700;
    }

    img {
      width: 14rem;
      filter: brightness(0) invert(0.9) grayscale(100%);
    }
  }

  @media (min-width: 768px) {
    header {
      padding: 4.8rem 0 2.4rem;

      .addAthleteButton {
        top: 5.6rem;
        right: 5.6rem;

        i {
          font-size: 2.8rem;
        }
      }

      img {
        width: 36rem;
      }
    }

    footer {
      span {
        font-size: 1.8rem;
      }

      img {
        width: 16rem;
      }
    }
  }
`;
