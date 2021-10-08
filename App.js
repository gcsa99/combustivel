import React from 'react';
import { ScrollView, StyleSheet, View, KeyboardAvoidingView, TouchableWithoutFeedback } from 'react-native';
import Formulario from './src/Form';
import Titulo from './src/Form/Titulo';

export default function App() {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}>
            <ScrollView style={styles.container}>
              <Titulo/>
              <Formulario/>
            </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    paddingTop:40,
  },
});
