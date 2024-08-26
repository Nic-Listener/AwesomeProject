import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Input from '../components/Imput';
import Button from '../components/Button';
import { globalStyles } from '../styles/Styles';

const LoginScreen: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Lógica de autenticação
    console.log('E-mail:', email);
    console.log('Senha:', password);
  };

  const handleCreateAccount = () => {
    // Navegação para a tela de criação de conta
    console.log('Criar Conta');
  };

  const handleForgotPassword = () => {
    // Navegação para a tela de recuperação de senha
    console.log('Esqueci minha senha');
  };

  return (
    <View style={globalStyles.container}>
      <View style={globalStyles.imagePlaceholder}>
        {/* Imagem ou logotipo */}
      </View>
      <Input
        placeholder="E-mail"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <Input
        placeholder="Senha"
        value={password}
        onChangeText={setPassword}
        isPassword
      />
      <TouchableOpacity onPress={handleForgotPassword}>
        <Text style={globalStyles.forgotPassword}>Esqueci minha senha</Text>
      </TouchableOpacity>
      <Button
        title="Entrar"
        backgroundColor="#000"
        textColor="#fff"
        onPress={handleLogin}
      />
      <Button
        title="Criar Conta"
        backgroundColor="#d3d3d3"
        textColor="#000"
        onPress={handleCreateAccount}
      />
    </View>
  );
};

export default LoginScreen;
