import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Link } from 'expo-router';

export default function Home() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Selecione um dos Projeto</Text>

      <View style={styles.linkContainer}>
        <Link href="./telaregistro" asChild>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Registrar-se</Text>
          </TouchableOpacity>
        </Link>
        <Link href="./banco" asChild>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Banco Do Brasil</Text>
          </TouchableOpacity>
        </Link>
        <Link href="./calculadora" asChild>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Calculadora Top</Text>
          </TouchableOpacity>
        </Link>
        <Link href="./lista" asChild>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Lista A-fazer</Text>
          </TouchableOpacity>
        </Link>
        <Link href="./pokemon" asChild>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Pokemon Lista</Text>
          </TouchableOpacity>
        </Link>
        <Link href="./sobremim" asChild>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Sobre Mim Mesmo</Text>
          </TouchableOpacity>
        </Link>
        <Link href="./ifome" asChild>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>I-food Top</Text>
          </TouchableOpacity>
        </Link>
        <Link href="./camera" asChild>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Câmera Foda</Text>
          </TouchableOpacity>
        </Link>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 25,
    justifyContent: 'center',
    backgroundColor: '#e0f7fa',
  },
  header: {
    textAlign: 'center',
    fontSize: 26,
    fontWeight: '600',
    marginBottom: 30,
    color: '#00796b',
  },
  linkContainer: {
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#ff7043',
    paddingVertical: 10,
    paddingHorizontal: 40,
    borderRadius: 10,
    marginVertical: 8,
    width: '70%',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '500',
  },
});
