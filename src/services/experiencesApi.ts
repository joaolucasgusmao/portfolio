const experiencesApi = async () => {
  const response = await fetch(
    "https://gist.githubusercontent.com/joaolucasgusmao/125506d06aac84e58feb6095e4fd8596/raw/942ac1391eb4dbd0497ebb19aa01efc91f77b5eb/experiences.json"
  );

  if (!response.ok) {
    throw new Error("Erro ao buscar dados das experiências.");
  }

  const data = await response.json();
  return data;
};

export default experiencesApi;
