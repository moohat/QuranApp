import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import {Axios} from 'axios';

const ListAlquran = () => {
  const getData = async () => {
    const dataAlquran = await fetch('https://quran-endpoint.vercel.app/');
    const value = await dataAlquran.json();
    console.log('ini data: ', value);
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <View>
      <Text>ListAlquran</Text>
    </View>
  );
};

export default ListAlquran;

const styles = StyleSheet.create({});
