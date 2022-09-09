import styled from "styled-components";

export const StyledCounter = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
  align-items: center;
  font-size: 1rem;

  .app__cart--counter {
    background: rgb(var(--color-primary));
    color: rgb(var(--pure-white));
    display: flex;
    justify-content: center;
    align-items: center;
    height: 1.5rem;
    width: 1.5rem;
    border-radius: 0.3rem;
  }
`;
