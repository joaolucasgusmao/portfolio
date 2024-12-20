const experiencesApi = async () => {
  const response = await fetch(
    "https://gist.githubusercontent.com/joaolucasgusmao/125506d06aac84e58feb6095e4fd8596/raw/11ef1d4d05c71d2ad5b06ffe88d98e814190c9ec/experiences.json"
  );

  if (!response.ok) {
    throw new Error("Erro ao buscar dados das experiências.");
  }

  const data = await response.json();
  return data;
};

export default experiencesApi;
