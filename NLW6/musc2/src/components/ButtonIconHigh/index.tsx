import React from 'react';
import {
  Text,
  Image,
  View,
  TouchableOpacity,
  TouchableOpacityProps,
  TouchableHighlight,
  TouchableHighlightProps,
} from 'react-native';

import DiscordImg from '../../assets/musicas.png';
import { styles } from './styles';

type Props = TouchableHighlightProps & {
  title: string;
};

export function ButtonIconHigh({ title, ...rest }: Props) {
  return (
    <TouchableHighlight style={styles.container} activeOpacity={0.6} {...rest}>
      <View style={styles.iconWrapper}>
        <Image source={DiscordImg} style={styles.icon} />
      </View>
      <Text style={styles.title}>{title}</Text>
    </TouchableHighlight>
  );
}

//  title?: string; para ser opcional
//<TouchableHighlight
// activeOpacity={0.6}
// underlayColor="#DDDDDD"
// onPress={() => alert('Pressed!')}>
//  <MyComponent />
//</TouchableHighlight>;
