const projectsApi = async () => {
  const response = await fetch(
    "https://gist.githubusercontent.com/joaolucasgusmao/c53a9cf62716e984e406db48b3b6b789/raw/8f18ba2a108aaacfa2192df4618785814b96ea46/projects.json"
  );

  if (!response.ok) {
    throw new Error("Erro ao buscar dados dos projetos.");
  }

  const data = await response.json();
  return data;
};

export default projectsApi;
