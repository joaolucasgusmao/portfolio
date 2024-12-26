const projectsApi = async () => {
  const response = await fetch(
    "https://gist.githubusercontent.com/joaolucasgusmao/c53a9cf62716e984e406db48b3b6b789/raw/3c510daf4085629f0966cb411d09cf0a08d8f854/projects.json"
  );

  if (!response.ok) {
    throw new Error("Erro ao buscar dados dos projetos.");
  }

  const data = await response.json();
  return data;
};

export default projectsApi;
