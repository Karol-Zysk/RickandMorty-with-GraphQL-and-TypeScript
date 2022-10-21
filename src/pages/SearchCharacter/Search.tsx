import { gql, useLazyQuery } from "@apollo/client";
import { useState } from "react";
import { Button, Container, SearchInput, Wrapper, ListItem } from "./Search.style";

interface Character {
  location: { name: string };
}

const GET_CHARACTER_LOCATIONS = gql`
  query GetCharacterLocations($name: String!) {
    characters(filter: { name: $name }) {
      results {
        location {
          name
        }
      }
    }
  }
`;

const Search = () => {
  const [name, setName] = useState("");

  const [getLocations, { loading, data, error }] = useLazyQuery(
    GET_CHARACTER_LOCATIONS,
    {
      variables: { name },
    }
  );

  return (
    <Container>
      <h2>Enter character name to see his locations</h2>
      <SearchInput
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      <Button
        onClick={() => {
          getLocations();
        }}
      >
        Search
      </Button>

      <Wrapper>
        {error && "something went wrong"}
        {loading && "data loading"}
        {data && (
          <ul>
            {data.characters.results.map((character: Character) => {
              return <ListItem>{character.location.name}</ListItem>;
            })}
          </ul>
        )}
      </Wrapper>
    </Container>
  );
};

export default Search;
