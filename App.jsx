/**
 * My To Do List App
 *
 * @format
 */

import React from 'react';
import {SafeAreaView} from 'react-native';
import TodoList from './TodoList';
import ToDoForm from './ToDoForm';

function App() {
  return (
    <SafeAreaView>
      <TodoList />
      <ToDoForm />
    </SafeAreaView>
  );
}

export default App;
