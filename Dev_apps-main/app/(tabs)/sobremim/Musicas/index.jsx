import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, Linking, Image } from 'react-native';
import { Link } from 'expo-router';

import kansas from './1.png';
import House from './2.png';
import Rastaman from './3.png';
import nego from './4.png';
import set from './5.png';

const songsData = [
  {
    id: '1',
    title: 'Carry on Wayward Son',
    url: 'https://youtu.be/2X_2IdybTV0?feature=shared',
    image: kansas,
  },
  {
    id: '2',
    title: 'House Of The Rising Sun',
    url: 'https://youtu.be/uO7DiYjgfRs?feature=shared',
    image: House,
  },
  {
    id: '3',
    title: 'Rastaman',
    url: 'https://youtu.be/773JKW1xvSE?feature=shared',
    image: Rastaman,
  },
  {
    id: '4',
    title: 'Negro drama',
    url: 'https://youtu.be/tWSr-NDZI4s?feature=shared',
    image: nego,
  },
  {
    id: '5',
    title: 'Set Djay W 3',
    url: 'https://www.youtube.com/watch?v=cEDz3m0ylKQ',
    image: set,
  },
];

const App = () => {
  const renderSongItem = ({ item }) => (
    <View style={styles.songContainer}>
      <TouchableOpacity onPress={() => Linking.openURL(item.url)} style={styles.songButton}>
        <Image source={item.image} style={styles.songImage} />
        <Text style={styles.songTitle}>{item.title}</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.appContainer}>
      <Text style={styles.title}>Músicas Preferidas</Text>
      <FlatList
        data={songsData}
        renderItem={renderSongItem}
        keyExtractor={item => item.id}
      />
      <Link href="/sobremim" asChild>
        <TouchableOpacity style={styles.returnButton}>
          <Text style={styles.returnButtonText}>Voltar</Text>
        </TouchableOpacity>
      </Link>
    </View>
  );
};

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    padding: 15,
  },
  title: {
    fontSize: 26,
    fontWeight: '600',
    color: '#4CAF50',
    textAlign: 'center',
    marginBottom: 25,
  },
  songContainer: {
    marginBottom: 20,
    padding: 12,
    borderRadius: 8,
    backgroundColor: 'white',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    alignItems: 'center',
  },
  songButton: {
    alignItems: 'center', 
  },
  songImage: {
    width: 120, 
    height: 120, 
    borderRadius: 8,
    marginBottom: 8,
  },
  songTitle: {
    fontSize: 20,
    color: '#333',
  },
  returnButton: {
    backgroundColor: '#388E3C',
    padding: 14, 
    borderRadius: 30,
    alignItems: 'center',
    marginTop: 25,
  },
  returnButtonText: {
    color: '#fff', 
    fontSize: 18,
    fontWeight: 'bold',
    textTransform: 'uppercase', 
  },
});

export default App;
