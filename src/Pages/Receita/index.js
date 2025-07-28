import { View, Text, FlatList, Image, StyleSheet, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { Ionicons } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';


export default function Receita({ route }) {
    let categoria = '';
    let receitas = [];
    const [favorito, setFavorito] = useState(false);

    if (route.params) {
        if (route.params.categoria) {
            categoria = route.params.categoria;
        }
        if (route.params.receitas) {
            receitas = route.params.receitas;
        }
    }

   
    async function favoritar(receita) {
        try {
            const favoritos = await AsyncStorage.getItem('@favoritos');
            const favoritosArray = favoritos ? JSON.parse(favoritos) : [];

            const jaExiste = favoritosArray.find((r) => r.id === receita.id);
            if (!jaExiste) {
                favoritosArray.push(receita);
                await AsyncStorage.setItem('@favoritos', JSON.stringify(favoritosArray));
                alert('Favorito salvo!');
            } else {
                alert('Já está nos favoritos!');
            }
        } catch (error) {
            console.error('Erro ao salvar favorito:', error);
        }
    }

    
    function toggleFavorito(item) {
        setFavorito(!favorito);
        favoritar(item);
    }

    function renderItem({ item }) {
        return (
            <View style={styles.card}>
                <Image source={{ uri: item.imagem }} style={styles.img} />
                <Text style={styles.nome}>{item.nome}</Text>
                <Text style={styles.desc}>{item.descricao}</Text>

                <TouchableOpacity onPress={() => toggleFavorito(item)}>
                    <Ionicons
                        name={favorito ? 'heart' : 'heart-outline'}
                        size={30}
                        color={favorito ? 'red' : 'black'}
                    />
                </TouchableOpacity>
            </View>
        );
    }

    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>Receitas de {categoria}</Text>

            <FlatList
                data={receitas}
                keyExtractor={(item) => item.id.toString()}
                renderItem={renderItem}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: '#fff',
       marginTop: 20,
        paddingTop: 20,
        paddingBottom: 20,
        borderBottomWidth: 0.5,
        elevation: 3,
        

    },
    titulo: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 12,
    
    },
    card: {
        marginBottom: 16,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
        paddingBottom: 8,
    },
    img: {
        width: '100%',
        height: 150,
        borderRadius: 8,
    },
    nome: {
        fontSize: 18,
        fontWeight: 'bold',
        marginTop: 8,
    },
    desc: {
        fontSize: 14,
        color: '#555',
    },
});
