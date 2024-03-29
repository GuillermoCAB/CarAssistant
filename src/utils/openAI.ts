import { Configuration, OpenAIApi } from 'openai';
import { CallOpenAIParams } from '../types/openAI';

const configuration = new Configuration({
  // @ts-ignore
  apiKey: import.meta.env.VITE_OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

export const callOpenAI = async ({
  messages,
  model = 'gpt-4',
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
