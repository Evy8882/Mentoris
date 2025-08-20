const express = require('express');
const apikey = require('./apikei'); 

const app = express();
const PORT = 3000;

app.use(express.json());


app.post('/ask', async (req, res) => {
  try {
    const userQuestion = req.body.question || "What is the meaning of life?";

    const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${apikey}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        model: "deepseek/deepseek-r1:free",
        messages: [
          {
            role: "user",
            content: userQuestion
          }
        ]
      })
    });

    const data = await response.json();
    res.json(data);

  } catch (error) {
    console.error('Erro ao chamar a API do OpenRouter:', error);
    res.status(500).json({ error: 'Erro ao obter resposta da IA.' });
  }

});

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
