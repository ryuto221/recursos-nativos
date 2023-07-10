import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Header from "../components/header";
import HTMLParser from 'react-native-html-parser';

export default function Weather({ navigation }) {
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    fetchWeatherData();
  }, []);

  const fetchWeatherData = async () => {
    try {
      const response = await fetch(
        'https://www.climatempo.com.br' // URL do site que você deseja extrair informações
      );
      const htmlString = await response.text();
      const parsedHTML = HTMLParser.parse(htmlString);
      const weatherInfo = parsedHTML.querySelector('.weather-info'); // Seletor CSS para o elemento que contém as informações do clima
      const temperature = weatherInfo.querySelector('.temperature').innerText; // Seletor CSS para o elemento que contém a temperatura
      const description = weatherInfo.querySelector('.description').innerText; // Seletor CSS para o elemento que contém a descrição

      setWeatherData({
        temperature,
        description
      });
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
        <Text style={styles.temperature}>{weatherData.temperature}°C</Text>
        <Text style={styles.description}>{weatherData.description}</Text>
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
  temperature: {
    fontSize: 48,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  description: {
    fontSize: 18,
  },
});