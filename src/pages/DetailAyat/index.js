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
// import SoundPlayer from 'react-native-sound-player';
import Ionicons from 'react-native-vector-icons/Ionicons';

var Sound = require('react-native-sound');
Sound.setCategory('Playback');

const audio = new Sound(
  'http://download.quranicaudio.com/quran/ahmed_ibn_3ali_al-3ajamy/001.mp3',
  null,
  error => {
    if (error) {
      console.log('failed to load the sound', error);
      return;
    }
    // if loaded successfully
    console.log(
      'duration in seconds: ' +
        audio.getDuration() +
        'number of channels: ' +
        audio.getNumberOfChannels(),
    );
  },
);
const DetailAyat = ({route}) => {
  const surat = route.params;

  const [surah, setSurah] = useState([]);
  const [dataAudio, setDataAudio] = useState('');
  const [playing, setPlaying] = useState(false);

  const getData = async () => {
    const response = await axios.get(`${baseUrl}/${surat.number}`);
    const surah =  response.data.data.ayahs;
    const fullRecitation = await response.data.data.recitation.full;
    setSurah(surah);
    setDataAudio(fullRecitation);
    // console.log('ini data audio url: ', surah.audio.url);

    // surah.map(item => {
    //   // return console.log((audio = new Sound(item.audio.url)));
    //   setDataAudio(item.audio.url);
    //   // console.log('ini data audio url: ', item.audio.url);
    // });
    // console.log('nama ayat: ', typeof surah);
  };
  console.log('ini data audio: ', dataAudio);

  // console.log('ini data audio dari url: ', dataAudio);

  useEffect(() => {
    getData();
    audio.setVolume(1);
    return () => {
      audio.release();
    };
    // console.log(ayat);
  }, []);

  const playPause = () => {
    if (audio.isPlaying()) {
      audio.pause();
      setPlaying(false);
    } else {
      setPlaying(true);
      audio.play(success => {
        if (success) {
          setPlaying(false);
          console.log('successfully finished playing');
        } else {
          setPlaying(false);
          console.log('playback failed due to audio decoding errors');
        }
      });
    }
  };

  //   console.log(`${baseUrl}/${surat.number}`);
  return (
    <>
      <ScrollView showsVerticalScrollIndicator={false}>
        <TouchableOpacity style={styles.playBtn} onPress={playPause}>
          <Ionicons
            name={playing ? 'pause-outline' : 'play-outline'}
            size={36}
            color={'red'}
          />
        </TouchableOpacity>
        {surah.map(item => {
          return (
            <View>
              <Text style={styles.label}> {item.number.insurah}</Text>

              <Text style={styles.label}> {item.text.ar}</Text>
              <Text style={styles.label}> {item.audio.url}</Text>

              <Text style={styles.label}> {item.text.read}</Text>
              <Text style={styles.label}> {item.translation.id}</Text>
            </View>
          );
        })}
      </ScrollView>
    </>
  );
};

export default DetailAyat;

const styles = StyleSheet.create({
  label: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#000',
  },
  playBtn: {
    padding: 20,
  },
});
