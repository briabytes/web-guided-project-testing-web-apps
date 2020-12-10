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
    // query for each input field with RTL matchers
    const speciesInput = screen.getByLabelText(/species/i);
    const ageInput = screen.getByLabelText(/age/i);
    const notesInput = screen.getByLabelText(/notes/i);

    // fill out the form
    userEvent.type(speciesInput, "Grizzly Bear");
    

    // click the button


    // Assert
    // make sure that the new animal added is now on the page
});