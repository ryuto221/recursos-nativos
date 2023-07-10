import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Header from '../components/header';

export default function Weather({ navigation }) {
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    fetchWeatherData();
  }, []);

  const fetchWeatherData = async () => {
    try {
      const response = await fetch(
        'https://www.climatempo.com.br/previsao-do-tempo/15-dias/cidade/381/joinville-sc'
      );
      const data = await response.json();
      setWeatherData(data);
    } catch (error) {
      console.error(error);
    }
  };

  if (!weatherData) {
    return (
      <View style={styles.container}>
        <Text>Loading...</Text>
      </View>
    );
  }

  return (
    <View style={{ height: "100%" }}>
        <Header title="Clima" />
        <View style={styles.container}>
            <Text style={styles.location}>{weatherData.name}</Text>
            <Text style={styles.temperature}>{weatherData.main.temp}°C</Text>
            <Text style={styles.description}>{weatherData.weather[0].description}</Text>
        </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  location: {
    fontSize: 24,
    marginBottom: 10,
  },
  temperature: {
    fontSize: 48,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  description: {
    fontSize: 18,
  },
});