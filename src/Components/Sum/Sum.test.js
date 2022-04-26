import { render, screen } from '@testing-library/react';
import {sum} from "./Sum";

test('tests :', () => {
    // render(<App />);
    expect(sum([1,2,3])).toBe(6);
});


