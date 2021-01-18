import { render, screen } from "@testing-library/react";
import Home from "./index";

test("renders header and body", () => {
  render(<Home />);

  const header = screen.getByTestId("header");
  const title = screen.getByText(/To Do/i);
  const body = screen.getByTestId("body");

  expect(header).toBeInTheDocument();
  expect(title).toBeInTheDocument();
  expect(body).toBeInTheDocument();
});
