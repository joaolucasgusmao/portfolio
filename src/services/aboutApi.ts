const aboutApi = async () => {
  const response = await fetch(
    "https://gist.githubusercontent.com/joaolucasgusmao/b932c05931dbfea0c38d22dd61e4ace1/raw/5ce7c8519a89c3e68ed54d189381dea62e4da5ab/about.json"
  );

  if (!response.ok) {
    throw new Error("Erro ao buscar dados do perfil");
  }

  const data = await response.json();
  return data;
};

export default aboutApi;
