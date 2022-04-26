import { render, screen } from '@testing-library/react';
import {Area} from "./Area";

test('Area', () => {
  expect(Area(3)).toBe(9);
});