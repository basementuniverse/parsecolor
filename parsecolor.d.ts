/// <reference types="typescript" />

type Colour = {
  r: number;
  g: number;
  b: number;
  a: number;
};

declare function parseColor(c: string | Colour): Colour; 

export {
  parseColor,
};
