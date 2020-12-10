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
    const button = screen.getByRole("button", {name: /submit/i});

    // fill out the form
    userEvent.type(speciesInput, "Grizzly Bear");
    userEvent.type(ageInput, "6");
    userEvent.type(notesInput, "I'm a friendly bear");

    // click the button
    userEvent.click(button);

    // Assert that the new animal is now on the page
    const grizzlyBear = screen.getByText(/grizzly bear/i);
    expect(grizzlyBear).toBeInTheDocument();
    // We could get more specific here, and assert *where* in the document it's rendered, and with which html tags...
});