/* eslint-disable prettier/prettier */
import React from 'react';
import {StyleSheet, Pressable, View, Text, ScrollView} from 'react-native';

function ToDoList({ tasks }) {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {tasks.map((task, index) => (
        <Pressable key={index}>
          <View style={[styles.task, styles.completed]}>
            <Text style={styles.taskText}>{task}</Text>
          </View>
        </Pressable>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    pading: 20,
    backgroundColor: '#f9f9f9',
  },
  task: {
    padding: 10,
    borderRadius: 5,
    backgroundColor: '#007bff',
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  taskText: {
    fontSize: 16,
    color: '#fff',
  },
});

export default ToDoList;
