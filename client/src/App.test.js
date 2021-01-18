import { render, screen } from "@testing-library/react";
// import TodoWrapper from "../../../TodoWrapper";
import App from "./App";

test("renders header and body", () => {
  render(<App />);
  const header = screen.getByText(/To Do/i);
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
