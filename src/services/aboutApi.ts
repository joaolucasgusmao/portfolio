const aboutApi = async () => {
  const response = await fetch(
    "https://gist.githubusercontent.com/joaolucasgusmao/b932c05931dbfea0c38d22dd61e4ace1/raw/6630c15b07d91ee3b8eec3b1dfadfed43d7b7d40/about.json"
  );

  if (!response.ok) {
    throw new Error("Erro ao buscar dados do perfil");
  }

  const data = await response.json();
  return data;
};

export default aboutApi;
