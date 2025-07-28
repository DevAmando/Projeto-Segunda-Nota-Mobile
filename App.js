import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './src/Pages/Home';
import Favoritos from './src/Pages/Favoritos';
import Receita from './src/Pages/Receita';
import Localizacao from './src/Pages/Localizacao';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const receitas = [
  {
    id: 1,
    nome: 'Bolo de Chocolate',
    descricao: 'Delicioso bolo com cobertura.',
    imagem: 'https://media.istockphoto.com/id/1394690582/pt/foto/chocolate-cake-on-wooden-table-with-chocolate-sprinkles-brigadeiro-typical-brazilian-sweet.jpg?s=2048x2048&w=is&k=20&c=ixDCbx8ukAmryD4fuAnKlHmDwB9zoz6mektkdOdgIyQ=',
    categoria: 'Sobremesa',
  },
  {
    id: 2,
    nome: 'Coxinha',
    descricao: 'Salgado frito com frango.',
    imagem: 'https://media.istockphoto.com/id/1424050516/pt/foto/coxinha-de-frango-3.jpg?s=2048x2048&w=is&k=20&c=mpHTVk2HSC7FWZOuVhoEGxJYg1VCEfTgAXHqUgWvOw0=',
    categoria: 'Salgados',
  },
  {
    id: 3,
    nome: 'Feijoada',
    descricao: 'Prato típico brasileiro.',
    imagem: 'https://media.istockphoto.com/id/2150017673/pt/foto/feijoada-typical-brazilian-food-made-with-black-beans.jpg?s=2048x2048&w=is&k=20&c=lbXNH_edXDXfTGcxVwc-e6-scVk_cWpWQx1FKBRhtGo=',
    categoria: 'Prato Principal',
  },
  {
    id: 4,
    nome: 'Torta Doce',
    descricao: 'Delicioso Torta.',
    imagem: 'https://media.istockphoto.com/id/2155109414/pt/foto/tart-with-walnuts-and-caramel-cream-filling.jpg?s=2048x2048&w=is&k=20&c=uVfpr6pwxu-1M85NYq3qWA0IhzR-CzgCn1h_DBC4zSU=',
    categoria: 'Sobremesa',
  },
  {
    id: 5,
    nome: 'Caipirinha',
    descricao: 'Caipirinha feita na hora.',
    imagem: 'https://media.istockphoto.com/id/697706030/pt/foto/sweet-and-refreshing-drink-caipirinha-cocktail.jpg?s=2048x2048&w=is&k=20&c=6JB7p8OxAYSHzQ77TUpEfCjsmN9kWIyyK3KzYOqun4o=',
    categoria: 'Bebidas',
  },
  {
    id: 6,
    nome: 'Camarão',
    descricao: 'Petisco de Camarão.',
    imagem: 'https://cdn.pixabay.com/photo/2013/06/13/14/17/shrimp-139165_1280.jpg',
    categoria: 'Acompanhamento',
  },
];

const icons = {
  Home: { name: 'home-outline' },
  Receita: { name: 'restaurant-outline' },
  Localizacao: { name: 'location-outline' },
};

function Tabs({ listaCategorias }) {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ color, size }) => {
          const { name } = icons[route.name] || { name: 'alert-circle' };
          return <Ionicons name={name} size={size} color={color} />;
        },
        tabBarStyle: {
          backgroundColor: '#4DA8FF',
        },
        tabBarActiveTintColor: '#000000',
        tabBarInactiveTintColor: '#3B3B3B',
      })}
    >
      <Tab.Screen name="Home" component={Home} initialParams={{ listaCategorias, receitas }} />
      <Tab.Screen name="Receita" component={Receita} />
      <Tab.Screen name="Localizacao" component={Localizacao} />
    </Tab.Navigator>
  );
}

export default function App() {
  const [listaCategorias] = useState([
    { categorias: 'Sobremesa' },
    { categorias: 'Salgados' },
    { categorias: 'Prato Principal' },
    { categorias: 'Acompanhamento' },
    { categorias: 'Bebidas' },
  ]);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Tabs"
          options={{ headerShown: false }}
          children={() => <Tabs listaCategorias={listaCategorias} receitas={receitas} />}
        />
        <Stack.Screen name="Receita" component={Receita} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
