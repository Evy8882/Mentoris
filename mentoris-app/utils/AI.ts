async function askAI(question: string): Promise<string> {
  try {
    const result = await fetch('https://mentoris-backend.vercel.app/ask', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ question })
    });
        if (!result.ok) {
      throw new Error('Erro na requisição: ' + result.status);
    }

    const texto = await result.text();
    return texto;
  } catch (erro) {
    return ("Erro ao conectar-se com a IA");
  }


}

export default askAI;