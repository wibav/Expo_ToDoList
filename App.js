import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Provider as PaperProvider } from 'react-native-paper';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { TaskProvider } from './src/context/TaskContext';
import AppNavigator from './src/navigations/AppNavigator';

const App = () => {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <PaperProvider>
        <TaskProvider>
          <AppNavigator />
          <StatusBar style="light" />
        </TaskProvider>
      </PaperProvider>
    </GestureHandlerRootView>
  );
};

export default App;
