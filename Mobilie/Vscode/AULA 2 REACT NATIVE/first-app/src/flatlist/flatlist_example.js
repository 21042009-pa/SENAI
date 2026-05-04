import { FlatList, Text, View, StyleSheet } from "react-native"
import CardItem from "./cardItem";

export default function FlatListExemplo(){
    const alunos = [
        {id: '1', nome: 'Marlon', nota: '2'},
        {id: '2', nome: 'Celso', nota: '8'},
        {id: '3', nome: 'Daniel', nota: '10'},
        {id: '4', nome: 'Felipe', nota: '5'},
    ]

    return(
        <View style={styles.container}>
            <Text style={styles.titulo}> FlatList </Text>
            <View styles={styles.exemploLista}>
                <Text style={styles.subtitulo}> 1. FlatList Básico </Text>
                <FlatList
                    scrollEnabled={true}
                    data={alunos}
                    keyExtractor={(item) => item.id}
                    renderItem={({item:aluno}) => (
                        <CardItem nome={aluno.nome} nota={aluno.nota}/>
                    )}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        backgroundColor: "#f5f5f5",
        paddingTop: 60,
    },
    titulo: {
        fontSize: 20,
        fontWeight: "bold",
        marginBottom: 20,
    },
    subtitulo: {
        fontSize: 14,
        fontWeight: "bold",
        color: "#4285f4",
        marginBottom: 8,
    },
    exemploLista: {
        width: "80%",
        height: 250,
        padding: 16,
        marginBottom: 16,
        backgroundColor: "#fff",
        borderRadius: 8,
    },
    linha: {
        flexDirection: "row",
        justifyContent: "space-between",
        padding: 10,
        backgroundColor: "#f5f5f5",
        marginBottom: 4,
        borderRadius: 4,
    },
});