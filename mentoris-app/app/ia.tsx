import React, { useState, useRef, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  Keyboard,
  TouchableWithoutFeedback,
  LayoutAnimation,
  UIManager,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import TabNavigator from "@/component/TabNavigator";
import askAI from "@/utils/AI";

export default function ChatIA() {
  const TAB_BAR_HEIGHT = 210; 
  const HEADER_HEIGHT = 180; 
  const [messages, setMessages] = useState([
    { id: 1, text: "Seja bem vindo à Ment IA", from: "bot" },
  ]);
  const [input, setInput] = useState("");
  const [keyboardHeight, setKeyboardHeight] = useState(0);
  const scrollRef = useRef<ScrollView>(null);

  useEffect(() => {
    if (Platform.OS === "android" && UIManager.setLayoutAnimationEnabledExperimental) {
      UIManager.setLayoutAnimationEnabledExperimental(true);
    }

    const showEvent = Platform.OS === "ios" ? "keyboardWillShow" : "keyboardDidShow";
    const hideEvent = Platform.OS === "ios" ? "keyboardWillHide" : "keyboardDidHide";

    const showSub = Keyboard.addListener(showEvent, (e) => {
      const h = e.endCoordinates?.height ?? 0;
      LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
      setKeyboardHeight(h);
      
      setTimeout(() => scrollRef.current?.scrollToEnd({ animated: true }), 50);
    });

    const hideSub = Keyboard.addListener(hideEvent, () => {
      LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
      setKeyboardHeight(0);
    });

    return () => {
      showSub.remove();
      hideSub.remove();
    };
  }, []);

  const sendMessage = async () => {
    if (input.trim() === "") return;
    setMessages((prev) => [...prev, { id: Date.now(), text: input, from: "user" }]);
    setInput("");
    const prompt = `Você é um assistente em API. Responda apenas em texto puro, sem formatação markdown nem blocos de código. Histórico de conversa:\n${messages.map(m => `${m.from === "user" ? "Usuário" : "Ment IA"}: ${m.text}`).join("\n")}\nUsuário: ${input}\n mensagem atual: ${input}  \n Ment IA:`;
    const resposta = await askAI(prompt);
    setMessages((prev) => [...prev, { id: Date.now() + 1, text: resposta, from: "bot" }]);
    setTimeout(() => {
      scrollRef.current?.scrollToEnd({ animated: true });
    }, 0);
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : undefined}
      keyboardVerticalOffset={Platform.select({ ios: HEADER_HEIGHT + TAB_BAR_HEIGHT, android: 0 })}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={{ flex: 1 }}>
          <ScrollView
            ref={scrollRef}
            style={styles.container}
            contentContainerStyle={{ paddingVertical: 10, paddingBottom: TAB_BAR_HEIGHT + 140 }}
            keyboardShouldPersistTaps="handled"
            onContentSizeChange={() => scrollRef.current?.scrollToEnd({ animated: true })}
          >
            <View style={styles.header}>
              <Ionicons name="book" size={24} color="#fff" />
              <Text style={styles.headerText}>Mentoris</Text>
            </View>

            <Text style={styles.title}>Ment IA</Text>
            <View style={styles.avatar} />

            <View style={styles.chatArea}>
              {messages.map((msg) => (
                <View
                  key={msg.id}
                  style={[
                    styles.message,
                    msg.from === "bot" ? styles.botMessage : styles.userMessage,
                  ]}
                >
                  <Text
                    style={[
                      styles.messageText,
                      msg.from === "user" && styles.userMessageText,
                    ]}
                  >
                    {msg.text}
                  </Text>
                </View>
              ))}
            </View>
          </ScrollView>
          <View
            style={[
              styles.inputArea,
              { marginBottom: keyboardHeight > 0 ? keyboardHeight : TAB_BAR_HEIGHT },
            ]}
          >
            <TextInput
              style={styles.input}
              value={input}
              onChangeText={setInput}
              placeholder="Digite sua mensagem..."
              placeholderTextColor="#23376D"
              onSubmitEditing={sendMessage}
              returnKeyType="send"
            />
            <TouchableOpacity style={styles.sendButton} onPress={sendMessage}>
              <Ionicons name="send" size={20} color="#fff" />
            </TouchableOpacity>
          </View>

          <TabNavigator />
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, height: "100%", backgroundColor: "#f5f5f5" },

  header: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#23376D",
    height: 120,
    padding: 12,
    paddingTop: 48,
  },
  headerText: { color: "#fff", fontSize: 18, marginLeft: 8, fontWeight: "bold" },

  title: { fontSize: 28, fontWeight: "bold", margin: 20, color: "#23376D" },

  avatar: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: "#23376D",
    marginLeft: 20,
    marginBottom: 10,
  },


  chatArea: { 
    flex: 1, 
    paddingHorizontal: 20,
  },
  message: {
    maxWidth: "80%",
    padding: 10,
    borderRadius: 10,
    marginBottom: 10,
    elevation: 2,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 1 },
    shadowRadius: 2,
  },
  botMessage: {
    backgroundColor: "#23376D",
    alignSelf: "flex-start",
  },
  userMessage: {
    backgroundColor: "#fff",
    alignSelf: "flex-end",
    borderWidth: 1,
    borderColor: "#23376D",
  },
  messageText: { color: "#fff" },
  userMessageText: { color: "#23376D" },

  inputArea: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#23376D",
    padding: 10,
    marginBottom: 260,
    borderRadius: 8,
    margin: 10,
  },
  input: {
    flex: 1,
    backgroundColor: "#fff",
    borderRadius: 6,
    paddingHorizontal: 12,
    paddingVertical: 8,
    marginRight: 8,
  },
  sendButton: {
    backgroundColor: "#23376D",
    padding: 10,
    borderRadius: 6,
  },
});
