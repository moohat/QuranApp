import {ImageBackground, Image, StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import {Bg, Logo, Ikon} from '../../assets/Ilustration';
import {colors} from '../../utils';

const SplashScreen = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('MainMenu');
    }, 3000);
  }, [navigation]);
  return (
    <ImageBackground source={Bg} style={styles.page}>
      <Image source={Ikon} style={styles.image} />
      <Text style={styles.title}>Alquran Digital</Text>
    </ImageBackground>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  page: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  image: {
    width: 150,
    height: 150,
  },

  title: {
    fontSize: 32,
    color: colors.white,
    fontFamily: 'Poppins-Medium',
  },
});
