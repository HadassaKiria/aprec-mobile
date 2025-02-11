import React from 'react';
import { View, Text, TextInput, Modal, Pressable } from 'react-native';
import { s } from "./styles";
import { Button } from "../../components/button";

export function PasswordResetModal({ visible, onClose, newPassword, setNewPassword, confirmPassword, setConfirmPassword, onConfirm }) {
    return (
        <Modal
            animationType="fade"
            transparent={true}
            visible={visible}
            onRequestClose={onClose}
        >
            <View style={s.modalOverlay}>
                <View style={s.modalContainer}>
                    <Pressable style={s.closeButton} onPress={onClose}>
                        <Text>x</Text>
                    </Pressable>

                    <Text style={s.modalTitle}>Recuperação de Senha</Text>

                    <Text style={s.label}>Senha</Text>
                    <TextInput
                        style={s.input}
                        placeholder="Digite sua nova senha"
                        secureTextEntry
                        value={newPassword}
                        onChangeText={setNewPassword}
                    />

                    <Text style={s.label}>Confirme sua senha</Text>
                    <TextInput
                        style={s.input}
                        placeholder="Confirme sua nova senha"
                        secureTextEntry
                        value={confirmPassword}
                        onChangeText={setConfirmPassword}
                    />

                    <Button title="Confirmar" onPress={onConfirm} />
                </View>
            </View>
        </Modal>
    );
}