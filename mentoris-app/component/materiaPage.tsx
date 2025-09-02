import TabNavigator from "@/component/TabNavigator";
import SubjectCard from "@/component/subjectCard";
import { View, Text, ScrollView } from "react-native";

export default function MateriaPage({cards}: {cards: {title: string; subtitle: string; image: string; text: string | null;}[]}) {
    return(<View style={{ flex: 1, backgroundColor: "#f3f3f3" }}>
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
            <SubjectCard
              key={idx}
              title={card.title}
              subtitle={card.subtitle}
              image={card.image}
              text={card.text}
            />
          ))}
        </ScrollView>
        <TabNavigator />
      </View>)
}