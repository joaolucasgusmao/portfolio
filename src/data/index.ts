import { Projects } from "@/types";

const projects: Projects[] = [
  {
    name: "Fashion Store",
    description:
      "Aplicação de e-commerce simulada para a compra e gestão de roupas, com funcionalidades de cadastro, login e gerenciamento de produtos",
    techs: ["React.js", "SASS", "React Hooks", "Zod", "Axios", "Framer Motion"],
    repo: "https://github.com/joaolucasgusmao/fashion-store",
    deploy: "https://fashion-storee.vercel.app/",
  },
  {
    name: "Devs hub",
    description:
      "Plataforma para desenvolvedores registrarem e compartilharem suas stacks tecnológicas",
    techs: ["React.js", "SASS", "React Hooks", "Zod"],
    repo: "https://github.com/joaolucasgusmao/devs-hub",
    deploy: "https://deevshub.vercel.app/",
  },
  {
    name: "Burguer Shot",
    description:
      "Aplicação de fast-food simulada para gerenciar pedidos e exibir produtos",
    techs: ["React.js", "SASS", "React Hooks"],
    repo: "https://burguershot.vercel.app/",
    deploy: "https://burguershot.vercel.app/",
  },
  {
    name: "Control Finance",
    description:
      "Plataforma de gerenciamento de finanças pessoais com funcionalidades de controle de despesas e receitas",
    techs: ["React.js", "SASS", "React Hooks"],
    repo: "https://github.com/joaolucasgusmao/control-finance",
    deploy: "https://controlfinancee.vercel.app/",
  },
  {
    name: "Cars API",
    description: "API para gerenciamento de veículos, com testes automatizados",
    techs: [
      "Node.js",
      "Express.js",
      "TypeScript",
      "Prisma",
      "Zod",
      "Jest",
      "PostgreSQL",
    ],
    repo: "https://github.com/joaolucasgusmao/cars_api",
  },
];

export default projects;