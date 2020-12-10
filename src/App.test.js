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
    const header = screen.getByText(/add new animal/i);

    // Assert
    expect(header).toBeInTheDocument();

    // Other possible assertions
    expect(header).toBeTruthy();
    expect(header).toHaveTextContent(/add new animal/i);

    // 


})