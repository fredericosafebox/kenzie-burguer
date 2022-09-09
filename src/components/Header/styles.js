import styled from "styled-components";

export const StyledHeader = styled.header`
  width: 100%;
  min-height: 5rem;
  height: 12%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgb(var(--grey-0));
  transition: 1s;

  .app__header--content {
    max-width: 1600px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    transition: 1s;

    #animationBox {
      background: none;
      position: absolute;
      height: 5rem;
      width: 5rem;
      border-radius: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
      animation: pulse 2.3s infinite;
      right: 10px;
      bottom: 10px;

      button {
        background: rgb(var(--color-primary));
        height: 5rem;
        width: 5rem;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        position: fixed;
        color: rgb(var(--pure-white));
      }
    }
  }

  @media screen AND (max-width: 1600px) {
    .app__header--content {
      max-width: 90%;
    }
  }

  @media screen AND (max-width: 580px) {
    min-height: 10rem;
    height: 18%;
    .app__header--content {
      flex-direction: column;
      gap: 1rem;
    }
  }
`;
