import { FunctionComponent } from "react";
import { Container } from "./Character.style";
import { CharacterProps } from "../../../types";

const Character: FunctionComponent<{
  data: CharacterProps
}> = ({data: { name, id, image }}) => {
  console.log(name);
  return <Container>{name}</Container>;
};

export default Character;
