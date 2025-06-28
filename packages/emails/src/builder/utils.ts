import type { ComponentProp } from "./types";

export const createPlaceholders = (props: ComponentProp[]): Record<string, string> => {
  const placeholders: Record<string, string> = {};

  const propsToUse = props.length ? props.map((p) => p.name) : [];

  propsToUse.forEach((propName) => {
    placeholders[propName] = `{{${propName}}}`;
  });

  return placeholders;
};
