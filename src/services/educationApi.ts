const educationApi = async () => {
  const response = await fetch(
    "https://gist.githubusercontent.com/joaolucasgusmao/0c587812bc484a02fe1586d2a05b003c/raw/76f6927f853adc188cd19aac1ac1396a92f67fd6/education.json"
  );

  if (!response.ok) {
    throw new Error("Erro ao buscar dados de formação.");
  }

  const data = await response.json();
  return data;
};

export default educationApi;
