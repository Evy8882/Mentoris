import { View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        backgroundColor: "#D9CDC5"
      }}
    >
      <View style={{
        width: "100%",
        height: "30vh",
        backgroundColor: "#243A64"
      }}>

      </View>
      <View
      style={{
        backgroundColor: "#D9D9D9",
        width: "calc(100% - 32px)",
        padding: "32px 0",
        margin: "32px 0",
        borderRadius: "10px"
      }}
      >
        <View
        style={{
          backgroundColor: "#5B88A5",
          width: "100%",
          height: "150px",
          margin: "auto",
          borderRadius: "10px"
        }}
        >

        </View>
      </View>
    </View>
  );
}
