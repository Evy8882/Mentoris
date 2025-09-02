import MateriaPage from "@/component/materiaPage";

const cards = [
  {
    title: "Introdução à Álgebra",
    subtitle: "Matemática",
    image: require("../../assets/images/react-logo.png"),
    text: "A álgebra usa letras e símbolos para representar números e operações. Permite resolver equações, trabalhar com incógnitas e generalizar situações matemáticas. É a base para entender fórmulas e funções.",
  },
  {
    title: "Geometria",
    subtitle: "Matemática",
    image: require("../../assets/images/react-logo.png"),
    text: "Estuda formas, tamanhos e propriedades do espaço. Inclui pontos, retas, ângulos, triângulos, polígonos, circunferências e sólidos. Também abrange áreas, perímetros e volumes.",
  },
  {
    title: "Trigonometria",
    subtitle: "Matemática",
    image: require("../../assets/images/react-logo.png"),
    text: "Relaciona ângulos e lados em triângulos, usando razões como seno, cosseno e tangente. É útil para medir distâncias, alturas e em aplicações de física e engenharia.",
  },
  {
    title: "Estatística e Probabilidade",
    subtitle: "Matemática",
    image: require("../../assets/images/react-logo.png"),
    text: "A estatística organiza e interpreta dados através de tabelas, gráficos, média, mediana e desvio padrão. A probabilidade mede a chance de um evento acontecer, variando de 0 a 1.",
  },
  {
    title: "Funções",
    subtitle: "Matemática",
    image: require("../../assets/images/react-logo.png"),
    text: "Uma função relaciona cada valor de entrada a um único valor de saída. Exemplos: função afim (reta), quadrática (parábola) e exponencial. São essenciais para modelar situações do cotidiano.",
  },
  {
    title: "Matemática Financeira",
    subtitle: "Matemática",
    image: require("../../assets/images/react-logo.png"),
    text: "Trata de juros simples e compostos, porcentagem, descontos e prestações. Muito usada em bancos, compras, investimentos e planejamento financeiro.",
  },
  {
    title: "Cálculo Básico",
    subtitle: "Matemática",
    image: require("../../assets/images/react-logo.png"),
    text: "Introduz limites, derivadas e integrais. O limite descreve aproximações, a derivada mede taxas de variação e a integral calcula áreas e somas acumuladas. É base para a matemática avançada.",
  },
];


export default function Matematica() {
  return (
    <MateriaPage cards={cards}/>
  );
}
