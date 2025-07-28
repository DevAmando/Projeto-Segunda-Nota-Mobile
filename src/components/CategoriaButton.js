// src/components/CategoriaButton.js
import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

export default function CategoriaButton({ nome, onPress }) {
  return (
    <TouchableOpacity style={styles.button} onPress={() => onPress(nome)}>
      <Text style={styles.text}>{nome}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    margin: 5,
    padding: 10,
    backgroundColor: '#FFD700',
    borderRadius: 5,
  },
  text: {
    fontWeight: 'bold',
  },
});
