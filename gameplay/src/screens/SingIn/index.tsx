// shift alt f
import React, { useState } from 'react';
import {
  Text,
  View,
  Image,
  StatusBar
} from 'react-native';

import { ButtonIcon } from '../../components/ButtonIcon';
import IllustrationImg from '../../assets/illustration.png';
import { styles } from './styles';

export function SingIn() {

  return (
    <View style={styles.container}>
      <StatusBar
        barStyle={'light-content'}
        backgroundColor='transparent'
        translucent
      />

      <Image
        source={IllustrationImg}
        style={styles.image}
        resizeMode={'stretch'} />

      <View style={styles.content}>
        <Text style={styles.title}>
          Organize {'\n'}
          seus {'\n'}
          Jogos
        </Text>

        <Text style={styles.subtitle}>
          crie seus grupos {'\n'}
          para jogar
        </Text>

        <ButtonIcon title={"Entrar no Discod"} activeOpacity={0.7} />

      </View>
    </View>
  );
}

//const [text, setText] = useState('');
//TextInput
//  style={styles.input}
//  onChangeText={setText}
//(value) => console.log(value)}
//(value) => setText(value)
