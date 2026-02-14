/**
 * My To Do List App
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
} from 'react-native';

import ToDoList from './ToDoList';
import ToDoForm from './ToDoForm';

function App(): JSX.Element {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ToDoList />
      <ToDoForm />
    </SafeAreaView>
  );
}

export default App;
