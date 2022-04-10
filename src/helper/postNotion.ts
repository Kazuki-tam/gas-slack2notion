import { payloadType } from "./../type/payload.d";

type requestOptionsType = {
  method: "post";
  headers: {
    "Content-type": string;
    Authorization: string;
    "Notion-Version": string;
  };
  payload: string;
};

/**
 * postNotion Function
 * @param { payloadType } payload - Payload
 */
function postNotion(payload: payloadType): void {
  const NOTION_TOKEN = process.env.NOTION_TOKEN;
  const url = "https://api.notion.com/v1/pages";

  // Check NOTION_TOKEN
  if (NOTION_TOKEN === undefined || NOTION_TOKEN === null) {
    throw new Error("NOTION_TOKEN is not found...");
  }

  const requestOptions: requestOptionsType = {
    method: "post",
    headers: {
      "Content-type": "application/json",
      Authorization: "Bearer " + NOTION_TOKEN,
      "Notion-Version": "2022-02-22",
    },
    payload: JSON.stringify(payload),
  };
  UrlFetchApp.fetch(url, requestOptions);
}

export { postNotion };
