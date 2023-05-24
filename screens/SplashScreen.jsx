import { StyleSheet, View } from "react-native";
import { ActivityIndicator, Text } from "react-native-paper";

export default function SplashScreen({ navigation }) {
  setTimeout(() => {
    navigation.navigate("TabsNavigation");
  }, 1000);

  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color="#ff4655" />
      <Text>Aguarde um instante...</Text>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff",
      alignItems: "center",
      justifyContent: "center",
      textAlign: "center",
      fontFamily: "georgia"
    }});