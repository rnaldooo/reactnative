import React, { useState } from 'react';
import { Text, View, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { ButtonIcon } from '../../components/ButtonIcon';
import { useAuth } from '../../hooks/auth';
import { Background } from '../../components/Background';
import logo from '../../assets/logo.png';
import { styles } from './styles';

//import { ButtonIconHigh } from '../../components/ButtonIconHigh';
//import { MusicasSeleciona } from '../MusicasSeleciona';
//import { MusicasSeleciona } from '../MusicasSeleciona';
//let logo = require('../../assets/logo.png');

export function Inicial() {
  const navigation = useNavigation();
  const {user} = useAuth();
  //console.log(user);

  function handleInicialMusicas() {
    navigation.navigate('MusicasSeleciona');
    //console.log(navigation);
  }

  function handleInicialCifra() {
    navigation.navigate('Cifras');
  }

  function handleInicialConfigurações() {
    navigation.navigate('Configurações');
  }

  return (
    <Background>
    <View style={styles.container}>
      <Image source={logo} style={styles.image} resizeMode='stretch' />
      <View style={styles.content}>
        <Text style={styles.title}>Igreja Boqueirão{'\n'}</Text>
        <Text style={styles.subtitle}>Musica e Cifras{'\n'}† Cristão †</Text>
        <ButtonIcon title='Livro de Musicas' iconName='open-book' onPress={handleInicialMusicas}/>
        <ButtonIcon title='Cifras e Ferramentas' iconName='note' onPress={handleInicialCifra}/>
        <ButtonIcon title='Configurações' iconName='tools' onPress={handleInicialConfigurações}/>
        <Text style={styles.subtitle}>
         {'\n'}
          Versão: 2022/01/22-001          
        </Text>
      </View>
    </View>
    </Background>
  );
}

// 1:18
// <ButtonIconHigh title='teste' />
// † Cristão †
//onChangeText={(value) => console.log(value)}
//TextInput
//<TextInput style={styles.input} onChangeText={setText} />
//<Text> {text} </Text>
//const [text, setText] = useState("† Cristão †");

// prettier-ignore

//useNavigation<any>();
