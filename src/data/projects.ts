import { Projects } from "@/types/projects";

const projects: Projects[] = [
  {
    id: 1,
    image: "https://i.ibb.co/bvtnjhj/burguershot.png",
    name: "Burguer Shot",
    description:
      "Hamburgueria com funcionalidades de adicionar e remover itens do carrinho, e calcular o valor total da compra.",
    techs: ["React.js", "SASS", "React Hooks", "Axios"],
    repo: "https://github.com/joaolucasgusmao/burguer-shot",
    deploy: "https://burguershot.vercel.app/",
  },
  {
    id: 2,
    image: "https://i.ibb.co/hDVSzBk/controlfinance.png",
    name: "Control Finance",
    description:
      "Aplicação para o controle de finanças com funcionalidades de gerenciar despesas, receitas e dark mode.",
    techs: ["React.js", "SASS", "React Hooks"],
    repo: "https://github.com/joaolucasgusmao/control-finance",
    deploy: "https://controlfinancee.vercel.app/",
  },
  {
    id: 3,
    image: "https://i.ibb.co/g6hZwXv/devshub.png",
    name: "Devs Hub",
    description:
      "Aplicação com funcionalidades de cadastro de usuários, login, registro de tecnologias e validação de dados.",
    techs: ["React.js", "SASS", "React Hooks", "Zod", "Axios"],
    repo: "https://github.com/joaolucasgusmao/devs-hub",
    deploy: "https://deevshub.vercel.app/",
  },
  {
    id: 4,
    image: "https://i.ibb.co/hKQrGJd/fashionstore.png",
    name: "Fashion Store",
    description:
      "Loja online com cadastro de usuários, login, adição de produtos ao carrinho, cadastro de novos produtos e validação de dados.",
    techs: ["React.js", "SASS", "React Hooks", "Zod", "Axios", "Framer Motion"],
    repo: "https://github.com/joaolucasgusmao/fashion-store",
    deploy: "https://fashion-storee.vercel.app/",
  },
  {
    id: 5,
    image: "https://i.ibb.co/TKrVnPX/cars-api.png",
    name: "Cars API",
    description:
      "CRUD completo de veículos, com validação de dados e testes automatizados.",
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
    image: "https://i.ibb.co/XLvc3X6/users-api.png",
    name: "Users API",
    description:
      "CRUD completo de usuários com registro, login e validação de dados.",
    techs: ["PHP", "Laravel", "Docker", "MySQL"],
    repo: "https://github.com/joaolucasgusmao/users-api",
  },
];

export default projects;
