import { Text, View } from "react-native";
export default function BotaoMateria({nomeMateria}: {nomeMateria:string}){
    return(
        <View
          style={{
            backgroundColor: "#5B88A5",
            width: "45%",
            height: 150,
            alignSelf: "center",
            borderRadius: 10
          }}
        >
            <Text>{nomeMateria}</Text>
        </View>
    )
}