import React from 'react';
import { ImageBackground, Text, View, FlatList } from 'react-native';
import { BorderlessButton } from 'react-native-gesture-handler';
import { Fontisto } from '@expo/vector-icons';

//import { BannerImg } from '../../assets/banner.png';

import { Background } from '../../components/Background';
import { Header } from '../../components/Header';
import { ListHeader } from '../../components/ListHeader';
import { Member } from '../../components/Member';

import { theme } from '../../global/styles/theme';
import { styles } from './styles';
import { ListDivider } from '../../components/ListDivider';
import { ButtonIcon } from '../../components/ButtonIcon';

let BannerImg = require('../../assets/banner.png');

export function AppointmentDetails() {
  const members = [
    {
      id: '1',
      username: 'reinaldo',
      avatar_url: 'https://github.com/kindereco.png',
      status: 'online',
    },
    {
      id: '2',
      username: 'ze',
      avatar_url: 'https://github.com/kindereco.png',
      status: 'offline',
    },
  ];

  return (
    <Background>
      <Header
        title='Detalhes'
        action={
          <BorderlessButton>
            <Fontisto name='share' size={24} color={theme.colors.primary} />
          </BorderlessButton>
        }
      />
      <ImageBackground style={styles.banner} source={BannerImg}>
        <View style={styles.bannerContent}>
          <Text style={styles.title}>Lendarios</Text>
          <Text style={styles.subtitle}>uma md10</Text>
        </View>
      </ImageBackground>
      <ListHeader title='Jogadores' subtitle='total3' />
      <FlatList
        data={members}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <Member data={item} />}
        ItemSeparatorComponent={() => <ListDivider />}
        style={styles.members}
      />
      <View style={styles.footer}>
        <ButtonIcon title='entrar na partida'></ButtonIcon>
      </View>
    </Background>
  );
}
