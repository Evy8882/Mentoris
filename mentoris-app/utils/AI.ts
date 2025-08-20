"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"
import OpenAI from 'openai';
const openai = new OpenAI({
  baseURL: "https://openrouter.ai/api/v1",
  apiKey: "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",
  defaultHeaders: {
    "HTTP-Referer": "<YOUR_SITE_URL>", // Optional. Site URL for rankings on openrouter.ai.
    "X-Title": "<YOUR_SITE_NAME>", // Optional. Site title for rankings on openrouter.ai.
  },
});
async function main() {
  const completion = await openai.chat.completions.create({
    model: "deepseek/deepseek-r1:free",
    messages: [
      {
        "role": "user",
        "content": "What is the meaning of life?"
      }
    ],
    
  });

  console.log(completion.choices[0].message);
}

main();