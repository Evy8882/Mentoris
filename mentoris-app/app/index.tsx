import BotaoMateria from "@/component/botaoMateria";
import TabNavigator from "@/component/TabNavigator";
import { Dimensions, View, Text } from "react-native";
import { useRouter } from "expo-router";

const { width: screenWidth } = Dimensions.get("window");

export default function Index() {
  const router = useRouter();
  return (
    <View style={{ flex: 1, backgroundColor: "#f3f3f3" }}>
      {/* Header */}
      <View
        style={{
          width: "100%",
          height: 120,
          backgroundColor: "#243A64",
          justifyContent: "center",
          paddingTop: 48,
          paddingLeft: 24,
        }}
      >
        <Text style={{ color: "#fff", fontSize: 22, fontWeight: "bold" }}>
          Mentoris
        </Text>
      </View>

      {/* Cards */}
      <BotaoMateria
        nomeMateria="Matemática"
        descricao="Explore conteúdos de álgebra, geometria e cálculo."
        onPress={() => router.push("/materias/matematica")}
      />
      <BotaoMateria
        nomeMateria="História"
        descricao="Descubra eventos e figuras importantes."
      />
      <BotaoMateria
        nomeMateria="Física"
        descricao="Entenda os princípios que regem o universo."
        onPress={() => router.push("/materias/fisica")}
      />
      <BotaoMateria
        nomeMateria="Literatura"
        descricao="Mergulhe em clássicos e autores contemporâneos."
      />
      <TabNavigator />
    </View>
  );
}
