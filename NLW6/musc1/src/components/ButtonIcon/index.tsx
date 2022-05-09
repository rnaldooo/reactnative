import React from 'react';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';
import { Text, Image, View } from 'react-native';

import DiscordImg from '../../assets/musicas.png';
import { styles } from './styles';

type Props = RectButtonProps & {
  title: string;
};

export function ButtonIcon({ title, ...rest }: Props) {
  return (
    <RectButton style={styles.container} activeOpacity={0.6} {...rest}>
      <View style={styles.iconWrapper}>
        <Image source={DiscordImg} style={styles.icon} />
      </View>
      <Text style={styles.title}>{title}</Text>
    </RectButton>
  );
}

// TouchableOpacity,
// TouchableOpacityProps,
// TouchableHighlight,
// TouchableHighlightProps,

//  title?: string; para ser opcional
//<TouchableHighlight
// activeOpacity={0.6}
// underlayColor="#DDDDDD"
// onPress={() => alert('Pressed!')}>
//  <MyComponent />
//</TouchableHighlight>;
