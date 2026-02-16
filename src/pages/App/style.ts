import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;

  header {
    text-align: center;
    padding: 5.6rem 0 2.4rem;
    width: 100%;

    .toggleButtons {
      position: absolute;
      top: 2.4rem;
      right: 2.4rem;
      display: flex;
      align-items: center;
      gap: 3.2rem;

      button,
      a {
        border-radius: 8px;
        padding: 0.4rem;
        line-height: 0;
      }

      i {
        font-size: 2.4rem;
        color: ${({ theme }) => theme.colors.DARK200};
        transition: 200ms;

        &:hover {
          color: ${({ theme }) => theme.colors.LIGHT400};
        }
      }
    }

    img {
      width: 28rem;
    }
  }

  main {
    flex: 1;
    width: 100%;
  }

  footer {
    padding: 1.6rem;

    a {
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 0.8rem;
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
      padding: 3.2rem 0 1.2rem;

      .addAthleteButton {
        top: 4.8rem;
        right: 4.8rem;

        i {
          font-size: 2.6rem;
        }
      }

      img {
        width: 34rem;
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
