import { getNode } from "./get-node.function";

export function sortDesc(object: unknown[], filter: string): unknown[] {
  const arrayFilterLabel = filter?.split("|");
  const pipe = arrayFilterLabel[1];

  filter = arrayFilterLabel[0];
  return object.sort((a: unknown, b: unknown) => {
    const node_a = getNode<string>(a, filter?.split("."));
    const node_b = getNode<string>(b, filter?.split("."));

    if (typeof node_a === "number" && typeof node_b === "number") {
      const result = node_a - node_b;
      return result > 0 ? -1 : result == 0 ? 0 : 1;
    } else if (typeof node_a === "string") {
      if (node_a.toLocaleUpperCase() > node_b.toLocaleUpperCase()) {
        return -1;
      }
      if (node_b.toLocaleUpperCase() > node_a.toLocaleUpperCase()) {
        return 1;
      }
    }
    return 0;
  });
}
