import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import axios from 'axios';
const baseUrl = 'https://quran-endpoint.vercel.app/quran';

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
  const [surat, setSurat] = useState([]);
  const getData = async () => {
    const response = await axios.get(baseUrl);
    const nama_surat = response.data.data;
    setSurat(nama_surat);
    nama_surat.map((item, index) => {
      return console.log('nama surat dari server: ', item.asma.id.short);
    });
  };
  useEffect(() => {
    getData();
    // console.log(ayat);
  }, []);

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      {surat.map(item => {
        return (
          <Text key={item.id}>Ini adalah surat: {item.asma.id.short}</Text>
        );
      })}
    </ScrollView>
  );
};

export default ListAlquran;

const styles = StyleSheet.create({});
