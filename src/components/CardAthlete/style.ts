import styled from "styled-components";

type TypeContainer = {
  topSeed?: boolean;
};

export const Container = styled.div<TypeContainer>`
  color: ${({ theme }) => theme.colors.DARK200};
  border-radius: 0.4rem;
  padding: 0.8rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.8rem;
  width: 100%;
  background: ${({ theme, topSeed }) =>
    topSeed ? `${theme.colors.DARK200}` : `${theme.colors.DARK200}88`};

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

  @media (min-width: 768px) {
  }
`;
