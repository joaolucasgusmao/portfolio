const projectsApi = async () => {
  const response = await fetch(
    "https://gist.githubusercontent.com/joaolucasgusmao/c53a9cf62716e984e406db48b3b6b789/raw/aa96e4269473a65ab77327c0dc80b22cc4e5e66c/projects.json"
  );

  if (!response.ok) {
    throw new Error("Erro ao buscar dados dos projetos.");
  }

  const data = await response.json();
  return data;
};

export default projectsApi;
