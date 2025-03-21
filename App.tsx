import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';
import { useWeather } from './app/api/api';

export default function App() {
  const {data, error, refetch} = useWeather()

  return (
      <View style={styles.container}>
        <Text style={{fontSize: 24, marginBottom: 100, color: '#fff'}}>{`Санкт-Петербург`}</Text>
        <Text style={{fontSize: 20, marginBottom: 20}}>{`${data?.weather[0].description}`}</Text>
        <Text style={{fontSize: 16}}>{`Текущая температура: ${data?.main.temp} градусов цельсия`}</Text>
        <Text style={{fontSize: 16}}>{`Ощущается как: ${data?.main.feels_like} градусов цельсия`}</Text>
        {error ? <Text>{`Ошибка: ${error}`}</Text> : null}
        <View style={{marginTop: 20}}><Button  onPress={refetch} title='Перезапросить'/></View>
      <StatusBar style="auto" />
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#54575B',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
