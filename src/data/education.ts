import { Education } from "@/types/education";

const EducationData: Education[] = [
  {
    id: 1,
    image: "/grupo_uninter_logo.png",
    institution: "Uninter",
    course: "Análise e Desenvolvimento de Sistemas · Graduação",
    link: "https://www.uninter.com/graduacao/a-distancia/?gad_source=1&gclid=Cj0KCQiAsaS7BhDPARIsAAX5cSD1IZwhSgZcmeShFszrrHZXAWvKqJr4H4RnYucdufvpl_YBkQp6U-MaAv7qEALw_wcB&gclsrc=aw.ds",
    period: "2024 - atualmente",
  },
  {
    id: 2,
    image: "/kenzie_brasil_logo.png",
    institution: "Kenzie Academy Brasil",
    course: "Desenvolvimento Full Stack · Curso",
    link: "https://www.kenzie.com.br",
    description:
      "Curso de 2.000 horas de Desenvolvimento Full Stack que abrange tecnologias Front End e Back End além de soft skills necessárias para o mercado de trabalho. Entre as linguagens e tecnologias aprendidas, estão HTML5, CSS3, JavaScript (ES6+), React, Node.js, Python (Django) e SQL.",
    period: "mai de 2023 - mai de 2024",
  },
];

export default EducationData;
