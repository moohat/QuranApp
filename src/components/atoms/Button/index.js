import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {colors} from '../../../utils';

const Button = ({title, onPress}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  container: {
    // backgroundColor: colors.button.primary.background,
    borderColor: colors.white,
    borderWidth: 5,
    height: 50,
    width: 200,
    borderRadius: 10,
    justifyContent:'center',
    textAlign:'center',
    marginTop: 20,
  },
  text: {
    fontSize: 18,
    fontFamily: 'Poppins-Medium',
    textAlign: 'center',
    color: colors.white,
  },
});
