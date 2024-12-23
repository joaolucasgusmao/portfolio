const educationApi = async () => {
  const response = await fetch(
    "https://gist.githubusercontent.com/joaolucasgusmao/0c587812bc484a02fe1586d2a05b003c/raw/37e7fd787ab4d948a7897ffbb0ba4cfcd37e9acf/education.json"
  );

  if (!response.ok) {
    throw new Error("Erro ao buscar dados de formação.");
  }

  const data = await response.json();
  return data;
};

export default educationApi;
