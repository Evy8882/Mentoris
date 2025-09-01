import BotaoMateria from "@/component/botaoMateria";
import TabNavigator from "@/component/TabNavigator";
import { Dimensions, View } from "react-native";

const { width: screenWidth, height: screenHeight } = Dimensions.get("window");

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        backgroundColor: "#D9CDC5"
      }}
    >
      <View
        style={{
          width: "100%",
          height: screenHeight * 0.3,
          backgroundColor: "#243A64"
        }}
      />

      <View
        style={{
          backgroundColor: "#D9D9D9",
          width: screenWidth - 32,
          paddingVertical: 32,
          marginVertical: 32,
          borderRadius: 10,
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: 16
        }}
      >
        <BotaoMateria nomeMateria="Português"></BotaoMateria>
        
      </View>
      <TabNavigator/>
    </View>
  );
}
