import React from "react";
import { Container } from "./App.style";
import CharactersList from "./components/CharactersList/CharactersList";

function App() {
  return (
    <Container>
      <h1>Learn GraphQL</h1>
      <CharactersList />
    </Container>
  );
}

export default App;
