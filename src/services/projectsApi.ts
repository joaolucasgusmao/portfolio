const projectsApi = async () => {
  const response = await fetch(
    "https://gist.githubusercontent.com/joaolucasgusmao/c53a9cf62716e984e406db48b3b6b789/raw/f8a6486f239846aa3853a6cbd7bdbb5437e24ab9/projects.json"
  );

  if (!response.ok) {
    throw new Error("Erro ao buscar dados dos projetos.");
  }

  const data = await response.json();
  return data;
};

export default projectsApi;
