import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;

  header {
    text-align: center;
    padding: 4.8rem 0 2.4rem;
    width: 100%;

    .addAthleteButton {
      position: absolute;
      top: 4.8rem;
      right: 4.8rem;
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
      width: 36rem;
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
      font-size: 2rem;
      font-weight: 700;
    }

    img {
      width: 18rem;
      filter: brightness(0) invert(0.9) grayscale(100%);
    }
  }
`;
