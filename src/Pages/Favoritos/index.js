import React, { useEffect, useState } from 'react';
import { View, Text, FlatList } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import CardReceita from '../../components/CardReceita';

export default function Favoritos({ navigation }) {
  const [favoritos, setFavoritos] = useState([]);

  useEffect(() => {
    async function loadFavoritos() {
      const data = await AsyncStorage.getItem('@favoritos');
      if (data) setFavoritos(JSON.parse(data));
    }
    const unsubscribe = navigation.addListener('focus', loadFavoritos);
    return unsubscribe;
  }, [navigation]);

  function abrirDetalhes(receita) {
    navigation.navigate('Receita', { receita });
  }

  return (
    <View>
      <FlatList
        data={favoritos}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <CardReceita receita={item} onPress={abrirDetalhes} />}
      />
    </View>
  );
}
