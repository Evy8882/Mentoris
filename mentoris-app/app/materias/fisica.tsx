import MateriaPage from "@/component/materiaPage";

const cards = [
  {
    title: "Cinemática",
    subtitle: "Movimento dos corpos",
    image: require("../../assets/images/react-logo.png"),
    text: "O movimento depende do ponto de vista do observador. Uma pessoa pode parecer em repouso, mas todos estamos em movimento com a Terra. A velocidade pode ser média (distância total dividida pelo tempo) ou instantânea (em um momento específico). No movimento uniforme a velocidade não muda, enquanto no uniformemente variado há aceleração, que mostra a variação da velocidade no tempo.",
  },
  {
    title: "Dinâmica",
    subtitle: "Forças e Leis de Newton",
    image: require("../../assets/images/react-logo.png"),
    text: "Todo movimento é causado por forças. A 1ª Lei diz que um corpo tende a manter seu estado de repouso ou movimento até que algo atue nele. A 2ª Lei mostra que força resulta em aceleração (F = m·a). A 3ª Lei diz que toda ação gera uma reação contrária. Também entram aqui o peso, força normal e atrito, que pode ajudar (andar) ou atrapalhar (desgaste).",
  },
  {
    title: "Trabalho, Energia e Potência",
    subtitle: "Transformações de energia",
    image: require("../../assets/images/react-logo.png"),
    text: "Trabalho acontece quando uma força provoca deslocamento. A energia é a capacidade de realizar esse trabalho, podendo ser cinética (movimento), potencial gravitacional (altura), ou elástica (molas). A energia nunca some, só se transforma. A potência mostra a rapidez de transformação ou realização do trabalho: quanto menor o tempo, maior a potência.",
  },
  {
    title: "Impulso e Quantidade de Movimento",
    subtitle: "Conservação e colisões",
    image: require("../../assets/images/react-logo.png"),
    text: "A quantidade de movimento é a massa multiplicada pela velocidade: corpos mais pesados ou rápidos são mais difíceis de parar. O impulso é a força aplicada durante certo tempo e altera essa quantidade de movimento. Em esportes ou colisões, quanto maior o tempo de contato (como com airbags), menor a força sentida e menores os danos.",
  },
  {
    title: "Gravitação",
    subtitle: "Atração entre corpos",
    image: require("../../assets/images/react-logo.png"),
    text: "Todos os corpos com massa se atraem. A Lei da Gravitação Universal mostra que a força aumenta com a massa e diminui com o quadrado da distância. Isso explica a queda dos objetos, as órbitas dos planetas e dos satélites. Einstein depois explicou a gravidade como a curvatura do espaço-tempo causada pela massa. No cotidiano, é o que nos dá peso e mantém a atmosfera.",
  },
  {
    title: "Termologia",
    subtitle: "Calor, temperatura e dilatação",
    image: require("../../assets/images/react-logo.png"),
    text: "O calor é energia em trânsito, indo do corpo mais quente para o mais frio até o equilíbrio. A temperatura mostra o grau de agitação das partículas, medida em Celsius, Kelvin ou Fahrenheit. O calor pode provocar dilatação: sólidos aumentam em comprimento, área ou volume; líquidos e gases aumentam de volume. Há também o calor sensível (varia temperatura) e latente (provoca mudança de estado).",
  },
  {
    title: "Óptica",
    subtitle: "Espelhos, lentes, refração e reflexão",
    image: require("../../assets/images/react-logo.png"),
    text: "A luz se propaga e interage com a matéria. Na reflexão, a luz retorna ao meio: pode ser regular (espelho plano) ou difusa (superfícies irregulares). Na refração, muda de direção ao passar de um meio para outro, como na água. Espelhos podem gerar imagens virtuais, reais, ampliadas ou reduzidas. As lentes convergentes focam a luz em um ponto e as divergentes espalham os raios.",
  },
  {
    title: "Eletricidade",
    subtitle: "Circuitos, corrente e Lei de Ohm",
    image: require("../../assets/images/react-logo.png"),
    text: "A corrente elétrica é o fluxo de elétrons devido a uma diferença de potencial. A resistência é a dificuldade de passagem da corrente e depende do material. Pela Lei de Ohm: U = R·I. Nos circuitos, em série a corrente é igual em todos os pontos; em paralelo, a tensão é a mesma. A potência elétrica mostra a energia consumida ou fornecida em um tempo: P = U·I.",
  },
  {
    title: "Ondulatória",
    subtitle: "Som, luz e características das ondas",
    image: require("../../assets/images/react-logo.png"),
    text: "As ondas transportam energia sem transportar matéria. Podem ser mecânicas (precisam de meio, como o som) ou eletromagnéticas (como a luz, que viaja no vácuo). Principais características: comprimento de onda, frequência, período, velocidade e amplitude. O som é onda longitudinal e mais rápido em sólidos do que no ar. A luz é onda transversal, viajando a 300 mil km/s no vácuo.",
  },
];


export default function Fisica() {
  return (
    <MateriaPage cards={cards}/>
  );
}
