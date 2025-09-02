import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, ScrollView, StyleSheet, KeyboardAvoidingView, Platform } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import TabNavigator from "@/component/TabNavigator";

export default function ChatIA() {
    const [messages, setMessages] = useState([
        { id: 1, text: "Seja bem vindo à Ment IA", from: "bot" }
    ]);
    const [input, setInput] = useState("");

    const sendMessage = () => {
        if (input.trim() === "") return;
        setMessages([...messages, { id: Date.now(), text: input, from: "user" }]);
        setInput("");
        // Aqui você pode adicionar lógica para resposta do bot
    };

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Ionicons name="book" size={24} color="#fff" />
                <Text style={styles.headerText}>Mentoris</Text>
            </View>
            <Text style={styles.title}>Ment IA</Text>
            <View style={styles.avatar} />
            <ScrollView style={styles.chatArea} contentContainerStyle={{ paddingVertical: 10 }}>
                {messages.map(msg => (
                    <View
                        key={msg.id}
                        style={[
                            styles.message,
                            msg.from === "bot" ? styles.botMessage : styles.userMessage
                        ]}
                    >
                        <Text style={styles.messageText}>{msg.text}</Text>
                    </View>
                ))}
            </ScrollView>
            <View style={{ flex: 0 }}>
                <KeyboardAvoidingView
                    behavior={Platform.OS === "ios" ? "padding" : "height"}
                    keyboardVerticalOffset={90}
                >
                    <View style={styles.inputArea}>
                        <TextInput
                            style={styles.input}
                            placeholder="Type your own question..."
                            value={input}
                            onChangeText={setInput}
                        />
                        <TouchableOpacity style={styles.sendButton} onPress={sendMessage}>
                            <Ionicons name="send" size={20} color="#fff" />
                        </TouchableOpacity>
                    </View>
                </KeyboardAvoidingView>
            </View>
            <TabNavigator />
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: "#f5f5f5" },
    header: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#23376D",
        height: 120,
        padding: 12,
        paddingTop: 48
    },
    headerText: { color: "#fff", fontSize: 18, marginLeft: 8, fontWeight: "bold" },
    title: { fontSize: 28, fontWeight: "bold", margin: 20, color: "#23376D" },
    avatar: {
        width: 32,
        height: 32,
        borderRadius: 16,
        backgroundColor: "#23376D",
        marginLeft: 20,
        marginBottom: 10
    },
    chatArea: { flex: 1, paddingHorizontal: 20 },
    message: {
        maxWidth: "80%",
        padding: 10,
        borderRadius: 10,
        marginBottom: 10,
        elevation: 2
    },
    botMessage: {
        backgroundColor: "#23376D",
        alignSelf: "flex-start"
    },
    userMessage: {
        backgroundColor: "#fff",
        alignSelf: "flex-end",
        borderWidth: 1,
        borderColor: "#23376D"
    },
    messageText: { color: "#fff" },
    inputArea: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#23376D",
        padding: 10,
        marginBottom: 200,
        borderRadius: 8,
        margin: 10
    },
    input: {
        flex: 1,
        backgroundColor: "#fff",
        borderRadius: 6,
        paddingHorizontal: 12,
        paddingVertical: 8,
        marginRight: 8
    },
    sendButton: {
        backgroundColor: "#23376D",
        padding: 10,
        borderRadius: 6
    }
});