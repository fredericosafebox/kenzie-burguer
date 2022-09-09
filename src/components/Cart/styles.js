import styled from "styled-components";

export const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  max-width: 28rem;
  min-width: 20rem;
  min-height: 15rem;
  max-height: 33rem;
  width: 24rem;
  background: rgb(var(--grey-0));
  transition: 1s;
  border-radius: 0.3rem;
  overflow: hidden;
  height: fit-content;

  .app__cart--titlebox {
    background: rgb(var(--color-primary));
    color: rgb(var(--pure-white));
    font-weight: 700;
    font-size: 1.2rem;
    padding: 1.3rem;
    transition: 1s;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    button {
      background: none;

      height: 2rem;
      width: 2rem;

      .icon {
        color: rgb(var(--pure-white));
      }
    }
  }

  .app__cart--productsbox {
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 1rem;
    max-height: 17rem;
    min-height: 12rem;
    overflow-y: auto;
    scrollbar-gutter: stable;
    transition: 1s;
    padding: 0.2rem 0.1rem 0 0.2rem;

    &::-webkit-scrollbar {
      width: 0.5rem;
    }

    &::-webkit-scrollbar-track {
      background: rgb(var(--grey-20));
      border-radius: 0.3rem;
    }

    &::-webkit-scrollbar-thumb {
      background: rgb(var(--grey-100));
      border-radius: 0.3rem;
    }
  }

  .noItens {
    width: 70%;
    height: 12rem;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    align-self: center;

    h2 {
      font-size: 1.5rem;
      color: rgb(var(--grey-100));
      font-weight: 700;
    }

    span {
      font-size: 1.22rem;
      color: rgb(var(--grey-50));
    }
  }

  .app__cart--checkoutbox {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;

    .app__cart--checkoutinfo {
      width: 100%;
      display: flex;
      justify-content: space-between;
      padding: 2rem 0.5rem;

      h5 {
        font-size: 0.8rem;
        color: rgb(var(--grey-100));
        font-weight: 600;
      }

      span {
        font-size: 0.8rem;
        color: rgb(var(--grey-50));
        font-weight: 600;
      }
    }

    .app__cart--clearcart {
      display: flex;
      width: 100%;
      padding: 0 0.5rem 1rem 0.5rem;

      button {
        padding: 1.5rem 0;
        width: 100%;
        font-size: 1rem;
        background: rgb(var(--grey-20));
        color: rgb(var(--grey-50));
        font-weight: 600;
        border-radius: 0.5rem;
        cursor: pointer;
      }
    }
  }
`;
