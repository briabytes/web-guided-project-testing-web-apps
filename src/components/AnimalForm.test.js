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
    // use RTL matchers to access the form fields
    // add text to the fields (use labelText and userEvent)
    // click the button

    // Assert
    // make sure that the new animal added is now on the page
});