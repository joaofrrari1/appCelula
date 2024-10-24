import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity, TextInput, Button, Alert } from 'react-native';

const TodoApp = () => {
  const [tasks, setTasks] = useState([
    { id: '1', text: 'Comprar leite', completed: false },
    { id: '2', text: 'Aprender React Native', completed: false },
    { id: '3', text: 'Exercitar-se', completed: false },
  ]);

  const [newTask, setNewTask] = useState('');

  const toggleTaskStatus = (taskId) => {
    setTasks(prevTasks =>
      prevTasks.map(task =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const addNewTask = () => {
    if (newTask.trim()) {
      setTasks(prevTasks => [
        ...prevTasks,
        { id: (prevTasks.length + 1).toString(), text: newTask, completed: false }
      ]);
      setNewTask('');
    } else {
      Alert.alert('Erro', 'O campo de tarefa está vazio.');
    }
  };

  const removeTask = (taskId) => {
    Alert.alert(
      'Confirmação',
      'Tem certeza de que deseja excluir esta tarefa?',
      [
        { text: 'Cancelar', style: 'cancel' },
        {
          text: 'Excluir',
          onPress: () => {
            setTasks(prevTasks => prevTasks.filter(task => task.id !== taskId));
          },
        },
      ]
    );
  };

  const renderTask = ({ item }) => (
    <View style={styles.taskWrapper}>
      <TouchableOpacity onPress={() => toggleTaskStatus(item.id)} style={styles.taskInfo}>
        <Text style={[styles.taskText, item.completed && styles.completedText]}>{item.text}</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => removeTask(item.id)} style={styles.removeButton}>
        <Text style={styles.removeButtonText}>Remover</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Lista de Tarefas</Text>
      <TextInput
        style={styles.input}
        placeholder="Digite uma nova tarefa"
        value={newTask}
        onChangeText={setNewTask}
      />
      <Button title="Adicionar" onPress={addNewTask} />
      <FlatList
        data={tasks}
        renderItem={renderTask}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#e0f7fa',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 15,
    color: '#00695c',
  },
  input: {
    height: 45,
    borderColor: '#00796b',
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  taskWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#b2dfdb',
    padding: 12,
    borderRadius: 8,
    marginBottom: 10,
  },
  taskInfo: {
    flex: 1,
  },
  taskText: {
    fontSize: 18,
    color: '#004d40',
  },
  completedText: {
    textDecorationLine: 'line-through',
    color: '#00695c',
  },
  removeButton: {
    backgroundColor: '#d32f2f',
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 6,
  },
  removeButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default TodoApp;
