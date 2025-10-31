const experiencesApi = async () => {
  const response = await fetch(
    "https://gist.githubusercontent.com/joaolucasgusmao/125506d06aac84e58feb6095e4fd8596/raw/7d5a093dbae104dc7bea2bb34b73d74e8cd37df2/experiences.json"
  );

  if (!response.ok) {
    throw new Error("Erro ao buscar dados das experiências.");
  }

  const data = await response.json();
  return data;
};

export default experiencesApi;
