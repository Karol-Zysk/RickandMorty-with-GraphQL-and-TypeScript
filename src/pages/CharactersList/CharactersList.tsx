import React from "react";
import { CharactersContainer } from "./CharactersList.style";
import Character from "../../components/Character/Character";
import { CharacterProps } from "../../../types";
import { useCharacters } from "../../hooks/useCharacters";

const CharactersList = () => {
  const { error, data, loading } = useCharacters();

  if (loading) return <h1>Loading...</h1>;

  if (error) return <div>Something went wrong</div>;

  return (
    <CharactersContainer>
      {data.characters.results.map((character: CharacterProps) => {
        return <Character data={character} key={character.id} />;
      })}
    </CharactersContainer>
  );
};

export default CharactersList;
