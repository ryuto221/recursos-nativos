import { View } from "react-native";
import * as Device from 'expo-device';

export default function DeviceInfo() {
    return (
        <View>
            <Text>
                O seu dispositivo é: {Device.deviceName}
            </Text>
        </View>
    )
}