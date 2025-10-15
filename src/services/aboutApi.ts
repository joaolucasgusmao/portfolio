const aboutApi = async () => {
  const response = await fetch(
    "https://gist.githubusercontent.com/joaolucasgusmao/b932c05931dbfea0c38d22dd61e4ace1/raw/6be6603eb9e4318e8d63c3bb8e8ef313609ec1ce/about.json"
  );

  if (!response.ok) {
    throw new Error("Erro ao buscar dados do perfil");
  }

  const data = await response.json();
  return data;
};

export default aboutApi;
