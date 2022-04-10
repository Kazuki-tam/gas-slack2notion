import { payloadType } from "./../type/payload.d";

/**
 * createItem Function
 * @param { String } question - Question
 * @param { String } answer - Answer
 * @param { string } url - URL
 * @param { { name: string }[] } tags - Tags array
 * @returns { payloadType } payload - Payload
 */
function createItem(
  question: string,
  answer: string,
  url: string,
  tags: { name: string }[]
): payloadType {
  const DATABASE_ID = process.env.DATABASE_ID;
  // Check DATABASE_ID
  if (DATABASE_ID === undefined || DATABASE_ID === null) {
    throw new Error("DATABASE_ID is not found...");
  }
  const payload = {
    parent: {
      database_id: DATABASE_ID,
    },
    properties: {
      Question: {
        title: [
          {
            text: {
              content: question,
            },
          },
        ],
      },
      Answer: {
        rich_text: [
          {
            text: {
              content: answer,
            },
          },
        ],
      },
      URL: {
        url: url,
      },
      Tags: {
        multi_select: tags,
      },
    },
  };
  return payload;
}

export { createItem };
