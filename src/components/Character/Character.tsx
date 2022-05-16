import { FunctionComponent } from "react";
import { Container } from "./Character.style";
import { CharacterProps } from "../../../types";
import { Link } from "react-router-dom";

const Character: FunctionComponent<{
  data: CharacterProps;
}> = ({ data: { name, id, image } }) => {
  return (
    <Container>
      <Link to={`/${id}`}>
        <h2>{name}</h2>
        <img src={image} alt={name} key={id} />
      </Link>
    </Container>
  );
};

export default Character;
