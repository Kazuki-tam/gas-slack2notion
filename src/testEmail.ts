import { sendEmailToAll } from "./helper/sendEmailToAll";
import { validateEmail } from "./utility/validateEmail";

/**
 * test function to send email
 */
function testEmail() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const sheet = ss.getSheetByName("Email Content");
  const appUi = SpreadsheetApp.getUi();

  if (sheet) {
    const itemCol = 1;
    const firstRow = 2;
    let testAdress = "";
    const company = "Test Inc.";
    const department = "QA";
    const pic = "Test Name";
    const rowLength = sheet.getLastRow() - (firstRow - 1);
    for (let i = 0; i < rowLength; i++) {
      const itemName = sheet.getRange(firstRow + i, itemCol).getValue();
      const itemContent = sheet.getRange(firstRow + i, itemCol + 1).getValue();
      if (itemName === "Test email address" && itemContent !== "") {
        testAdress = itemContent;
      }
    }
    if (validateEmail(testAdress)) {
      sendEmailToAll(testAdress, company, department, pic);
    } else {
      appUi.alert(`🚨 Invalid email address!`);
    }
  }
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
(global as any).testEmail = testEmail;
