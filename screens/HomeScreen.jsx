import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Button } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import DeviceInfo from "./DeviceInfo";
import BatteryInfo from "./BatteryInfo";

export default function App({ navigation }) {
  return (
    <View style={styles.container}>
      <View>
        <Text>Seja bem vindo!</Text>
        <Button
          mode="contained"
          style={{
            color: "#fff",
          }}
          onPress={() => {
            navigation.navigate("DeviceInfo");
          }}
        >
          Device
        </Button>
        <Button
          mode="contained"
          style={{
            color: "#fff",
          }}
          onPress={() => {
            navigation.navigate("BatteryInfo");
          }}
        >
          Battery
        </Button>
      </View>
    </View>
  );
}

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    // fontFamily: "georgia",
  },
});