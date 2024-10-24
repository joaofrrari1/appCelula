import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Modal } from 'react-native';

const App = () => {
  const [saldo, setSaldo] = useState(7320.92); 
  const [valor, setValor] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const [acao, setAcao] = useState('');

  const handleSaque = () => {
    setAcao('sacar');
    setModalVisible(true);
  };

  const handleDeposito = () => {
    setAcao('depositar');
    setModalVisible(true);
  };

  const confirmarAcao = () => {
    const valorNumerico = parseFloat(valor);
    if (isNaN(valorNumerico)) return;

    if (acao === 'sacar') {
      const taxa = saldo * 0.0025;
      if (saldo >= valorNumerico + taxa) {
        setSaldo((prevSaldo) => prevSaldo - valorNumerico - taxa);
      } else {
        alert('Saldo insuficiente');
      }
    } else if (acao === 'depositar') {
      const bonus = valorNumerico * 0.015; 
      setSaldo((prevSaldo) => prevSaldo + valorNumerico + bonus);
    }

    setValor('');
    setModalVisible(false);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Saldo Atual: R$ {saldo.toFixed(2)}</Text>
      
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        placeholder="Insira o valor"
        value={valor}
        onChangeText={setValor}
      />

      <View style={styles.buttonGroup}>
        <TouchableOpacity style={styles.button} onPress={handleSaque}>
          <Text style={styles.buttonText}>Sacar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={handleDeposito}>
          <Text style={styles.buttonText}>Depositar</Text>
        </TouchableOpacity>
      </View>

      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>
              Confirmar {acao} de R$ {valor}?
            </Text>
            <View style={styles.modalButtons}>
              <TouchableOpacity style={styles.confirmButton} onPress={confirmarAcao}>
                <Text style={styles.modalButtonText}>Sim</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.cancelButton} onPress={() => setModalVisible(false)}>
                <Text style={styles.modalButtonText}>Não</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f4f4f4',
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 30,
  },
  input: {
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 15,
    fontSize: 16,
    marginBottom: 20,
    width: '100%',
    backgroundColor: '#fff',
  },
  buttonGroup: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  button: {
    backgroundColor: '#4CAF50',
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 8,
    marginHorizontal: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.6)',
  },
  modalView: {
    width: 320,
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 25,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 10,
  },
  modalText: {
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 20,
    color: '#333',
  },
  modalButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  confirmButton: {
    backgroundColor: '#2196F3',
    padding: 15,
    borderRadius: 8,
    marginRight: 10,
  },
  cancelButton: {
    backgroundColor: '#f44336',
    padding: 15,
    borderRadius: 8,
  },
  modalButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});

export default App;
