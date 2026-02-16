import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  :root {
    font-size: 62.5%;
    scroll-behavior: smooth;
  }
  
  *, input, select, textarea, button {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    
    font-size: 1.6rem;
    color: ${({ theme }) => theme.colors.LIGHT400};
    border: transparent;
    font-family: sans-serif;
    
    font-synthesis: none;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    &:focus {
      outline: 1.5px solid ${({ theme }) => theme.colors.LIGHT400};
    }
  }

  body {
    background: linear-gradient(180deg, ${({ theme }) => theme.colors.DARK500}, ${({ theme }) => theme.colors.DARK400});
  }
    
  button {
    background: none;
    cursor: pointer;
  }

  a {
    text-decoration: none;
  }

  li {
    list-style: none;
  }

  .srOnly {
    position: absolute;
    width: 0.1rem;
    height: 0.1rem;
    margin: -0.1rem;
    border-width: 0;
    overflow: hidden;
    color: transparent;    
    clip: rect(0, 0, 0, 0);
  }

  .loading {
    font-weight: 700;
    font-size: 1.2rem;
    color: ${({ theme }) => theme.colors.LIGHT400}88;
    display: grid;
    place-content: center;
    position: absolute;
    inset: 0;
  }

  .queryError {
    font-weight: 700;
    font-size: 1.2rem;
    color: ${({ theme }) => theme.colors.PRIMARY700};
    display: grid;
    place-content: center;
    position: absolute;
    inset: 0;
  }

  .scrollBar {
    &::-webkit-scrollbar {
      width: 0.5rem;
    }

    &::-webkit-scrollbar-track {
      background: ${({ theme }) => theme.colors.DARK200};
    }

    &::-webkit-scrollbar-thumb {
      background: ${({ theme }) => theme.colors.LIGHT400}88;
      border-radius: 0.8rem;
    }

    &::-webkit-scrollbar-thumb:hover {
      background: ${({ theme }) => theme.colors.LIGHT400}88;
    }
  }

  @media (min-width: 768px) {
    .loading {
      font-size: 1.4rem;
    }

    .queryError {
      font-size: 1.4rem;
    }

    .scrollBar {
      &::-webkit-scrollbar {
        width: 0.75rem;
      }
    }
  }
`;
