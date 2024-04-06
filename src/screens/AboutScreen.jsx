/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import { Text, View, Pressable, StyleSheet } from 'react-native';
import MainLayout from '../layouts/MainLayout';

const AboutScreen = () => {
  const [showEasterEgg, setShowEasterEgg] = useState(false);

  const handlePressName = () => {
    setShowEasterEgg(true);
    setTimeout(() => setShowEasterEgg(false), 3000); // This is made to reset after 3 seconds
  };

  return (
    <MainLayout>
      <View style={styles.container}>
        <Text style={styles.header}>About Screen</Text>
        <Text style={styles.text}>Amazing To Do List App</Text>
        <Text style={styles.text}>Created By:</Text>
        <Pressable onPress={handlePressName}>
          <Text style={styles.boldUnderline}>Andres Chacon</Text>
        </Pressable>
        {showEasterEgg && (
          <Text style={styles.showEasterEgg}>Congratulations! Now you know the creator of the app, a Colombian guy living and learning in Canada.</Text>
        )}
        <Text style={styles.text}>{new Date().toDateString()}</Text>
      </View>
    </MainLayout>
  );
};

const styles = StyleSheet.create({
  boldUnderline: {
    fontWeight: 'bold',
    textDecorationLine: 'underline',
  },
  easterEgg: {
    marginTop: 10,
    color: 'green',
  },
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
  text: {
    fontSize: 16,
    marginBottom: 10,
  },
});

export default AboutScreen;
