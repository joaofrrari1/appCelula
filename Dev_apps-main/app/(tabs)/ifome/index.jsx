import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, Image, ImageBackground } from 'react-native';

// Imagem de fundo
const backgroundImage = { uri: 'https://img.freepik.com/fotos-gratis/variedade-plana-com-deliciosa-comida-brasileira_23-2148739179.jpg' };

// Importando imagens (substitua com o caminho correto)
const xBacon = require('./xb.png');
const pizzaPequena = require('./pzp.png');
const pizzaGrande = require('./pzg.jpg');
const coxinhaImg = require('./coxinha.png');

// Tela de Lanches
const SnacksScreen = ({ addToCart }) => {
  const snacks = [
    { id: '1', name: 'X-Bacon', price: 25.00, image: xBacon },
    { id: '2', name: 'Pizza Pequena', price: 17.00, image: pizzaPequena },
    { id: '3', name: 'Pizza Grande', price: 30.00, image: pizzaGrande },
    { id: '4', name: 'Coxinha', price: 5.00, image: coxinhaImg },
  ];

  const renderSnack = ({ item }) => (
    <View style={styles.snackItem}>
      <Image source={item.image} style={styles.snackImage} />
      <View style={styles.snackTextContainer}>
        <Text style={styles.snackText}>{item.name} - R${item.price.toFixed(2)}</Text>
        <TouchableOpacity style={styles.addButton} onPress={() => addToCart(item)}>
          <Text style={styles.addButtonText}>Adicionar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <View style={styles.screenContainer}>
      <Text style={styles.title}>Escolha seu lanche</Text>
      <FlatList
        data={snacks}
        renderItem={renderSnack}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

// Tela do Carrinho
const CartScreen = ({ cartItems, removeFromCart, goBack, displayMessage }) => {
  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price, 0);
  };

  const checkout = () => {
    if (cartItems.length === 0) {
      displayMessage('Adicione itens ao carrinho antes de finalizar.');
      return;
    }

    const total = calculateTotal();
    displayMessage(`Compra concluída! Total: R$${total.toFixed(2)}`);

    removeFromCart(null); // Limpa o carrinho
    goBack(); // Volta para a tela de lanches
  };

  const renderCartItem = ({ item }) => (
    <View style={styles.cartItem}>
      <Text style={styles.cartText}>{item.name} - R${item.price.toFixed(2)}</Text>
      <TouchableOpacity style={styles.removeButton} onPress={() => removeFromCart(item.id)}>
        <Text style={styles.removeButtonText}>Remover</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.screenContainer}>
      <Text style={styles.title}>Seu Carrinho</Text>
      {cartItems.length > 0 ? (
        <>
          <FlatList
            data={cartItems}
            renderItem={renderCartItem}
            keyExtractor={(item) => item.id}
          />
          <TouchableOpacity style={styles.checkoutButton} onPress={checkout}>
            <Text style={styles.checkoutButtonText}>Finalizar Compra</Text>
          </TouchableOpacity>
        </>
      ) : (
        <Text style={styles.emptyCart}>Carrinho vazio.</Text>
      )}
      <TouchableOpacity style={styles.backButton} onPress={goBack}>
        <Text style={styles.backButtonText}>Voltar</Text>
      </TouchableOpacity>
    </View>
  );
};

// Componente principal
const App = () => {
  const [cart, setCart] = useState([]);
  const [currentScreen, setCurrentScreen] = useState('snacks');
  const [message, setMessage] = useState('');

  const addToCart = (item) => {
    setCart([...cart, item]);
    setMessage('Item adicionado ao carrinho!');
  };

  const removeFromCart = (id) => {
    if (id === null) {
      setCart([]); // Limpa o carrinho se id for null
    } else {
      setCart(cart.filter(item => item.id !== id));
    }
  };

  const goBack = () => {
    setCurrentScreen('snacks');
  };

  return (
    <ImageBackground source={backgroundImage} style={styles.background}>
      <View style={styles.appContainer}>
        {currentScreen === 'snacks' ? (
          <>
            <SnacksScreen addToCart={addToCart} />
            <TouchableOpacity style={styles.cartButton} onPress={() => setCurrentScreen('cart')}>
              <Text style={styles.cartButtonText}>Ver Carrinho</Text>
            </TouchableOpacity>
          </>
        ) : (
          <CartScreen
            cartItems={cart}
            removeFromCart={removeFromCart}
            goBack={goBack}
            displayMessage={setMessage}
          />
        )}
        {message ? <Text style={styles.notification}>{message}</Text> : null}
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
  },
  appContainer: {
    flex: 1,
    padding: 16,
    backgroundColor: 'rgba(255, 255, 255, 0.85)',
    borderRadius: 12,
  },
  screenContainer: {
    flex: 1,
    padding: 16,
  },
  snackItem: {
    flexDirection: 'row',
    padding: 12,
    marginVertical: 6,
    borderRadius: 8,
    backgroundColor: '#f0f4ff',
    borderLeftWidth: 5,
    borderLeftColor: '#0056b3',
    alignItems: 'center',
  },
  snackTextContainer: {
    flex: 1,
    marginLeft: 12,
  },
  snackText: {
    fontSize: 18,
    color: '#444',
  },
  title: {
    fontSize: 26,
    fontWeight: '600',
    marginBottom: 16,
    color: '#0056b3',
    textAlign: 'center',
  },
  emptyCart: {
    fontSize: 18,
    textAlign: 'center',
    marginTop: 20,
    color: '#777',
  },
  notification: {
    marginTop: 20,
    fontSize: 16,
    color: '#28a745',
    textAlign: 'center',
  },
  snackImage: {
    width: 60,
    height: 60,
    borderRadius: 6,
  },
  addButton: {
    backgroundColor: '#0056b3',
    padding: 8,
    borderRadius: 5,
    marginTop: 8,
  },
  addButtonText: {
    color: '#ffffff',
    textAlign: 'center',
    fontSize: 14,
  },
  cartItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    marginVertical: 5,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  cartText: {
    fontSize: 16,
  },
  removeButton: {
    backgroundColor: '#dc3545',
    padding: 6,
    borderRadius: 5,
  },
  removeButtonText: {
    color: '#ffffff',
  },
  checkoutButton: {
    backgroundColor: '#28a745',
    padding: 12,
    borderRadius: 5,
    marginTop: 20,
  },
  checkoutButtonText: {
    color: '#ffffff',
    textAlign: 'center',
    fontSize: 16,
  },
  backButton: {
    backgroundColor: '#dc3545',
    padding: 12,
    borderRadius: 5,
    marginTop: 20,
  },
  backButtonText: {
    color: '#ffffff',
    textAlign: 'center',
    fontSize: 16,
  },
  cartButton: {
    backgroundColor: '#0056b3',
    padding: 10,
    borderRadius: 5,
    marginTop: 16,
  },
  cartButtonText: {
    color: '#ffffff',
    textAlign: 'center',
    fontSize: 16,
  },
});

export default App;
