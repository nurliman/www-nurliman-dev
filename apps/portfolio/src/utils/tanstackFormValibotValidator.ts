import type { Validator } from "@tanstack/form-core";
import { safeParse, safeParseAsync } from "@valibot/valibot";
import type { BaseIssue, BaseSchema, BaseSchemaAsync } from "@valibot/valibot";

export const tanstackFormValibotValidator = (() => {
  return {
    validate({ value }, fn) {
      if (fn.async) return;
      const result = safeParse(fn, value);
      if (result.success) return;
      return result.issues.map((i) => i.message).join(", ");
    },
    async validateAsync({ value }, fn) {
      const result = await safeParseAsync(fn, value);
      if (result.success) return;
      return result.issues.map((i) => i.message).join(", ");
    },
  };
}) as Validator<
  unknown,
  | BaseSchema<unknown, unknown, BaseIssue<unknown>>
  | BaseSchemaAsync<unknown, unknown, BaseIssue<unknown>>
>;
