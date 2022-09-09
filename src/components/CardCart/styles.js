import styled from "styled-components";

export const StyledCartCard = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 5rem;
  transition: 1s;
  border-radius: 0.5rem;

  &:hover {
    box-shadow: 0 0 6px 0 rgb(var(--grey-100));
  }

  &:hover img {
    transform: scale(1.1);
  }

  .app__cart--info {
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    height: 100%;

    .app__cart--imgbox {
      background: rgb(var(--grey-20));
      display: flex;
      justify-content: center;
      align-items: center;
      overflow: hidden;
      transition: 1s;
      height: 100%;
      width: 5rem;
      min-width: 5rem;
      border-radius: 0.5rem;

      img {
        max-width: 100%;
        max-height: 100%;
        transition: 1s;
      }
    }

    .app__cart--infobox {
      padding: 0.5rem;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      gap: 0.3rem;
      h4 {
        font-size: 1.1rem;
        font-weight: 700;
        color: rgb(var(--grey-100));
      }

      p {
        font-size: 1rem;
        color: rgb(var(--grey-50));
        font-weight: 400;
      }
    }
  }

  .app__cart--control {
    height: 100%;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    align-items: center;
    padding: 0.5rem 0;
  }

  span {
    cursor: pointer;
  }

  button {
    cursor: pointer;
    background: none;
    font-size: 1rem;
    color: #bdbdbd;
    font-weight: 500;
  }
`;
