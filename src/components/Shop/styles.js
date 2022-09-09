import styled from "styled-components";

export const StyledList = styled.ul`
  height: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-wrap: wrap;
  gap: 2rem;
  max-width: 1200px;
  overflow-y: auto;
  scrollbar-gutter: stable;

  &::-webkit-scrollbar {
    width: 0.5rem;
  }

  &::-webkit-scrollbar-track {
    background: rgb(var(--grey-20));
    border-radius: 0.5rem;
  }

  &::-webkit-scrollbar-thumb {
    background: rgb(var(--grey-50));
    border-radius: 0.5rem;
  }

  @media screen AND (max-width: 1400px) {
    width: 100%;
    padding: 0 0 0 2rem;
    justify-content: center;
  }

  @media screen AND (max-width: 768px) {
    max-width: none;
    flex-wrap: nowrap;
    overflow-x: auto;
    justify-content: flex-start;
    height: 25rem;
  }
`;
