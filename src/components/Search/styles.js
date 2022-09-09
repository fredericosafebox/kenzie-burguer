import styled from "styled-components";

export const WrapperForm = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: none;

  form {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border: 2px solid rgb(var(--grey-20));
    border-radius: 0.5rem;
    background: rgb(var(--pure-white));
    padding: 0.3rem;
    transition: 1s;

    &:focus-within {
      border: 2px solid rgb(var(--grey-100));
    }

    button {
      background: rgb(var(--color-primary));
      padding: 0.9rem 1rem;
      border-radius: 0.5rem;
      color: rgb(var(--pure-white));
      font-size: 0.9rem;
      font-weight: 500;
      transform: 1s;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 0.3rem;

      &:hover {
        background: rgb(var(--color-primary-50));
      }
    }

    input {
      border: none;
      background: none;
      color: rgb(var(--grey-50));
      font-weight: 400;
      font-size: 1rem;
      padding: 0.7rem 0.5rem;

      &::placeholder {
        color: rgb(var(--grey-20));
        font-size: 1rem;
        font-weight: 400;
      }
    }
  }
`;
