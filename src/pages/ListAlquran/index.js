import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import axios from 'axios';
const baseUrl = 'https://quran-endpoint.vercel.app/quran/1';

const parseArray = listObject => {
  const data = [];
  Object.keys(listObject).map(key => {
    data.push({
      id: key,
      data: listObject[key],
    });
  });
  return data;
};

const ListAlquran = () => {
  const [ayat, setAyat] = useState('');
  const getData = async () => {
    const response = await axios.get(baseUrl);
    const nama_surat = parseArray(response.data.data.asma.id.short);
    console.log('response dari server: ', parseArray(nama_surat));
    // setAyat(nama_surat);

    // nama_surat.map(item => {
    //   item.short;
    //   console.log('ini surat', item.short);
    // });
  };
  useEffect(() => {
    getData();
    // console.log(ayat);
  }, []);

  return (
    <View>
      <Text>ListAlquran</Text>
    </View>
  );
};

export default ListAlquran;

const styles = StyleSheet.create({});
