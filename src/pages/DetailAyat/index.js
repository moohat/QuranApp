import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Button,
  TouchableOpacity,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import axios from 'axios';
const baseUrl = 'https://quran-endpoint.vercel.app/quran';
import SoundPlayer from 'react-native-sound-player';

const DetailAyat = ({route}) => {
  const surat = route.params;

  const [surah, setSurah] = useState([]);
  const getData = async () => {
    const response = await axios.get(`${baseUrl}/${surat.number}`);
    const surah = response.data.data.ayahs;
    setSurah(surah);
    surah.map(item => {
      return console.log('nama surah dari server: ', item.translation.id);
      
    });
    // console.log('nama ayat: ', typeof surah);
  };
  useEffect(() => {
    getData();
    // console.log(ayat);
  }, []);

  //   console.log(`${baseUrl}/${surat.number}`);
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      {surah.map(item => {
        return (
          <View>
            <Text style={styles.label}> {item.number.insurah}</Text>

            <Text style={styles.label}> {item.text.ar}</Text>
            <Text style={styles.label}> {item.audio.url}</Text>
              <Button title="Play Audio" />
            <Text style={styles.label}> {item.text.read}</Text>
            <Text style={styles.label}> {item.translation.id}</Text>
          </View>
        );
      })}
    </ScrollView>
  );
};

export default DetailAyat;

const styles = StyleSheet.create({
  label: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});
