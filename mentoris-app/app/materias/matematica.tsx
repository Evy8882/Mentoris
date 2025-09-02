import TabNavigator from "@/component/TabNavigator";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  Dimensions,
} from "react-native";

const { width: screenWidth } = Dimensions.get("window");

const cards = [
  {
    title: "Introduction to Algebra",
    subtitle: "Mathematics",
    image: require("../../assets/images/react-logo.png"), // ajuste o caminho se necessário
  },
  {
    title: "Introduction to Algebra",
    subtitle: "Mathematics",
    image: require("../../assets/images/react-logo.png"),
  },
  {
    title: "Introduction to Algebra",
    subtitle: "Mathematics",
    image: require("../../assets/images/react-logo.png"),
  },
];

export default function Matematica() {
  return (
    <View style={{ flex: 1, backgroundColor: "#f3f3f3" }}>
      {/* Header */}
      <View
        style={{
          width: "100%",
          height: 80,
          backgroundColor: "#243A64",
          justifyContent: "center",
          paddingTop: 32,
          paddingLeft: 24,
        }}
      >
        <Text style={{ color: "#fff", fontSize: 22, fontWeight: "bold" }}>
          Mentoris
        </Text>
      </View>
      <ScrollView contentContainerStyle={{ paddingVertical: 16 }}>
        {cards.map((card, idx) => (
          <View
            key={idx}
            style={{
              flexDirection: "row",
              backgroundColor: "#dbeafe",
              borderRadius: 18,
              marginHorizontal: 16,
              marginBottom: 24,
              alignItems: "center",
              padding: 16,
              shadowColor: "#000",
              shadowOpacity: 0.08,
              shadowRadius: 6,
              elevation: 2,
            }}
          >
            <Image
              source={card.image}
              style={{
                width: 70,
                height: 70,
                borderRadius: 16,
                marginRight: 16,
                backgroundColor: "#ccc",
              }}
              resizeMode="cover"
            />
            <View style={{ flex: 1 }}>
              <Text
                style={{
                  fontWeight: "bold",
                  fontSize: 16,
                  color: "#222",
                  textAlign: "left",
                }}
              >
                {card.title}
              </Text>
              <Text
                style={{
                  color: "#555",
                  fontSize: 13,
                  marginBottom: 12,
                  textAlign: "left",
                }}
              >
                {card.subtitle}
              </Text>
              <TouchableOpacity
                style={{
                  backgroundColor: "#243A64",
                  borderRadius: 16,
                  paddingVertical: 8,
                  alignItems: "center",
                  width: 120,
                }}
              >
                <Text
                  style={{
                    color: "#fff",
                    fontWeight: "bold",
                    fontSize: 15,
                    textAlign: "center",
                  }}
                >
                  Estudar
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        ))}
      </ScrollView>
      <TabNavigator />
    </View>
  );
}
