import { convertString2Array } from "./convertString2Array";

describe("convertString2Array test", () => {
  const tags = "test, api";
  const mistake_emptyElement = "test, api, ";
  const mistake_unnecessary = ",";
  test("Correct pattern", () => {
    expect(convertString2Array(tags)).toStrictEqual(["test", "api"]);
  });
  test("Anti pattern: empty element in an array", () => {
    expect(convertString2Array(mistake_emptyElement)).toStrictEqual([
      "test",
      "api",
    ]);
  });
  test("Anti pattern: unnecessary text", () => {
    expect(convertString2Array(mistake_unnecessary)).toStrictEqual([]);
  });
});
