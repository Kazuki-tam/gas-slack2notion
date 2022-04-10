import { createTagsArray } from "./createTagsArray";

describe("createTagsArray test", () => {
  const textLine = "test, api";
  const result = [{ name: "test" }, { name: "api" }];
  test("Correct pattern", () => {
    expect(createTagsArray(textLine)).toStrictEqual(result);
  });
});
