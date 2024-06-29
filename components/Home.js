import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity, SafeAreaView, StatusBar} from 'react-native';
import { useNavigation } from '@react-navigation/native';

const contacts = [
  { id: '1', name: 'Eneng Rahayu', telpon: '085559186829', email: 'rahayueneng6@gmail.com', instagram: 'rahynnn_', alamat: 'Kp. Sorog', status: 'Mahasiswa', gambar: require('../assets/photo_eneng.png')},
  { id: '2', name: 'Tanaya Salsabilla', telpon: '085795024030', email: 'tanaya34@gmail.com', instagram: 'tanayaa', alamat: 'Kp. Cibolang Kidul Cisaat', status: 'Mahasiswa', gambar: require('../assets/photo_tanaya.png') },
  { id: '3', name: 'Delinda Mega Putri', telpon: '085524520937', email: ' delindaa123@gmail.com', instagram: 'dlynndaaa_', alamat: 'Sukaraja, Sukabumi', status: 'Mahasiswa', gambar: require('../assets/photo_delin.png') },
  { id: '4', name: 'Dian Sela Anjelina', telpon: '08156193245', email: 'diansela49@gmail.com', instagram: 'dian_sl_anjeli', alamat: 'Jagaraksa Permai, Baros', status: 'Mahasiswa', gambar: require('../assets/photo_dian.png') },
  { id: '5', name: 'Meitiasari Nurlatifah', telpon: '085892775764', email: 'memey@gmail.com', instagram: 'meiasss', alamat: 'Nanggeleng, Sukabumi', status: 'Mahasiswa', gambar: require('../assets/photo_meitia.png') },
  { id: '6', name: 'Natya Octaviana', telpon: '085721884434', email: 'natyaocta@gmail.com', instagram: '_ntyoctaaa', alamat: 'Jl Gunung Karang', status: 'Mahasiswa', gambar: require('../assets/photo_natya.png') },
];

const Home = () => {
  const navigation = useNavigation();
  const [showButtonId, setShowButtonId] = useState(null); 

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.itemContainer}
      onPress={() => {
      
        setShowButtonId(showButtonId === item.id ? null : item.id); 
      }}
    >
      <Image source={item.gambar} style={styles.itemImage} />
      <View style={styles.itemDetails}>
        <Text style={styles.itemName}>{item.name}</Text>
        <Text>{item.telpon}</Text>
      </View>
      {showButtonId === item.id && (
        <TouchableOpacity style={styles.lihatButton} onPress={() => navigation.navigate('About', { friend: item })}>
          <Text style={styles.lihatText}>Lihat</Text>
        </TouchableOpacity>
      )}
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>Aplikasi Daftar Teman</Text>
      <FlatList
        data={contacts}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },

  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    backgroundColor: '#f0f0f0',
    padding: 10,
    borderRadius: 5,
    width: '100%',
  },
  itemImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  itemDetails: {
    flex: 1,
    marginLeft: 10,
  },
  itemName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  lihatButton: {
    backgroundColor: '#007AFF',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 5,
  },
  lihatText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default Home;
