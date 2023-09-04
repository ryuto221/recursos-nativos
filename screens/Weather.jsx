import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
// import cheerio from 'cheerio-without-node-native';

export default function Weather() {
  const [temperature, setTemperature] = useState(null);

  // useEffect(() => {
  //   fetchWeatherData();
  // }, []);

  // const fetchWeatherData = async () => {
  //   try {
  //     const response = await fetch(
  //       'https://www.climatempo.com.br/previsao-do-tempo/cidade/381/joinville-sc'
  //     );
  //     const htmlString = await response.text();
  //     const $ = cheerio.load(htmlString);
  //     const temperatureElement = $('.tempMaxMin .text-today .temperature');
  //     const temperatureValue = temperatureElement.text();

  //     setTemperature(temperatureValue);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

  if (!temperature) {
    return (
      <View style={styles.container}>
        <Text>Loading...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.temperature}>{temperature}</Text>
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
  },
});
