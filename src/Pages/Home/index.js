import { View, Text, Image, TouchableOpacity, FlatList, StyleSheet } from 'react-native';
import List from '../List';


export default function Home({ route }) {
    
    const listaCategorias = route.params?.listaCategorias || [];

    return (
        <View style={{ flex: 1, backgroundColor: '#fff' }}>
            <View style={styles.header}>
                <TouchableOpacity>
                    <Image source={require('../../Imagens/logo.jpg')} style={styles.logoImg} />
                </TouchableOpacity>

                <TouchableOpacity>
                    <Text style={styles.titleLogo}>Receitas Nerfado</Text>
                </TouchableOpacity>
            </View>
            <TouchableOpacity onPress={() => navigation.navigate('Localizacao')}>
            <Text style={{ padding: 10, color: 'blue' }}>Ver minha localização</Text>
            </TouchableOpacity>

            <FlatList
                data={listaCategorias}
                keyExtractor={(item, index) => index.toString()}
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{ paddingHorizontal: 20, paddingVertical: 10 }}
                renderItem={({ item }) => <List data={item} receitas={route.params?.receitas || []} />}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    
    header: {
        padding: 20,
        height: 80,
        backgroundColor: '#fff',
        flexDirection: 'row',
        alignItems: 'center',
        paddingTop: 20,
        paddingEnd: 10,
        borderBottomWidth: 0.5,
        elevation: 3,
    },
    logoImg: {
        height: 50,
        width: 80,
    },
    titleLogo: {
        fontWeight: '700',
        fontSize: 20,
        color: '#4DA8FF',
        letterSpacing: 1,
        marginLeft: 10,
        marginTop: 10,
    },
    botaoLocalizacao: {
    backgroundColor: '#4DA8FF',    
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    alignItems: 'center',
    marginVertical: 10,
    alignSelf: 'center',            
  },
  textoBotao: {
    color: '#fff',               
    fontWeight: '600',
  },
});
