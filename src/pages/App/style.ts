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

    .addAthleteButton {
      position: absolute;
      top: 2rem;
      right: 2rem;
      border-radius: 8px;
      padding: 0.4rem;

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
      width: 32rem;
    }
  }

  main {
    flex: 1;
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
