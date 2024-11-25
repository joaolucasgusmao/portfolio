const projectsApi = async () => {
  const response = await fetch(
    "https://gist.githubusercontent.com/joaolucasgusmao/c53a9cf62716e984e406db48b3b6b789/raw/5200195a1e23d071c7557f3f0bb2d9dab39abf0e/projects.json"
  );

  if (!response.ok) {
    throw new Error("Erro ao buscar dados dos projetos.");
  }

  const data = await response.json();
  return data;
};

export default projectsApi;
