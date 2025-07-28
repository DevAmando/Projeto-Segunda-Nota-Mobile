import { useNavigation , StackActions} from '@react-navigation/native';
import { View, Text, StyleSheet , TouchableOpacity,Button} from 'react-native';

export default function List(props) {
    const navigation = useNavigation();

    function directReceita() {
        const receitasDaCategoria = props.receitas.filter(
            (r) => r.categoria === props.data.categorias
        );

        navigation.navigate('Receita', {
            categoria: props.data.categorias,
            receitas: receitasDaCategoria,
        });
    }

    return (
        <View style={styles.container}>
            <Button
                title={props.data.categorias}
                onPress={directReceita}
            />
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex:1,
        flexDirection:"column",
        paddingVertical: 12,
        alignItems:"center",
        justifyContent: "space-between",
        paddingHorizontal: 16,
        marginBottom: 8,
        backgroundColor: '#4DA8FF',
        borderRadius: 8,

    },
    text: {
        color: '#fff',
        fontWeight: '700',
        fontSize: 16,

    },
});
