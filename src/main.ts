import { createItem } from "./helper/createItem";
import { postNotion } from "./helper/postNotion";
import { createTagsArray } from "./helper/createTagsArray";
import isURL from "validator/lib/isURL";

/**
 * main function
 */
function main() {
  const mySheet = SpreadsheetApp.getActiveSheet();
  const latestEntryRow = mySheet.getLastRow();
  if (latestEntryRow > 1) {
    const question = mySheet.getRange(latestEntryRow, 1).getValue();
    const answer = mySheet.getRange(latestEntryRow, 2).getValue();
    const urlString = mySheet.getRange(latestEntryRow, 3).getValue();
    const url = isURL(urlString) ? urlString : null;
    const tags = createTagsArray(
      mySheet.getRange(latestEntryRow, 4).getValue()
    );
    // Get payload
    const payload = createItem(question, answer, url, tags);
    // Post messages to Notion
    postNotion(payload);
  }
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
(global as any).main = main;
