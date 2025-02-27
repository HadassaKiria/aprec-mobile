import React, { useState } from 'react';
import { View, Image } from 'react-native';

import { s } from "../Recovery/styles";

import { Button } from "../../components/button";
import { InputVerify } from "../../components/input-verify";
import { PasswordResetModal } from "../../components/modal";

export default function Verify() {
    const [modalVisible, setModalVisible] = useState(false);
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleVerifyCode = () => {
        setModalVisible(true);
    };

    const handleConfirmPassword = () => {
        setModalVisible(false);
    };

    return (
        <View style={s.container}>
            <Image
                style={s.logo}
                source={require('../../assets/logo.png')}
            />
            <InputVerify />
            <Button title="Enviar" onPress={handleVerifyCode} />

            <PasswordResetModal
                visible={modalVisible}
                onClose={() => setModalVisible(false)}
                newPassword={newPassword}
                setNewPassword={setNewPassword}
                confirmPassword={confirmPassword}
                setConfirmPassword={setConfirmPassword}
                onConfirm={handleConfirmPassword}
            />
        </View>
    );
}