import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

const About = ({ route, navigation }) => {
  const { friend } = route.params;

  const handleHomePress = () => {
    navigation.navigate('Home'); 
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Detail Informasi</Text>
      <View style={styles.friendContainer}>
        <Image source={friend.gambar} style={styles.friendImage} />
        <View style={styles.friendDetails}>
          <Text style={styles.friendName}>{friend.name}</Text>
          <Text>Telepon: {friend.telpon}</Text>
          <Text>Email: {friend.email}</Text>
          <Text>Instagram: {friend.instagram}</Text>
          <Text>Alamat: {friend.alamat}</Text>
          <Text>Status: {friend.status}</Text>
        </View>
      </View>
      <TouchableOpacity style={styles.homeButton} onPress={handleHomePress}>
        <Text style={styles.buttonText}>Home</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  header: {
    fontSize: 24,
    marginBottom: 20,
    fontWeight: 'bold',
  },
  friendContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  friendImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginRight: 20,
  },
  friendDetails: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
  },
  friendName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  homeButton: {
    marginTop: 20,
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: '#007AFF', 
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 16,
    color: '#fff', 
  },
});

export default About;
