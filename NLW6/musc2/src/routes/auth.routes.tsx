import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { theme } from '../global/styles/theme';

import { Inicial } from '../screens/Inicial';

import { MusicasSeleciona } from '../screens/MusicasSeleciona';
import { Cifras } from '../screens/Cifras';
import { AppointmentDetails } from '../screens/AppointmentDetails';
import { AppointmentCreate } from '../screens/AppointmentCreate';
import { Configurações } from '../screens/Configurações';

export type RootStackParamList = {
  // Home: undefined;
  // Profile: { useId: string };
  // Feed: { sort: 'latest' | 'top' } | undefined;
  Inicial: undefined;
  MusicasSeleciona: undefined;
  Cifras: undefined;
  AppointmentDetails: undefined;
  AppointmentCreate: undefined;
  Configurações: undefined;
};
//const RootStack = createStackNavigator<RootStackParamList>();

const { Navigator, Screen } = createStackNavigator<RootStackParamList>();

export function AuthRoutes() {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: { backgroundColor: theme.colors.secondary100, opacity: 1 },
      }}>
      <Screen name='Inicial' component={Inicial} />
      <Screen name='MusicasSeleciona' component={MusicasSeleciona} />
      <Screen name='Cifras' component={Cifras} />
      <Screen name='AppointmentDetails' component={AppointmentDetails} />
      <Screen name='AppointmentCreate' component={AppointmentCreate} />
      <Screen name='Configurações' component={Configurações} />
    </Navigator>
  );
}

//cardStyleInterpolator: CardStyleInterpolators.forFadeFromBottomAndroid,

// screenOptions
// cardOverlayEnabled: true,
// cardOverlay: () => (
//   <LinearGradient
//     // Background Linear Gradient
//     colors={['red', 'blue']}
//     style={styles.background}
//   />
// ),
// cardStyle: {
//   backgroundColor: 'transparent',
//   opacity: 1,
// },

// styles
// const styles = StyleSheet.create({
// background: {
//   position: 'absolute',
//   left: -100,
//   right: 0,
//   top: 0,
//   bottom: 0,
//   height: 700,
//   zIndex: -10,
// },
// })
