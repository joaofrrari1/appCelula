import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const App = () => {
  const [valor1, setValor1] = useState('');
  const [valor2, setValor2] = useState('');
  const [resultado, setResultado] = useState(null);

  const realizarCalculo = (operacao) => {
    const num1 = parseFloat(valor1);
    const num2 = parseFloat(valor2);

    if (isNaN(num1) || isNaN(num2)) {
      setResultado('Insira valores válidos');
      return;
    }

    const operacoes = {
      '+': num1 + num2,
      '-': num1 - num2,
      '*': num1 * num2,
      '/': num2 !== 0 ? num1 / num2 : 'Erro: Divisão por zero',
    };

    setResultado(operacoes[operacao] || 'Operação inválida');
  };

  return (
    <View style={styles.appContainer}>
      <Text style={styles.title}>Calculadora Simples</Text>

      <TextInput
        style={styles.input}
        keyboardType="numeric"
        placeholder="Primeiro número"
        value={valor1}
        onChangeText={setValor1}
      />
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        placeholder="Segundo número"
        value={valor2}
        onChangeText={setValor2}
      />

      <View style={styles.buttonRow}>
        {['+', '-', '*', '/'].map((op) => (
          <TouchableOpacity
            key={op}
            style={styles.button}
            onPress={() => realizarCalculo(op)}
          >
            <Text style={styles.buttonText}>{op}</Text>
          </TouchableOpacity>
        ))}
      </View>

      {resultado !== null && <Text style={styles.resultado}>{resultado}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f8ff',
    padding: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: '600',
    marginBottom: 20,
    color: '#333',
  },
  input: {
    width: '90%',
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    marginBottom: 16,
    backgroundColor: '#fff',
    fontSize: 18,
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginVertical: 20,
  },
  button: {
    backgroundColor: '#1e90ff',
    padding: 12,
    borderRadius: 8,
    width: '20%',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: '500',
  },
  resultado: {
    fontSize: 26,
    fontWeight: '700',
    color: '#4b0082',
    marginTop: 20,
  },
});

export default App;
