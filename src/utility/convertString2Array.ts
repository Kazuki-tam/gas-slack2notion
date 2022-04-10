/**
 * convertString2Array Function
 * @param { String } character - Text
 * @returns { string[] } filteredArray - Array
 */
function convertString2Array(character: string): string[] {
  const removedSpace = character.replace(/ /g, "");
  const convertedArray = removedSpace.split(",");
  const filteredArray = convertedArray.filter(function (item) {
    return item !== "";
  });
  return filteredArray;
}

export { convertString2Array };
