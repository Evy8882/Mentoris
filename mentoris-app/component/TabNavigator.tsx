// components/TabBar.tsx
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function TabNavigator() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <TabItem
        label="IA"
        icon="bulb-outline"
        onPress={() => router.push("/ia")}
      />
      <TabItem
        label="Home"
        icon="home-outline"
        onPress={() => router.push("/")}
      />
      <TabItem
        label="Config"
        icon="settings-outline"
        onPress={() => router.push("/config")}
      />
    </View>
  );
}

function TabItem({
  label,
  icon,
  onPress,
}: {
  label: string;
  icon: keyof typeof Ionicons.glyphMap;
  onPress: () => void;
}) {
  return (
    <TouchableOpacity style={styles.item} onPress={onPress}>
      <Ionicons name={icon} size={28} color="#fff" />
      <Text style={styles.label}>{label}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: "#243A64",
    height: 180,
    paddingBottom: "10%",
    justifyContent: "space-around",
    alignItems: "center",
    position: "absolute",
    left: 0,
    width: "100%",
    bottom: 0

  },
  item: {
    alignItems: "center",
    justifyContent: "center",
  },
  label: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
    marginTop: 5,
  },
});
