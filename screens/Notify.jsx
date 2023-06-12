import { Alert, Button, StyleSheet, Text, View } from "react-native";
import * as Notifications from "expo-notifications";
import Header from "../components/header";
import { useState } from "react";
import { useEffect } from "react";


export const styles = StyleSheet.create({
    container: {
      flex: 1,
      gap: 10,
    },
    content: {
        marginTop: 10,
    },
  });

export default function Notify({ navigation }) {
  const [expoToken, setExpoToken] = useState('');

  async function notificarExpo(){
    const token = await Notifications.scheduleNotificationAsync({
        content: {
            title: "Este é o titulo da notificação",
            subtitle: "Subtítulo",
            body: "Aqui vem o corpo da notificação",
        },
        trigger: { seconds: 1 },
    });
    setExpoToken(token);
  }

  const ultimaNotificacao = Notifications.useLastNotificationResponse();

  async function exibirAlerta(){
    Alert('')
  }

  useEffect(() => {
    exibirAlerta()
  }, [ultimaNotificacao])

  return (
    <View style={styles.container}>
      <Header title="Notificações"/>
        <View style={{ marginLeft: 10, marginRight: 10, marginTop: 10}}>
            <View
                style={styles.content}
            >
                <Text>Expo Token: { expoToken } </Text>
                <Button 
                    title="Enviar Notificações" 
                    onPress={async () => notificarExpo()}
                    style={{ marginTop: 10}}
                />
                <Button title="Ler ultima notificação clicada" style={{ marginTop: 10}} />
                <Button title="Ler notificações não clicadas" style={{ marginTop: 10}} />

            </View>
        </View>
    </View>
  );
}
