import { NavigationContainer } from "@react-navigation/native";
import DeviceInfo from "./screens/DeviceInfo";
import BatteryInfo from "./screens/BatteryInfo";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import SplashScreen from "./screens/SplashScreen";
import HomeScreen from "./screens/HomeScreen";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Notify from "./screens/Notify";
import MyScreenOrientation from "./screens/MyScreenOrientation";
import ContactsInfo from "./screens/ContactsInfo";
import Weather from "./screens/Weather";
import ScreenInfo from "./screens/ScreenInfo";
import MyLocalAuthentication from "./screens/LocalAuthentication";

const Stack = createNativeStackNavigator();

export default function RootNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="SplashScreen"
          component={SplashScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="TabsNavigation"
          component={TabsNavigation}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="DeviceInfo"
          component={DeviceInfo}
          options={{
            headerShown: true,
            headerStyle: {
              backgroundColor: "#000",
            },
            headerTintColor: "#fff",
          }}
        />
        <Stack.Screen
          name="BatteryInfo"
          component={BatteryInfo}
          options={{
            headerShown: true,
            headerStyle: {
              backgroundColor: "#000",
            },
            headerTintColor: "#fff",
          }}
        />
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{
            headerShown: true,
            headerStyle: {
              backgroundColor: "#000",
            },
            headerTintColor: "#fff",
          }}
        />
        <Stack.Screen
          name="Notify"
          component={Notify}
          options={{
            headerShown: true,
            headerStyle: {
              backgroundColor: "#000",
            },
            headerTintColor: "#fff",
          }}
        />
        <Stack.Screen
          name="MyScreenOrientation"
          component={MyScreenOrientation}
          options={{
            headerShown: true,
            headerStyle: {
              backgroundColor: "#000",
            },
            headerTintColor: "#fff",
          }}
        />
        <Stack.Screen
          name="ContactsInfo"
          component={ContactsInfo}
          options={{
            headerShown: true,
            headerStyle: {
              backgroundColor: "#000",
            },
            headerTintColor: "#fff",
          }}
        />
        <Stack.Screen
          name="Weather"
          component={Weather}
          options={{
            headerShown: true,
            headerStyle: {
              backgroundColor: "#000",
            },
            headerTintColor: "#fff",
          }}
        />
        <Stack.Screen
          name="ScreenInfo"
          component={ScreenInfo}
          options={{
            headerShown: true,
            headerStyle: {
              backgroundColor: "#000",
            },
            headerTintColor: "#fff",
          }}
        />
        <Stack.Screen
          name="MyLocalAuthentication"
          component={MyLocalAuthentication}
          options={{
            headerShown: true,
            headerStyle: {
              backgroundColor: "#000",
            },
            headerTintColor: "#fff",
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const tabs = createMaterialBottomTabNavigator();

function TabsNavigation() {
  return (
    <tabs.Navigator>
      <tabs.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={"#782DE3"} size={26} />
          ),
        }}
      />
      <tabs.Screen
        name="DeviceInfo"
        component={DeviceInfo}
        options={{
          tabBarLabel: "Info",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="cellphone-information"
              color={"#782DE3"}
              size={26}
            />
          ),
        }}
      />
      <tabs.Screen
        name="MyScreenOrientation"
        component={MyScreenOrientation}
        options={{
          tabBarLabel: "Orientation",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="television"
              color={"#782DE3"}
              size={26}
            />
          ),
        }}
      />
      <tabs.Screen
        name="BatteryInfo"
        component={BatteryInfo}
        options={{
          tabBarLabel: "Battery",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="battery-charging-100"
              color={"#782DE3"}
              size={26}
            />
          ),
        }}
      />
      <tabs.Screen
        name="Notify"
        component={Notify}
        options={{
          tabBarLabel: "Notify",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="bell-alert"
              color={"#782DE3"}
              size={26}
            />
          ),
        }}
      />
      <tabs.Screen
        name="ContactsInfo"
        component={ContactsInfo}
        options={{
          tabBarLabel: "Contact",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="account-box"
              color={"#782DE3"}
              size={26}
            />
          ),
        }}
      />
      <tabs.Screen
        name="Weather"
        component={Weather}
        options={{
          tabBarLabel: "Weather",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="weather-hail"
              color={"#782DE3"}
              size={26}
            />
          ),
        }}
      />
           <tabs.Screen
        name="ScreenInfo"
        component={ScreenInfo}
        options={{
          tabBarLabel: "ScreenInfo",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="weather-hail"
              color={"#782DE3"}
              size={26}
            />
          ),
        }}
      />
      <tabs.Screen
        name="MyLocalAuthentication"
        component={MyLocalAuthentication}
        options={{
          tabBarLabel: "Autenticação",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="weather-hail"
              color={"#782DE3"}
              size={26}
            />
          ),
        }}
      />
    </tabs.Navigator>
  );
}
