const experiencesApi = async () => {
  const response = await fetch(
    "https://gist.githubusercontent.com/joaolucasgusmao/125506d06aac84e58feb6095e4fd8596/raw/2d148d7db5839cec9a081739863ccefc3fe5f5af/experiences.json"
  );

  if (!response.ok) {
    throw new Error("Erro ao buscar dados das experiências.");
  }

  const data = await response.json();
  return data;
};

export default experiencesApi;
