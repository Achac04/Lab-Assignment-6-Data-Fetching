/**
 * My To Do List App
 *
 * @format
 */

import React from 'react';
import {SafeAreaView} from 'react-native';
import TodoList from './ToDoList';
import ToDoForm from './ToDoForm';

function App() {
  const [tasks] = React.useState([
    'Do laundry',
    'Go to gym',
    'Walk dog',
  ]);

  return (
    <SafeAreaView>
      <TodoList tasks={tasks} />
      <ToDoForm />
    </SafeAreaView>
  );
}

export default App;
