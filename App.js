import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Input from './app/components/input/Input.js'

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Text Input</Text>
      <Input/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
