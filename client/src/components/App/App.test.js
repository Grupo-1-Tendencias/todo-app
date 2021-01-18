import { render, screen } from "@testing-library/react";
import App from "./index";

test("renders header and body", () => {
  render(<App />);

  const header = screen.getByTestId("header");
  const body = screen.getByTestId("body");

  expect(header).toBeInTheDocument();
  expect(body).toBeInTheDocument();
});

// // test("renders input fields", () => {
// //   render(<TodoWrapper />);
// //   const nameField = screen.getByPlaceholderText("Enter title");
// //   const descriptionField = screen.getAllByPlaceholderText("Enter description");
// //   const dueDateField = screen.getByPlaceholderText("Enter due date");

// //   expect(nameField).toBeInTheDocument();
// //   expect(descriptionField).toBeInTheDocument();
// //   expect(dueDateField).toBeInTheDocument();
// });
