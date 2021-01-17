import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders header and body", () => {
  render(<App />);
  const header = screen.getByText(/To Do/i);
  const body = screen.getByTestId("body");

  expect(header).toBeInTheDocument();
  expect(body).toBeInTheDocument();
});
