/* eslint-disable prettier/prettier */
import React from 'react';
import {StyleSheet, View, TextInput, Button, Platform} from 'react-native';

const ToDoForm = ({ addTask }) => {
  const [taskText, setTaskText] = React.useState('');

  const handleAddTask = () => {
    if (taskText.trim() === '') {
      return;
    }

    addTask(taskText);
    setTaskText('');
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
    </View>
  );
};

const styles = StyleSheet.create({
  form: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#f9f9f9',
    padding: 10,
    marginHorizontal: 20,
    marginTop: 20,
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
    flex: 1,
    borderWidth: 1,
    borderColor: '#ccc',
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginRight: 10,
    borderRadius: 5,
    backgroundColor: '#fff',
    color: '#333',
  },
});

export default ToDoForm;
