// compoentes
import React from 'react';
import { Button, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

//estilos
import { styles } from './styles';

// componentes criados
import { Profile } from '../../components/Profile';

export function Cifras() {
  const navigation = useNavigation();
  return (
    <View>
      <View style={styles.header}>
        <Text style={styles.texto}>Cifras</Text>
      </View>

      <Profile />

      <Button
        title='Back'
        onPress={() => {
          navigation.goBack();
        }}
      />
    </View>
  );
}
