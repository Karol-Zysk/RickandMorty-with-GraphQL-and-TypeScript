import React from "react";
import { Routes, Route } from "react-router-dom";
import { Container, Header } from "./App.style";
import CharacterInfo from "./pages/CharacterInfo/CharacterInfo";
import CharactersList from "./pages/CharactersList/CharactersList";
import Search from "./pages/SearchCharacter/Search";

function App() {
  return (
    <Container>
      <Header>
        <h2>Learn GraphQL</h2>
      </Header>
      <Routes>
        <Route path="/" element={<CharactersList />} />
        <Route path="/:id" element={<CharacterInfo />} />
        <Route path="/search" element={<Search />} />
      </Routes>
    </Container>
  );
}

export default App;
