/** @see https://easings.net/#easeInCirc */
export const easeInCirc = (x: number): number => {
  return 1 - Math.sqrt(1 - Math.pow(x, 2));
};
