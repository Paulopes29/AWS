import { render, screen } from '@testing-library/react';
import App from './App';
import {sum} from "./Components/Calcul/Calcul";

test('renders learn react link', () => {
  render(<App />);
  expect(sum([1,2,3])).toBe(6);
});


