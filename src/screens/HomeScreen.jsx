/* eslint-disable prettier/prettier */
import React from 'react';
import { Text, View, Pressable, StyleSheet } from 'react-native';
import MainLayout from '../layouts/MainLayout';

const HomeScreen = ({ navigation }) => {
  return (
    <MainLayout>
      <View style={styles.container}>
        <Text style={styles.header}>Welcome to the Amazing To Do List App!</Text>
        <Pressable style={styles.button} onPress={() => navigation.navigate('About')}>
          <Text style={styles.buttonText}>Go to About</Text>
        </Pressable>
      </View>
    </MainLayout>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#007bff',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
});

export default HomeScreen;
