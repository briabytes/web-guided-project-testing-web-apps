import React from "react";
import {render, screen} from "@testing-library/react";
import App from "./App";

test("renders App without errors", () => {
    render(<App />);
})

test("renders the app header", () => {
    render(<App />);

    const header = screen.getAllByText("ADD NEW ANIMAL");
})