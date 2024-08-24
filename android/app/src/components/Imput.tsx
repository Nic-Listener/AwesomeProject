import React, { useState } from 'react';
import { View, TextInput, StyleSheet, TextInputProps, TouchableOpacity, Text } from 'react-native';

interface InputProps extends TextInputProps {
  isPassword?: boolean;
}

const Input: React.FC<InputProps> = ({ isPassword = false, ...props }) => {
  const [secureText, setSecureText] = useState(isPassword);

  return (
    <View style={styles.inputContainer}>
      <TextInput
        secureTextEntry={secureText}
        placeholderTextColor="#999"
        {...props}
      />
      {isPassword && (
        <TouchableOpacity
          onPress={() => setSecureText(!secureText)}
        >
          <Text style={styles.toggleText}>{secureText ? '(◉‿◉)' : '(─ ‿ ─)'}</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    width: '80%',
    marginBottom: 10,
  },

  toggleText: {
    fontSize: 18,
  },
});

export default Input;
