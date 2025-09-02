import { Dimensions, View, Text, TouchableOpacity } from "react-native";

const { width: screenWidth } = Dimensions.get("window");

export default function BotaoMateria({
  nomeMateria,
  descricao,
  onPress,
}: {
  nomeMateria: string;
  descricao: string;
  onPress?: () => void;
}) {
  return (
    <View style={{ alignItems: "center", marginTop: 24 }}>
      <View
        style={{
          backgroundColor: "#fff",
          width: screenWidth - 32,
          borderRadius: 16,
          padding: 20,
          shadowColor: "#000",
          shadowOpacity: 0.1,
          shadowRadius: 8,
          elevation: 3,
        }}
      >
        <Text style={{ fontWeight: "bold", fontSize: 18, color: "#1A2C41", marginBottom: 8 }}>
          {nomeMateria}
        </Text>
        <Text style={{ color: "#5B88A5", fontSize: 15, marginBottom: 24 }}>
          {descricao}
        </Text>
        <TouchableOpacity
          style={{
            backgroundColor: "#1A2C41",
            borderRadius: 24,
            paddingVertical: 12,
            alignItems: "center",
            justifyContent: "center",
          }}
          onPress={onPress}
        >
          <Text style={{ color: "#fff", fontWeight: "bold", fontSize: 16 }}>
            Ver Mais
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}