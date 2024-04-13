/* eslint-disable prettier/prettier */
import React, { useState, useEffect } from 'react';
import {StyleSheet, View, TextInput, Button, Platform} from 'react-native';
import tasksData from '../data/tasks.json';

const ToDoForm = ({ addTask }) => {
  const [taskText, setTaskText] = React.useState('');
  const [tasks, setTasks] = useState([]);
  const [randomTask] = useState('');

  useEffect(() => {
    // Fetch tasks from the "tasks.json" file
    setTasks(tasksData.tasks);
  }, []);

  const handleAddTask = () => {
    if (taskText.trim() === '') {
      return;
    }

    addTask(taskText);
    setTaskText('');
  };

  const handleGenerateRandomTask = () => {
    const randomIndex = Math.floor(Math.random() * tasks.length);
    setTaskText(tasks[randomIndex]);
  };

  return (
    <View style={styles.form}>
      <TextInput
        style={styles.input}
        placeholder="Add a new task..."
        onChangeText={(text) => setTaskText(text)}
        value={taskText}
        placeholderTextColor="#777"
      />
      <Button title="Add" onPress={handleAddTask} />
      <Button title="Generate Random Task" onPress={handleGenerateRandomTask} />
      {randomTask && <TextInput style={styles.input} value={randomTask} editable={false} />}
    </View>
  );
};

const styles = StyleSheet.create({
  form: {
    flexDirection: 'column',
    backgroundColor: '#f9f9f9',
    padding: 20,
    margin: 20,
    borderRadius: 5,
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
      },
      android: {
        elevation: 5,
      },
    }),
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginBottom: 10,
    borderRadius: 5,
    backgroundColor: '#fff',
    color: '#333',
  },
});
export default ToDoForm;
