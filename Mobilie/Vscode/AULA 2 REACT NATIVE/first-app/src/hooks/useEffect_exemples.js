import { useEffect, useState } from "react";
import { Alert, View, Text, Button, StyleSheet } from "react-native";

export default function TelaMoeda(){
    const [moedas, setMoedas] = useState(0);
    useEffect(() => {
        if (moedas === 5){
            Alert.alert('Sucesso!', 'Você desbloqueou o baú!')
        }
    }, [moedas]);

    return (
        <View style={styles.container}>
            <Text style={styles.texto}>Moedas coletadas: {moedas}</Text>
            <Button title="Pegar Moeda" onPress={() => setMoedas(moedas + 1)}></Button>
        </View>
    )
}

const styles = StyleSheet.create({
container: { flex: 1, justifyContent: "center", alignItems: "center" },
texto: { fontSize: 24, marginBottom: 20 },
});
