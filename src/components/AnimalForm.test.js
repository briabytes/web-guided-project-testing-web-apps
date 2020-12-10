import React from "react";
import {render, screen} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import AnimalForm from "./AnimalForm";

test("renders AnimalForm component without errors", () => {
    render(<AnimalForm/>);
});

test("user can fill out and submit the form", () =>  {
    // Arrange
    render(<AnimalForm/>);

    // Act

    // Assert
});