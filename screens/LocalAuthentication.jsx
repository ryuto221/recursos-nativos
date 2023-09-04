import { Button, StyleSheet, Text, View } from "react-native";
import Header from "../components/header";
import * as LocalAuthentication from "expo-local-authentication";
import React from "react";

export default function MyLocalAuthentication({ navigation }) {
  const autenticar = async () => {
    try {
      const disponivel = await LocalAuthentication.hasHardwareAsync();
      console.log(disponivel);
      if (!disponivel) {
        alert ("Você não tem faceId");
        return;
      }
      const { success, error } = await LocalAuthentication.authenticateAsync();

      if(success) {
        alert("Autenticado com sucesso");
      } else {
        console.log(error);
        alert("Falha na autenticação");
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <View style={styles.container}>
      <Header title= "Autenticação" />
      <View>
        <Button title="Autenticar" onPress={autenticar}/>
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
