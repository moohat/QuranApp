import {Image, ImageBackground, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Button} from '../../components';
import {colors} from '../../utils';
import {Bg, Ikon} from '../../assets/Ilustration';

const MainMenu = ({navigation}) => {
  return (
    <ImageBackground source={Bg} style={styles.page}>
      <Image source={Ikon} style={{width: 80, height: 80}} />
      {/* <Text>MainMenu</Text> */}
      <Button
        title={'Baca Alquran'}
        onPress={() => navigation.navigate('ListAlquran')}
      />
      <Button title={'Jadwal Sholat'} />
      <Button title={'Panduan Sholat'} />
      <Button title={'Panduan Wudhu'} />
    </ImageBackground>
  );
};

export default MainMenu;

const styles = StyleSheet.create({
  page: {
    backgroundColor: colors.primary,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
