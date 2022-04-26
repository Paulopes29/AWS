import React from 'react';
import {render, screen} from "@testing-library/react";
import {Nameprops} from "./PropsName";

it("Nom Paulo", () => {
    const mProps = { name: "Paulo" };
    const { getByText } = render(<Nameprops {...mProps} />);
    expect(screen.getByText('Salut Paulo')).toBeDefined();
});
