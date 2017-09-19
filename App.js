import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Container from './src/container';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Container />
        <Text>Hot reloading not avaliable...</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
