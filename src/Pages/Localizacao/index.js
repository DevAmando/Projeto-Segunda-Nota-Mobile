import React, { useEffect, useState } from 'react';
import { View, Text, Button, ActivityIndicator, StyleSheet, Alert } from 'react-native';
import * as Location from 'expo-location';
import MapView, { Marker } from 'react-native-maps';

export default function Localizacao() {
  const [location, setLocation] = useState(null);
  const [loading, setLoading] = useState(false);
  const [mapVisible, setMapVisible] = useState(false);

  const pedirLocalizacao = async () => {
    setLoading(true);
    try {
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        Alert.alert('Permissão negada', 'Para usar o mapa, permita o acesso à localização.');
        setLoading(false);
        return;
      }

      const loc = await Location.getCurrentPositionAsync({});
      setLocation(loc.coords);
      setMapVisible(true);
    } catch (error) {
      Alert.alert('Erro', 'Não foi possível obter a localização.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      {!mapVisible && !loading && (
        <Button title="Mostrar minha localização" onPress={pedirLocalizacao} />
      )}

      {loading && <ActivityIndicator size="large" color="#0000ff" />}

      {mapVisible && location && (
        <MapView
          style={styles.map}
          initialRegion={{
            latitude: location.latitude,
            longitude: location.longitude,
            latitudeDelta: 0.01,
            longitudeDelta: 0.01,
          }}
          showsUserLocation={true}
          showsMyLocationButton={true}
        >
          <Marker
            coordinate={{
              latitude: location.latitude,
              longitude: location.longitude,
            }}
            title="Você está aqui"
          />
        </MapView>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  map: {
    width: '100%',
    height: '100%',
  },
});
