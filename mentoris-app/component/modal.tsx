import { Modal, View, Text, TouchableOpacity, StyleSheet } from 'react-native';

interface SimpleModalProps {
    visible: boolean;
    onClose: () => void;
    children?: React.ReactNode;
}

const SimpleModal: React.FC<SimpleModalProps> = ({ visible, onClose, children }) => (
    <Modal
        transparent
        visible={visible}
        animationType="fade"
        onRequestClose={onClose}
    >
        <View style={styles.overlay}>
            <View style={styles.modalContent}>
                {children ? children : <Text style={styles.modalText}>Este é o conteúdo do modal!</Text>}
                <TouchableOpacity onPress={onClose} style={styles.closeButton}>
                    <Text style={styles.buttonText}>Fechar</Text>
                </TouchableOpacity>
            </View>
        </View>
    </Modal>
);

const styles = StyleSheet.create({
    overlay: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.5)',
        justifyContent: 'center',
        alignItems: 'center'
    },
    modalContent: {
        backgroundColor: '#fff',
        padding: 24,
        borderRadius: 12,
        alignItems: 'center',
        minWidth: 250
    },
    closeButton: { backgroundColor: '#f44336', padding: 12, borderRadius: 8, marginTop: 16 },
    buttonText: { color: '#fff', fontWeight: 'bold' },
    modalText: { fontSize: 16, marginBottom: 12 }
});

export default SimpleModal;
