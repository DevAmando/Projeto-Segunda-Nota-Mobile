// src/components/Header.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Header({ titulo }) {
  return (
    <View style={styles.container}>
      <Text style={styles.texto}>{titulo}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#4DA8FF',
    padding: 20,
  },
  texto: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
});
