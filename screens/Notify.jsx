import { View, StyleSheet, Text, Button } from "react-native";
import * as Notification from "expo-notifications";
import * as Device from "expo-device";
import * as Battery from "expo-battery";
import Header from "../components/header";
import { useEffect, useState } from "react";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 10,
  },
});

export default function Notify({ navigation }) {
  const [expoToken, setExpoToken] = useState("");

  const [nivelBateria, setNivelBateria] = useState();
  const [statusBateria, setStatusBateria] = useState();

  async function atualizarTudo() {
    bateria();
  }

  async function status() {
    const status = await Battery.getBatteryStateAsync();
    setStatusBateria(status);
  }

  async function bateria() {
    const nivel = await Battery.getBatteryLevelAsync();
    setNivelBateria(nivel * 100);
  }

  // async function notiPagina() {
  //     navigation.navigate("BatteryInfo");
  // }

  useEffect(() => {
    bateria();
    status();
  }, []);

  const ultimaNotificacao = Notification.useLastNotificationResponse();

  async function notiPagina() {
    const token = await Notification.scheduleNotificationAsync({
      content: {
        title: "Mensagem aleatoria",
        subtitle: "Subtitulo",
        body: "ir para o Home",
      },
      trigger: { seconds: 1 },
    });
    setExpoToken(token);
  }

  useEffect(() => {
    notiPagina();
  }, [ultimaNotificacao]);

  async function notificarBateria() {
    const token = await Notification.scheduleNotificationAsync({
      content: {
        title: "Nivel da bateria",
        subtitle: "Subtitulo",
        body: nivelBateria + "%",
      },
      trigger: { seconds: 1 },
    });
    setExpoToken(token);
  }

  async function notificarAlertaBateria() {
    alert("Nivel da bateria: " + nivelBateria + "%");
  }

  async function notificarMensagem() {
    const token = await Notification.scheduleNotificationAsync({
      content: {
        title: "Mensagem aleatoria",
        subtitle: "Subtitulo",
        body: "Bom dia, boa tarde, boa noite",
      },
      trigger: { seconds: 1 },
    });
    setExpoToken(token);
  }
  async function notificarAparelho() {
    const token = await Notification.scheduleNotificationAsync({
      content: {
        title: "Aparelho",
        subtitle: "Subtitulo",
        body: "O seu aparelho " + Device.modelName + " é incrivel",
      },
      trigger: { seconds: 1 },
    });
    setExpoToken(token);
  }

  return (
    <View style={styles.container}>
      <Header title="Notificações" />
      <View>
        <Text>Token: {expoToken}</Text>
        <Button
          title="Enviar Notificação"
          onPress={async () => notificarMensagem()}
        />
        <Button
          title="Nível da Bateria"
          onPress={async () => notificarAlertaBateria()}
        />
        <Button
          title="Enviar Notificação da Bateria"
          onPress={async () => notificarBateria()}
        />
        <Button
          title="Enviar para outra pagina"
          onPress={async () => notiPagina()}
        />
        <Button
          title="Notificação Informações do Aparelho"
          onPress={async () => notificarAparelho()}
        />
      </View>
    </View>
  );
}
