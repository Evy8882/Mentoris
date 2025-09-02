import { View, Text, Image, TouchableOpacity } from "react-native";
import { useState } from "react";
import SimpleModal from "./modal";
import askAI from "@/utils/AI";

export default function SubjectCard({
    title,
    subtitle,
    image,
    text,
}: {
    title: string;
    subtitle: string;
    image: string;
    text: string | null;
}) {
    interface Question {
        question: string;
        options: string[];
        answer: string;
    }
    const [expanded, setExpanded] = useState(false);
    const [loadingExp, setLoadingExp] = useState(false);
    const [loadingQuiz, setLoadingQuiz] = useState(false);
    const [modalVisible, setModalVisible] = useState(false);
    const [modalContent, setModalContent] = useState("");
    const [quiz, setQuiz] = useState<Question[] | null>(null);

    async function explicarComIa() {
        if (!text) return;
        setLoadingExp(true);
        const response = await askAI(`Você é um assistente de IA em API, responda apenas texto puro e sem formatação markdown ou blocos de código. Explique o seguinte conteúdo de forma simples e clara: ${text}`);
        alert(response);
        setLoadingExp(false);
    }

    async function gerarQuizComIa() {
        if (!text) return;
        setLoadingQuiz(true);
        const response = await askAI(`Você é um assistente de IA em API, responda apenas texto puro e sem formatação markdown ou blocos de código. Gere um quiz com 3 perguntas de múltipla escolha (com 4 opções cada) baseadas no seguinte conteúdo: ${text}. Responda no seguinte formato JSON: [{"question": "Pergunta?", "options": ["Opção 1", "Opção 2", "Opção 3", "Opção 4"], "answer": "Opção correta"}, ...]`);
        alert(response);
        try {
            const parsed: Question[] = JSON.parse(response);
            setQuiz(parsed);
            alert(parsed.map((q, i) => `${i + 1}. ${q.question}\n${q.options.map((o, idx) => `   ${String.fromCharCode(97 + idx)}) ${o}`).join("\n")}\nResposta: ${q.answer}\n`).join("\n"));
            // setModalContent(parsed.map((q, i) => `${i + 1}. ${q.question}\n${q.options.map((o, idx) => `   ${String.fromCharCode(97 + idx)}) ${o}`).join("\n")}\nResposta: ${q.answer}\n`).join("\n"));
            // setModalVisible(true);
        } catch (e) {
            alert("Erro ao gerar quiz. Tente novamente.");
        }
        setLoadingQuiz(false);
    }

    return (
        <View
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
              source={typeof image === "string" ? { uri: image } : image}
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
                {title}
              </Text>
              <Text
                style={{
                  color: "#555",
                  fontSize: 13,
                  marginBottom: 12,
                  textAlign: "left",
                }}
              >
                {subtitle}
              </Text>
              <TouchableOpacity
                style={{
                  backgroundColor: "#243A64",
                  borderRadius: 16,
                  paddingVertical: 8,
                  alignItems: "center",
                  width: 120,
                }}
                onPress={() => setExpanded(!expanded)}
              >
                <Text
                  style={{
                    color: "#fff",
                    fontWeight: "bold",
                    fontSize: 15,
                    textAlign: "center",
                  }}
                >
                  {expanded? "Ocultar" : "Estudar"}
                </Text>
              </TouchableOpacity>
                {expanded ? (
                    <View style={{ marginTop: 12 }}>
                        <Text style={{ color: "#333", fontSize: 14, textAlign: "left" }}>
                            {text}
                        </Text>
                        <TouchableOpacity
                            style={{
                                backgroundColor: "#38bdf8",
                                borderRadius: 12,
                                paddingVertical: 8,
                                paddingHorizontal: 16,
                                alignItems: "center",
                                marginTop: 8,
                            }}
                            onPress={explicarComIa}
                        >
                            {loadingExp ? (
                                <Text style={{ color: "#fff", fontWeight: "bold", fontSize: 14 }}>
                                    Gerando explicação...
                                </Text>
                            ) : (
                                <Text style={{ color: "#fff", fontWeight: "bold", fontSize: 14 }}>
                                    Explicar com IA
                                </Text>
                            )}
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={{
                                backgroundColor: "#38bdf8",
                                borderRadius: 12,
                                paddingVertical: 8,
                                paddingHorizontal: 16,
                                alignItems: "center",
                                marginTop: 8,
                            }}
                            onPress={() => setLoadingQuiz(true)}
                        >
                            {loadingQuiz ? (
                                <Text style={{ color: "#fff", fontWeight: "bold", fontSize: 14 }}>
                                    Gerando Quiz...
                                </Text>
                            ) : (
                                <Text style={{ color: "#fff", fontWeight: "bold", fontSize: 14 }}>
                                    Gerar Quiz com IA
                                </Text>
                            )}
                        </TouchableOpacity>
                        <SimpleModal visible={modalVisible} onClose={() => setModalVisible(false)}>
                            <Text style={{ color: "#222", fontSize: 15 }}>{modalContent}</Text>
                        </SimpleModal>
                    </View>
                ) : null}
            </View>
          </View>
        );
    }