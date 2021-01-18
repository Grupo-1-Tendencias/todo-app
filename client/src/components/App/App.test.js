import { render, screen } from "@testing-library/react";
import App from "./index";

test("renders header and body", () => {
  render(<App />);

  const header = screen.getByTestId("header");
  const body = screen.getByTestId("body");

  expect(header).toBeInTheDocument();
  expect(body).toBeInTheDocument();
});

// test("renders API items", async () => {
//   render(<App />);

//   const items = await screen.findAllByTestId("api-item");
//   items.forEach((item) => {
//     expect(item).toBeInTheDocument();
//   });
//   cleanup();
// });
