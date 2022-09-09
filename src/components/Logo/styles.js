import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: none;

  h1 {
    font-size: 1.6rem;
    font-weight: 600;
    color: rgb(var(--grey-100));

    span {
      color: rgb(var(--color-secondary));
      font-size: 1.1rem;
      font-weight: 600;
    }
  }
`;
