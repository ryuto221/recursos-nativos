import { StyleSheet, Text, View } from "react-native";
import * as Device from "expo-device";
import Header from "../components/header";

export default function DeviceInfo({ navigation }) {
  return (
    <View style={styles.container}>
      <Header title="Informações do Aparelho" />

      <View>
        <View style={{ margin: 5, backgroundColor: "#B379FD" }}>
          <Text>
            O nome do seu aparelho é:
            {Device.modelName}
          </Text>
        </View>

        <View style={{ margin: 5, backgroundColor: "#B379FD" }}>
          <Text>
            A marca do aparelho é:
            {Device.brand}
          </Text>
        </View>

        <View style={{ margin: 5, backgroundColor: "#B379FD" }}>
          <Text>
            O modelo do aparelho é:
            {Device.modelName}
          </Text>
        </View>

        <View style={{ margin: 5, backgroundColor: "#B379FD" }}>
          <Text>
            O nome completo do aparelho é:
            {Device.deviceName}
          </Text>
        </View>

        <View style={{ margin: 5, backgroundColor: "#B379FD" }}>
          <Text>
            O Design do aparelho é:
            {Device.designName}
          </Text>
        </View>

        <View style={{ margin: 5, backgroundColor: "#B379FD" }}>
          <Text>
            O Ano do lançamento é:
            {Device.deviceYearClass}
          </Text>
        </View>

        <View style={{ margin: 5, backgroundColor: "#B379FD" }}>
          <Text>
            A memória do aparelho é:
            {Device.totalMemory}
          </Text>
        </View>

        <View style={{ margin: 5, backgroundColor: "#B379FD" }}>
          <Text>
            A versão do sistema é a:
            {Device.osBuildId}
          </Text>
        </View>

        <View style={{ margin: 5, backgroundColor: "#B379FD" }}>
          <Text>
            A arquitetura do aparelho é:
            {Device.osInternalBuildId}
          </Text>
        </View>
      </View>
    </View>
  );
}

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: "100%",
    backgroundColor: "#EACBF8",
  },
});