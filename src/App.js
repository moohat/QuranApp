import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {StyleSheet} from 'react-native';
import Router from './router';

const App = () => {
  return (
    <NavigationContainer>
      <Router />
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({});

// import React, {useEffect, useState} from 'react';
// import {View, StyleSheet, TouchableOpacity} from 'react-native';
// import Ionicons from 'react-native-vector-icons/Ionicons';

// var Sound = require('react-native-sound');

// Sound.setCategory('Playback');

// var audio = new Sound(
//   'http://download.quranicaudio.com/quran/ahmed_ibn_3ali_al-3ajamy/001.mp3',
//   null,
//   error => {
//     if (error) {
//       console.log('failed to load the sound', error);
//       return;
//     }
//     // if loaded successfully
//     console.log(
//       'duration in seconds: ' +
//         audio.getDuration() +
//         'number of channels: ' +
//         audio.getNumberOfChannels(),
//     );
//   },
// );
// const App = () => {
//   const [playing, setPlaying] = useState();
//   useEffect(() => {
//     audio.setVolume(1);
//     return () => {
//       audio.release();
//     };
//   }, []);
//   const playPause = () => {
//     if (audio.isPlaying()) {
//       audio.pause();
//       setPlaying(false);
//     } else {
//       setPlaying(true);
//       audio.play(success => {
//         if (success) {
//           setPlaying(false);
//           console.log('successfully finished playing');
//         } else {
//           setPlaying(false);
//           console.log('playback failed due to audio decoding errors');
//         }
//       });
//     }
//   };
//   return (
//     <View style={styles.container}>
//       <TouchableOpacity style={styles.playBtn} onPress={playPause}>
//         <Ionicons
//           name={playing ? 'ios-pause-outline' : 'ios-play-outline'}
//           size={36}
//           color={'#fff'}
//         />
//       </TouchableOpacity>
//     </View>
//   );
// };
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//     backgroundColor: '#000',
//   },
//   playBtn: {
//     padding: 20,
//   },
// });
// export default App;
