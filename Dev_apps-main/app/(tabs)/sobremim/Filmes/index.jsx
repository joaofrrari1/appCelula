import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, Linking, Image } from 'react-native';
import { Link } from 'expo-router';

import velozes from './1.png';
import harry from './2.png';
import Indiana from './3.png';
import capitais from './4.png';
import EmRitmodeFuga from './5.png';

const DATA = [
  {
    id: '1',
    title: 'Velozes e Furiosos',
    url: 'https://youtu.be/DXc8tiB8TBI?feature=shared',
    image: velozes,
  },
  {
    id: '2',
    title: 'Harry Potter - Pedra Filosofal',
    url: 'https://youtu.be/qgYLjbkYS5U?feature=shared',
    image: harry,
  },
  {
    id: '3',
    title: 'Indiana Jones',
    url: 'https://youtu.be/0OIdtDgiNT4?feature=shared',
    image: Indiana,
  },
  {
    id: '4',
    title: '7 crimes capitais',
    url: 'https://youtu.be/JXgOWdG5wqU?feature=shared',
    image: capitais,
  },
  {
    id: '5',
    title: 'Em Ritmo de Fuga - Edgar Wright',
    url: 'https://www.youtube.com/watch?v=zTvJJnoWIPk',
    image: EmRitmodeFuga,
  },
];

const App = () => {
  const renderItem = ({ item }) => (
    <View style={styles.card}>
      <TouchableOpacity onPress={() => Linking.openURL(item.url)} style={styles.touchable}>
        <Image source={item.image} style={styles.image} />
        <Text style={styles.title}>{item.title}</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Minhas Músicas Favoritas</Text>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
      <Link href="/sobremim" asChild>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Retornar</Text>
        </TouchableOpacity>
      </Link>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    padding: 16,
  },
  header: {
    fontSize: 26,
    fontWeight: '600',
    color: '#333',
    textAlign: 'center',
    marginBottom: 24,
  },
  card: {
    marginBottom: 20,
    padding: 12,
    borderRadius: 8,
    backgroundColor: '#ffffff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
    elevation: 3,
  },
  touchable: {
    alignItems: 'center',
  },
  image: {
    width: 180,
    height: 280,
    borderRadius: 8,
    marginBottom: 8,
  },
  title: {
    fontSize: 20,
    color: '#555',
  },
  button: {
    backgroundColor: '#4a90e2',
    padding: 14,
    borderRadius: 30,
    alignItems: 'center',
    marginTop: 24,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '500',
    textTransform: 'uppercase',
  },
});

export default App;
