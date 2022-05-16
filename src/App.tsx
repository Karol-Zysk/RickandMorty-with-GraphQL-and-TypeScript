import React from "react";
import { Routes, Route } from "react-router-dom";
import { Container } from "./App.style";
import CharacterInfo from "./pages/CharacterInfo/CharacterInfo";
import CharactersList from "./pages/CharactersList/CharactersList";

function App() {
  return (
    <Container>
      <h1>Learn GraphQL</h1>
      <Routes>
        <Route  path="/" element={<CharactersList />} />
        <Route path="/:id" element={<CharacterInfo />} />
      </Routes>
    </Container>
  );
}

export default App;
