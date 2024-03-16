/**
 * My To Do List App
 *
 * @format
 */

import React from 'react';
import { SafeAreaView } from 'react-native';
import TodoList from './ToDoList';
import ToDoForm from './ToDoForm';

function App() {
  const [tasks, setTasks] = React.useState([
    'Do laundry',
    'Go to gym',
    'Walk dog',
  ]);

  const addTask = (taskText) => {
  //  setTasks([...tasks, taskText]);

    if (!tasks.includes(taskText)) {
      // If it doesn't exist, add it to the tasks array
      setTasks([...tasks, taskText]);
    }
  };

  return (
    <SafeAreaView>
      <TodoList tasks={tasks} />
      <ToDoForm addTask={addTask} />
    </SafeAreaView>
  );
}

export default App;
