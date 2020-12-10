import React from "react";
import {render, screen} from "@testing-library/react";
import App from "./App";

test("renders App without errors", () => {
    render(<App />);
})

test("renders the app header", () => {
    // Arrange
    render(<App />);

    // (Act)
    const header = screen.getByText(/new animal/i);
    console.log(header);

    // Assert
    expect(header).toHaveTextContent(/add new animal/i);

})