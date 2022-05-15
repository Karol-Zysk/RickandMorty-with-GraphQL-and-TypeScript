import React from "react";
import { CharactersContainer } from "./CharactersList.style";
import { useQuery, gql } from "@apollo/client";
import { SpinnerInfinity } from "spinners-react";
import Character from "../Character/Character";
import { CharacterProps } from "../../../types";

const GET_CHARACTERS = gql`
  query {
    characters {
      results {
        id
        name
        image
      }
    }
  }
`;

const CharactersList = () => {
  const { data, loading, error } = useQuery(GET_CHARACTERS);

  console.log(data, loading, error);

  if (loading) return <SpinnerInfinity />;

  if (error) return <div>Something went wrong</div>;

  return (
    <CharactersContainer>
      {data.characters.results.map((character: CharacterProps) => {
        return <Character data={character} />;
      })}
    </CharactersContainer>
  );
};

export default CharactersList;
