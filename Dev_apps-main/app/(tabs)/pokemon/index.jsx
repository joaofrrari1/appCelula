import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ImageBackground } from 'react-native';
import { Picker } from '@react-native-picker/picker';

const PokemonSelector = () => {
  const [selectedPokemon, setSelectedPokemon] = useState('');
  const [pokemonList, setPokemonList] = useState([]);
  const [initialPokemons, setInitialPokemons] = useState([]);
  const [types, setTypes] = useState([]);
  const [selectedType, setSelectedType] = useState('');

  useEffect(() => {
    const fetchTypes = async () => {
      try {
        const response = await fetch('https://pokeapi.co/api/v2/type');
        const data = await response.json();
        setTypes(data.results);
      } catch (error) {
        console.error('Error fetching types:', error);
      }
    };

    const fetchInitialPokemons = async () => {
      try {
        const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=151');
        const data = await response.json();
        setPokemonList(data.results);
        setInitialPokemons(data.results);
      } catch (error) {
        console.error('Error fetching pokemons:', error);
      }
    };

    fetchTypes();
    fetchInitialPokemons();
  }, []);

  useEffect(() => {
    const filterPokemonsByType = async () => {
      if (selectedType) {
        try {
          const response = await fetch(`https://pokeapi.co/api/v2/type/${selectedType}`);
          const data = await response.json();
          const pokemonsByType = data.pokemon.map(p => p.pokemon.name);
          
          const filteredPokemons = initialPokemons.filter(pokemon =>
            pokemonsByType.includes(pokemon.name)
          );

          setPokemonList(filteredPokemons);
        } catch (error) {
          console.error('Error fetching pokemons by type:', error);
        }
      } else {
        setPokemonList(initialPokemons);
      }
    };

    filterPokemonsByType();
  }, [selectedType, initialPokemons]);

  const backgroundImage = { uri: "https://acdn.mitiendanube.com/stores/002/767/708/products/4738481-7f9dc5c5fb7bfcbf3e16865120726306-1024-1024.png" };

  return (
    <ImageBackground source={backgroundImage} style={styles.background}>
      <View style={styles.wrapper}>
        <Text style={styles.header}>ESCOLHA O POKÉMON</Text>
        <Picker
          selectedValue={selectedType}
          onValueChange={(itemValue) => setSelectedType(itemValue)}
          style={styles.typePicker}
        >
          <Picker.Item label='Selecione um Tipo' value='' />
          {types.map((type, index) => (
            <Picker.Item key={index} label={type.name} value={type.name} />
          ))}
        </Picker>

        <Picker
          selectedValue={selectedPokemon}
          onValueChange={(itemValue) => setSelectedPokemon(itemValue)}
          style={styles.pokemonPicker}
        >
          <Picker.Item label='Selecione um Pokémon' value='' />
          {pokemonList.map((pokemon, index) => (
            <Picker.Item key={index} label={pokemon.name} value={pokemon.name} />
          ))}
        </Picker>

        {selectedPokemon ? <Text style={styles.selectionText}>Você escolheu: {selectedPokemon}</Text> : null}
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
  },
  wrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  header: {
    fontSize: 36,
    fontWeight: '700',
    color: '#000000',
    marginBottom: 30,
  },
  typePicker: {
    width: '100%',
    backgroundColor: '#f8f8f8',
    borderRadius: 12,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 20,
    padding: 10,
  },
  pokemonPicker: {
    width: '100%',
    backgroundColor: '#f8f8f8',
    borderRadius: 12,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 20,
    padding: 10,
  },
  selectionText: {
    fontSize: 30,
    color: '#ffffff',
    marginTop: 25,
    fontWeight: '500',
  },
});

export default PokemonSelector;
