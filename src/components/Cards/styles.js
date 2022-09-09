import styled from "styled-components";

export const StyledCard = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  border-radius: 0.3rem;
  overflow: hidden;
  transition: 1s;
  border: 2px solid rgb(var(--grey-20));
  max-height: 22rem;
  max-width: 19rem;
  height: 22rem;
  width: 17rem;
  min-height: 18rem;
  min-width: 16rem;
  cursor: pointer;

  .app__card--img {
    height: 45%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    background: rgb(var(--grey-0));

    img {
      transition: 1s;
    }
  }
  .app__card--info {
    height: 55%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 1rem;
    width: 100%;
  }

  h3 {
    font-size: 1.2rem;
    font-weight: 700;
    color: rgb(var(--grey-100));
  }

  p {
    font-size: 0.75rem;
    font-weight: 400;
    color: rgb(var(--grey-50));
  }

  span {
    font-size: 0.95rem;
    font-weight: 600;
    color: rgb(var(--color-primary));
  }

  button {
    display: flex;
    width: fit-content;
    justify-content: center;
    align-items: center;
    gap: 0.3rem;
    background: rgb(var(--color-primary));
    padding: 0.7rem 1rem;
    border-radius: 0.5rem;
    color: rgb(var(--pure-white));
    font-size: 0.9rem;
    font-weight: 500;
    transform: 1s;
    cursor: pointer;

    &:hover {
      background: rgb(var(--color-primary-50));
    }
  }

  &:hover {
    border: 2px solid rgb(var(--grey-100));
  }

  &:hover img {
    transform: scale(1.1);
  }

  @media screen AND (max-width: 768px) {
    max-height: 28rem;
    max-width: 24rem;
    height: 22rem;
    width: 18rem;
    min-height: 18rem;
    min-width: 16rem;
  }
`;
