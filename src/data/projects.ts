import { Projects } from "@/types/projects";

const projects: Projects[] = [
  {
    id: 1,
    name: "Control Finance",
    description:
      "Aplicação para o gerenciamento de finanças com funcionalidades de controle de despesas, receitas e dark mode.",
    techs: ["React.js", "SASS", "React Hooks"],
    repo: "https://github.com/joaolucasgusmao/control-finance",
    deploy: "https://controlfinancee.vercel.app/",
  },
  {
    id: 2,
    name: "Burguer Shot",
    description:
      "Hamburgueria com funcionalidade de adição de produtos ao carrinho.",
    techs: ["React.js", "SASS", "React Hooks"],
    repo: "https://github.com/joaolucasgusmao/burguer-shot",
    deploy: "https://burguershot.vercel.app/",
  },
  {
    id: 3,
    name: "Devs Hub",
    description:
      "Aplicação com funcionalidades de cadastro, login e registro de tecnologias.",
    techs: ["React.js", "SASS", "React Hooks", "Zod"],
    repo: "https://github.com/joaolucasgusmao/devs-hub",
    deploy: "https://deevshub.vercel.app/",
  },
  {
    id: 4,
    name: "Fashion Store",
    description:
      "Loja online com funcionalidades de cadastro, login, adição de produtos ao carrinho e cadastro de novos produtos.",
    techs: ["React.js", "SASS", "React Hooks", "Zod", "Axios", "Framer Motion"],
    repo: "https://github.com/joaolucasgusmao/fashion-store",
    deploy: "https://fashion-storee.vercel.app/",
  },
  {
    id: 5,
    name: "Cars API",
    description: "CRUD de veículos, com testes automatizados.",
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

  {
    id: 6,
    name: "Laravel API",
    description: "CRUD de usuários.",
    techs: ["PHP", "Laravel", "Docker", "MySQL"],
    repo: "https://github.com/joaolucasgusmao/users-api",
  },
];

export default projects;
