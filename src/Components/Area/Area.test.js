import { render, screen } from '@testing-library/react';
import {SquareArea} from "./SquareArea";
import {RectangleArea} from "./RectangleArea";
import {CercleArea} from "./CercleArea";

test('Square Area', () => {
  expect(SquareArea(3)).toBe(9);
});

test('Rectangle Area', () => {
    expect(RectangleArea(10,5)).toBe(50);
  });

  test('Cercle Area', () => {
    expect(CercleArea(10)).toBe(314.1592653589793);
  });