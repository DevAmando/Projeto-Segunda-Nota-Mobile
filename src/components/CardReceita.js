import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

export default function CardReceita({ receita, onPress }) {
  return (
    <TouchableOpacity onPress={() => onPress(receita)} style={styles.card}>
      <Image source={{ uri: receita.imagem }} style={styles.image} />
      <Text style={styles.nome}>{receita.nome}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    margin: 10,
    borderRadius: 10,
    overflow: 'hidden',
    backgroundColor: '#FFF',
    elevation: 4,
  },
  image: {
    width: '100%',
    height: 150,
  },
  nome: {
    padding: 10,
    fontSize: 16,
    fontWeight: 'bold',
  },
});
