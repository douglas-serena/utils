import { isString } from "./common.validation";

export function testPattern(value: string, pattern: string | RegExp): boolean {
  if (!value) return false;

  if (isString(pattern)) {
    pattern = new RegExp(pattern);
  }
  return (pattern as RegExp).test(value);
}
