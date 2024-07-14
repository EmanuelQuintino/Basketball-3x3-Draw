import styled from "styled-components";

export const Container = styled.div`
  color: ${({ theme }) => theme.colors.DARK200};
  background: ${({ theme }) => theme.colors.DARK200};
  border-radius: 0.4rem;
  padding: 0.8rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.8rem;
  width: 100%;

  &:hover {
    cursor: grab;
    filter: brightness(0.9);
  }

  i {
    color: ${({ theme }) => theme.colors.LIGHT400};
    font-size: 1.6rem;
  }

  strong {
    flex: 1;
  }

  @media (min-width: 768px) {
  }
`;
