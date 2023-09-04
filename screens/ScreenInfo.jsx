import { StyleSheet, Text, View } from "react-native";
import Header from "../components/header";
import * as ScreenCapture from "expo-screen-capture";


export default function ScreenInfo({ navigation }) {
    const active = async () => {
        await ScreenCapture.preventScreenCaptureAsync();
    };

    const desactive = async () => {
        await ScreenCapture.allowScreenCaptureAsync();
    };


  return (
    <View style={styles.container}>
      <Header title="Captura de Tela" />
        <View style={styles.container}>
            <Button title="Ativar" onPress={active}/>
            <Button title="Desativar" onPress={desactive}/>
            <Button onPress={() => navigation.goBack()} title="Voltar"/>
        </View>
    </View>
  );
}

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: "100%",
    backgroundColor: "#fff",
  },
});
