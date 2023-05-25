import React from "react";
import { render } from "@testing-library/react";
import Application from "components/Application";
import Appointment from "components/Appointment";

it("renders without crashing", () => {
  render(<Application />);
});

describe("Appointment", () => {
  it("renders without crashing", () => {
    render(<Appointment />);
  });

  // xit("does something it is supposed to do", () => {
  //   // ...
  // });

  // xit("does something else it is supposed to do", () => {
  //   // ...
  // });
});
