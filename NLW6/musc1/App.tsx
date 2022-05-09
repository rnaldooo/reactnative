import React from 'react';
import { StatusBar } from 'react-native';
import { Inter_400Regular, Inter_500Medium } from '@expo-google-fonts/inter';
import {
  Rajdhani_500Medium,
  Rajdhani_700Bold,
} from '@expo-google-fonts/rajdhani';
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';

import { AuthProvider } from './src/hooks/auth';

import { Routes } from './src/routes';
import { Background } from './src/components/Background';
//import { MusicasSeleciona } from './src/screens/MusicasSeleciona';

export default function App() {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Rajdhani_500Medium,
    Rajdhani_700Bold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <Background>
      <StatusBar
        barStyle='light-content'
        backgroundColor='transparent'
        translucent
      />
      <AuthProvider>
        <Routes />
      </AuthProvider>
    </Background>
  );
}
// teria q instalar o axios
//expo install expo-auth-session expo-random

//Prop Drilling  || context

//install nodejs

//install yarn
//npm install --global yarn

//npm install --global expo-cli

// <> é um fragment pode importar no react
// expo install expo-font @expo-google-fonts/inter
// expo install expo-font @expo-google-fonts/rajdhani

//expo install expo-app-loading

//expo install expo-linear-gradient

//expo install react-native-iphone-x-helper

//expo install react-native-svg
//yarn add --dev react-native-svg-transformer

//"core de navegação"
//yarn add @react-navigation/native
//"dependencias"
//expo install react-native-screens react-native-safe-area-context
//"stacks"
//yarn add @react-navigation/native-stack
//yarn add @react-navigation/stack@^5.x

// ctr shif p - comandos
// ctl b - explorador
// ctrl j  - painel inferior
// ctr ' - terminal
// ctr k ctr s - atalhos
// setings compact folder
// seting labelformat short

//<Inicial></Inicial>

//import { StatusBar } from "expo-status-bar";

//import { Text, View } from "react-native";

//<StatusBar style="auto" />
//const styles = StyleSheet.create({
// container: {
//   flex: 1,
//   backgroundColor: "#fff",
//    alignItems: "center",
//   justifyContent: "center",
//  },
//});

//npm install -g turtle-cli

//StyleSheet,
//style={styles.container}

//https://formik.org/

// hasCheckedBox?: boolean;    ? indica que é opcional

//ctrl k s salvar tudo
