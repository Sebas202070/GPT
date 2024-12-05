import OpenAI from 'openai';

interface Options {
  prompt: string;
}

export const UsecasesOrthography = async (openai: OpenAI, options: Options) => {
  const { prompt } = options;
  const completion = await openai.chat.completions.create({
    model: 'gpt-4o-mini',
    messages: [
      {
        role: 'assistant',
        content: `Responde lo que te preguntan.
          
          Ejemplo de salida:
          {
          
          message:string
          }
          
          `,
      },
      {
        role: 'user',
        content: prompt,
      },
    ],
  });

  console.log(completion);
  const jsonResponse = JSON.parse(completion.choices[0].message.content);
  return jsonResponse;
};
