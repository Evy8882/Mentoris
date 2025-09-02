async function askAI(question: string): Promise<string> {
  try {
    const result = await fetch(`https://nottle-api.vercel.app/?input=${question}`, {
      method: 'GET'
    });
        if (!result.ok) {
      throw new Error('Erro na requisição: ' + result.status);
    }

    const texto = await result.text();
    return texto;
  } catch (erro) {
    return ("Erro ao conectar-se com a IA: " + erro);
  }


}

export default askAI;