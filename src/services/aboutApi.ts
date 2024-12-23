const aboutApi = async () => {
  const response = await fetch(
    "https://gist.githubusercontent.com/joaolucasgusmao/b932c05931dbfea0c38d22dd61e4ace1/raw/db44fb3e15e926e25b6679ecb8d41acdd44c33d3/about.json"
  );

  if (!response.ok) {
    throw new Error("Erro ao buscar dados do perfil");
  }

  const data = await response.json();
  return data;
};

export default aboutApi;
