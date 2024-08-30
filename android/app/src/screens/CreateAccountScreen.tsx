import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { globalStyles } from '../styles/styles';

const CreateAccountScreen: React.FC = () => {
  return (
    <View style={globalStyles.container}>
      <Text style={styles.text}>Tela de Criação de Conta</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default CreateAccountScreen;
