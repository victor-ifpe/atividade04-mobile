import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import TelaLogin from './src/Telas/TelaLogin';
import TelaListaContatos from './src/Telas/TelaListaContatos';
import TelaCadastroUsuario from './src/Telas/TelaCadastroUsuario';
import TelaCadastroContato from './src/Telas/TelaCadastroContato';
import TelaEdicaoContatos from './src/Telas/TelaEdicaoContatos';
import TelaEsqueceuSenha from './src/Telas/TelaEsqueceuSenha';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="TelaLogin">

        <Stack.Screen
          name="TelaLogin"
          component={TelaLogin}
          options={{
            headerShown: false,
          }}
        />

        <Stack.Screen
          name="TelaListaContatos"
          component={TelaListaContatos}
          options={{
            headerShown: false,
          }}
        />

        <Stack.Screen
          name="TelaCadastroUsuario"
          component={TelaCadastroUsuario}
          options={{
            headerShown: false,
          }}
        />

        <Stack.Screen
          name="TelaCadastroContato"
          component={TelaCadastroContato}
          options={{
            headerShown: false,
          }}
        />

        <Stack.Screen
          name="TelaEdicaoContatos"
          component={TelaEdicaoContatos}
          options={{
            headerShown: false,
          }}
        />

        <Stack.Screen
          name="TelaEsqueceuSenha"
          component={TelaEsqueceuSenha}
          options={{
            headerShown: false,
          }}
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
}