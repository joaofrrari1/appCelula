import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { Link } from 'expo-router';

const App = () => {
  return (
    <View style={styles.container}>
      <View style={styles.profileCard}>
        <Image style={styles.avatar} source={require('./image.png')} />
        <Text style={styles.title}>João Vítor Ferrari</Text>
        <Text style={styles.details}>Data de Nascimento: 20/06/2006</Text>
        <Text style={styles.details}>Esporte: Andar de Bike</Text>

        <View style={styles.actions}>
          <Link href="./Musicas" style={styles.link} asChild>
            <TouchableOpacity style={styles.actionButton}>
              <Text style={styles.actionText}>Músicas Favoritas</Text>
            </TouchableOpacity>
          </Link>
          <Link href="./Filmes" style={styles.link} asChild>
            <TouchableOpacity style={styles.actionButton}>
              <Text style={styles.actionText}>Filmes Favoritos</Text>
            </TouchableOpacity>
          </Link>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#e0f7fa', // Alteração da cor de fundo
  },
  profileCard: {
    width: '90%',
    maxWidth: 360,
    padding: 25,
    backgroundColor: '#fff',
    borderRadius: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 6, 
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 15,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#00796b',
    marginBottom: 8,
  },
  details: {
    fontSize: 14,
    color: '#00695c', 
    marginBottom: 6,
  },
  actions: {
    marginTop: 15,
    width: '100%',
    alignItems: 'center',
  },
  link: {
    width: '100%', 
    alignItems: 'center',
    marginBottom: 12, 
  },
  actionButton: {
    backgroundColor: '#00796b', 
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 25,
    width: '75%', 
    alignItems: 'center',
    justifyContent: 'center',
  },
  actionText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '500',
  },
});

export default App;
