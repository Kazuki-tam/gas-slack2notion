import { convertString2Array } from "../utility/convertString2Array";

/**
 * createTagsArray Function
 * @param { String } textLine - Text line of tags
 * @returns { { name: string }[] } associativeArray - Associative array
 */
function createTagsArray(textLine: string): { name: string }[] {
  const targetArray = convertString2Array(textLine);
  const associativeArray = targetArray.map((item) => {
    return { name: item };
  });

  return associativeArray;
}

export { createTagsArray };
