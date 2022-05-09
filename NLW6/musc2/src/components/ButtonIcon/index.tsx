import React from 'react';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';
import { Text, Image, View } from 'react-native';

//import DiscordImg from '../../assets/musicas.png';
import { styles } from './styles';
import { Entypo } from '@expo/vector-icons';

type Props = RectButtonProps & {
  title: string;
  iconName?: keyof typeof Entypo.glyphMap;
};

function qualIcone() {}

export function ButtonIcon({ title, iconName, ...rest }: Props) {
  return (
    <RectButton style={styles.container} activeOpacity={0.6} {...rest}>
      <View style={styles.iconWrapper}>
        <Entypo
          size={30}
          name={iconName ? iconName : 'bookmark'}
          style={styles.icon}
        />
      </View>
      <Text style={styles.title}>{title}</Text>
    </RectButton>
  );
}

//( {`${iconName}`} )
//<Entypo name="beamed-note" size={24} color="black" />

//<Image source={DiscordImg} style={styles.icon} />

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
