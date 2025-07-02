import { MediaQuery } from "svelte/reactivity";

const DEFAULT_LARGE_BREAKPOINT = 1024;

export class IsLarge extends MediaQuery {
  constructor(breakpoint: number = DEFAULT_LARGE_BREAKPOINT) {
    super(`min-width: ${breakpoint}px`);
  }
}
