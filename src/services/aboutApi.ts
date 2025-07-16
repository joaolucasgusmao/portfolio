const aboutApi = async () => {
  const response = await fetch(
    "https://gist.githubusercontent.com/joaolucasgusmao/b932c05931dbfea0c38d22dd61e4ace1/raw/bb0e24b48885ab98176125270977a756f34718c2/about.json"
  );

  if (!response.ok) {
    throw new Error("Erro ao buscar dados do perfil");
  }

  const data = await response.json();
  return data;
};

export default aboutApi;
