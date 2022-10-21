import React from "react";
import { useParams } from "react-router-dom";
import { useCharacterInfo } from "../../hooks/useCharacterInfo";
import { Episodes, Info, InfoContainer } from "./CharacterInfo.style";

type MyParams = {
  id: number;
};

const CharacterInfo = () => {
  const { id } = useParams() as unknown as MyParams;

  const { data, error, loading } = useCharacterInfo(id);

  type Episode = { name: string; episode: string };

  console.log(data, loading, error);

  if (loading) return <div>Loading</div>;
  if (error) return <div>Something went wrong</div>;

  const { name, image, episode } = data.character;

  return (
    <InfoContainer>
      <Info>
        <h2>{id + ". " + name}</h2>
        <img src={image} alt={name}></img>
      </Info>

      <Episodes>
        <h2>Performed In:</h2>
        {episode.map((episode: Episode) => {
          return (
            <p key={episode.episode}>
              <b>{episode.name}</b>
              {episode.episode}
            </p>
          );
        })}
      </Episodes>
    </InfoContainer>
  );
};

export default CharacterInfo;
