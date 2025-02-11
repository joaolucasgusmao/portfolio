const experiencesApi = async () => {
  const response = await fetch(
    "https://gist.githubusercontent.com/joaolucasgusmao/125506d06aac84e58feb6095e4fd8596/raw/79038c27a4282532d77c799752b1b2a259a760d1/experiences.json"
  );

  if (!response.ok) {
    throw new Error("Erro ao buscar dados das experiências.");
  }

  const data = await response.json();
  return data;
};

export default experiencesApi;
