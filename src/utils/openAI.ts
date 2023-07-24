import { Configuration, OpenAIApi } from 'openai';
import { CallOpenAIParams } from '../types/openAI';

const configuration = new Configuration({
  apiKey: process.env.REACT_APP_OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

export const callOpenAI = async ({
  messages,
  model = 'gpt-3.5-turbo',
  functions,
  ...rest
}: CallOpenAIParams): Promise<any> => {
  let res = await openai.createChatCompletion({
    model,
    messages,
    functions,
    ...rest,
  });

  return res.data;
};
