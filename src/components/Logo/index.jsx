import { Wrapper } from "./styles";

function Logo(props) {
  return (
    <Wrapper>
      <h1>
        {props.primary}
        <span> {props.secondary}</span>
      </h1>
    </Wrapper>
  );
}

export { Logo };
