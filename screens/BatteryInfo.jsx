import { View, StyleSheet, Text, Button } from "react-native";
import Header from "../components/header";
import { useEffect, useState } from "react";
import * as Battery from "expo-battery";

export const styles = StyleSheet.create({
  container: {
  },
  greenBackground: {
    flex: 1,
    backgroundColor: "green",
  },
  yellowBackground: {
    flex: 1,
    backgroundColor: "yellow",
  },
  orangeBackground: {
    flex: 1,
    backgroundColor: "orange",
  },
  redBackground: {
    flex: 1,
    backgroundColor: "red",
  },
});

export default function BatteryInfo({ navigation }) {
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

  useEffect(() => {
    bateria();
    status();
  }, []);

  let backgroundStyle = styles.container;

  if (nivelBateria > 80) {
    backgroundStyle = styles.greenBackground;
  } else if (nivelBateria >= 50 && nivelBateria <= 80) {
    backgroundStyle = styles.yellowBackground;
  } else if (nivelBateria >= 30 && nivelBateria < 50) {
    backgroundStyle = styles.orangeBackground;
  } else if (nivelBateria >= 1 && nivelBateria < 30) {
    backgroundStyle = styles.redBackground;
  }

  return (
    <View style={styles.container}>
      <Header title="Bateria" />
      <View style={{ alignContent: "center",}}>
        <Text style={{ textAlign: "center", marginTop: 50, marginBottom: 50, }}>
          {nivelBateria}%
        </Text>
        <View style={{ alignItems: "center",}}>
          <View style={{ width: "100%", height: 60,}}>
            <View style={[backgroundStyle]} />
          </View>
        </View>
        <View>
        <Button style={{marginTop: "100", position: "absolute"}} title="Atualizar" onPress={atualizarTudo} />
        </View>
      </View>
    </View>
  );
}