import { StyleSheet, Text, View } from "react-native";
import Header from "../components/header";
import {Gyroscope, Magnetometer} from "expo-sensors";
import { useEffect, useState } from "react";

export default function Sensors({ navigation }) {
    const [giroscopio, setGiroscopio] = useState([]);
    const [magneto, setMagneto ] = useState([]);

    useEffect(() => {
        Gyroscope.addListener(giroscopioListner);
        Magnetometer.addListener(magnetoListner);
    }, []);

    const giroscopioListner = (data) => {
        setGiroscopio(data);
    };

    const magnetoListner = (data) => {
        setMagneto(data);
    };

  return (
    <View style={styles.container}>
      <Header title="Sensores" />
      <Text style={styles.sensor}>
      </Text>
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
