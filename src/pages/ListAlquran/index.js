import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {colors} from '../../utils/colors';
const baseUrl = 'https://quran-endpoint.vercel.app/quran';

const ListAlquran = ({navigation}) => {
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
          <View style={styles.page} key={item.id}>
            <TouchableOpacity
              style={styles.container}
              onPress={() => navigation.navigate('DetailAyat', item)}>
              <Text key={item.id} style={styles.textNumber}>
                {item.number}
              </Text>

              <View>
                <Text key={item.id} style={styles.textTitle}>
                  {item.asma.id.short}
                </Text>
                <View style={styles.type}>
                  <Text key={item.id} style={styles.titleId}>
                    {item.type.id} |{' '}
                  </Text>
                  <Text key={item.id} style={styles.titleId}>
                    {item.ayahCount} Ayat
                  </Text>
                </View>
              </View>
              <View style={{flex: 1}}>
                <Text key={item.id} style={styles.titleArab}>
                  {item.asma.ar.short}
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        );
      })}
    </ScrollView>
  );
};

export default ListAlquran;

const styles = StyleSheet.create({
  page: {
    backgroundColor: colors.black,
  },
  container: {
    flex: 1,
    flexDirection: 'row',
    paddingHorizontal: 20,
    borderBottomColor: colors.cardLight,
    borderBottomWidth: 2,
    marginTop: 10,
    alignItems: 'center',
  },
  textNumber: {
    marginRight: 15,
    fontSize: 20,
    fontWeight: 'bold',
    color: colors.white,
  },
  titleId: {
    color: colors.white,
  },
  textTitle: {
    fontSize: 17,
    fontWeight: 'bold',
    color: colors.white,
  },
  type: {
    flexDirection: 'row',
  },
  titleArab: {
    fontSize: 20,
    fontWeight: 'bold',
    color: colors.white,
  },
});
