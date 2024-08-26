import React from 'react';
import { SafeAreaView } from 'react-native';
import LoginScreen from './android/app/src/screens/Loginscreen';

const App: React.FC = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <LoginScreen />
    </SafeAreaView>
  );
};

export default App;
