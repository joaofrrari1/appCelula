import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, SafeAreaView, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f0f0f5',
        padding: 30,
    },
    title: {
        fontSize: 26,
        fontWeight: '600',
        color: '#333',
        marginBottom: 25,
    },
    input: {
        width: '90%',
        height: 45,
        borderColor: '#888',
        borderWidth: 1,
        borderRadius: 8,
        paddingHorizontal: 12,
        backgroundColor: '#fff',
        marginBottom: 15,
    },
    button: {
        backgroundColor: '#28a745',
        paddingVertical: 12,
        paddingHorizontal: 20,
        borderRadius: 8,
        width: '50%',
        alignItems: 'center',
        marginTop: 20,
    },
    buttonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: '500',
    }
});

export default function SignUp() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <SafeAreaView style={styles.container}>
            <View>
                <Text style={styles.title}>Criar Conta</Text>
            </View>
            <View>
                <TextInput
                    style={styles.input}
                    onChangeText={(text) => setEmail(text)}
                    value={email}
                    placeholder="Digite seu email"
                    keyboardType="email-address"
                    autoCapitalize="none"
                />
                <TextInput
                    style={styles.input}
                    onChangeText={(text) => setPassword(text)}
                    value={password}
                    placeholder="Digite sua senha"
                    secureTextEntry
                />
            </View>
            <TouchableOpacity 
                style={styles.button} 
                onPress={() => alert(`Conta criada com o email: ${email}`)}
            >
                <Text style={styles.buttonText}>Cadastrar</Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
}
