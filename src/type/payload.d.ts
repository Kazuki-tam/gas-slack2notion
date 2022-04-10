type parentType = {
  database_id: string;
};

type questionType = {
  title: { text: { content: string } }[];
};

type answerType = {
  rich_text: { text: { content: string } }[];
};

type urlType = {
  url: string;
};

type tagsType = {
  multi_select: { name: string }[];
};

type propertiesType = {
  Question: questionType;
  Answer: answerType;
  URL: urlType;
  Tags: tagsType;
};

export type payloadType = {
  parent: parentType;
  properties: propertiesType;
};
