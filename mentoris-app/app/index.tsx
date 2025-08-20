import { Text, View } from "react-native";
import askAI from "@/utils/AI";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>{askAI()}</Text>
    </View>
  );
}
