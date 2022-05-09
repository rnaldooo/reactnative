// shift alt f
import React, { useState } from "react";
import { Text, View, Image } from "react-native";

import { ButtonIcon } from "../../components/ButtonIcon";
import IllustrationImg from "../../assets/illustration.png";
import { styles } from "./styles";

export function SingIn() {
  return (
    <View style={styles.container}>
      <Image
        source={IllustrationImg}
        style={styles.image}
        resizeMode={"stretch"}
      />

      <View style={styles.content}>
        <Text style={styles.title}>
          Conecte-se {"\n"}e organize {"\n"}
          sua jogatina
        </Text>

        <Text style={styles.subtitle}>
          crie seus grupos para jogar seus games {"\n"}
          favoritos com seus amigos
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
