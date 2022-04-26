import {Hello} from "./Hello";
import {render, screen} from "@testing-library/react";

it("Nom Jenny", () => {
    const mProps = { name: "Jenny" };
    const { getByText } = render(<Hello {...mProps} />);
    expect(screen.getByText('Bonjour, Jenny !')).toBeDefined();
});

it("Nom Rodolphe", () => {
    const mProps = { name: "Rodolphe" };
    const { getByText } = render(<Hello {...mProps} />);
    expect(screen.getByText('Bonjour, Rodolphe !')).toBeDefined();
});

it("Nom vide", () => {
    const mProps = { name: "" };
    const { getByText } = render(<Hello {...mProps} />);
    expect(screen.getByText('Salut, étranger')).toBeDefined();
});