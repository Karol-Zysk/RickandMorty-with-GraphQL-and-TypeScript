import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders learn GraphQL link", () => {
  render(<App />);
  const linkElement = screen.getByText(/learn GraphQL/i);
  expect(linkElement).toBeInTheDocument();
});
